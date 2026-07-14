// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 * @nullable
 */
export type PersonSegmentAddedWebhookPayloadPersonAccountItemRole = typeof PersonSegmentAddedWebhookPayloadPersonAccountItemRole[keyof typeof PersonSegmentAddedWebhookPayloadPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonSegmentAddedWebhookPayloadPersonAccountItemRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
