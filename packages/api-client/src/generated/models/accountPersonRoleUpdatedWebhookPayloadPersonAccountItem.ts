// @ts-nocheck
import type { AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemPerson } from './accountPersonRoleUpdatedWebhookPayloadPersonAccountItemPerson';
import type { AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemRole } from './accountPersonRoleUpdatedWebhookPayloadPersonAccountItemRole';

export type AccountPersonRoleUpdatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountPersonRoleUpdatedWebhookPayloadPersonAccountItemRole;
};
