import { describe, expect, test, afterAll } from "bun:test";
import { hasCredentials, getTestClient, opts, type PaginatedResponse } from "./setup.js";
import type { Case, CaseAddCaseBody, Person } from "../generated/models/index.js";
import { caseGetAllCases, caseAddCase, caseGetCase } from "../generated/support/support.js";
import { personGetAllPeople } from "../generated/crm/crm.js";

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
// to keep the test account tidy. No generated caseUpdateCase exists,
// so cleanup uses raw ky.
const caseUidsToClose: string[] = [];

describe.skipIf(!hasCredentials)("Support Cases — CRUD (live)", () => {
  afterAll(async () => {
    const client = getTestClient();
    for (const uid of caseUidsToClose) {
      const getRes = await caseGetCase(uid, opts(client));
      if (getRes.status === 200) {
        const full = getRes.data as unknown as Case;
        // No generated update function — fall back to raw ky
        await client(`support/cases/${uid}`, {
          method: "PUT",
          json: { ...full, Status: 2 },
          throwHttpErrors: false,
        });
      }
    }
  });

  test("create → read case", async () => {
    const client = getTestClient();

    // Get a person to be the case author
    const peopleRes = await personGetAllPeople(undefined, opts(client));
    expect(peopleRes.status).toBe(200);
    const people = peopleRes.data as unknown as PaginatedResponse<Person>;
    expect(people.items.length).toBeGreaterThan(0);
    const person = people.items[0];

    // CREATE
    const createRes = await caseAddCase(
      {
        FromPerson: { Uid: person.Uid! },
        Subject: `CRUD test case ${Date.now()}`,
        Body: "Created by integration test",
        Source: 2,
        Status: 1,
      } as CaseAddCaseBody,
      { sendautoresponder: "false" },
      opts(client),
    );
    expect(createRes.status).toBe(200);
    const created = createRes.data as unknown as Case;
    expect(created.Uid).toBeDefined();
    expect(created.Subject).toContain("CRUD test case");
    caseUidsToClose.push(created.Uid!);

    // READ
    const getRes = await caseGetCase(created.Uid!, opts(client));
    expect(getRes.status).toBe(200);
    const fetched = getRes.data as unknown as Case;
    expect(fetched.Uid).toBe(created.Uid);
  });
});
