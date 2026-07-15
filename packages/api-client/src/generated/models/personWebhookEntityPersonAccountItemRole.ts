// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonWebhookEntityPersonAccountItemRole = typeof PersonWebhookEntityPersonAccountItemRole[keyof typeof PersonWebhookEntityPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonWebhookEntityPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
