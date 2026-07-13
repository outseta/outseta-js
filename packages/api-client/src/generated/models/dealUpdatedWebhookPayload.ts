// @ts-nocheck
import type { DealUpdatedWebhookPayloadDealPipelineStage } from './dealUpdatedWebhookPayloadDealPipelineStage';
import type { DealUpdatedWebhookPayloadAccount } from './dealUpdatedWebhookPayloadAccount';
import type { DealUpdatedWebhookPayloadDealPeopleItem } from './dealUpdatedWebhookPayloadDealPeopleItem';
import type { DealUpdatedWebhookPayloadOwner } from './dealUpdatedWebhookPayloadOwner';

export interface DealUpdatedWebhookPayload {
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
  DealPipelineStage?: DealUpdatedWebhookPayloadDealPipelineStage;
  /** @nullable */
  Account?: DealUpdatedWebhookPayloadAccount;
  /** @nullable */
  DealPeople?: DealUpdatedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealUpdatedWebhookPayloadOwner;
  /** @nullable */
  PipelineUid?: string | null;
}
