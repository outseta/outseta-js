import ky, { type KyInstance } from "ky";

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
  });
}

/**
 * Custom Orval mutator for the fetch client.
 *
 * Generated functions call `customFetch(url, { ...options, method })`.
 * Consumers pass `{ client }` in the options to inject their ky instance.
 */
export const customFetch = <T>(
  url: string,
  options: RequestInit & { client?: KyInstance },
): Promise<T> => {
  const { client, ...init } = options;
  if (!client) {
    throw new Error(
      "@outseta/api-client: No client provided. Pass a ky instance from createClient() via the `client` option.",
    );
  }
  return client(url.replace(/^\//, ""), init).json<T>();
};
