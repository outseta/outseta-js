// @ts-nocheck
import type { AccountWebhookEntityCurrentSubscriptionBillingRenewalTerm } from './accountWebhookEntityCurrentSubscriptionBillingRenewalTerm';
import type { AccountWebhookEntityCurrentSubscriptionPlan } from './accountWebhookEntityCurrentSubscriptionPlan';
import type { AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItem } from './accountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountWebhookEntityCurrentSubscriptionLatestInvoice } from './accountWebhookEntityCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountWebhookEntityCurrentSubscription = {
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
  BillingRenewalTerm?: AccountWebhookEntityCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountWebhookEntityCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountWebhookEntityCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
