export { createClient, customFetch, withClient } from "./client.js";
export type {
  OutsetaCredentials,
  OutsetaApiKeyCredentials,
  OutsetaBearerCredentials,
  OutsetaClient,
  OutsetaRequestInit,
} from "./client.js";

// Generated API functions and model types
export * from "./generated/activity/activity.js";
export * from "./generated/billing/billing.js";
export * from "./generated/crm/crm.js";
export * from "./generated/email/email.js";
export * from "./generated/support/support.js";
export * from "./generated/models/index.js";
