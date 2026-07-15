// @ts-nocheck
import type { PlanWebhookEntityPlanAddOnsItemAddOn } from './planWebhookEntityPlanAddOnsItemAddOn';

export type PlanWebhookEntityPlanAddOnsItem = {
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
  AddOn?: PlanWebhookEntityPlanAddOnsItemAddOn;
  IsUserSelectable: boolean;
};
