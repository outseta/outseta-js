// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonSupportTicketCreatedWebhookPayloadPersonAccountItemRole = typeof PersonSupportTicketCreatedWebhookPayloadPersonAccountItemRole[keyof typeof PersonSupportTicketCreatedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonSupportTicketCreatedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
