// @ts-nocheck
import type { DiscountCouponSubscriptionAllOfSubscription } from './discountCouponSubscriptionAllOfSubscription';
import type { DiscountCouponSubscriptionAllOfDiscountCoupon } from './discountCouponSubscriptionAllOfDiscountCoupon';

export type DiscountCouponSubscriptionAllOf = {
  /** @nullable */
  RedeemedDate?: string | null;
  /** @nullable */
  ExpireDate?: string | null;
  /** @nullable */
  Subscription?: DiscountCouponSubscriptionAllOfSubscription;
  /** @nullable */
  DiscountCoupon?: DiscountCouponSubscriptionAllOfDiscountCoupon;
};
