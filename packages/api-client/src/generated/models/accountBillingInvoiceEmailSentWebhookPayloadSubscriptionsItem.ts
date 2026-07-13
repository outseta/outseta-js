// @ts-nocheck
import type { AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemPlan } from './accountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemPlan';
import type { AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemLatestInvoice } from './accountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
