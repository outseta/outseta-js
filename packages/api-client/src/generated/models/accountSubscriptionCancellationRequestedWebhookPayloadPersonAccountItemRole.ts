// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemRole = typeof AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemRole[keyof typeof AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
