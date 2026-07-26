// @ts-nocheck

/**
 * `1` - Admin, `2` - Member, `3` - Operator
 * @nullable
 */
export type AccountWebhookEntityPersonAccountItemRole = typeof AccountWebhookEntityPersonAccountItemRole[keyof typeof AccountWebhookEntityPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityPersonAccountItemRole = {
  Admin: 1,
  Member: 2,
  Operator: 3,
} as const;
