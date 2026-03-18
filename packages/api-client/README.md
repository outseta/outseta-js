# @outseta/api-client

Generated API client for the [Outseta](https://www.outseta.com) REST API. Provides typed fetch functions, Zod validation schemas, and TypeScript types — all auto-generated from the Outseta OpenAPI spec.

## Install

```bash
npm install @outseta/api-client
```

## Usage

```ts
import { createClient } from "@outseta/api-client";

const client = createClient({
  subdomain: "your-company",
  apiKey: "your-api-key",
  apiSecret: "your-api-secret",
});
```

Then pass the `client` instance to any generated API function:

```ts
import { getAccounts } from "@outseta/api-client";

const result = await getAccounts({ client });
```

## About

This package is the low-level client. For a higher-level experience, see:

- [`@outseta/node-sdk`](https://www.npmjs.com/package/@outseta/node-sdk) — Node.js SDK
- [`@outseta/react`](https://www.npmjs.com/package/@outseta/react) — React hooks and components

## License

[MIT](../../LICENSE)
