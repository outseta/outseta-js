// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountBillingInformationUpdatedWebhookPayloadPersonAccountItemRole = typeof AccountBillingInformationUpdatedWebhookPayloadPersonAccountItemRole[keyof typeof AccountBillingInformationUpdatedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountBillingInformationUpdatedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
