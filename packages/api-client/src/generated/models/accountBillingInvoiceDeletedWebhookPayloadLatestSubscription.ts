// @ts-nocheck
import type { AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionPlan } from './accountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionPlan';
import type { AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInvoiceDeletedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceDeletedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
