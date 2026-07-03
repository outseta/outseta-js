// @ts-nocheck
import type { PersonLoginWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './personLoginWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { PersonLoginWebhookPayloadSubscriptionsItemPlan } from './personLoginWebhookPayloadSubscriptionsItemPlan';
import type { PersonLoginWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './personLoginWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { PersonLoginWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './personLoginWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { PersonLoginWebhookPayloadSubscriptionsItemLatestInvoice } from './personLoginWebhookPayloadSubscriptionsItemLatestInvoice';

export type PersonLoginWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: PersonLoginWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: PersonLoginWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: PersonLoginWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: PersonLoginWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: PersonLoginWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
