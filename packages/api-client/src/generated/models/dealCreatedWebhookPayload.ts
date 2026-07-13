// @ts-nocheck
import type { DealCreatedWebhookPayloadDealPipelineStage } from './dealCreatedWebhookPayloadDealPipelineStage';
import type { DealCreatedWebhookPayloadAccount } from './dealCreatedWebhookPayloadAccount';
import type { DealCreatedWebhookPayloadDealPeopleItem } from './dealCreatedWebhookPayloadDealPeopleItem';
import type { DealCreatedWebhookPayloadOwner } from './dealCreatedWebhookPayloadOwner';

export interface DealCreatedWebhookPayload {
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
  DealPipelineStage?: DealCreatedWebhookPayloadDealPipelineStage;
  /** @nullable */
  Account?: DealCreatedWebhookPayloadAccount;
  /** @nullable */
  DealPeople?: DealCreatedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealCreatedWebhookPayloadOwner;
  /** @nullable */
  PipelineUid?: string | null;
}
