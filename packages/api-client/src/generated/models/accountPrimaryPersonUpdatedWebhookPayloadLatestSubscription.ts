// @ts-nocheck
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlan } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
