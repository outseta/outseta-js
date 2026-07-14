// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonSegmentRemovedWebhookPayloadPersonAccountItemRole = typeof PersonSegmentRemovedWebhookPayloadPersonAccountItemRole[keyof typeof PersonSegmentRemovedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonSegmentRemovedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
