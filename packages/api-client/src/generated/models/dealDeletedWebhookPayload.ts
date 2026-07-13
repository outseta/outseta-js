// @ts-nocheck
import type { DealDeletedWebhookPayloadDealPipelineStage } from './dealDeletedWebhookPayloadDealPipelineStage';
import type { DealDeletedWebhookPayloadAccount } from './dealDeletedWebhookPayloadAccount';
import type { DealDeletedWebhookPayloadDealPeopleItem } from './dealDeletedWebhookPayloadDealPeopleItem';
import type { DealDeletedWebhookPayloadOwner } from './dealDeletedWebhookPayloadOwner';

export interface DealDeletedWebhookPayload {
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
  DealPipelineStage?: DealDeletedWebhookPayloadDealPipelineStage;
  /** @nullable */
  Account?: DealDeletedWebhookPayloadAccount;
  /** @nullable */
  DealPeople?: DealDeletedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealDeletedWebhookPayloadOwner;
  /** @nullable */
  PipelineUid?: string | null;
}
