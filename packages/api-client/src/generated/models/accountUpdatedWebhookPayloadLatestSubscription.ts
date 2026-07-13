// @ts-nocheck
import type { AccountUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountUpdatedWebhookPayloadLatestSubscriptionPlan } from './accountUpdatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountUpdatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountUpdatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountUpdatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountUpdatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountUpdatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
