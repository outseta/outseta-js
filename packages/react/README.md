# @outseta/react

React components plus generated data hooks for Outseta.

## Notes

- The embed and widget button components depend on `window.Outseta`; load Outseta's script in your app shell before using `OutsetaProvider`.
- In browser apps, create API clients with a user bearer `accessToken`, not API key credentials.
- Generated hooks are backed by lightweight vanilla-React state (no `QueryClientProvider` required). Pass an Outseta client through each hook's `request` option. They fetch on mount and expose `refetch`, but do not cache, dedupe, or refetch in the background — bring your own data layer (e.g. TanStack Query) if you need that.
- `ProtectedRoute` renders generic login/signup and manage-subscription CTAs by default. Replace them with `unauthenticated` and `accessDenied` props when your app needs custom UX.

## Outseta script

```html
<script>
  var o_options = {
    domain: "your-company.outseta.com",
    // Include the widget modules you render: auth, profile, support, emailList, leadCapture.
    load: "auth,profile,support,emailList,leadCapture,nocode",
  };
</script>
<script src="https://cdn.outseta.com/outseta.min.js" data-options="o_options"></script>
```

## Headless widget primitives

Components are intentionally unstyled and forward normal DOM props so you can use your own classes, labels, and layout. For design-system components, use `useOutseta()` directly and call `openLogin`, `openSignup`, `openProfile`, `openSupport`, `openEmailList`, or `openLeadCapture` from your own buttons. `EmailListForm` only supplies the Outseta form action; bring your own fields and any honeypot fields Outseta gives you.

```tsx
import {
  EmailListButton,
  EmailListEmbed,
  EmailListForm,
  LeadCaptureButton,
  LoginButton,
  ProfileButton,
  SignupButton,
  SupportButton,
  SupportEmbed,
  useOutseta,
} from "@outseta/react";

function MarketingPage() {
  const { openSupport } = useOutseta();

  return (
    <>
      <LoginButton className="btn btn-secondary" />
      <SignupButton className="btn btn-primary">Start free trial</SignupButton>
      <ProfileButton className="link-button" options={{ tab: "billing" }}>
        Billing
      </ProfileButton>

      <LeadCaptureButton formUid="z9M0zBQ4" className="btn">
        Request a demo
      </LeadCaptureButton>
      <EmailListButton emailListUid="vW5xMZ94" className="btn">
        Join the list
      </EmailListButton>
      <SupportButton className="btn">Contact support</SupportButton>

      <button type="button" onClick={() => openSupport()}>
        Open support from my own button
      </button>

      <SupportEmbed className="support-panel" />
      <EmailListEmbed emailListUid="vW5xMZ94" className="newsletter-card" />

      <EmailListForm
        domain="your-company.outseta.com"
        emailListUid="vW5xMZ94"
        className="newsletter-form"
      >
        <input name="Email" type="email" required />
        <button type="submit">Subscribe</button>
      </EmailListForm>
    </>
  );
}
```

## Generated hook request client

```tsx
import { createClient, useAccountGetAllAccounts } from "@outseta/react";

const client = createClient({
  subdomain: "your-company",
  accessToken,
});

function Accounts() {
  const { data, error, isLoading, refetch } = useAccountGetAllAccounts(
    undefined,
    { request: client },
  );

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <button type="button" onClick={() => refetch()}>
      Reload {data?.length ?? 0} accounts
    </button>
  );
}
```
