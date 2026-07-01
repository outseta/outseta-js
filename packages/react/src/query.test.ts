import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { customFetch } from "./mutator.js";
import { useMutation, useQuery } from "./query.js";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useQuery", () => {
  it("fetches on mount and exposes the resolved data", async () => {
    const queryFn = vi.fn().mockResolvedValue("hello");

    const { result } = renderHook(() =>
      useQuery({ queryKey: ["greeting"], queryFn }),
    );

    // Pending + fetching on the first commit.
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBe("hello");
    expect(result.current.error).toBeNull();
    expect(result.current.isFetching).toBe(false);
    expect(queryFn).toHaveBeenCalledTimes(1);
  });

  it("passes an AbortSignal and the queryKey to the query function", async () => {
    const queryFn = vi.fn().mockResolvedValue(42);

    renderHook(() => useQuery({ queryKey: ["items", { page: 2 }], queryFn }));

    await waitFor(() => expect(queryFn).toHaveBeenCalled());

    const context = queryFn.mock.calls[0][0];
    expect(context.signal).toBeInstanceOf(AbortSignal);
    expect(context.queryKey).toEqual(["items", { page: 2 }]);
  });

  it("captures a rejection as an error state", async () => {
    const error = new Error("boom");
    const queryFn = vi.fn().mockRejectedValue(error);

    const { result } = renderHook(() =>
      useQuery({ queryKey: ["fails"], queryFn }),
    );

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBe(error);
    expect(result.current.data).toBeUndefined();
    expect(result.current.isSuccess).toBe(false);
  });

  it("does not fetch while disabled", () => {
    const queryFn = vi.fn();

    const { result } = renderHook(() =>
      useQuery({ queryKey: ["off"], queryFn, enabled: false }),
    );

    expect(queryFn).not.toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isPending).toBe(true);
  });

  it("re-runs the query via refetch", async () => {
    const queryFn = vi
      .fn()
      .mockResolvedValueOnce("first")
      .mockResolvedValueOnce("second");

    const { result } = renderHook(() =>
      useQuery({ queryKey: ["refetch"], queryFn }),
    );

    await waitFor(() => expect(result.current.data).toBe("first"));

    await act(async () => {
      await result.current.refetch();
    });

    expect(result.current.data).toBe("second");
    expect(queryFn).toHaveBeenCalledTimes(2);
  });

  it("refetches when the query key changes", async () => {
    const queryFn = vi.fn(
      (context: { queryKey: ReadonlyArray<unknown> }) =>
        Promise.resolve(context.queryKey[1]),
    );

    const { result, rerender } = renderHook(
      ({ id }: { id: number }) => useQuery({ queryKey: ["item", id], queryFn }),
      { initialProps: { id: 1 } },
    );

    await waitFor(() => expect(result.current.data).toBe(1));

    rerender({ id: 2 });

    await waitFor(() => expect(result.current.data).toBe(2));
    expect(queryFn).toHaveBeenCalledTimes(2);
  });

  it("applies the select transform", async () => {
    const queryFn = vi.fn().mockResolvedValue({ items: [1, 2, 3] });

    const { result } = renderHook(() =>
      useQuery({
        queryKey: ["select"],
        queryFn,
        select: (data: { items: number[] }) => data.items.length,
      }),
    );

    await waitFor(() => expect(result.current.data).toBe(3));
  });

  it("seeds state from initialData without an immediate fetch flag", async () => {
    const queryFn = vi.fn().mockResolvedValue("fresh");

    const { result } = renderHook(() =>
      useQuery({ queryKey: ["seed"], queryFn, initialData: "seeded" }),
    );

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toBe("seeded");

    // It still revalidates on mount.
    await waitFor(() => expect(result.current.data).toBe("fresh"));
  });
});

describe("useMutation", () => {
  it("runs the mutation and surfaces the result", async () => {
    const mutationFn = vi.fn().mockResolvedValue({ id: 1 });
    const onSuccess = vi.fn();
    const onSettled = vi.fn();

    const { result } = renderHook(() =>
      useMutation({ mutationFn, onSuccess, onSettled }),
    );

    expect(result.current.isIdle).toBe(true);

    act(() => {
      result.current.mutate({ name: "acme" });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({ id: 1 });
    expect(result.current.variables).toEqual({ name: "acme" });
    expect(mutationFn).toHaveBeenCalledWith({ name: "acme" });
    expect(onSuccess).toHaveBeenCalledWith({ id: 1 }, { name: "acme" }, undefined);
    expect(onSettled).toHaveBeenCalledWith(
      { id: 1 },
      null,
      { name: "acme" },
      undefined,
    );
  });

  it("invokes per-call callbacks in addition to hook-level ones", async () => {
    const mutationFn = vi.fn().mockResolvedValue("ok");
    const hookOnSuccess = vi.fn();
    const callOnSuccess = vi.fn();

    const { result } = renderHook(() =>
      useMutation({ mutationFn, onSuccess: hookOnSuccess }),
    );

    await act(async () => {
      await result.current.mutateAsync("payload", { onSuccess: callOnSuccess });
    });

    expect(hookOnSuccess).toHaveBeenCalledOnce();
    expect(callOnSuccess).toHaveBeenCalledOnce();
  });

  it("captures errors and rejects mutateAsync, but not mutate", async () => {
    const error = new Error("nope");
    const mutationFn = vi.fn().mockRejectedValue(error);
    const onError = vi.fn();

    const { result } = renderHook(() => useMutation({ mutationFn, onError }));

    await act(async () => {
      await expect(result.current.mutateAsync("x")).rejects.toThrow("nope");
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.error).toBe(error);
    expect(onError).toHaveBeenCalledWith(error, "x", undefined);

    // `mutate` is fire-and-forget: it must not throw an unhandled rejection.
    await act(async () => {
      result.current.mutate("y");
      await Promise.resolve();
    });
    await waitFor(() => expect(result.current.error).toBe(error));
  });

  it("resets back to the idle state", async () => {
    const mutationFn = vi.fn().mockResolvedValue("done");

    const { result } = renderHook(() => useMutation({ mutationFn }));

    await act(async () => {
      await result.current.mutateAsync("v");
    });
    expect(result.current.isSuccess).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.isIdle).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeNull();
  });
});

describe("integration with the request mutator", () => {
  it("drives a query through customFetch and a fake client", async () => {
    const payload = [{ Uid: "deal-1" }];
    const client = vi.fn(async () =>
      new Response(JSON.stringify(payload), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    );

    const { result } = renderHook(() =>
      useQuery({
        queryKey: ["/api/v1/crm/deals"],
        queryFn: ({ signal }) =>
          customFetch(
            { url: "/api/v1/crm/deals", method: "GET", signal },
            client,
          ),
      }),
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(payload);
    expect(client).toHaveBeenCalledOnce();
    expect(client).toHaveBeenCalledWith(
      "/api/v1/crm/deals",
      expect.anything(),
    );
  });

  it("turns a non-ok response into an error", async () => {
    const client = vi.fn(async () => new Response("nope", { status: 500 }));

    const { result } = renderHook(() =>
      useQuery({
        queryKey: ["/api/v1/crm/deals", "500"],
        queryFn: ({ signal }) =>
          customFetch(
            { url: "/api/v1/crm/deals", method: "GET", signal },
            client,
          ),
      }),
    );

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toBeInstanceOf(Error);
  });
});
