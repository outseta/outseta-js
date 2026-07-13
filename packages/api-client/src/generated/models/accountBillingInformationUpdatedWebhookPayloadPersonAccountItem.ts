// @ts-nocheck
import type { AccountBillingInformationUpdatedWebhookPayloadPersonAccountItemPerson } from './accountBillingInformationUpdatedWebhookPayloadPersonAccountItemPerson';

export type AccountBillingInformationUpdatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountBillingInformationUpdatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
