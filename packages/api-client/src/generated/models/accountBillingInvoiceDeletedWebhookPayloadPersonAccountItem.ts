// @ts-nocheck
import type { AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItemPerson } from './accountBillingInvoiceDeletedWebhookPayloadPersonAccountItemPerson';

export type AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
