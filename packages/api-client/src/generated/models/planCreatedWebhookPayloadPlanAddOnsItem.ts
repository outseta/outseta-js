// @ts-nocheck
import type { PlanCreatedWebhookPayloadPlanAddOnsItemAddOn } from './planCreatedWebhookPayloadPlanAddOnsItemAddOn';

export type PlanCreatedWebhookPayloadPlanAddOnsItem = {
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
  AddOn?: PlanCreatedWebhookPayloadPlanAddOnsItemAddOn;
  IsUserSelectable: boolean;
};
