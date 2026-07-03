// @ts-nocheck
import type { AccountStageUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountStageUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountStageUpdatedWebhookPayloadSubscriptionsItemPlan } from './accountStageUpdatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountStageUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountStageUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountStageUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountStageUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountStageUpdatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountStageUpdatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountStageUpdatedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountStageUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountStageUpdatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountStageUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountStageUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountStageUpdatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
