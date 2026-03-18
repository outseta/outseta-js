# @outseta/api-client

> **Most users should install a higher-level package instead:**
>
> - **[`@outseta/node-sdk`](https://www.npmjs.com/package/@outseta/node-sdk)** — for Node.js / server-side usage
> - **[`@outseta/react`](https://www.npmjs.com/package/@outseta/react)** — for React apps (hooks, components, provider)

Low-level, generated API client for the [Outseta](https://www.outseta.com) REST API. Provides typed fetch functions, Zod validation schemas, and TypeScript types — all auto-generated from the Outseta OpenAPI spec. This package is the shared foundation that those packages build on. Use it directly only if you need fine-grained control or are targeting a runtime not covered by the SDKs above.

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

## License

[MIT](../../LICENSE)
