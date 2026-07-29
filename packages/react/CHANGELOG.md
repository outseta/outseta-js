# @outseta/react

## 0.4.14

### Patch Changes

- 4fc6f79: Update API spec.
- Updated dependencies [4fc6f79]
  - @outseta/api-client@0.3.20

## 0.4.13

### Patch Changes

- cdfce96: Update API spec.
- Updated dependencies [cdfce96]
  - @outseta/api-client@0.3.19

## 0.4.12

### Patch Changes

- c73963e: Update API spec.
- Updated dependencies [c73963e]
  - @outseta/api-client@0.3.18

## 0.4.11

### Patch Changes

- 473f806: Update API spec.
- Updated dependencies [473f806]
  - @outseta/api-client@0.3.17

## 0.4.10

### Patch Changes

- d81baac: Update API spec.
- Updated dependencies [d81baac]
  - @outseta/api-client@0.3.16

## 0.4.9

### Patch Changes

- 3446c7e: Update API spec.
- Updated dependencies [3446c7e]
  - @outseta/api-client@0.3.15

## 0.4.8

### Patch Changes

- cc883ca: Update API spec.
- Updated dependencies [cc883ca]
  - @outseta/api-client@0.3.14

## 0.4.7

### Patch Changes

- 5f63e44: Update API spec.
- Updated dependencies [5f63e44]
  - @outseta/api-client@0.3.13

## 0.4.6

### Patch Changes

- 92fbd8d: Update API spec.
- Updated dependencies [92fbd8d]
  - @outseta/api-client@0.3.12

## 0.4.5

### Patch Changes

- 2b42ee4: Update API spec.
- Updated dependencies [2b42ee4]
  - @outseta/api-client@0.3.11

## 0.4.4

### Patch Changes

- 2ff316c: Update API spec.
- Updated dependencies [2ff316c]
  - @outseta/api-client@0.3.10

## 0.4.3

### Patch Changes

- 7a23072: Update API spec.
- Updated dependencies [7a23072]
  - @outseta/api-client@0.3.9

## 0.4.2

### Patch Changes

- ad17981: Update API spec.
- Updated dependencies [ad17981]
  - @outseta/api-client@0.3.8

## 0.4.1

### Patch Changes

- d75fdb4: Update API spec.
- Updated dependencies [d75fdb4]
  - @outseta/api-client@0.3.7

## 0.4.0

### Minor Changes

- f829b86: Add unstyled widget primitives for auth, profile, support, email list, and lead capture flows, including a headless email list form and provider methods for opening these widgets from custom UI.
- f829b86: Remove the `@tanstack/react-query` dependency. The generated `useX` hooks keep the same call signatures (`useAccountGetAllAccounts(params, { request: client })`, etc.) and result fields (`data`, `error`, `isLoading`, `refetch`, `mutate`, ...), but are now backed by a lightweight vanilla-React implementation. A `QueryClientProvider` is no longer required. Note that these hooks no longer cache, dedupe, or refetch in the background — use TanStack Query (or another data layer) directly if you need those.

## 0.3.7

### Patch Changes

- 4307770: Update API spec.
- Updated dependencies [4307770]
  - @outseta/api-client@0.3.6

## 0.3.6

### Patch Changes

- cb6a6cf: Update API spec.
- Updated dependencies [cb6a6cf]
  - @outseta/api-client@0.3.5

## 0.3.5

### Patch Changes

- 4e7696f: Update API spec.

## 0.3.4

### Patch Changes

- e3e82a8: Update API spec.
- Updated dependencies [e3e82a8]
  - @outseta/api-client@0.3.4

## 0.3.3

### Patch Changes

- dbb53cc: Update API spec.
- Updated dependencies [dbb53cc]
  - @outseta/api-client@0.3.3

## 0.3.2

### Patch Changes

- a4d7e65: Update API spec.
- Updated dependencies [a4d7e65]
  - @outseta/api-client@0.3.2

## 0.3.1

### Patch Changes

- cdd5c47: Update API spec.
- Updated dependencies [cdd5c47]
  - @outseta/api-client@0.3.1

## 0.3.0

### Minor Changes

- 2026b16: Export generated API functions and React Query hooks, add node usage tracking and Express webhook helpers, and add reusable React CTA components for protected content.

### Patch Changes

- Updated dependencies [2026b16]
  - @outseta/api-client@0.3.0

## 0.2.5

### Patch Changes

- 09bc8a6: Update API spec.
- Updated dependencies [09bc8a6]
  - @outseta/api-client@0.2.5

## 0.2.4

### Patch Changes

- bad9a9e: Update API spec.
- Updated dependencies [bad9a9e]
  - @outseta/api-client@0.2.4

## 0.2.3

### Patch Changes

- 570ca9a: Update API spec.
- Updated dependencies [570ca9a]
  - @outseta/api-client@0.2.3

## 0.2.2

### Patch Changes

- 649863d: Update API spec.
- Updated dependencies [649863d]
  - @outseta/api-client@0.2.2

## 0.2.1

### Patch Changes

- dd74961: Replace the ky-based client with a small fetch-based client abstraction and update dependent packages to use it.
- Updated dependencies [dd74961]
  - @outseta/api-client@0.2.1

## 0.2.0

### Minor Changes

- e7b81df: Add Outseta embed components: OutsetaProvider, useOutseta hook, AuthEmbed, ProfileEmbed, ProtectedRoute, PurchaseAddonButton, and LogoutButton

## 0.1.1

### Patch Changes

- 04204b6: Add repository field to package.json for npm provenance
- Updated dependencies [04204b6]
  - @outseta/api-client@0.1.1

## 0.1.0

### Minor Changes

- 411a6b5: pre-release

### Patch Changes

- Updated dependencies [411a6b5]
  - @outseta/api-client@0.1.0
