// @ts-nocheck
import type { DiscordUserAddedToServerWebhookPayloadMailingAddress } from './discordUserAddedToServerWebhookPayloadMailingAddress';
import type { DiscordUserAddedToServerWebhookPayloadPersonAccountItem } from './discordUserAddedToServerWebhookPayloadPersonAccountItem';
import type { DiscordUserAddedToServerWebhookPayloadDealPeopleItem } from './discordUserAddedToServerWebhookPayloadDealPeopleItem';
import type { DiscordUserAddedToServerWebhookPayloadLeadFormSubmissionsItem } from './discordUserAddedToServerWebhookPayloadLeadFormSubmissionsItem';
import type { DiscordUserAddedToServerWebhookPayloadAccount } from './discordUserAddedToServerWebhookPayloadAccount';
import type { DiscordUserAddedToServerWebhookPayloadEmailListPersonItem } from './discordUserAddedToServerWebhookPayloadEmailListPersonItem';
import type { DiscordUserAddedToServerWebhookPayloadOAuthIntegrationStatus } from './discordUserAddedToServerWebhookPayloadOAuthIntegrationStatus';
import type { DiscordUserAddedToServerWebhookPayloadDiscordUser } from './discordUserAddedToServerWebhookPayloadDiscordUser';
import type { DiscordUserAddedToServerActivityData } from './discordUserAddedToServerActivityData';

export interface DiscordUserAddedToServerWebhookPayload {
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
  /**
   * @maxLength 250
   * @nullable
   */
  Email?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FirstName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  LastName?: string | null;
  /** @nullable */
  MailingAddress?: DiscordUserAddedToServerWebhookPayloadMailingAddress;
  /** @nullable */
  PasswordLastUpdated?: string | null;
  PasswordMustChange?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneMobile?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneWork?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ProfileImageS3Url?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  Timezone?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Language?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  IPAddress?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Referer?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  UserAgent?: string | null;
  /** @nullable */
  LastLoginDateTime?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  OAuthGoogleProfileId?: string | null;
  /** @nullable */
  PersonAccount?: DiscordUserAddedToServerWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: DiscordUserAddedToServerWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: DiscordUserAddedToServerWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: DiscordUserAddedToServerWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: DiscordUserAddedToServerWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: DiscordUserAddedToServerWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: DiscordUserAddedToServerWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: DiscordUserAddedToServerActivityData;
}
