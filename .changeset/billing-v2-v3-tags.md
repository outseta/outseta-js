---
"@outseta/api-client": minor
"@outseta/react": minor
---

Follow the API's split of the Billing tag into Billing (v2) and Billing (v3). Existing billing functions and hooks keep their names and stay exported from the package root; the new v3 endpoints (`/api/v1/billing/stripe/...`) are exported from the package root.
