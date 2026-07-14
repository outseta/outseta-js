// @ts-nocheck
import type { PersonEmailBounceWebhookPayloadPersonAccountItemAccount } from './personEmailBounceWebhookPayloadPersonAccountItemAccount';
import type { PersonEmailBounceWebhookPayloadPersonAccountItemRole } from './personEmailBounceWebhookPayloadPersonAccountItemRole';

export type PersonEmailBounceWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailBounceWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonEmailBounceWebhookPayloadPersonAccountItemRole;
};
