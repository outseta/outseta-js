# @outseta/node-sdk

Node.js SDK for the [Outseta](https://www.outseta.com) API. A thin wrapper around [`@outseta/api-client`](https://www.npmjs.com/package/@outseta/api-client) designed for server-side usage.

## Install

```bash
npm install @outseta/node-sdk
```

## Usage

```ts
import { createClient } from "@outseta/node-sdk";

const client = createClient({
  subdomain: "your-company",
  apiKey: "your-api-key",
  apiSecret: "your-api-secret",
});
```

## License

[MIT](../../LICENSE)
