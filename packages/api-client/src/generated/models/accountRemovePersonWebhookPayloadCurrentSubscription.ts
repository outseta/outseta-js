// @ts-nocheck
import type { AccountRemovePersonWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountRemovePersonWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountRemovePersonWebhookPayloadCurrentSubscriptionPlan } from './accountRemovePersonWebhookPayloadCurrentSubscriptionPlan';
import type { AccountRemovePersonWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountRemovePersonWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountRemovePersonWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountRemovePersonWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountRemovePersonWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountRemovePersonWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountRemovePersonWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountRemovePersonWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountRemovePersonWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountRemovePersonWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountRemovePersonWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountRemovePersonWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
