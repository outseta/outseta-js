// @ts-nocheck
import type { AccountBillingInformationRequestedWebhookPayloadPersonAccountItemPerson } from './accountBillingInformationRequestedWebhookPayloadPersonAccountItemPerson';
import type { AccountBillingInformationRequestedWebhookPayloadPersonAccountItemRole } from './accountBillingInformationRequestedWebhookPayloadPersonAccountItemRole';

export type AccountBillingInformationRequestedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountBillingInformationRequestedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: AccountBillingInformationRequestedWebhookPayloadPersonAccountItemRole;
};
