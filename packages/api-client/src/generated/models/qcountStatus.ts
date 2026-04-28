// @ts-nocheck

/**
 * `0` - Active, `1` - Inactive, `2` - MarkedForDeletion, `3` - Deleted
 */
export type QcountStatus = typeof QcountStatus[keyof typeof QcountStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const QcountStatus = {
  Active: 0,
  Inactive: 1,
  MarkedForDeletion: 2,
  Deleted: 3,
} as const;
