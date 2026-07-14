// @ts-nocheck
import type { PersonListUnsubscribedWebhookPayloadPersonAccountItemAccount } from './personListUnsubscribedWebhookPayloadPersonAccountItemAccount';
import type { PersonListUnsubscribedWebhookPayloadPersonAccountItemRole } from './personListUnsubscribedWebhookPayloadPersonAccountItemRole';

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
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonListUnsubscribedWebhookPayloadPersonAccountItemRole;
};
