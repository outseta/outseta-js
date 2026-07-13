// @ts-nocheck
import type { AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionPlan } from './accountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionPlan';
import type { AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
