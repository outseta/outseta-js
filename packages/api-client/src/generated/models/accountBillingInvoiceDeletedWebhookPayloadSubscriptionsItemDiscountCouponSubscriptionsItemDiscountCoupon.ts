// @ts-nocheck
import type { AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration } from './accountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration';

/**
 * @nullable
 */
export type AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon = {
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
  Duration?: AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration;
  /** @nullable */
  DurationInMonths?: number | null;
  TimesRedeemed?: number;
  /** @nullable */
  MaxRedemptions?: number | null;
  ApplyToAddOns?: boolean;
  /** @nullable */
  PlanUids?: string | null;
} | null;
