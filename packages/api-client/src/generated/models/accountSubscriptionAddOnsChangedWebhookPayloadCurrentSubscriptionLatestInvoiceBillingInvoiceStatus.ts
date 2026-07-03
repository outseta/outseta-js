// @ts-nocheck

/**
 * `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing
 */
export type AccountSubscriptionAddOnsChangedWebhookPayloadCurrentSubscriptionLatestInvoiceBillingInvoiceStatus = typeof AccountSubscriptionAddOnsChangedWebhookPayloadCurrentSubscriptionLatestInvoiceBillingInvoiceStatus[keyof typeof AccountSubscriptionAddOnsChangedWebhookPayloadCurrentSubscriptionLatestInvoiceBillingInvoiceStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountSubscriptionAddOnsChangedWebhookPayloadCurrentSubscriptionLatestInvoiceBillingInvoiceStatus = {
  Unpaid: 1,
  Paid: 2,
  Partial: 3,
  Uncollected: 4,
  Refunded: 5,
  Uncollectible: 6,
  Processing: 7,
} as const;
