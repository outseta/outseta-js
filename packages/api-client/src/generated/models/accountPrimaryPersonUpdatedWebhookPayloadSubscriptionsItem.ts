// @ts-nocheck
import type { AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemPlan } from './accountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountPrimaryPersonUpdatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
