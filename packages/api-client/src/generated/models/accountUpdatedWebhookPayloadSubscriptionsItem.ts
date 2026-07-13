// @ts-nocheck
import type { AccountUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountUpdatedWebhookPayloadSubscriptionsItemPlan } from './accountUpdatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountUpdatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountUpdatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountUpdatedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountUpdatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountUpdatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
