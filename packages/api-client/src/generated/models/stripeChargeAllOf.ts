// @ts-nocheck
import type { StripeChargeAllOfStripePaymentMethod } from './stripeChargeAllOfStripePaymentMethod';
import type { StripeChargeAllOfAccount } from './stripeChargeAllOfAccount';
import type { StripeRefund } from './stripeRefund';

export type StripeChargeAllOf = {
  Amount?: number;
  AmountCaptured?: number;
  AmountRefunded?: number;
  /** @nullable */
  ApplicationFeeAmount?: number | null;
  /**
   * @maxLength 255
   * @nullable
   */
  ApplicationFeeId?: string | null;
  Captured?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  Paid?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  PaymentIntentId?: string | null;
  Refunded?: boolean;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  StripePaymentMethod?: StripeChargeAllOfStripePaymentMethod;
  /** @nullable */
  Account?: StripeChargeAllOfAccount;
  /**
   * @maxLength 256
   * @nullable
   */
  ExtraData?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyAmount?: number;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  PaymentMethodId?: string | null;
  /** @nullable */
  StripeRefunds?: StripeRefund[] | null;
  [key: string]: unknown | null;
};
