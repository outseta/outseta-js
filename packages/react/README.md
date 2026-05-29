# @outseta/react

React components plus generated TanStack Query hooks for Outseta.

## Notes

- The embed components depend on `window.Outseta`; load Outseta's script in your app shell before using `OutsetaProvider`.
- In browser apps, create API clients with a user bearer `accessToken`, not API key credentials.
- Generated hooks require a TanStack `QueryClientProvider` and an Outseta client passed through each hook's `request` option.
- `ProtectedRoute` renders generic login/signup and manage-subscription CTAs by default. Replace them with `unauthenticated` and `accessDenied` props when your app needs custom UX.

## Outseta script

```html
<script>
  var o_options = {
    domain: "your-company.outseta.com",
    load: "auth,nocode",
  };
</script>
<script src="https://cdn.outseta.com/outseta.min.js" data-options="o_options"></script>
```

## Generated hook request client

```tsx
import { createClient, useAccountGetAllAccounts } from "@outseta/react";

const client = createClient({
  subdomain: "your-company",
  accessToken,
});

const accounts = useAccountGetAllAccounts(undefined, {
  request: client,
});
```
