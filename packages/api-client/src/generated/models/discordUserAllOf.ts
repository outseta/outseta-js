// @ts-nocheck

export type DiscordUserAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordUserId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordEmail?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordUsername?: string | null;
  /** @nullable */
  DiscordOAuthRefreshToken?: string | null;
};
