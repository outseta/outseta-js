// @ts-nocheck
import type { AccountRemovePersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon } from './accountRemovePersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon';

export type AccountRemovePersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItem = {
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
  DiscountCoupon?: AccountRemovePersonWebhookPayloadSubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon;
};
