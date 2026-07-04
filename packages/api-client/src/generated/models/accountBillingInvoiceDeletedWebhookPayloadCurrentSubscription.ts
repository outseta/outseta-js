// @ts-nocheck
import type { AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionPlan } from './accountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
