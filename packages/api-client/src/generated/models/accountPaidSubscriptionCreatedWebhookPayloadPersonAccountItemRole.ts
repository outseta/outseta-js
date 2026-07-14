// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemRole = typeof AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemRole[keyof typeof AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
