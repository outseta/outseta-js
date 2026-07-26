// @ts-nocheck
import type { AccountWebhookEntityPersonAccountItemPerson } from './accountWebhookEntityPersonAccountItemPerson';
import type { AccountWebhookEntityPersonAccountItemRole } from './accountWebhookEntityPersonAccountItemRole';

export type AccountWebhookEntityPersonAccountItem = {
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
  Person?: AccountWebhookEntityPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - Member, `3` - Operator
   * @nullable
   */
  Role?: AccountWebhookEntityPersonAccountItemRole;
};
