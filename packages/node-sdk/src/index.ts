export { createClient, withClient } from "@outseta/api-client";
export type {
  OutsetaCredentials,
  OutsetaApiKeyCredentials,
  OutsetaBearerCredentials,
  OutsetaClient,
} from "@outseta/api-client";

export { verifyWebhookSignature } from "./verify-webhook.js";
export { verifyJwt, verifyJwtWithProfile } from "./verify-jwt.js";
export type { JWTPayload } from "./verify-jwt.js";
export { generateAccessToken } from "./generate-token.js";
export { trackUsage, updateUsageBasedPricing } from "./usage.js";
export type { TrackUsageParams, TrackUsageResult } from "./usage.js";
export {
  createOutsetaWebhookHandler,
  getOutsetaWebhookBody,
  getOutsetaWebhookSignature,
  outsetaWebhookTextParserOptions,
  verifyOutsetaWebhookRequest,
} from "./express.js";
export type {
  OutsetaWebhookHandlerOptions,
  OutsetaWebhookNext,
  OutsetaWebhookRequest,
  OutsetaWebhookResponse,
} from "./express.js";
