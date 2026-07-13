// @ts-nocheck
import type { AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountBillingInformationRequestedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemPlan } from './accountBillingInformationRequestedWebhookPayloadSubscriptionsItemPlan';
import type { AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountBillingInformationRequestedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountBillingInformationRequestedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountBillingInformationRequestedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountBillingInformationRequestedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationRequestedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
