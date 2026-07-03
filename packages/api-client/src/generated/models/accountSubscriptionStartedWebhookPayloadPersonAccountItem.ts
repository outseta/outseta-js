// @ts-nocheck
import type { AccountSubscriptionStartedWebhookPayloadPersonAccountItemPerson } from './accountSubscriptionStartedWebhookPayloadPersonAccountItemPerson';

export type AccountSubscriptionStartedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountSubscriptionStartedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
