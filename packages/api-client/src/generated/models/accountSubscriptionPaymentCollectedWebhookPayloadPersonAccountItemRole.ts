// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItemRole = typeof AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItemRole[keyof typeof AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
