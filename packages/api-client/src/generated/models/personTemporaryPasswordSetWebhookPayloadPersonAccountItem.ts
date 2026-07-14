// @ts-nocheck
import type { PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemAccount } from './personTemporaryPasswordSetWebhookPayloadPersonAccountItemAccount';
import type { PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemRole } from './personTemporaryPasswordSetWebhookPayloadPersonAccountItemRole';

export type PersonTemporaryPasswordSetWebhookPayloadPersonAccountItem = {
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
  Account?: PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonTemporaryPasswordSetWebhookPayloadPersonAccountItemRole;
};
