// @ts-nocheck
import type { PersonEmailSpamWebhookPayloadPersonAccountItemAccount } from './personEmailSpamWebhookPayloadPersonAccountItemAccount';

export type PersonEmailSpamWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailSpamWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
