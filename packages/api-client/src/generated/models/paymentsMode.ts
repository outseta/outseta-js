// @ts-nocheck

/**
 * `0` - Manual, `1` - Automatic
 */
export type PaymentsMode = typeof PaymentsMode[keyof typeof PaymentsMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentsMode = {
  Manual: 0,
  Automatic: 1,
} as const;
