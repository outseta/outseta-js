// @ts-nocheck
import type { AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionPlan } from './accountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInvoiceCreatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceCreatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
