// @ts-nocheck
import type { AccountDeletedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountDeletedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountDeletedWebhookPayloadCurrentSubscriptionPlan } from './accountDeletedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountDeletedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountDeletedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountDeletedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountDeletedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountDeletedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountDeletedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountDeletedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountDeletedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountDeletedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountDeletedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountDeletedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountDeletedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
