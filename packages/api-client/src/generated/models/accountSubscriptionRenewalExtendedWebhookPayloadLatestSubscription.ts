// @ts-nocheck
import type { AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionPlan } from './accountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionPlan';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscription = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
