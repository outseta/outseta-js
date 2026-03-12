import { createClient } from "../client.js";
import type { KyInstance } from "ky";

const subdomain = process.env.OUTSETA_SUBDOMAIN;
const apiKey = process.env.OUTSETA_API_KEY;
const apiSecret = process.env.OUTSETA_API_SECRET;

export const hasCredentials = !!(subdomain && apiKey && apiSecret);

let _client: KyInstance | undefined;

/**
 * Generated functions type options as RequestInit, but the customFetch mutator
 * expects { client: KyInstance } at runtime. This bridges the gap.
 */
export const opts = (client: KyInstance) =>
  ({ client }) as unknown as RequestInit;

/** Outseta list endpoints return this paginated wrapper, not a flat array. */
export interface PaginatedResponse<T> {
  metadata: { limit: number; offset: number; total: number };
  items: T[];
}

export function getTestClient(): KyInstance {
  if (!hasCredentials) {
    throw new Error("Missing OUTSETA_SUBDOMAIN, OUTSETA_API_KEY, or OUTSETA_API_SECRET env vars");
  }
  if (!_client) {
    _client = createClient({ subdomain: subdomain!, apiKey: apiKey!, apiSecret: apiSecret! });
  }
  return _client;
}
