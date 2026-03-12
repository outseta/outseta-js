# Outseta OpenAPI Codegen Pipeline

## Context

We're adding OpenAPI specs to the codebase and want to auto-generate API clients for 3 consumers: the MCP server (private), a public Node.js SDK, and a public React component library. The goal is a single OpenAPI spec as source of truth, with automated regeneration flowing to all dependents.

## OpenAPI Source

Outseta provides an official OpenAPI spec. We'll pull it and use it as the generation source.

## Architecture: Nx Monorepo (public packages) + Separate MCP Server

The monorepo contains only the public npm packages. The MCP server stays in its own repo (`remote-mcp-server`) and consumes `@outseta/api-client` as an npm dependency.

### Monorepo (new repo)

Nx in package-based mode — each package has its own `package.json`, Nx handles task orchestration, caching, and affected detection on top of npm workspaces.

```
outseta-js/
  openapi.json                    # Source of truth
  orval.config.ts                 # Orval configuration (3 outputs)
  nx.json
  packages/
    api-client/                   # @outseta/api-client — generated core
      src/
        generated/                # Orval output (committed, marked linguist-generated)
        client.ts                 # Custom Orval mutator (ky instance factory)
        index.ts
    node-sdk/                     # @outseta/node-sdk — public, wraps api-client
    react/                        # @outseta/react — public, React Query hooks from Orval
```

### MCP Server (existing repo, stays separate)

```
remote-mcp-server/
  package.json                    # depends on @outseta/api-client from npm
  src/
    tools.ts                      # MCP tool registration, Zod .describe() annotations
    index.ts                      # Express, session management
    rag/                          # Semantic search (stays as-is)
```

## Orval Configuration

Three output targets from one `openapi.json`:

1. **`outseta`** → `packages/api-client/src/generated/` — Typed fetch functions + TypeScript types, split by API tags (crm, billing, email). Uses a custom `ky` mutator for HTTP.
2. **`outsetaZod`** → `packages/api-client/src/generated/zod.ts` — Zod schemas from OpenAPI (reusable for validation in MCP and SDK).
3. **`outsetaReactQuery`** → `packages/react/src/generated/` — React Query hooks (useQuery/useMutation), split by tags.

## Auth: Client Instance Factory

The generated client uses a simple instance factory — you pass credentials, you get a configured client. No `AsyncLocalStorage`, no global state.

```ts
// packages/api-client/src/client.ts
import ky from "ky";

export type OutsetaCredentials = {
  subdomain: string;
  apiKey: string;
  apiSecret: string;
};

export function createClient(creds: OutsetaCredentials) {
  return ky.create({
    prefixUrl: `https://${creds.subdomain}.outseta.com/api/v1/`,
    headers: { Authorization: `Outseta ${creds.apiKey}:${creds.apiSecret}` },
  });
}
```

Orval's custom mutator accepts the instance, so generated functions take a client parameter. Each consumer creates instances as needed:

- **MCP server:** creates a client per session (from request headers), passes it to generated functions
- **Node SDK:** creates a client once at initialization
- **React:** client provided via context provider

## Automation Pipeline

### Monorepo CI (GitHub Actions):

**On `openapi.json` change:**
1. `npm run generate` (orval)
2. `npm run build` + `npm run test`
3. Auto-commit regenerated code if changed
4. **Changesets** for versioning — `changeset version` bumps affected packages, `changeset publish` pushes to npm

**On every PR:**
- `npm run generate:check` — fails if generated code is out of sync with spec
- Build + test all packages

### MCP Server CI:
- Dependabot/Renovate watches for new `@outseta/api-client` versions
- PR auto-created when a new version is published
- Build + test validates compatibility

## Migration Steps

1. **Create the monorepo** (`outseta-js/`) — Nx, npm workspaces, Orval config
2. **Add `openapi.json`** and run Orval to generate the api-client
3. **Build the custom mutator** (`packages/api-client/src/client.ts`) — instance factory, no global state
4. **Publish `@outseta/api-client`** to npm
5. **In `remote-mcp-server`:** add `@outseta/api-client` as dependency, migrate domain modules one-by-one — replace hand-written `client.get("/crm/people")` with generated functions. PascalCase transforms disappear (OpenAPI spec uses PascalCase).
6. **Keep MCP-specific code in `remote-mcp-server`:**
   - Zod `.describe()` annotations for AI tool descriptions
   - `toolResponse` wrapper, session management, RAG/semantic search
7. **Delete old `src/api/` client** once all modules are migrated
8. **Build out `node-sdk` and `react` packages** in the monorepo on top of the generated client

## Verification

- Run `npm run generate` in monorepo — confirm Orval produces valid TypeScript
- Run `npm run build` — all packages compile
- In MCP server: `npm install @outseta/api-client`, migrate one module, test manually
- Test `generate:check` in CI — modify spec, confirm CI catches stale generated code
- Test Dependabot flow — publish api-client, verify MCP server gets a PR
