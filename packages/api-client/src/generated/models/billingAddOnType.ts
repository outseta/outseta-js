// @ts-nocheck

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type BillingAddOnType = typeof BillingAddOnType[keyof typeof BillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;
