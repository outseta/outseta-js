// @ts-nocheck
import type { AccountBillingInvoiceEmailSentWebhookPayloadPersonAccountItemPerson } from './accountBillingInvoiceEmailSentWebhookPayloadPersonAccountItemPerson';

export type AccountBillingInvoiceEmailSentWebhookPayloadPersonAccountItem = {
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
  Person?: AccountBillingInvoiceEmailSentWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
