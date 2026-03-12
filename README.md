# outseta-js

Nx monorepo for Outseta JavaScript/TypeScript packages. Auto-generated from the Outseta OpenAPI spec using [Orval](https://orval.dev).

## Packages

| Package | Description |
|---------|-------------|
| [`@outseta/api-client`](packages/api-client/) | Generated API client — typed fetch functions, Zod schemas, TypeScript types |
| [`@outseta/node-sdk`](packages/node-sdk/) | Public Node.js SDK wrapping the API client |
| [`@outseta/react`](packages/react/) | React Query hooks generated from the OpenAPI spec |

## Setup

```bash
npm install
```

## Development

```bash
# Regenerate all clients from openapi.json
npm run generate

# Build all packages
npm run build

# Run tests
npm run test

# Check generated code is in sync with spec
npm run generate:check
```

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

## Versioning

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing.
