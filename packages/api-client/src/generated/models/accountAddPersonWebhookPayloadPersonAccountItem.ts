// @ts-nocheck
import type { AccountAddPersonWebhookPayloadPersonAccountItemPerson } from './accountAddPersonWebhookPayloadPersonAccountItemPerson';
import type { AccountAddPersonWebhookPayloadPersonAccountItemRole } from './accountAddPersonWebhookPayloadPersonAccountItemRole';

export type AccountAddPersonWebhookPayloadPersonAccountItem = {
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
  Person?: AccountAddPersonWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountAddPersonWebhookPayloadPersonAccountItemRole;
};
