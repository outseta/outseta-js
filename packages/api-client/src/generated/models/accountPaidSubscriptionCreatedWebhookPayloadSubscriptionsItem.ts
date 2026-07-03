// @ts-nocheck
import type { AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemPlan } from './accountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
