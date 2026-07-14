// @ts-nocheck
import type { PersonListConfirmedWebhookPayloadPersonAccountItemAccount } from './personListConfirmedWebhookPayloadPersonAccountItemAccount';
import type { PersonListConfirmedWebhookPayloadPersonAccountItemRole } from './personListConfirmedWebhookPayloadPersonAccountItemRole';

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
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonListConfirmedWebhookPayloadPersonAccountItemRole;
};
