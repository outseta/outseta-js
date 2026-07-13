// @ts-nocheck
import type { PlanUpdatedWebhookPayloadPlanAddOnsItemAddOn } from './planUpdatedWebhookPayloadPlanAddOnsItemAddOn';

export type PlanUpdatedWebhookPayloadPlanAddOnsItem = {
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
  AddOn?: PlanUpdatedWebhookPayloadPlanAddOnsItemAddOn;
  IsUserSelectable: boolean;
};
