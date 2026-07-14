// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemRole = typeof AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemRole[keyof typeof AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
