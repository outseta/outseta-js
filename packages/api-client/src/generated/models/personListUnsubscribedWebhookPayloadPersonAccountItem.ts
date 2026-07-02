// @ts-nocheck
import type { PersonListUnsubscribedWebhookPayloadPersonAccountItemAccount } from './personListUnsubscribedWebhookPayloadPersonAccountItemAccount';

export type PersonListUnsubscribedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonListUnsubscribedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
