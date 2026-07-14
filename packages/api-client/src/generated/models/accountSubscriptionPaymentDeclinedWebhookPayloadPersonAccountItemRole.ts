// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItemRole = typeof AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItemRole[keyof typeof AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
