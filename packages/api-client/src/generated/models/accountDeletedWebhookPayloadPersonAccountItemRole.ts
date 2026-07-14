// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountDeletedWebhookPayloadPersonAccountItemRole = typeof AccountDeletedWebhookPayloadPersonAccountItemRole[keyof typeof AccountDeletedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountDeletedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
