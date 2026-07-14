// @ts-nocheck
import type { PersonEmailOpenedWebhookPayloadPersonAccountItemAccount } from './personEmailOpenedWebhookPayloadPersonAccountItemAccount';
import type { PersonEmailOpenedWebhookPayloadPersonAccountItemRole } from './personEmailOpenedWebhookPayloadPersonAccountItemRole';

export type PersonEmailOpenedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonEmailOpenedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonEmailOpenedWebhookPayloadPersonAccountItemRole;
};
