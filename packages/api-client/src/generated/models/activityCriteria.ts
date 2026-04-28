// @ts-nocheck
import type { ActivityCriteriaActivityType } from './activityCriteriaActivityType';

export interface ActivityCriteria {
  /** @nullable */
  EntityType?: string | null;
  /** @nullable */
  EntityUid?: string | null;
  /** @nullable */
  ActivityType?: ActivityCriteriaActivityType;
  /** @nullable */
  ActivityTypes?: string[] | null;
}
