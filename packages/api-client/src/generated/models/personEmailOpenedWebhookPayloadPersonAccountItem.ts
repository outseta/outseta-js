// @ts-nocheck
import type { PersonEmailOpenedWebhookPayloadPersonAccountItemAccount } from './personEmailOpenedWebhookPayloadPersonAccountItemAccount';

export type PersonEmailOpenedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailOpenedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
