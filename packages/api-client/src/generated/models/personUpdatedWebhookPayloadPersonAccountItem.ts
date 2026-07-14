// @ts-nocheck
import type { PersonUpdatedWebhookPayloadPersonAccountItemAccount } from './personUpdatedWebhookPayloadPersonAccountItemAccount';
import type { PersonUpdatedWebhookPayloadPersonAccountItemRole } from './personUpdatedWebhookPayloadPersonAccountItemRole';

export type PersonUpdatedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonUpdatedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonUpdatedWebhookPayloadPersonAccountItemRole;
};
