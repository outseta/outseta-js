// @ts-nocheck
import type { PersonLoginWebhookPayloadPersonAccountItemPerson } from './personLoginWebhookPayloadPersonAccountItemPerson';
import type { PersonLoginWebhookPayloadPersonAccountItemRole } from './personLoginWebhookPayloadPersonAccountItemRole';

export type PersonLoginWebhookPayloadPersonAccountItem = {
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
  Person?: PersonLoginWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: PersonLoginWebhookPayloadPersonAccountItemRole;
};
