// @ts-nocheck

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm = typeof AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm[keyof typeof AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;
