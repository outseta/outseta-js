# @outseta/node-sdk

Node.js SDK helpers for the Outseta API.

## Notes

- Use API key credentials only on the server. For user-scoped requests, create a client with an Outseta bearer `accessToken`.
- `trackUsage` is intentionally higher-level than the generated API call: it fetches the account, finds the matching subscription add-on, verifies it is usage-based, then creates the usage record.
- Webhook verification must use the exact raw request body. In Express, mount the webhook route with `express.text(outsetaWebhookTextParserOptions)` before `createOutsetaWebhookHandler`.
- Generated REST API functions are exported from `@outseta/api-client`; pass SDK clients to them with `withClient(client)`.

## Express webhook route

```ts
import express from "express";
import {
  createOutsetaWebhookHandler,
  outsetaWebhookTextParserOptions,
} from "@outseta/node-sdk";

app.post(
  "/outseta/webhook",
  express.text(outsetaWebhookTextParserOptions),
  createOutsetaWebhookHandler({
    signingKey: process.env.OUTSETA_WEBHOOK_SIGNING_KEY!,
    async onWebhook(payload) {
      // Handle Activity Notification payload.
    },
  }),
);
```
