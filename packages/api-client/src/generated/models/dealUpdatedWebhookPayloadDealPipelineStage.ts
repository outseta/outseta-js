// @ts-nocheck

/**
 * @nullable
 */
export type DealUpdatedWebhookPayloadDealPipelineStage = {
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
  Weight?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
} | null;
