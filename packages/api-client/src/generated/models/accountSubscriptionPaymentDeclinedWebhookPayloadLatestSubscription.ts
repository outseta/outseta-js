// @ts-nocheck
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionPlan } from './accountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionPlan';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
