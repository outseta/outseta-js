// @ts-nocheck

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type AddOnCreatedWebhookPayloadBillingAddOnType = typeof AddOnCreatedWebhookPayloadBillingAddOnType[keyof typeof AddOnCreatedWebhookPayloadBillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddOnCreatedWebhookPayloadBillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;
