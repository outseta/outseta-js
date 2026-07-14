// @ts-nocheck
import type { AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm } from './accountPersonRoleUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm';
import type { AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionPlan } from './accountPersonRoleUpdatedWebhookPayloadLatestSubscriptionPlan';
import type { AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem } from './accountPersonRoleUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem } from './accountPersonRoleUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionLatestInvoice } from './accountPersonRoleUpdatedWebhookPayloadLatestSubscriptionLatestInvoice';

/**
 * @nullable
 */
export type AccountPersonRoleUpdatedWebhookPayloadLatestSubscription = {
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
  BillingRenewalTerm?: AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionPlan;
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
  SubscriptionAddOns?: AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountPersonRoleUpdatedWebhookPayloadLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;
