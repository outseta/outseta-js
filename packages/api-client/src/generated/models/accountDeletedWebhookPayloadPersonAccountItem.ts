// @ts-nocheck
import type { AccountDeletedWebhookPayloadPersonAccountItemPerson } from './accountDeletedWebhookPayloadPersonAccountItemPerson';
import type { AccountDeletedWebhookPayloadPersonAccountItemRole } from './accountDeletedWebhookPayloadPersonAccountItemRole';

export type AccountDeletedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountDeletedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountDeletedWebhookPayloadPersonAccountItemRole;
};
