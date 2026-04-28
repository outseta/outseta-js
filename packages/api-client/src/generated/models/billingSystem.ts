// @ts-nocheck

/**
 * `1` - Outseta, `2` - Stripe
 */
export type BillingSystem = typeof BillingSystem[keyof typeof BillingSystem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingSystem = {
  Outseta: 1,
  Stripe: 2,
} as const;
