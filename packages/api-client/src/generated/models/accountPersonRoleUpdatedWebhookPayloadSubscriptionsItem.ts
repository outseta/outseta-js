// @ts-nocheck
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlan } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlan';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemLatestInvoice } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemLatestInvoice';

export type AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItem = {
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
  BillingRenewalTerm?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlan;
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
  SubscriptionAddOns?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};
