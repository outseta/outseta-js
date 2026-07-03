// @ts-nocheck
import type { AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemPlan } from './accountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemPlan';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
