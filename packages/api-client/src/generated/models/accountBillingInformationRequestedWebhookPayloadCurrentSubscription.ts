// @ts-nocheck
import type { AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountBillingInformationRequestedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionPlan } from './accountBillingInformationRequestedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountBillingInformationRequestedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInformationRequestedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountBillingInformationRequestedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInformationRequestedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationRequestedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
