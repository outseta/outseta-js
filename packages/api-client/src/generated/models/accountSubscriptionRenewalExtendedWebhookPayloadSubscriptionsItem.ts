// @ts-nocheck
import type { AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemPlan } from './accountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemPlan';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
