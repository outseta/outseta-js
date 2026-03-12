# CLAUDE.md — outseta-js

## Project overview

Nx monorepo (package-based mode) for Outseta JavaScript/TypeScript packages. The `openapi.json` at the repo root is the single source of truth — Orval generates API clients, Zod schemas, and React Query hooks from it.

## Repo structure

```
outseta-js/
  openapi.json              # Fetched on demand (gitignored)
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

- `npm run generate` — fetch spec, fix it, run orval, post-process generated files
- `npm run build` — build all packages via Nx
- `npm run test` — test all packages via Nx
- `npx changeset` — create a new changeset for version bumps

## Architecture decisions

- **No global state**: auth uses a client instance factory (`createClient(creds)`)
- **Orval mutator**: generated functions accept a ky client instance, enabling per-session clients (MCP), singleton clients (Node SDK), and context-provided clients (React)
- **Generated code is committed** but marked `linguist-generated` in `.gitattributes`. `openapi.json` is NOT committed (fetched on demand via `npm run fetch-spec`)
- **Build**: `bun build` for JS transpilation (fast, no type checking), source `.ts` files ship as types (`"types": "./src/index.ts"`)
- **Spec quirks**: `scripts/fix-spec.mjs` patches null `x-enum-descriptions`; `scripts/post-generate.mjs` prepends `// @ts-nocheck` to generated files (upstream spec produces invalid TS intersections)
- **React mutator**: `packages/react/src/mutator.ts` — local mutator that imports from `@outseta/api-client` (avoids cross-package relative imports in generated code)
- **Changesets** for versioning — never manually bump versions
- Separate MCP server repo (`remote-mcp-server`) consumes `@outseta/api-client` as npm dependency
- **Single `@outseta/react` package** for hooks AND UI components — no separate react-ui package. Internal `src/components/` for hand-written UI, `src/generated/` for Orval hooks. Tree-shaking (`"sideEffects": false`) ensures consumers only bundle what they use

## CI/CD workflows

- **sync-spec** (`.github/workflows/sync-spec.yml`) — daily cron + manual trigger. Fetches spec from `https://go.outseta.com/swagger/v1/swagger.json`, regenerates clients, opens a PR if changed.
- **ci** (`.github/workflows/ci.yml`) — runs on PRs. Regenerates clients (commits back if changed), builds, tests.
- **release** (`.github/workflows/release.yml`) — runs on push to main. Versions and publishes packages via Changesets if pending changesets exist. Requires `NPM_TOKEN` secret.

## Code conventions

- ESM only (`"type": "module"` in all packages)
- TypeScript strict mode
- Use `.js` extensions in relative imports (ESM requirement)
- Do not manually edit files in `**/generated/` directories
