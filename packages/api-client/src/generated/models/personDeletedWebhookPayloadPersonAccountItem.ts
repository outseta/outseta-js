// @ts-nocheck
import type { PersonDeletedWebhookPayloadPersonAccountItemAccount } from './personDeletedWebhookPayloadPersonAccountItemAccount';

export type PersonDeletedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonDeletedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
