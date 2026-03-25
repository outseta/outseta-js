import { describe, expect, test, afterAll } from "bun:test";
import { hasCredentials, getTestClient, opts, type PaginatedResponse } from "./setup.js";
import type { Person, PersonAddPersonBody, PersonUpdatePersonBody } from "../generated/models/index.js";
import {
  personGetAllPeople,
  personAddPerson,
  personGetPerson,
  personUpdatePerson,
  personDeletePerson,
} from "../generated/crm/crm.js";

const peopleToCleanup: string[] = [];

describe.skipIf(!hasCredentials)("People (live)", () => {
  afterAll(async () => {
    const client = getTestClient();
    for (const uid of peopleToCleanup) {
      await personDeletePerson(uid, opts(client));
    }
  });

  test("list all people", async () => {
    const client = getTestClient();
    const res = await personGetAllPeople(undefined, opts(client));

    expect(res.status).toBe(200);
    const body = res.data as unknown as PaginatedResponse<Person>;
    expect(body.metadata).toBeDefined();
    expect(body.items).toBeInstanceOf(Array);
    expect(body.metadata.total).toBeGreaterThan(0);
  });

  test("create → read → update → delete person", async () => {
    const client = getTestClient();
    const email = `person-crud-${Date.now()}@test.com`;

    // CREATE
    const createRes = await personAddPerson(
      { Email: email, FirstName: "CrudTest", LastName: "Person" } as PersonAddPersonBody,
      opts(client),
    );
    expect(createRes.status).toBe(200);
    const created = createRes.data as unknown as Person;
    expect(created.Uid).toBeDefined();
    expect(created.Email).toBe(email);
    peopleToCleanup.push(created.Uid!);

    // READ
    const getRes = await personGetPerson(created.Uid!, opts(client));
    expect(getRes.status).toBe(200);
    const fetched = getRes.data as unknown as Person;
    expect(fetched.Uid).toBe(created.Uid);

    // UPDATE
    const updateRes = await personUpdatePerson(
      created.Uid!,
      { FirstName: "UpdatedFirst" } as PersonUpdatePersonBody,
      opts(client),
    );
    expect(updateRes.status).toBe(200);
    const updated = updateRes.data as unknown as Person;
    expect(updated.FirstName).toBe("UpdatedFirst");

    // DELETE
    const deleteRes = await personDeletePerson(created.Uid!, opts(client));
    expect(deleteRes.status).toBe(200);
  });

  test("get non-existent person returns 404", async () => {
    const client = getTestClient();
    const res = await personGetPerson("nonexistent-uid-000", opts(client));
    expect(res.status).toBe(404);
  });
});
