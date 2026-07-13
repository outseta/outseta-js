// @ts-nocheck
import type { AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountBillingInformationUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionPlan } from './accountBillingInformationUpdatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountBillingInformationUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInformationUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountBillingInformationUpdatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInformationUpdatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationUpdatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
