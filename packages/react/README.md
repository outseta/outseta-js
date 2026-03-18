# @outseta/react

React hooks and components for the [Outseta](https://www.outseta.com) API. Built on [TanStack Query](https://tanstack.com/query) with auto-generated hooks from the Outseta OpenAPI spec.

## Install

```bash
npm install @outseta/react
```

### Peer dependencies

- `react` ^18.0.0 || ^19.0.0

## Usage

```ts
import { createClient } from "@outseta/react";

const client = createClient({
  subdomain: "your-company",
  apiKey: "your-api-key",
  apiSecret: "your-api-secret",
});
```

## License

[MIT](../../LICENSE)
