// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemRole = typeof DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemRole[keyof typeof DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
