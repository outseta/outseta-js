// @ts-nocheck
import type { AccountRemovePersonWebhookPayloadPersonAccountItemPerson } from './accountRemovePersonWebhookPayloadPersonAccountItemPerson';

export type AccountRemovePersonWebhookPayloadPersonAccountItem = {
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
  Person?: AccountRemovePersonWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
