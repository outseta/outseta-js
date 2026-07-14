// @ts-nocheck
import type { AccountStageUpdatedWebhookPayloadPersonAccountItemPerson } from './accountStageUpdatedWebhookPayloadPersonAccountItemPerson';
import type { AccountStageUpdatedWebhookPayloadPersonAccountItemRole } from './accountStageUpdatedWebhookPayloadPersonAccountItemRole';

export type AccountStageUpdatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountStageUpdatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountStageUpdatedWebhookPayloadPersonAccountItemRole;
};
