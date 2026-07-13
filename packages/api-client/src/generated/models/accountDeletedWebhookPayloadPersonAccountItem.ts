// @ts-nocheck
import type { AccountDeletedWebhookPayloadPersonAccountItemPerson } from './accountDeletedWebhookPayloadPersonAccountItemPerson';

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
};
