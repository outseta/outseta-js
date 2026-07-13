// @ts-nocheck
import type { AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountBillingInformationRemovedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionPlan } from './accountBillingInformationRemovedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountBillingInformationRemovedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInformationRemovedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountBillingInformationRemovedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInformationRemovedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationRemovedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
