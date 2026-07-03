// @ts-nocheck

export type AccountSubscriptionStartedWebhookPayloadLatestSubscriptionPlanContentGroupsItem = {
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
  /**
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
};
