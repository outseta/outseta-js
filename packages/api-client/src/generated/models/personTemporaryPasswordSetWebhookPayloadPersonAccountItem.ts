// @ts-nocheck
import type { PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemAccount } from './personTemporaryPasswordSetWebhookPayloadPersonAccountItemAccount';

export type PersonTemporaryPasswordSetWebhookPayloadPersonAccountItem = {
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
  Account?: PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
