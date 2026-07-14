// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemRole = typeof PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemRole[keyof typeof PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
