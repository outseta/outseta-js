// @ts-nocheck
import type { StripeSubscriptionItemAllOfStripeSubscription } from './stripeSubscriptionItemAllOfStripeSubscription';
import type { StripeDiscount } from './stripeDiscount';
import type { StripeSubscriptionItemAllOfStripePrice } from './stripeSubscriptionItemAllOfStripePrice';

export type StripeSubscriptionItemAllOf = {
  CurrentPeriodStart?: string;
  CurrentPeriodEnd?: string;
  /** @nullable */
  StripeSubscription?: StripeSubscriptionItemAllOfStripeSubscription;
  /** @nullable */
  StripeDiscounts?: StripeDiscount[] | null;
  /** @nullable */
  StripePrice?: StripeSubscriptionItemAllOfStripePrice;
  Quantity?: number;
  /** @nullable */
  PriceId?: string | null;
  [key: string]: unknown | null;
};
