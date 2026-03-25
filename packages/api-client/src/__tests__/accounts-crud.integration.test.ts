import { describe, expect, test, afterAll } from "bun:test";
import { hasCredentials, getTestClient, opts, type PaginatedResponse } from "./setup.js";
import type { Account, AccountAddAccountBody, AccountUpdateAccountBody, Person } from "../generated/models/index.js";
import {
  accountAddAccount,
  accountGetAccount,
  accountUpdateAccount,
  accountDeleteAccount,
  personGetAllPeople,
  personDeletePerson,
} from "../generated/crm/crm.js";

const emailsToCleanup: string[] = [];
const accountUidsToCleanup: string[] = [];

describe.skipIf(!hasCredentials)("Accounts CRUD (live)", () => {
  afterAll(async () => {
    const client = getTestClient();

    // Delete any accounts that weren't cleaned up by the test
    for (const uid of accountUidsToCleanup) {
      await accountDeleteAccount(uid, opts(client));
    }

    // Delete orphaned people by email
    if (emailsToCleanup.length > 0) {
      const res = await personGetAllPeople(undefined, opts(client));
      if (res.status === 200) {
        const body = res.data as unknown as PaginatedResponse<Person>;
        for (const person of body.items) {
          if (person.Email && emailsToCleanup.includes(person.Email)) {
            await personDeletePerson(person.Uid!, opts(client));
          }
        }
      }
    }
  });

  test("full lifecycle: create → read → update → delete", async () => {
    const client = getTestClient();
    const email = `lifecycle-${Date.now()}@test.com`;
    emailsToCleanup.push(email);

    // CREATE
    const createRes = await accountAddAccount(
      {
        Name: "Lifecycle Test Corp",
        PersonAccount: [
          {
            Person: { Email: email, FirstName: "Lifecycle", LastName: "Test" },
            IsPrimary: true,
          },
        ],
      } as AccountAddAccountBody,
      undefined,
      opts(client),
    );
    expect(createRes.status).toBe(200);
    const created = createRes.data as unknown as Account;
    expect(created.Uid).toBeDefined();
    expect(created.Name).toBe("Lifecycle Test Corp");
    accountUidsToCleanup.push(created.Uid!);

    // READ
    const getRes = await accountGetAccount(created.Uid!, opts(client));
    expect(getRes.status).toBe(200);
    const fetched = getRes.data as unknown as Account;
    expect(fetched.Uid).toBe(created.Uid);

    // UPDATE
    const updateRes = await accountUpdateAccount(
      created.Uid!,
      { Name: "Lifecycle Test Corp (Updated)" } as AccountUpdateAccountBody,
      opts(client),
    );
    expect(updateRes.status).toBe(200);
    const updated = updateRes.data as unknown as Account;
    expect(updated.Name).toBe("Lifecycle Test Corp (Updated)");

    // DELETE account
    const deleteRes = await accountDeleteAccount(created.Uid!, opts(client));
    expect(deleteRes.status).toBe(200);

    // Verify deleted — should 404
    const verifyRes = await accountGetAccount(created.Uid!, opts(client));
    expect(verifyRes.status).toBe(404);
  });

  test("create account without required person returns error", async () => {
    const client = getTestClient();

    const res = await accountAddAccount(
      { Name: "No Person Corp" } as AccountAddAccountBody,
      undefined,
      opts(client),
    );
    expect(res.status).not.toBe(200);
  });
});
