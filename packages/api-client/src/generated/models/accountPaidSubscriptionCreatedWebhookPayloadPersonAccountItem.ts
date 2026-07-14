// @ts-nocheck
import type { AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemPerson } from './accountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemPerson';
import type { AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemRole } from './accountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemRole';

export type AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItemRole;
};
