# @outseta/api-client

Low-level generated API client for the Outseta REST API.

Most apps should use `@outseta/node-sdk` or `@outseta/react` instead.

## Notes

- Generated functions are exported from the package root.
- Generated function options are typed as `RequestInit`; use `withClient(client)` to attach the Outseta client instance.
- Use API key credentials only server-side. Browser clients should use an Outseta bearer `accessToken`.

```ts
import { accountGetAllAccounts, createClient, withClient } from "@outseta/api-client";

const client = createClient({
  subdomain: "your-company",
  apiKey: "your-api-key",
  apiSecret: "your-api-secret",
});

const accounts = await accountGetAllAccounts(undefined, withClient(client));
```
