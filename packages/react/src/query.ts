import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Minimal vanilla-React implementation of the small slice of the TanStack
 * Query v5 API surface that Orval's generated hooks depend on.
 *
 * This lets `@outseta/react` ship the generated `useX` hooks without a
 * `@tanstack/react-query` dependency or a `QueryClientProvider`. It is a
 * lightweight fetch-on-mount implementation: each hook instance owns its own
 * request lifecycle. There is intentionally no cross-component caching,
 * request deduplication, or background refetching — reach for TanStack Query
 * (or another data layer) directly if you need those.
 *
 * `scripts/post-generate.mjs` rewrites the generated `@tanstack/react-query`
 * imports to point at this module.
 */

export type QueryKey = ReadonlyArray<unknown>;

export interface QueryFunctionContext<TQueryKey extends QueryKey = QueryKey> {
  signal: AbortSignal;
  queryKey: TQueryKey;
}

export type QueryFunction<
  T = unknown,
  TQueryKey extends QueryKey = QueryKey,
> = (context: QueryFunctionContext<TQueryKey>) => T | Promise<T>;

export type MutationFunction<TData = unknown, TVariables = unknown> = (
  variables: TVariables,
) => Promise<TData>;

export type QueryStatus = "pending" | "error" | "success";
export type MutationStatus = "idle" | "pending" | "error" | "success";

export interface UseQueryOptions<
  TQueryFnData = unknown,
  // `TError` is unused here but kept so the generated call sites'
  // `UseQueryOptions<TQueryFnData, TError, TData>` type arguments line up.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> {
  queryKey?: TQueryKey;
  queryFn?: QueryFunction<TQueryFnData, TQueryKey>;
  /** Skip fetching while `false`. Defaults to `true`. */
  enabled?: boolean;
  /** Transform the raw response before it is returned as `data`. */
  select?: (data: TQueryFnData) => TData;
  initialData?: TData | (() => TData);
}

export interface UseQueryResult<TData = unknown, TError = unknown> {
  data: TData | undefined;
  error: TError | null;
  status: QueryStatus;
  isPending: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  refetch: () => Promise<void>;
}

export interface MutateOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
> {
  onSuccess?: (
    data: TData,
    variables: TVariables,
    context: TContext | undefined,
  ) => unknown;
  onError?: (
    error: TError,
    variables: TVariables,
    context: TContext | undefined,
  ) => unknown;
  onSettled?: (
    data: TData | undefined,
    error: TError | null,
    variables: TVariables,
    context: TContext | undefined,
  ) => unknown;
}

export interface UseMutationOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
> extends MutateOptions<TData, TError, TVariables, TContext> {
  mutationFn?: MutationFunction<TData, TVariables>;
  mutationKey?: unknown[];
  onMutate?: (
    variables: TVariables,
  ) => Promise<TContext | undefined> | TContext | undefined;
}

export interface UseMutationResult<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
> {
  data: TData | undefined;
  error: TError | null;
  variables: TVariables | undefined;
  status: MutationStatus;
  isIdle: boolean;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  mutate: (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>,
  ) => void;
  mutateAsync: (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>,
  ) => Promise<TData>;
  reset: () => void;
}

interface QueryState<TData, TError> {
  status: QueryStatus;
  data: TData | undefined;
  error: TError | null;
}

/**
 * Vanilla-React `useQuery`. Fetches on mount, re-fetches when the serialized
 * `queryKey` changes, and exposes a `refetch()` for manual reloads.
 */
export function useQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): UseQueryResult<TData, TError> {
  const { queryKey, enabled = true } = options;
  const keyHash = JSON.stringify(queryKey ?? []);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  const abortRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [state, setState] = useState<QueryState<TData, TError>>(() => {
    const { initialData } = optionsRef.current;
    const resolved =
      typeof initialData === "function"
        ? (initialData as () => TData)()
        : initialData;
    return resolved !== undefined
      ? { status: "success", data: resolved, error: null }
      : { status: "pending", data: undefined, error: null };
  });
  const [isFetching, setIsFetching] = useState(false);

  const runQuery = useCallback(async (): Promise<void> => {
    const { queryFn, queryKey: key, select } = optionsRef.current;
    if (!queryFn) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setIsFetching(true);

    try {
      const raw = await queryFn({
        signal: controller.signal,
        queryKey: (key ?? []) as TQueryKey,
      });
      if (controller.signal.aborted || !mountedRef.current) return;
      const data = select ? select(raw) : (raw as unknown as TData);
      setState({ status: "success", data, error: null });
    } catch (error) {
      if (controller.signal.aborted || !mountedRef.current) return;
      setState((prev) => ({
        status: "error",
        data: prev.data,
        error: error as TError,
      }));
    } finally {
      if (!controller.signal.aborted && mountedRef.current) {
        setIsFetching(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    void runQuery();
    return () => {
      abortRef.current?.abort();
    };
  }, [enabled, keyHash, runQuery]);

  const refetch = useCallback(async (): Promise<void> => {
    await runQuery();
  }, [runQuery]);

  const status = state.status;
  return {
    data: state.data,
    error: state.error,
    status,
    isPending: status === "pending",
    isLoading: status === "pending" && isFetching,
    isError: status === "error",
    isSuccess: status === "success",
    isFetching,
    refetch,
  };
}

interface MutationState<TData, TError, TVariables> {
  status: MutationStatus;
  data: TData | undefined;
  error: TError | null;
  variables: TVariables | undefined;
}

/**
 * Vanilla-React `useMutation`. Returns `mutate`/`mutateAsync` plus the current
 * status flags, and invokes the `onMutate`/`onSuccess`/`onError`/`onSettled`
 * lifecycle callbacks (both hook-level and per-call).
 */
export function useMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationResult<TData, TError, TVariables, TContext> {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [state, setState] = useState<MutationState<TData, TError, TVariables>>({
    status: "idle",
    data: undefined,
    error: null,
    variables: undefined,
  });

  const mutateAsync = useCallback(
    async (
      variables: TVariables,
      mutateOptions?: MutateOptions<TData, TError, TVariables, TContext>,
    ): Promise<TData> => {
      const opts = optionsRef.current;
      const { mutationFn } = opts;
      if (!mutationFn) {
        throw new Error("@outseta/react: useMutation called without a mutationFn.");
      }

      if (mountedRef.current) {
        setState({
          status: "pending",
          data: undefined,
          error: null,
          variables,
        });
      }

      let context: TContext | undefined;
      try {
        context = await opts.onMutate?.(variables);
        const data = await mutationFn(variables);
        if (mountedRef.current) {
          setState({ status: "success", data, error: null, variables });
        }
        await opts.onSuccess?.(data, variables, context);
        await mutateOptions?.onSuccess?.(data, variables, context);
        await opts.onSettled?.(data, null, variables, context);
        await mutateOptions?.onSettled?.(data, null, variables, context);
        return data;
      } catch (error) {
        const typedError = error as TError;
        if (mountedRef.current) {
          setState({
            status: "error",
            data: undefined,
            error: typedError,
            variables,
          });
        }
        await opts.onError?.(typedError, variables, context);
        await mutateOptions?.onError?.(typedError, variables, context);
        await opts.onSettled?.(undefined, typedError, variables, context);
        await mutateOptions?.onSettled?.(undefined, typedError, variables, context);
        throw error;
      }
    },
    [],
  );

  const mutate = useCallback(
    (
      variables: TVariables,
      mutateOptions?: MutateOptions<TData, TError, TVariables, TContext>,
    ): void => {
      void mutateAsync(variables, mutateOptions).catch(() => {
        // Errors are surfaced through the returned `error`/`status`; swallow
        // the rejection so `mutate` stays fire-and-forget like TanStack Query.
      });
    },
    [mutateAsync],
  );

  const reset = useCallback((): void => {
    setState({ status: "idle", data: undefined, error: null, variables: undefined });
  }, []);

  const status = state.status;
  return {
    data: state.data,
    error: state.error,
    variables: state.variables,
    status,
    isIdle: status === "idle",
    isPending: status === "pending",
    isError: status === "error",
    isSuccess: status === "success",
    mutate,
    mutateAsync,
    reset,
  };
}
