# outseta-js

Nx monorepo for Outseta JavaScript/TypeScript packages. Auto-generated from the Outseta OpenAPI spec using [Orval](https://orval.dev).

## Packages

| Package | Description |
|---------|-------------|
| [`@outseta/api-client`](packages/api-client/) | Generated API client — typed fetch functions, Zod schemas, TypeScript types |
| [`@outseta/node-sdk`](packages/node-sdk/) | Public Node.js SDK wrapping the API client |
| [`@outseta/react`](packages/react/) | React Query hooks generated from the OpenAPI spec |
| [`@outseta/n8n-nodes-outseta`](packages/n8n/) | n8n community node for the Outseta REST API |

## Setup

```bash
npm install

# Recommended for Windows users (symlinks are used in the repo)
git config core.symlinks true
```

## Development

```bash
# Regenerate all clients from openapi.json
npm run generate

# Build all packages
npm run build

# Run tests
npm run test
```

## Contributing

1. Create a branch and make your changes
2. Run `npx changeset` — select affected packages, bump type (patch/minor/major), and write a summary (becomes the changelog entry)
3. Commit the generated `.changeset/*.md` file with your code changes
4. Open a PR — CI runs build + test
5. Merge to main — the release workflow bumps versions, publishes to npm, and pushes version commits + tags

Skip `npx changeset` for changes that don't warrant a release (CI config, docs, etc.).

## Architecture

The `openapi.json` at the repo root is the single source of truth. Orval generates three outputs:

1. **Typed fetch functions + models** → `packages/api-client/src/generated/`
2. **Zod schemas** → `packages/api-client/src/generated/zod.ts`
3. **React Query hooks** → `packages/react/src/generated/`

All generated code is committed and marked as `linguist-generated` in `.gitattributes`.

### Auth

Authentication uses a client instance factory — pass credentials, get a configured `ky` instance:

```ts
import { createClient } from "@outseta/api-client";

const client = createClient({
  subdomain: "your-company",
  apiKey: "your-api-key",
  apiSecret: "your-api-secret",
});
```

See [docs/architecture.md](docs/architecture.md) for the full design.

## CI/CD

- **sync-spec** — daily cron fetches the upstream Outseta OpenAPI spec, regenerates clients, and opens a PR if changed
- **ci** — runs on PRs: regenerates clients, builds, tests, then commits generated code back if changed
- **release** — runs on push to main: bumps versions and publishes to npm via Changesets + npm trusted publishers
