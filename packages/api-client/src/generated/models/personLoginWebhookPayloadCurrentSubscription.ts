// @ts-nocheck
import type { PersonLoginWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './personLoginWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { PersonLoginWebhookPayloadCurrentSubscriptionPlan } from './personLoginWebhookPayloadCurrentSubscriptionPlan';
import type { PersonLoginWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './personLoginWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { PersonLoginWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './personLoginWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { PersonLoginWebhookPayloadCurrentSubscriptionLatestInvoice } from './personLoginWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type PersonLoginWebhookPayloadCurrentSubscription = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: PersonLoginWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: PersonLoginWebhookPayloadCurrentSubscriptionPlan;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  IsPlanUpgradeRequired?: boolean;
  /** @nullable */
  PlanUpgradeRequiredMessage?: string | null;
  /** @nullable */
  SubscriptionAddOns?: PersonLoginWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: PersonLoginWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: PersonLoginWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
