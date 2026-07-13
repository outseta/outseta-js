// @ts-nocheck

/**
 * @nullable
 */
export type AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItemPlanPlanFamily = {
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
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
} | null;
