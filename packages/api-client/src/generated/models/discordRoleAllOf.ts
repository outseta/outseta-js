// @ts-nocheck
import type { DiscordRoleAllOfDiscordServer } from './discordRoleAllOfDiscordServer';
import type { DiscordRolePlan } from './discordRolePlan';

export type DiscordRoleAllOf = {
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
  Position?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  Icon?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Emoji?: string | null;
  /** @nullable */
  DiscordServer?: DiscordRoleAllOfDiscordServer;
  /** @nullable */
  DiscordRolePlans?: DiscordRolePlan[] | null;
};
