// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonListConfirmedWebhookPayloadPersonAccountItemRole = typeof PersonListConfirmedWebhookPayloadPersonAccountItemRole[keyof typeof PersonListConfirmedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonListConfirmedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
