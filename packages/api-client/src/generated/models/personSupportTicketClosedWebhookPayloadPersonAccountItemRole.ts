// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonSupportTicketClosedWebhookPayloadPersonAccountItemRole = typeof PersonSupportTicketClosedWebhookPayloadPersonAccountItemRole[keyof typeof PersonSupportTicketClosedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonSupportTicketClosedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
