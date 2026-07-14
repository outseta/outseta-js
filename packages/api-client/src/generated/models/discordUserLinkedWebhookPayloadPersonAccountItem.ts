// @ts-nocheck
import type { DiscordUserLinkedWebhookPayloadPersonAccountItemAccount } from './discordUserLinkedWebhookPayloadPersonAccountItemAccount';
import type { DiscordUserLinkedWebhookPayloadPersonAccountItemRole } from './discordUserLinkedWebhookPayloadPersonAccountItemRole';

export type DiscordUserLinkedWebhookPayloadPersonAccountItem = {
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
  Account?: DiscordUserLinkedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: DiscordUserLinkedWebhookPayloadPersonAccountItemRole;
};
