// @ts-nocheck

/**
 * `1` - Forever, `2` - Once, `3` - Repeating
 */
export type BillingDiscountDuration = typeof BillingDiscountDuration[keyof typeof BillingDiscountDuration];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingDiscountDuration = {
  Forever: 1,
  Once: 2,
  Repeating: 3,
} as const;
