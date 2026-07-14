// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type DiscordUserAddedToServerWebhookPayloadPersonAccountItemRole = typeof DiscordUserAddedToServerWebhookPayloadPersonAccountItemRole[keyof typeof DiscordUserAddedToServerWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DiscordUserAddedToServerWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
