// @ts-nocheck
import type { AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionPlan } from './accountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
