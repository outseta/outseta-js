// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonListSubscribedWebhookPayloadPersonAccountItemRole = typeof PersonListSubscribedWebhookPayloadPersonAccountItemRole[keyof typeof PersonListSubscribedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonListSubscribedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
