// @ts-nocheck
import type { AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration } from './accountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration';

/**
 * @nullable
 */
export type AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon = {
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
  /** @nullable */
  UniqueIdentifier?: string | null;
  /** @nullable */
  Name?: string | null;
  IsActive?: boolean;
  /** @nullable */
  AmountOff?: number | null;
  /** @nullable */
  PercentOff?: number | null;
  /** @nullable */
  RedeemBy?: string | null;
  /** `1` - Forever, `2` - Once, `3` - Repeating */
  Duration?: AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration;
  /** @nullable */
  DurationInMonths?: number | null;
  TimesRedeemed?: number;
  /** @nullable */
  MaxRedemptions?: number | null;
  ApplyToAddOns?: boolean;
  /** @nullable */
  PlanUids?: string | null;
} | null;
