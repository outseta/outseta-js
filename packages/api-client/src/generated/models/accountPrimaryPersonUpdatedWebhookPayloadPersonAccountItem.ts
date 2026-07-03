// @ts-nocheck
import type { AccountPrimaryPersonUpdatedWebhookPayloadPersonAccountItemPerson } from './accountPrimaryPersonUpdatedWebhookPayloadPersonAccountItemPerson';

export type AccountPrimaryPersonUpdatedWebhookPayloadPersonAccountItem = {
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
  Person?: AccountPrimaryPersonUpdatedWebhookPayloadPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
