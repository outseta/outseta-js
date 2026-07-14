// @ts-nocheck
import type { AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemPerson } from './accountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemPerson';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemRole } from './accountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemRole';

export type AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItemRole;
};
