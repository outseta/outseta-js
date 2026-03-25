---
name: update-api-client-tests
description: Update api-client integration tests after spec regeneration. Use when generated code has changed and tests need to match.
---

# Update api-client integration tests

The integration tests in `packages/api-client/src/__tests__/` use generated functions from `packages/api-client/src/generated/`. When the OpenAPI spec changes and code is regenerated, the tests may break.

## Step 1: Detect breakage

Run the typecheck to find errors in the test files:

```
npx tsc --noEmit -p packages/api-client/tsconfig.json
```

If there are no errors, the tests already match the generated code — stop here.

## Step 2: Understand what changed

For each error, read the relevant generated file to understand the new signature. Generated code lives in:

- `packages/api-client/src/generated/crm/crm.ts` — account and person endpoints
- `packages/api-client/src/generated/support/support.ts` — case endpoints
- `packages/api-client/src/generated/models/` — all model and body types

Common changes to look for:
- **Renamed functions** — the function name changed but does the same thing
- **Changed parameters** — parameter added, removed, reordered, or type changed
- **Changed body types** — request/response model fields renamed or restructured
- **New endpoints** — a new generated function appeared (consider adding a test)
- **Removed endpoints** — a generated function was deleted (remove its test)

## Step 3: Update the tests

Apply fixes to the test files:

- `packages/api-client/src/__tests__/accounts-crud.integration.test.ts`
- `packages/api-client/src/__tests__/people.integration.test.ts`
- `packages/api-client/src/__tests__/support.integration.test.ts`
- `packages/api-client/src/__tests__/crm.integration.test.ts`

### Rules

1. **Always import generated functions** — never use raw `client("path", ...)` ky calls for operations that have a generated function. This is the entire point: if the spec changes, the test should break at compile time.
2. **Use `opts(client)` from `./setup.js`** to pass the ky instance as the options argument.
3. **Cast request bodies** with `as FooBody` — the generated body types extend `AbstractBean` which requires `Created` and `Updated`, but the API doesn't need these on requests.
4. **Cast response data** with `as unknown as Model` — list endpoints return `PaginatedResponse<T>` at runtime but the generated response type doesn't reflect this.
5. **Keep raw ky only** for operations that have no generated function (e.g., case update/close).
6. **Don't remove cleanup logic** in `afterAll` — it prevents test data from accumulating.

### Test patterns

Importing generated functions:
```ts
import { accountGetAllAccounts, accountAddAccount } from "../generated/crm/crm.js";
import type { Account, AccountAddAccountBody } from "../generated/models/index.js";
```

Calling a list endpoint:
```ts
const res = await accountGetAllAccounts(undefined, opts(client));
const body = res.data as unknown as PaginatedResponse<Account>;
```

Calling a create endpoint:
```ts
const res = await accountAddAccount(
  { Name: "Test", PersonAccount: [...] } as AccountAddAccountBody,
  undefined, // params
  opts(client),
);
const created = res.data as unknown as Account;
```

Calling a get/update/delete endpoint:
```ts
const res = await accountGetAccount(uid, opts(client));
const res = await accountUpdateAccount(uid, body as AccountUpdateAccountBody, opts(client));
const res = await accountDeleteAccount(uid, opts(client));
```

## Step 4: Verify

Run the typecheck again to confirm all errors are resolved:

```
npx tsc --noEmit -p packages/api-client/tsconfig.json
```
