// @ts-nocheck
import type { AccountDeletedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountDeletedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountDeletedWebhookPayloadSubscriptionsItemPlan } from './accountDeletedWebhookPayloadSubscriptionsItemPlan';
import type { AccountDeletedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountDeletedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountDeletedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountDeletedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountDeletedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountDeletedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountDeletedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountDeletedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountDeletedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
