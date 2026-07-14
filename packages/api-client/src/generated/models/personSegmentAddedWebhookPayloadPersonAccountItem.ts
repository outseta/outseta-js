// @ts-nocheck
import type { PersonSegmentAddedWebhookPayloadPersonAccountItemAccount } from './personSegmentAddedWebhookPayloadPersonAccountItemAccount';
import type { PersonSegmentAddedWebhookPayloadPersonAccountItemRole } from './personSegmentAddedWebhookPayloadPersonAccountItemRole';

export type PersonSegmentAddedWebhookPayloadPersonAccountItem = {
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
  /** @nullable */
  Account?: PersonSegmentAddedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonSegmentAddedWebhookPayloadPersonAccountItemRole;
};
