// @ts-nocheck
import type { AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemPlan } from './accountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemPlan';
import type { AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
