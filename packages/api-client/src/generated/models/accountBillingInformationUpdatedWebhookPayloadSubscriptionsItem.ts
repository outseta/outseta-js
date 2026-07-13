// @ts-nocheck
import type { AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountBillingInformationUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemPlan } from './accountBillingInformationUpdatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountBillingInformationUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountBillingInformationUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountBillingInformationUpdatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
