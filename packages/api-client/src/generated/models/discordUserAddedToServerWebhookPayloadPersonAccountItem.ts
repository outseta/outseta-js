// @ts-nocheck
import type { DiscordUserAddedToServerWebhookPayloadPersonAccountItemAccount } from './discordUserAddedToServerWebhookPayloadPersonAccountItemAccount';

export type DiscordUserAddedToServerWebhookPayloadPersonAccountItem = {
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
  Account?: DiscordUserAddedToServerWebhookPayloadPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
