import type { KyInstance } from "ky";

type RequestConfig<T = unknown> = {
  url: string;
  method: string;
  params?: Record<string, unknown>;
  data?: T;
  signal?: AbortSignal;
};

/**
 * Orval react-query mutator.
 *
 * First arg is a request config object `{ url, method, params, signal }`.
 * Second arg is a ky instance (provided via the React context/provider).
 */
export const customFetch = <T>(
  config: RequestConfig,
  client?: KyInstance,
): Promise<T> => {
  if (!client) {
    throw new Error(
      "@outseta/react: No client provided. Pass a ky instance from createClient() via the request option.",
    );
  }

  const { url, method, params, data, signal } = config;

  const searchParams = params
    ? new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      )
    : undefined;

  return client(url.replace(/^\//, ""), {
    method,
    searchParams,
    json: data,
    signal,
  }).json<T>();
};

export default customFetch;
