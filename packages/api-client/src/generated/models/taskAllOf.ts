// @ts-nocheck
import type { TaskAllOfType } from './taskAllOfType';
import type { TaskAllOfAssignee } from './taskAllOfAssignee';
import type { TaskAllOfDeal } from './taskAllOfDeal';
import type { TaskAllOfPerson } from './taskAllOfPerson';
import type { TaskAllOfAccount } from './taskAllOfAccount';
import type { TaskStatus } from './taskStatus';

export type TaskAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /** @nullable */
  Type?: TaskAllOfType;
  /** @nullable */
  Assignee?: TaskAllOfAssignee;
  /** @nullable */
  DueDate?: string | null;
  /** @nullable */
  Deal?: TaskAllOfDeal;
  /** @nullable */
  Person?: TaskAllOfPerson;
  /** @nullable */
  Account?: TaskAllOfAccount;
  /**
   * @maxLength 5000
   * @nullable
   */
  Notes?: string | null;
  Status?: TaskStatus;
  CreatedDateTime?: string;
  /** @nullable */
  CompletedDateTime?: string | null;
};
