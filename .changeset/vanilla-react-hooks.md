---
"@outseta/react": minor
---

Remove the `@tanstack/react-query` dependency. The generated `useX` hooks keep the same call signatures (`useAccountGetAllAccounts(params, { request: client })`, etc.) and result fields (`data`, `error`, `isLoading`, `refetch`, `mutate`, ...), but are now backed by a lightweight vanilla-React implementation. A `QueryClientProvider` is no longer required. Note that these hooks no longer cache, dedupe, or refetch in the background — use TanStack Query (or another data layer) directly if you need those.
