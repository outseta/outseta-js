// @ts-nocheck
import type { PersonSupportTicketCreatedWebhookPayloadPersonAccountItemAccount } from './personSupportTicketCreatedWebhookPayloadPersonAccountItemAccount';

export type PersonSupportTicketCreatedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonSupportTicketCreatedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
