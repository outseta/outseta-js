// @ts-nocheck
import type { AccountDeletedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountDeletedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountDeletedWebhookPayloadLatestSubscriptionPlan } from './accountDeletedWebhookPayloadLatestSubscriptionPlan';
import type { AccountDeletedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountDeletedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountDeletedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountDeletedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountDeletedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountDeletedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountDeletedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountDeletedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountDeletedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountDeletedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountDeletedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountDeletedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
