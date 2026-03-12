import { describe, expect, test } from "bun:test";
import { createClient, customFetch } from "../client.js";
import { hasCredentials, getTestClient } from "./setup.js";

describe("createClient", () => {
  test("returns a ky instance (callable function)", () => {
    const client = createClient({
      subdomain: "test",
      apiKey: "key",
      apiSecret: "secret",
    });
    expect(client).toBeDefined();
    expect(typeof client).toBe("function");
  });

  test("creates independent instances per call", () => {
    const a = createClient({ subdomain: "a", apiKey: "k", apiSecret: "s" });
    const b = createClient({ subdomain: "b", apiKey: "k", apiSecret: "s" });
    expect(a).not.toBe(b);
  });
});

describe("customFetch", () => {
  test("throws when no client is provided", () => {
    expect(() => customFetch("/test", { method: "GET" })).toThrow(
      "No client provided",
    );
  });

  test("strips /api/v1/ prefix from generated URLs", async () => {
    // Verify the URL rewriting by checking that the prefix isn't doubled.
    // We do this with a live call — if the prefix were doubled we'd get a 404.
    if (!hasCredentials) return;
    const client = getTestClient();
    const result = await customFetch<{ status: number }>(
      "/api/v1/crm/accounts",
      { method: "GET", client } as RequestInit,
    );
    expect(result.status).toBe(200);
  });
});

describe.skipIf(!hasCredentials)("Auth (live)", () => {
  test("valid credentials return 200", async () => {
    const client = getTestClient();
    const res = await client("crm/accounts", { throwHttpErrors: false });
    expect(res.status).toBe(200);
  });

  test("invalid credentials return 401", async () => {
    const badClient = createClient({
      subdomain: process.env.OUTSETA_SUBDOMAIN!,
      apiKey: "bad-key",
      apiSecret: "bad-secret",
    });
    const res = await badClient("crm/accounts", { throwHttpErrors: false });
    expect(res.status).toBe(401);
  });
});
