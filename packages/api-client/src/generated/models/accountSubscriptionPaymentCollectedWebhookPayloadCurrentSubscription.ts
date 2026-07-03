// @ts-nocheck
import type { AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionPlan } from './accountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
