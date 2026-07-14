// @ts-nocheck
import type { DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemAccount } from './discordUserRemovedFromServerWebhookPayloadPersonAccountItemAccount';
import type { DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemRole } from './discordUserRemovedFromServerWebhookPayloadPersonAccountItemRole';

export type DiscordUserRemovedFromServerWebhookPayloadPersonAccountItem = {
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
  Account?: DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: DiscordUserRemovedFromServerWebhookPayloadPersonAccountItemRole;
};
