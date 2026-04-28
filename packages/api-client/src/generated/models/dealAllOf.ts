// @ts-nocheck
import type { DealAllOfDealPipelineStage } from './dealAllOfDealPipelineStage';
import type { DealAllOfAccount } from './dealAllOfAccount';
import type { DealPerson } from './dealPerson';
import type { DealAllOfOwner } from './dealAllOfOwner';

export type DealAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /** @nullable */
  Amount?: number | null;
  /** @nullable */
  DueDate?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  AssignedToPersonClientIdentifier?: string | null;
  Weight?: number;
  /** @nullable */
  DealPipelineStage?: DealAllOfDealPipelineStage;
  /** @nullable */
  Account?: DealAllOfAccount;
  /** @nullable */
  DealPeople?: DealPerson[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealAllOfOwner;
  /** @nullable */
  PipelineUid?: string | null;
  [key: string]: unknown | null;
};
