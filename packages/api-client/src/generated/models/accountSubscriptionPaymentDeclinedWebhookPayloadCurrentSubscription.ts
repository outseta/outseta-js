// @ts-nocheck
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlan } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
