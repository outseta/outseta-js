// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonEmailUnsubscribedWebhookPayloadPersonAccountItemRole = typeof PersonEmailUnsubscribedWebhookPayloadPersonAccountItemRole[keyof typeof PersonEmailUnsubscribedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailUnsubscribedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
