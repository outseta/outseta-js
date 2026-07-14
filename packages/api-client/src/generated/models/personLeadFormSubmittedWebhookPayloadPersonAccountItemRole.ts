// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonLeadFormSubmittedWebhookPayloadPersonAccountItemRole = typeof PersonLeadFormSubmittedWebhookPayloadPersonAccountItemRole[keyof typeof PersonLeadFormSubmittedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonLeadFormSubmittedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
