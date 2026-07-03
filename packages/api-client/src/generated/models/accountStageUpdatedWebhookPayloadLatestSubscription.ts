// @ts-nocheck
import type { AccountStageUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountStageUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountStageUpdatedWebhookPayloadLatestSubscriptionPlan } from './accountStageUpdatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountStageUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountStageUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountStageUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountStageUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountStageUpdatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountStageUpdatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountStageUpdatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountStageUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountStageUpdatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountStageUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountStageUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountStageUpdatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
