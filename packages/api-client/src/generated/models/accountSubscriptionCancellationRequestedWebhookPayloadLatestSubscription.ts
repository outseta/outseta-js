// @ts-nocheck
import type { AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionPlan } from './accountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionPlan';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
