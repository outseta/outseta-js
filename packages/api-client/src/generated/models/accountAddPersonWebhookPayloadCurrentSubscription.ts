// @ts-nocheck
import type { AccountAddPersonWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountAddPersonWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountAddPersonWebhookPayloadCurrentSubscriptionPlan } from './accountAddPersonWebhookPayloadCurrentSubscriptionPlan';
import type { AccountAddPersonWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountAddPersonWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountAddPersonWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountAddPersonWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountAddPersonWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountAddPersonWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountAddPersonWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountAddPersonWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountAddPersonWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountAddPersonWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountAddPersonWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountAddPersonWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
