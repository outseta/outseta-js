import { describe, expect, test, afterAll } from "bun:test";
import { hasCredentials, getTestClient } from "./setup.js";

const peopleToCleanup: string[] = [];

describe.skipIf(!hasCredentials)("People (live)", () => {
  afterAll(async () => {
    const client = getTestClient();
    for (const uid of peopleToCleanup) {
      await client(`crm/people/${uid}`, { method: "DELETE", throwHttpErrors: false });
    }
  });

  test("list all people", async () => {
    const client = getTestClient();
    const res = await client("crm/people", { throwHttpErrors: false });

    expect(res.status).toBe(200);
    const body = await res.json<{ metadata: { total: number }; items: unknown[] }>();
    expect(body.metadata).toBeDefined();
    expect(body.items).toBeInstanceOf(Array);
    expect(body.metadata.total).toBeGreaterThan(0);
  });

  test("create → read → update → delete person", async () => {
    const client = getTestClient();
    const email = `person-crud-${Date.now()}@test.com`;

    // CREATE
    const createRes = await client("crm/people", {
      method: "POST",
      json: {
        Email: email,
        FirstName: "CrudTest",
        LastName: "Person",
      },
      throwHttpErrors: false,
    });
    expect(createRes.status).toBe(200);
    const created = await createRes.json<{ Uid: string; Email: string; FirstName: string }>();
    expect(created.Uid).toBeDefined();
    expect(created.Email).toBe(email);
    peopleToCleanup.push(created.Uid);

    // READ
    const getRes = await client(`crm/people/${created.Uid}`, {
      throwHttpErrors: false,
    });
    expect(getRes.status).toBe(200);
    const fetched = await getRes.json<{ Uid: string; Email: string }>();
    expect(fetched.Uid).toBe(created.Uid);

    // UPDATE
    const updateRes = await client(`crm/people/${created.Uid}`, {
      method: "PUT",
      json: { FirstName: "UpdatedFirst" },
      throwHttpErrors: false,
    });
    expect(updateRes.status).toBe(200);
    const updated = await updateRes.json<{ FirstName: string }>();
    expect(updated.FirstName).toBe("UpdatedFirst");

    // DELETE
    const deleteRes = await client(`crm/people/${created.Uid}`, {
      method: "DELETE",
      throwHttpErrors: false,
    });
    expect(deleteRes.status).toBe(200);
  });

  test("get non-existent person returns 404", async () => {
    const client = getTestClient();
    const res = await client("crm/people/nonexistent-uid-000", {
      throwHttpErrors: false,
    });
    expect(res.status).toBe(404);
  });
});
