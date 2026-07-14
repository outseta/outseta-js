// @ts-nocheck
import type { AccountUpdatedWebhookPayloadPersonAccountItemPerson } from './accountUpdatedWebhookPayloadPersonAccountItemPerson';
import type { AccountUpdatedWebhookPayloadPersonAccountItemRole } from './accountUpdatedWebhookPayloadPersonAccountItemRole';

export type AccountUpdatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountUpdatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountUpdatedWebhookPayloadPersonAccountItemRole;
};
