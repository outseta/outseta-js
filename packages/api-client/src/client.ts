import ky, { HTTPError, type KyInstance } from "ky";

export type OutsetaCredentials = {
  subdomain: string;
  apiKey: string;
  apiSecret: string;
};

export function createClient(creds: OutsetaCredentials): KyInstance {
  return ky.create({
    prefixUrl: `https://${creds.subdomain}.outseta.com/api/v1/`,
    headers: {
      Authorization: `Outseta ${creds.apiKey}:${creds.apiSecret}`,
    },
    retry: { limit: 3, statusCodes: [408, 429, 500, 502, 503, 504] },
  });
}

/**
 * Custom Orval mutator for the fetch client.
 *
 * Generated functions call `customFetch(url, { ...options, method })`.
 * Consumers pass `{ client }` in the options to inject their ky instance.
 */
export const customFetch = async <T>(
  url: string,
  options: RequestInit & { client?: KyInstance },
): Promise<T> => {
  const { client, ...init } = options;
  if (!client) {
    throw new Error(
      "@outseta/api-client: No client provided. Pass a ky instance from createClient() via the `client` option.",
    );
  }
  let response: Response;
  try {
    response = await client(url.replace(/^\/api\/v1\//, ""), init);
  } catch (error) {
    if (error instanceof HTTPError) {
      response = error.response;
    } else {
      throw error;
    }
  }
  const data = response.headers.get("content-type")?.includes("application/json")
    ? await response.json()
    : undefined;
  return { data, status: response.status, headers: response.headers } as T;
};
