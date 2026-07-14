// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonEmailClickedWebhookPayloadPersonAccountItemRole = typeof PersonEmailClickedWebhookPayloadPersonAccountItemRole[keyof typeof PersonEmailClickedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailClickedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
