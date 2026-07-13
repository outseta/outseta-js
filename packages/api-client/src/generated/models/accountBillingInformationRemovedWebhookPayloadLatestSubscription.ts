// @ts-nocheck
import type { AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountBillingInformationRemovedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionPlan } from './accountBillingInformationRemovedWebhookPayloadLatestSubscriptionPlan';
import type { AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountBillingInformationRemovedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInformationRemovedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountBillingInformationRemovedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInformationRemovedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationRemovedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
