// @ts-nocheck

/**
 * `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed
 */
export type PersonListConfirmedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = typeof PersonListConfirmedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus[keyof typeof PersonListConfirmedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonListConfirmedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus = {
  Subscribed: 1,
  Unsubscribed: 2,
  Cleaned: 3,
  Confirmed: 4,
} as const;
