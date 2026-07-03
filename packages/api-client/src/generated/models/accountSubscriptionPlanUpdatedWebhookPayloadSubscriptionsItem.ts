// @ts-nocheck
import type { AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemPlan } from './accountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItem = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created: string;
  /** @minLength 1 */
  Updated: string;
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
