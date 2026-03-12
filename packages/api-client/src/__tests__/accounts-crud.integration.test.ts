import { describe, expect, test, afterAll } from "bun:test";
import { hasCredentials, getTestClient } from "./setup.js";

const emailsToCleanup: string[] = [];
const accountUidsToCleanup: string[] = [];

describe.skipIf(!hasCredentials)("Accounts CRUD (live)", () => {
  afterAll(async () => {
    const client = getTestClient();

    // Delete any accounts that weren't cleaned up by the test
    for (const uid of accountUidsToCleanup) {
      await client(`crm/accounts/${uid}`, { method: "DELETE", throwHttpErrors: false });
    }

    // Delete orphaned people by email (API doesn't embed Person in account responses)
    if (emailsToCleanup.length > 0) {
      const res = await client("crm/people", { throwHttpErrors: false });
      if (res.ok) {
        const body = await res.json<{ items: Array<{ Uid: string; Email: string }> }>();
        for (const person of body.items) {
          if (emailsToCleanup.includes(person.Email)) {
            await client(`crm/people/${person.Uid}`, { method: "DELETE", throwHttpErrors: false });
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
    const createRes = await client("crm/accounts", {
      method: "POST",
      json: {
        Name: "Lifecycle Test Corp",
        PersonAccount: [
          {
            Person: { Email: email, FirstName: "Lifecycle", LastName: "Test" },
            IsPrimary: true,
          },
        ],
      },
      throwHttpErrors: false,
    });
    expect(createRes.status).toBe(200);
    const created = await createRes.json<{ Uid: string; Name: string }>();
    expect(created.Uid).toBeDefined();
    expect(created.Name).toBe("Lifecycle Test Corp");
    accountUidsToCleanup.push(created.Uid);

    // READ
    const getRes = await client(`crm/accounts/${created.Uid}`, {
      throwHttpErrors: false,
    });
    expect(getRes.status).toBe(200);
    const fetched = await getRes.json<{ Uid: string; Name: string }>();
    expect(fetched.Uid).toBe(created.Uid);

    // UPDATE
    const updateRes = await client(`crm/accounts/${created.Uid}`, {
      method: "PUT",
      json: { Name: "Lifecycle Test Corp (Updated)" },
      throwHttpErrors: false,
    });
    expect(updateRes.status).toBe(200);
    const updated = await updateRes.json<{ Uid: string; Name: string }>();
    expect(updated.Name).toBe("Lifecycle Test Corp (Updated)");

    // DELETE account
    const deleteRes = await client(`crm/accounts/${created.Uid}`, {
      method: "DELETE",
      throwHttpErrors: false,
    });
    expect(deleteRes.status).toBe(200);

    // Verify deleted — should 404
    const verifyRes = await client(`crm/accounts/${created.Uid}`, {
      throwHttpErrors: false,
    });
    expect(verifyRes.status).toBe(404);
  });

  test("create account without required person returns error", async () => {
    const client = getTestClient();

    const res = await client("crm/accounts", {
      method: "POST",
      json: { Name: "No Person Corp" },
      throwHttpErrors: false,
    });
    expect(res.ok).toBe(false);
  });
});
