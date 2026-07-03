// @ts-nocheck
import type { AccountSubscriptionStartedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountSubscriptionStartedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountSubscriptionStartedWebhookPayloadSubscriptionsItemPlan } from './accountSubscriptionStartedWebhookPayloadSubscriptionsItemPlan';
import type { AccountSubscriptionStartedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountSubscriptionStartedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountSubscriptionStartedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountSubscriptionStartedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionStartedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountSubscriptionStartedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountSubscriptionStartedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountSubscriptionStartedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionStartedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountSubscriptionStartedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionStartedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionStartedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
