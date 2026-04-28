// @ts-nocheck
import type { ActivityType } from './activityType';
import type { EntityType } from './entityType';

export type ActivityAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  ActivityData?: string | null;
  ActivityDateTime?: string;
  ActivityType?: ActivityType;
  EntityType?: EntityType;
  /** @nullable */
  EntityUid?: string | null;
};
