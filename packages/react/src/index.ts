export { createClient } from "@outseta/api-client";
export type { OutsetaCredentials } from "@outseta/api-client";

// Outseta embed components and hooks
export * from "./components/index.js";

// Generated React hooks and schema types
// BEGIN generated tag exports (scripts/post-generate.mjs)
export * from "./generated/activity/activity.js";
export * from "./generated/billing-v2/billing-v2.js";
export * from "./generated/billing-v3/billing-v3.js";
export * from "./generated/crm/crm.js";
export * from "./generated/email/email.js";
export * from "./generated/support/support.js";
// END generated tag exports
export * from "./generated/outsetaAPI.schemas.js";
