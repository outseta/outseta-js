// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountBillingInformationRequestedWebhookPayloadPersonAccountItemRole = typeof AccountBillingInformationRequestedWebhookPayloadPersonAccountItemRole[keyof typeof AccountBillingInformationRequestedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountBillingInformationRequestedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
