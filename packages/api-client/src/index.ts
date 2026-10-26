export { createClient, customFetch, withClient } from "./client.js";
export type {
  OutsetaCredentials,
  OutsetaApiKeyCredentials,
  OutsetaBearerCredentials,
  OutsetaClient,
  OutsetaRequestInit,
} from "./client.js";

// Generated API functions and model types
// BEGIN generated tag exports (scripts/post-generate.mjs)
export * from "./generated/activity/activity.js";
export * from "./generated/billing-v2/billing-v2.js";
export * from "./generated/billing-v3/billing-v3.js";
export * from "./generated/crm/crm.js";
export * from "./generated/email/email.js";
export * from "./generated/support/support.js";
// END generated tag exports
export * from "./generated/models/index.js";
