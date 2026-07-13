// @ts-nocheck

/**
 * `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed
 */
export type PersonEmailUnsubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = typeof PersonEmailUnsubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus[keyof typeof PersonEmailUnsubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailUnsubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = {
  Subscribed: 1,
  Unsubscribed: 2,
  Cleaned: 3,
  Confirmed: 4,
} as const;
