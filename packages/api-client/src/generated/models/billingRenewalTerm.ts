// @ts-nocheck

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type BillingRenewalTerm = typeof BillingRenewalTerm[keyof typeof BillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  /** One Time */
  OneTime: 4,
} as const;
