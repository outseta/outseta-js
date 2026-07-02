// @ts-nocheck

/**
 * @nullable
 */
export type PersonListUnsubscribedWebhookPayloadDiscordUser = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
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
} | null;
