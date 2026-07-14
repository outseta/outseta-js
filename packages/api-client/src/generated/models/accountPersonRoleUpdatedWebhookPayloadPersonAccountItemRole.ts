// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemRole = typeof AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemRole[keyof typeof AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
