// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountSubscriptionStartedWebhookPayloadPersonAccountItemRole = typeof AccountSubscriptionStartedWebhookPayloadPersonAccountItemRole[keyof typeof AccountSubscriptionStartedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountSubscriptionStartedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
