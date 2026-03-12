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
 * Custom Orval mutator — accepts a ky instance and returns a request executor.
 */
export const customFetch = <T>(
  url: string,
  options: RequestInit & { client: KyInstance },
): Promise<T> => {
  const { client, ...init } = options;
  return client(url, init).json<T>();
};
