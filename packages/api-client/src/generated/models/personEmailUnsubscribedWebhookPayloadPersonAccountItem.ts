// @ts-nocheck
import type { PersonEmailUnsubscribedWebhookPayloadPersonAccountItemAccount } from './personEmailUnsubscribedWebhookPayloadPersonAccountItemAccount';

export type PersonEmailUnsubscribedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailUnsubscribedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
