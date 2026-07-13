// @ts-nocheck
import type { AccountBillingInvoiceCreatedWebhookPayloadPersonAccountItemPerson } from './accountBillingInvoiceCreatedWebhookPayloadPersonAccountItemPerson';

export type AccountBillingInvoiceCreatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountBillingInvoiceCreatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
