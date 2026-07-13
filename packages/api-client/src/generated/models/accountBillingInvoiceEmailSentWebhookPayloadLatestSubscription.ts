// @ts-nocheck
import type { AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionPlan } from './accountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionPlan';
import type { AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionLatestInvoice } from './accountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
