// @ts-nocheck
import type { StripeSubscriptionSchedulePhaseItemAllOfStripePrice } from './stripeSubscriptionSchedulePhaseItemAllOfStripePrice';

export type StripeSubscriptionSchedulePhaseItemAllOf = {
  /** @nullable */
  StripePrice?: StripeSubscriptionSchedulePhaseItemAllOfStripePrice;
  Quantity?: number;
  /** @nullable */
  PriceId?: string | null;
  [key: string]: unknown | null;
};
