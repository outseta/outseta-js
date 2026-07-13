// @ts-nocheck
import type { PersonUpdatedActivityDataOriginalValues } from './personUpdatedActivityDataOriginalValues';
import type { PersonUpdatedActivityDataCurrentValues } from './personUpdatedActivityDataCurrentValues';

export interface PersonUpdatedActivityData {
  /** @nullable */
  OriginalValues?: PersonUpdatedActivityDataOriginalValues;
  /** @nullable */
  CurrentValues?: PersonUpdatedActivityDataCurrentValues;
}
