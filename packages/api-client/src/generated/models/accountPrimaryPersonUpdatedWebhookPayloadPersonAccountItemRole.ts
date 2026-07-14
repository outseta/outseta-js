// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountPrimaryPersonUpdatedWebhookPayloadPersonAccountItemRole = typeof AccountPrimaryPersonUpdatedWebhookPayloadPersonAccountItemRole[keyof typeof AccountPrimaryPersonUpdatedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountPrimaryPersonUpdatedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
