// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemRole = typeof AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemRole[keyof typeof AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
