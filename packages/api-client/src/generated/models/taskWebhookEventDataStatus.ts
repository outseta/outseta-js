// @ts-nocheck

/**
 * `1` - Pending, `2` - InProgress, `3` - Done
 */
export type TaskWebhookEventDataStatus = typeof TaskWebhookEventDataStatus[keyof typeof TaskWebhookEventDataStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TaskWebhookEventDataStatus = {
  Pending: 1,
  InProgress: 2,
  Done: 3,
} as const;
