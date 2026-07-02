// @ts-nocheck
import type { PersonSupportTicketUpdatedWebhookPayloadPersonAccountItemAccount } from './personSupportTicketUpdatedWebhookPayloadPersonAccountItemAccount';

export type PersonSupportTicketUpdatedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonSupportTicketUpdatedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
