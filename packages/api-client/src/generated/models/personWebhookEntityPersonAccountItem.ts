// @ts-nocheck
import type { PersonWebhookEntityPersonAccountItemAccount } from './personWebhookEntityPersonAccountItemAccount';
import type { PersonWebhookEntityPersonAccountItemRole } from './personWebhookEntityPersonAccountItemRole';

export type PersonWebhookEntityPersonAccountItem = {
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
  Account?: PersonWebhookEntityPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - Member, `3` - Operator
   * @nullable
   */
  Role?: PersonWebhookEntityPersonAccountItemRole;
};
