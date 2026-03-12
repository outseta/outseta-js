import { describe, expect, test, afterAll } from "bun:test";
import { hasCredentials, getTestClient, opts, type PaginatedResponse } from "./setup.js";
import type { Case } from "../generated/models/index.js";
import { caseGetAllCases } from "../generated/support/support.js";

describe.skipIf(!hasCredentials)("Support Cases — generated endpoints (live)", () => {
  test("caseGetAllCases returns a paginated response", async () => {
    const client = getTestClient();
    const response = await caseGetAllCases(undefined, opts(client));

    expect(response.status).toBe(200);
    if (response.status !== 200) return;

    const body = response.data as unknown as PaginatedResponse<Case>;
    expect(body.metadata).toBeDefined();
    expect(body.items).toBeInstanceOf(Array);
  });
});

// Cases cannot be deleted via API (405), so we close them after the test
// to keep the test account tidy.
const caseUidsToClose: string[] = [];

describe.skipIf(!hasCredentials)("Support Cases — CRUD (live)", () => {
  afterAll(async () => {
    const client = getTestClient();
    for (const uid of caseUidsToClose) {
      const getRes = await client(`support/cases/${uid}`, { throwHttpErrors: false });
      if (getRes.ok) {
        const full = await getRes.json<Record<string, unknown>>();
        await client(`support/cases/${uid}`, {
          method: "PUT",
          json: { ...full, Status: 2 },
          throwHttpErrors: false,
        });
      }
    }
  });

  test("create → read → update case", async () => {
    const client = getTestClient();

    // Get a person to be the case author
    const peopleRes = await client("crm/people", { throwHttpErrors: false });
    const people = await peopleRes.json<{ items: Array<{ Uid: string }> }>();
    expect(people.items.length).toBeGreaterThan(0);
    const personUid = people.items[0].Uid;

    // CREATE
    const createRes = await client("support/cases?sendAutoResponder=false", {
      method: "POST",
      json: {
        FromPerson: { Uid: personUid },
        Subject: `CRUD test case ${Date.now()}`,
        Body: "Created by integration test",
        Source: 2,
      },
      throwHttpErrors: false,
    });
    expect(createRes.status).toBe(200);
    const created = await createRes.json<Record<string, unknown>>();
    expect(created.Uid).toBeDefined();
    expect(created.Subject).toContain("CRUD test case");
    caseUidsToClose.push(created.Uid as string);

    // READ
    const getRes = await client(`support/cases/${created.Uid}`, {
      throwHttpErrors: false,
    });
    expect(getRes.status).toBe(200);
    const fetched = await getRes.json<Record<string, unknown>>();
    expect(fetched.Uid).toBe(created.Uid);

    // UPDATE (close case: Status 2 = Closed)
    const closeRes = await client(`support/cases/${created.Uid}`, {
      method: "PUT",
      json: { ...fetched, Status: 2 },
      throwHttpErrors: false,
    });
    expect(closeRes.status).toBe(200);
    const closed = await closeRes.json<Record<string, unknown>>();
    expect(closed.Status).toBe(2);
  });
});
