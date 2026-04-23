export type OutsetaApiKeyCredentials = {
  subdomain: string;
  apiKey: string;
  apiSecret: string;
};

export type OutsetaBearerCredentials = {
  subdomain: string;
  accessToken: string;
};

export type OutsetaCredentials =
  | OutsetaApiKeyCredentials
  | OutsetaBearerCredentials;

export type OutsetaClient = (
  path: string,
  init?: RequestInit,
) => Promise<Response>;

export type OutsetaRequestInit = RequestInit & {
  client?: OutsetaClient;
};

function getAuthorization(creds: OutsetaCredentials): string {
  if ("accessToken" in creds) {
    return `Bearer ${creds.accessToken}`;
  }
  return `Outseta ${creds.apiKey}:${creds.apiSecret}`;
}

function getRequestUrl(subdomain: string, path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/api/v1/")
    ? path
    : `/api/v1/${path.replace(/^\/+/, "")}`;

  return new URL(normalizedPath, `https://${subdomain}.outseta.com`).toString();
}

export function createClient(creds: OutsetaCredentials): OutsetaClient {
  return (path, init = {}) => {
    const headers = new Headers(init.headers);
    headers.set("Authorization", getAuthorization(creds));

    return fetch(getRequestUrl(creds.subdomain, path), {
      ...init,
      headers,
    });
  };
}

/**
 * Custom Orval mutator for the fetch client.
 *
 * Generated functions call `customFetch(url, { ...options, method })`.
 * Consumers pass `{ client }` in the options to inject a client from
 * `createClient()`.
 */
export const customFetch = async <T>(
  url: string,
  options: OutsetaRequestInit,
): Promise<T> => {
  const { client, ...init } = options;
  if (!client) {
    throw new Error(
      "@outseta/api-client: No client provided. Pass a client from createClient() via the `client` option.",
    );
  }

  const response = await client(url, init);
  const data = response.headers.get("content-type")?.includes("application/json")
    ? await response.json()
    : undefined;

  return { data, status: response.status, headers: response.headers } as T;
};
