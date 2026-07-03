// @ts-nocheck
import type { AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountSubscriptionStartedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionPlan } from './accountSubscriptionStartedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionStartedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionStartedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountSubscriptionStartedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionStartedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
