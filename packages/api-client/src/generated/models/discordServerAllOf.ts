// @ts-nocheck
import type { DiscordRole } from './discordRole';

export type DiscordServerAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  ExternalId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Description?: string | null;
  RequiresActiveSubscription?: boolean;
  SuppressPromptToConnect?: boolean;
  IsActive?: boolean;
  /** @nullable */
  DiscordRoles?: DiscordRole[] | null;
};
