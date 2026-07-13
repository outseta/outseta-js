// @ts-nocheck
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItemPerson } from './accountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItemPerson';

export type AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
