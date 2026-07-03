// @ts-nocheck
import type { AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemPlan } from './accountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemPlan';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
