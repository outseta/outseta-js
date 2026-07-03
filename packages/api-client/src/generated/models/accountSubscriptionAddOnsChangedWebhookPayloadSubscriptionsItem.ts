// @ts-nocheck
import type { AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemPlan } from './accountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemPlan';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
