// @ts-nocheck
import type { AccountCreatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountCreatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountCreatedWebhookPayloadSubscriptionsItemPlan } from './accountCreatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountCreatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountCreatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountCreatedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountCreatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountCreatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountCreatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
