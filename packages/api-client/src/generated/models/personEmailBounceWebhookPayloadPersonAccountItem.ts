// @ts-nocheck
import type { PersonEmailBounceWebhookPayloadPersonAccountItemAccount } from './personEmailBounceWebhookPayloadPersonAccountItemAccount';

export type PersonEmailBounceWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailBounceWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
