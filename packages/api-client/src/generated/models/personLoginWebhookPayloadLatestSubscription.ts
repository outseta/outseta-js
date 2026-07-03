// @ts-nocheck
import type { PersonLoginWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './personLoginWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { PersonLoginWebhookPayloadLatestSubscriptionPlan } from './personLoginWebhookPayloadLatestSubscriptionPlan';
import type { PersonLoginWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './personLoginWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { PersonLoginWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './personLoginWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { PersonLoginWebhookPayloadLatestSubscriptionLatestInvoice } from './personLoginWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type PersonLoginWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: PersonLoginWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: PersonLoginWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: PersonLoginWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: PersonLoginWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: PersonLoginWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
