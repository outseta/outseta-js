import { createClient, type OutsetaClient } from "../client.js";

const subdomain = process.env.OUTSETA_SUBDOMAIN;
const apiKey = process.env.OUTSETA_API_KEY;
const apiSecret = process.env.OUTSETA_API_SECRET;

export const hasCredentials = !!(subdomain && apiKey && apiSecret);

let _client: OutsetaClient | undefined;

/**
 * Generated functions type options as RequestInit, but the customFetch mutator
 * expects { client: OutsetaClient } at runtime. This bridges the gap.
 */
export const opts = (client: OutsetaClient) =>
  ({ client }) as unknown as RequestInit;

/** Outseta list endpoints return this paginated wrapper, not a flat array. */
export interface PaginatedResponse<T> {
  metadata: { limit: number; offset: number; total: number };
  items: T[];
}

export function getTestClient(): OutsetaClient {
  if (!hasCredentials) {
    throw new Error("Missing OUTSETA_SUBDOMAIN, OUTSETA_API_KEY, or OUTSETA_API_SECRET env vars");
  }
  if (!_client) {
    _client = createClient({ subdomain: subdomain!, apiKey: apiKey!, apiSecret: apiSecret! });
  }
  return _client;
}
