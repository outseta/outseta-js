// @ts-nocheck
import type { AccountCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountCreatedWebhookPayloadCurrentSubscriptionPlan } from './accountCreatedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountCreatedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountCreatedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountCreatedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountCreatedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountCreatedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
