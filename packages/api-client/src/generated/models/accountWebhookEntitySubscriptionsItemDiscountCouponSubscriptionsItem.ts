// @ts-nocheck
import type { AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon } from './accountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon';

export type AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItem = {
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
  /** @nullable */
  RedeemedDate?: string | null;
  /** @nullable */
  ExpireDate?: string | null;
  /** @nullable */
  DiscountCoupon?: AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon;
};
