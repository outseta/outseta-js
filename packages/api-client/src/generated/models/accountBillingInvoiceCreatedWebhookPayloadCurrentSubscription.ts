// @ts-nocheck
import type { AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionPlan } from './accountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
