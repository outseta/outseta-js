// @ts-nocheck
import type { DealDueDateWebhookPayloadDealPipelineStage } from './dealDueDateWebhookPayloadDealPipelineStage';
import type { DealDueDateWebhookPayloadAccount } from './dealDueDateWebhookPayloadAccount';
import type { DealDueDateWebhookPayloadDealPeopleItem } from './dealDueDateWebhookPayloadDealPeopleItem';
import type { DealDueDateWebhookPayloadOwner } from './dealDueDateWebhookPayloadOwner';

export interface DealDueDateWebhookPayload {
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
  DealPipelineStage?: DealDueDateWebhookPayloadDealPipelineStage;
  /** @nullable */
  Account?: DealDueDateWebhookPayloadAccount;
  /** @nullable */
  DealPeople?: DealDueDateWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealDueDateWebhookPayloadOwner;
  /** @nullable */
  PipelineUid?: string | null;
}
