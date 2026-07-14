// @ts-nocheck
import type { PersonSegmentRemovedWebhookPayloadPersonAccountItemAccount } from './personSegmentRemovedWebhookPayloadPersonAccountItemAccount';
import type { PersonSegmentRemovedWebhookPayloadPersonAccountItemRole } from './personSegmentRemovedWebhookPayloadPersonAccountItemRole';

export type PersonSegmentRemovedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonSegmentRemovedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonSegmentRemovedWebhookPayloadPersonAccountItemRole;
};
