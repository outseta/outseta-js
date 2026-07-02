// @ts-nocheck
import type { PersonListConfirmedWebhookPayloadPersonAccountItemAccount } from './personListConfirmedWebhookPayloadPersonAccountItemAccount';

export type PersonListConfirmedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonListConfirmedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
