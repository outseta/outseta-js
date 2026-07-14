// @ts-nocheck
import type { PersonSupportTicketClosedWebhookPayloadPersonAccountItemAccount } from './personSupportTicketClosedWebhookPayloadPersonAccountItemAccount';
import type { PersonSupportTicketClosedWebhookPayloadPersonAccountItemRole } from './personSupportTicketClosedWebhookPayloadPersonAccountItemRole';

export type PersonSupportTicketClosedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonSupportTicketClosedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonSupportTicketClosedWebhookPayloadPersonAccountItemRole;
};
