// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonEmailBounceWebhookPayloadPersonAccountItemRole = typeof PersonEmailBounceWebhookPayloadPersonAccountItemRole[keyof typeof PersonEmailBounceWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailBounceWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
