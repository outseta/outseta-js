// @ts-nocheck
import type { DealWebhookEntityDealPipelineStage } from './dealWebhookEntityDealPipelineStage';
import type { DealWebhookEntityAccount } from './dealWebhookEntityAccount';
import type { DealWebhookEntityDealPeopleItem } from './dealWebhookEntityDealPeopleItem';
import type { DealWebhookEntityOwner } from './dealWebhookEntityOwner';

export interface DealWebhookEntity {
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
  DealPipelineStage?: DealWebhookEntityDealPipelineStage;
  /** @nullable */
  Account?: DealWebhookEntityAccount;
  /** @nullable */
  DealPeople?: DealWebhookEntityDealPeopleItem[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealWebhookEntityOwner;
  /** @nullable */
  PipelineUid?: string | null;
}
