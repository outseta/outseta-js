// @ts-nocheck
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadPersonAccountItemAccount } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadPersonAccountItemAccount';

export type PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadPersonAccountItem = {
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
  Account?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
