// @ts-nocheck
import type { SessionFlowDataSubscriptionUpdateConfirmDiscountOptions } from './sessionFlowDataSubscriptionUpdateConfirmDiscountOptions';
import type { SessionFlowDataSubscriptionUpdateConfirmItemOptions } from './sessionFlowDataSubscriptionUpdateConfirmItemOptions';

export interface SessionFlowDataSubscriptionUpdateConfirmOptions {
  /** @nullable */
  Discounts?: SessionFlowDataSubscriptionUpdateConfirmDiscountOptions[] | null;
  /** @nullable */
  Items?: SessionFlowDataSubscriptionUpdateConfirmItemOptions[] | null;
  /** @nullable */
  Subscription?: string | null;
}
