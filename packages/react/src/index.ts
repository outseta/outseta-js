export { createClient } from "@outseta/api-client";
export type { OutsetaCredentials } from "@outseta/api-client";

// Outseta embed components and hooks
export * from "./components/index.js";

// Generated React Query hooks and schema types
export * from "./generated/activity/activity.js";
export * from "./generated/billing/billing.js";
export * from "./generated/crm/crm.js";
export * from "./generated/email/email.js";
export * from "./generated/support/support.js";
export * from "./generated/outsetaAPI.schemas.js";
