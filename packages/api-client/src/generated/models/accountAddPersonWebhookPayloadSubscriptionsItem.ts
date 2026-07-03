// @ts-nocheck
import type { AccountAddPersonWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountAddPersonWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountAddPersonWebhookPayloadSubscriptionsItemPlan } from './accountAddPersonWebhookPayloadSubscriptionsItemPlan';
import type { AccountAddPersonWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountAddPersonWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountAddPersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountAddPersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountAddPersonWebhookPayloadSubscriptionsItemLatestInvoice } from './accountAddPersonWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountAddPersonWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountAddPersonWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountAddPersonWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountAddPersonWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountAddPersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountAddPersonWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
