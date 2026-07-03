// @ts-nocheck
import type { AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItemPerson } from './accountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItemPerson';

export type AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
