import { describe, expect, test } from "bun:test";
import { hasCredentials, getTestClient, opts, type PaginatedResponse } from "./setup.js";
import type { Account } from "../generated/models/index.js";
import {
  accountGetAllAccounts,
  accountGetAccount,
} from "../generated/crm/crm.js";

describe.skipIf(!hasCredentials)("CRM Accounts (live)", () => {
  test("accountGetAllAccounts returns a paginated response", async () => {
    const client = getTestClient();
    const response = await accountGetAllAccounts(undefined, opts(client));

    expect(response.status).toBe(200);
    if (response.status !== 200) return;

    const body = response.data as unknown as PaginatedResponse<Account>;
    expect(body.metadata).toBeDefined();
    expect(body.items).toBeInstanceOf(Array);
  });

  test("accountGetAccount fetches a single account by UID", async () => {
    const client = getTestClient();

    const listResponse = await accountGetAllAccounts(undefined, opts(client));
    expect(listResponse.status).toBe(200);
    if (listResponse.status !== 200) return;

    const body = listResponse.data as unknown as PaginatedResponse<Account>;
    if (body.items.length === 0) {
      console.warn("No accounts in test instance — skipping single-account test");
      return;
    }

    const firstAccount = body.items[0];
    const response = await accountGetAccount(firstAccount.Uid!, opts(client));

    expect(response.status).toBe(200);
    if (response.status !== 200) return;
    expect((response.data as unknown as Account).Uid).toBe(firstAccount.Uid);
  });

  test("accountGetAllAccounts supports search param", async () => {
    const client = getTestClient();
    const response = await accountGetAllAccounts({ q: "test" }, opts(client));

    expect(response.status).toBe(200);
    if (response.status !== 200) return;

    const body = response.data as unknown as PaginatedResponse<Account>;
    expect(body.metadata).toBeDefined();
    expect(body.items).toBeInstanceOf(Array);
  });
});
