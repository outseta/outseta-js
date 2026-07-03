// @ts-nocheck
import type { PersonLoginWebhookPayloadPersonAccountItemPerson } from './personLoginWebhookPayloadPersonAccountItemPerson';

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
};
