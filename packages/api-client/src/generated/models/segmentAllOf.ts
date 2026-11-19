// @ts-nocheck
import type { SegmentPerson } from './segmentPerson';
import type { Tag } from './tag';

export type SegmentAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 500
   * @nullable
   */
  Description?: string | null;
  ContainsAccountConditions: boolean;
  ContainsUnsupportedBillingConditions: boolean;
  /** @nullable */
  CriteriaData?: string | null;
  /** @nullable */
  LastRefreshDateTime?: string | null;
  /** @nullable */
  People?: SegmentPerson[] | null;
  PendingProcessing?: boolean;
  /** @nullable */
  ProcessingStartedDateTime?: string | null;
  /** @nullable */
  ProcessingCheckedCount?: number | null;
  /** @nullable */
  ProcessingTotalCount?: number | null;
  PersonCount?: number;
  /** @nullable */
  Tags?: Tag[] | null;
};
