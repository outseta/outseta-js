// @ts-nocheck
import type { AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionPlan } from './accountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
