// @ts-nocheck
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemPerson } from './accountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemPerson';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemRole } from './accountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemRole';

export type AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItemRole;
};
