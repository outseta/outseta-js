// @ts-nocheck
import type { AccountRemovePersonWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountRemovePersonWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountRemovePersonWebhookPayloadSubscriptionsItemPlan } from './accountRemovePersonWebhookPayloadSubscriptionsItemPlan';
import type { AccountRemovePersonWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountRemovePersonWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountRemovePersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountRemovePersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountRemovePersonWebhookPayloadSubscriptionsItemLatestInvoice } from './accountRemovePersonWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountRemovePersonWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountRemovePersonWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountRemovePersonWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountRemovePersonWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountRemovePersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountRemovePersonWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
