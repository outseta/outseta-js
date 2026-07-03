// @ts-nocheck
import type { AccountRemovePersonWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountRemovePersonWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountRemovePersonWebhookPayloadLatestSubscriptionPlan } from './accountRemovePersonWebhookPayloadLatestSubscriptionPlan';
import type { AccountRemovePersonWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountRemovePersonWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountRemovePersonWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountRemovePersonWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountRemovePersonWebhookPayloadLatestSubscriptionLatestInvoice } from './accountRemovePersonWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountRemovePersonWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountRemovePersonWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountRemovePersonWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountRemovePersonWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountRemovePersonWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountRemovePersonWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
