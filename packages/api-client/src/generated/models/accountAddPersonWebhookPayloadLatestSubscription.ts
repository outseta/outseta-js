// @ts-nocheck
import type { AccountAddPersonWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountAddPersonWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountAddPersonWebhookPayloadLatestSubscriptionPlan } from './accountAddPersonWebhookPayloadLatestSubscriptionPlan';
import type { AccountAddPersonWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountAddPersonWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountAddPersonWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountAddPersonWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountAddPersonWebhookPayloadLatestSubscriptionLatestInvoice } from './accountAddPersonWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountAddPersonWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountAddPersonWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountAddPersonWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountAddPersonWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountAddPersonWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountAddPersonWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
