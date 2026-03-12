# CLAUDE.md — outseta-js

## Project overview

Nx monorepo (package-based mode) for Outseta JavaScript/TypeScript packages. The `openapi.json` at the repo root is the single source of truth — Orval generates API clients, Zod schemas, and React Query hooks from it.

## Repo structure

```
outseta-js/
  openapi.json              # OpenAPI spec (source of truth)
  orval.config.ts           # Orval config (3 outputs)
  nx.json                   # Nx task orchestration
  packages/
    api-client/             # @outseta/api-client — generated core
      src/
        generated/          # Orval output (DO NOT edit by hand)
        client.ts           # Custom ky mutator (instance factory)
        index.ts
    node-sdk/               # @outseta/node-sdk — public Node.js SDK
    react/                  # @outseta/react — hooks, components, provider
      src/
        generated/          # Orval output (DO NOT edit by hand)
        components/         # Hand-written UI components
        index.ts
```

## Key commands

- `npm run generate` — regenerate all code from openapi.json
- `npm run generate:check` — fail if generated code is out of sync
- `npm run build` — build all packages via Nx
- `npm run test` — test all packages via Nx

## Architecture decisions

- **No global state**: auth uses a client instance factory (`createClient(creds)`)
- **Orval mutator**: generated functions accept a ky client instance, enabling per-session clients (MCP), singleton clients (Node SDK), and context-provided clients (React)
- **Generated code is committed** but marked `linguist-generated` in `.gitattributes`
- **Changesets** for versioning — never manually bump versions
- Separate MCP server repo (`remote-mcp-server`) consumes `@outseta/api-client` as npm dependency
- **Single `@outseta/react` package** for hooks AND UI components — no separate react-ui package. Internal `src/components/` for hand-written UI, `src/generated/` for Orval hooks. Tree-shaking (`"sideEffects": false`) ensures consumers only bundle what they use

## Code conventions

- ESM only (`"type": "module"` in all packages)
- TypeScript strict mode
- Use `.js` extensions in relative imports (ESM requirement)
- Do not manually edit files in `**/generated/` directories
