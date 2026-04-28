// @ts-nocheck
import type { StripeRefundAllOfStripeCharge } from './stripeRefundAllOfStripeCharge';

export type StripeRefundAllOf = {
  Amount?: number;
  /**
   * @maxLength 50
   * @nullable
   */
  ChargeId?: string | null;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  PaymentIntentId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Reason?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyAmount?: number;
  /** @nullable */
  StripeCharge?: StripeRefundAllOfStripeCharge;
  [key: string]: unknown | null;
};
