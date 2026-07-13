// @ts-nocheck
import type { AccountUpdatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountUpdatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountUpdatedWebhookPayloadCurrentSubscriptionPlan } from './accountUpdatedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountUpdatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountUpdatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountUpdatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountUpdatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountUpdatedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountUpdatedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountUpdatedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountUpdatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountUpdatedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountUpdatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountUpdatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountUpdatedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
