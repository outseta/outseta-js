// @ts-nocheck
import type { DiscordUserRolesUpdatedWebhookPayloadPersonAccountItemAccount } from './discordUserRolesUpdatedWebhookPayloadPersonAccountItemAccount';
import type { DiscordUserRolesUpdatedWebhookPayloadPersonAccountItemRole } from './discordUserRolesUpdatedWebhookPayloadPersonAccountItemRole';

export type DiscordUserRolesUpdatedWebhookPayloadPersonAccountItem = {
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
  Account?: DiscordUserRolesUpdatedWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - FullAccess, `3` - Operator
   * @nullable
   */
  Role?: DiscordUserRolesUpdatedWebhookPayloadPersonAccountItemRole;
};
