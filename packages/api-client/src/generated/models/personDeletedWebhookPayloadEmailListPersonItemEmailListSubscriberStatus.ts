// @ts-nocheck

/**
 * `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed
 */
export type PersonDeletedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = typeof PersonDeletedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus[keyof typeof PersonDeletedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonDeletedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = {
  Subscribed: 1,
  Unsubscribed: 2,
  Cleaned: 3,
  Confirmed: 4,
} as const;
