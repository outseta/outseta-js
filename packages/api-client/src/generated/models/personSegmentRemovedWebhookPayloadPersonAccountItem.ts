// @ts-nocheck
import type { PersonSegmentRemovedWebhookPayloadPersonAccountItemAccount } from './personSegmentRemovedWebhookPayloadPersonAccountItemAccount';

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
};
