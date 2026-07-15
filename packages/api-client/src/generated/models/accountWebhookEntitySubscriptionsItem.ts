// @ts-nocheck
import type { AccountWebhookEntitySubscriptionsItemBillingRenewalTerm } from './accountWebhookEntitySubscriptionsItemBillingRenewalTerm';
import type { AccountWebhookEntitySubscriptionsItemPlan } from './accountWebhookEntitySubscriptionsItemPlan';
import type { AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItem } from './accountWebhookEntitySubscriptionsItemSubscriptionAddOnsItem';
import type { AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItem } from './accountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountWebhookEntitySubscriptionsItemLatestInvoice } from './accountWebhookEntitySubscriptionsItemLatestInvoice';

export type AccountWebhookEntitySubscriptionsItem = {
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
  BillingRenewalTerm?: AccountWebhookEntitySubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountWebhookEntitySubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountWebhookEntitySubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
