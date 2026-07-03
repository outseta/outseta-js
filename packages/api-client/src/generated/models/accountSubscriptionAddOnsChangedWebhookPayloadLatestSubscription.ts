// @ts-nocheck
import type { AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionPlan } from './accountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionPlan';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
