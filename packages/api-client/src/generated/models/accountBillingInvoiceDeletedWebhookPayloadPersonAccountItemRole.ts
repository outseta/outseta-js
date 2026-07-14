// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItemRole = typeof AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItemRole[keyof typeof AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
