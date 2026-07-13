// @ts-nocheck
import type { AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountBillingInformationRemovedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemPlan } from './accountBillingInformationRemovedWebhookPayloadSubscriptionsItemPlan';
import type { AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountBillingInformationRemovedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountBillingInformationRemovedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountBillingInformationRemovedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountBillingInformationRemovedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationRemovedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
