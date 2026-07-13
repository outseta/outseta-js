// @ts-nocheck

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type AddOnUpdatedWebhookPayloadBillingAddOnType = typeof AddOnUpdatedWebhookPayloadBillingAddOnType[keyof typeof AddOnUpdatedWebhookPayloadBillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddOnUpdatedWebhookPayloadBillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;
