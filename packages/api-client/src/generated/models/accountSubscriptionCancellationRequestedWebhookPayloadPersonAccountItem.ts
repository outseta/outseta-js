// @ts-nocheck
import type { AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemPerson } from './accountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemPerson';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemRole } from './accountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemRole';

export type AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItemRole;
};
