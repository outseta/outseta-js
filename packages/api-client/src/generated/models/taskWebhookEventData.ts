// @ts-nocheck
import type { TaskWebhookEventDataStatus } from './taskWebhookEventDataStatus';

export interface TaskWebhookEventData {
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
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /** @nullable */
  DueDate?: string | null;
  /**
   * @maxLength 5000
   * @nullable
   */
  Notes?: string | null;
  /** `1` - Pending, `2` - InProgress, `3` - Done */
  Status?: TaskWebhookEventDataStatus;
  CreatedDateTime?: string;
  /** @nullable */
  CompletedDateTime?: string | null;
}
