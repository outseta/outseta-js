// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonEmailOpenedWebhookPayloadPersonAccountItemRole = typeof PersonEmailOpenedWebhookPayloadPersonAccountItemRole[keyof typeof PersonEmailOpenedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailOpenedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
