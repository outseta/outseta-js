// @ts-nocheck
import type { AccountCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountCreatedWebhookPayloadLatestSubscriptionPlan } from './accountCreatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountCreatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountCreatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountCreatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountCreatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountCreatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
