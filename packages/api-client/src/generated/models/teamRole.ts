// @ts-nocheck

/**
 * `1` - Admin, `2` - FullAccess, `3` - Operator
 */
export type TeamRole = typeof TeamRole[keyof typeof TeamRole];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TeamRole = {
  Admin: 1,
  FullAccess: 2,
  Operator: 3,
} as const;
