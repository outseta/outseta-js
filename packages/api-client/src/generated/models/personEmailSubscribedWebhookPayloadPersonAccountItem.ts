// @ts-nocheck
import type { PersonEmailSubscribedWebhookPayloadPersonAccountItemAccount } from './personEmailSubscribedWebhookPayloadPersonAccountItemAccount';
import type { PersonEmailSubscribedWebhookPayloadPersonAccountItemRole } from './personEmailSubscribedWebhookPayloadPersonAccountItemRole';

export type PersonEmailSubscribedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailSubscribedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonEmailSubscribedWebhookPayloadPersonAccountItemRole;
};
