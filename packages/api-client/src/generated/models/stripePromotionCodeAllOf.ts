// @ts-nocheck
import type { StripePromotionCodeAllOfAccount } from './stripePromotionCodeAllOfAccount';
import type { StripePromotionCodeAllOfStripeCoupon } from './stripePromotionCodeAllOfStripeCoupon';

export type StripePromotionCodeAllOf = {
  /** @nullable */
  Account?: StripePromotionCodeAllOfAccount;
  Active?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  Code?: string | null;
  /** @nullable */
  ExpiresAt?: string | null;
  /** @nullable */
  MaxRedemptions?: number | null;
  Restrictions_FirstTimeTransaction?: boolean;
  /** @nullable */
  StripeCoupon?: StripePromotionCodeAllOfStripeCoupon;
  TimesRedeemed?: number;
  Valid?: boolean;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  CouponId?: string | null;
  [key: string]: unknown | null;
};
