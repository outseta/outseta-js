// @ts-nocheck
import type { AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionPlan } from './accountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
