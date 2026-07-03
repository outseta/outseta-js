// @ts-nocheck
import type { AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionPlan } from './accountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
