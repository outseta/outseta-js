// @ts-nocheck

/**
 * `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed
 */
export type PersonEmailSubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = typeof PersonEmailSubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus[keyof typeof PersonEmailSubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailSubscribedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = {
  Subscribed: 1,
  Unsubscribed: 2,
  Cleaned: 3,
  Confirmed: 4,
} as const;
