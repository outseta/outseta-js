// @ts-nocheck
import type { PlanAddOnAllOfPlan } from './planAddOnAllOfPlan';
import type { PlanAddOnAllOfAddOn } from './planAddOnAllOfAddOn';

export type PlanAddOnAllOf = {
  /** @nullable */
  Plan?: PlanAddOnAllOfPlan;
  /** @nullable */
  AddOn?: PlanAddOnAllOfAddOn;
  IsUserSelectable: boolean;
};
