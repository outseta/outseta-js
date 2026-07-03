// @ts-nocheck
import type { AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionPlan } from './accountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
