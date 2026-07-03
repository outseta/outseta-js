// @ts-nocheck

export type AccountSubscriptionStartedWebhookPayloadCurrentSubscriptionPlanPlanAddOnsItem = {
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
  IsUserSelectable: boolean;
};
