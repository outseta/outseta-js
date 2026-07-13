// @ts-nocheck

/**
 * `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed
 */
export type PersonEmailClickedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = typeof PersonEmailClickedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus[keyof typeof PersonEmailClickedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailClickedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = {
  Subscribed: 1,
  Unsubscribed: 2,
  Cleaned: 3,
  Confirmed: 4,
} as const;
