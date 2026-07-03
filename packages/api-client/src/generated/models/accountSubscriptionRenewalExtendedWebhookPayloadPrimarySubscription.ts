// @ts-nocheck
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPrimarySubscriptionBillingRenewalTerm } from './accountSubscriptionRenewalExtendedWebhookPayloadPrimarySubscriptionBillingRenewalTerm';

/**
 * @nullable
 */
export type AccountSubscriptionRenewalExtendedWebhookPayloadPrimarySubscription = {
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
  BillingRenewalTerm?: AccountSubscriptionRenewalExtendedWebhookPayloadPrimarySubscriptionBillingRenewalTerm;
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
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  Rate?: number | null;
} | null;
