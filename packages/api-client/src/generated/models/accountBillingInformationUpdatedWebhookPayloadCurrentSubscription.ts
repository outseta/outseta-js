// @ts-nocheck
import type { AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm } from './accountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm';
import type { AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionPlan } from './accountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionPlan';
import type { AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem } from './accountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem } from './accountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionLatestInvoice } from './accountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountBillingInformationUpdatedWebhookPayloadCurrentSubscription = {
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
  BillingRenewalTerm?: AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionPlan;
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
  SubscriptionAddOns?: AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountBillingInformationUpdatedWebhookPayloadCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
