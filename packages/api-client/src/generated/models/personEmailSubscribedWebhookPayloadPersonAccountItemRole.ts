// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonEmailSubscribedWebhookPayloadPersonAccountItemRole = typeof PersonEmailSubscribedWebhookPayloadPersonAccountItemRole[keyof typeof PersonEmailSubscribedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailSubscribedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
