import type { FormHTMLAttributes } from "react";

export interface EmailListFormProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Your Outseta domain, e.g. "your-company.outseta.com". */
  domain: string;
  /** The Outseta email list UID to subscribe to. */
  emailListUid: string;
}

function getSubscribeAction(domain: string, emailListUid: string): string {
  const hasProtocol = domain.startsWith("http://") || domain.startsWith("https://");
  const baseUrl = hasProtocol ? domain : `https://${domain}`;
  return `${baseUrl.replace(/\/$/, "")}/email/lists/${emailListUid}/subscribe`;
}

/**
 * Headless native form wrapper for Outseta email list subscriptions.
 * Provide your own fields and styling; Outseta expects an `Email` input.
 */
export function EmailListForm({
  domain,
  emailListUid,
  action,
  method = "post",
  ...props
}: EmailListFormProps) {
  return (
    <form
      action={action ?? getSubscribeAction(domain, emailListUid)}
      method={method}
      {...props}
    />
  );
}
