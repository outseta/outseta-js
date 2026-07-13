// @ts-nocheck
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemPlan } from './accountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemPlan';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
