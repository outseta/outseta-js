// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonSupportTicketUpdatedWebhookPayloadPersonAccountItemRole = typeof PersonSupportTicketUpdatedWebhookPayloadPersonAccountItemRole[keyof typeof PersonSupportTicketUpdatedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonSupportTicketUpdatedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
