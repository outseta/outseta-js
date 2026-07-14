// @ts-nocheck
import type { AccountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItemPerson } from './accountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItemPerson';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItemRole } from './accountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItemRole';

export type AccountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItemRole;
};
