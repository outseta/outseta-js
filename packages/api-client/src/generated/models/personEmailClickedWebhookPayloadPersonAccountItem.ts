// @ts-nocheck
import type { PersonEmailClickedWebhookPayloadPersonAccountItemAccount } from './personEmailClickedWebhookPayloadPersonAccountItemAccount';

export type PersonEmailClickedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailClickedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
