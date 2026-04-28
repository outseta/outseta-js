// @ts-nocheck

/**
 * `0` - Pending, `1` - Unknown, `2` - Completed, `3` - Removed, `4` - Deleted
 */
export type CancelationStatus = typeof CancelationStatus[keyof typeof CancelationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CancelationStatus = {
  Pending: 0,
  Unknown: 1,
  Completed: 2,
  Removed: 3,
  Deleted: 4,
} as const;
