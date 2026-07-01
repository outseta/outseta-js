import type { OutsetaClient } from "@outseta/api-client";

type RequestConfig<T = unknown> = {
  url: string;
  method: string;
  params?: Record<string, unknown>;
  data?: T;
  signal?: AbortSignal;
};

/**
 * Orval mutator for the generated React hooks.
 *
 * First arg is a request config object `{ url, method, params, signal }`.
 * Second arg is a client from `createClient()` (passed through each hook's
 * `request` option).
 */
export const customFetch = async <T>(
  config: RequestConfig,
  client?: OutsetaClient,
): Promise<T> => {
  if (!client) {
    throw new Error(
      "@outseta/react: No client provided. Pass a client from createClient() via the request option.",
    );
  }

  const { url, method, params, data, signal } = config;

  const searchParams = params
    ? new URLSearchParams(
        Object.entries(params)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => [key, String(value)]),
      )
    : undefined;

  const requestUrl = searchParams?.size
    ? `${url}${url.includes("?") ? "&" : "?"}${searchParams.toString()}`
    : url;

  const response = await client(requestUrl, {
    method,
    headers: data === undefined
      ? undefined
      : { "Content-Type": "application/json" },
    body: data === undefined ? undefined : JSON.stringify(data),
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `@outseta/react: Request failed with status ${response.status}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.headers.get("content-type")?.includes("application/json")
    ? await response.json() as T
    : undefined as T;
};

export default customFetch;
