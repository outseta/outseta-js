// @ts-nocheck
import type { PersonListSubscribedWebhookPayloadPersonAccountItemAccount } from './personListSubscribedWebhookPayloadPersonAccountItemAccount';
import type { PersonListSubscribedWebhookPayloadPersonAccountItemRole } from './personListSubscribedWebhookPayloadPersonAccountItemRole';

export type PersonListSubscribedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonListSubscribedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonListSubscribedWebhookPayloadPersonAccountItemRole;
};
