// @ts-nocheck
import type { DiscordUserRemovedFromServerWebhookPayloadMailingAddress } from './discordUserRemovedFromServerWebhookPayloadMailingAddress';
import type { DiscordUserRemovedFromServerWebhookPayloadPersonAccountItem } from './discordUserRemovedFromServerWebhookPayloadPersonAccountItem';
import type { DiscordUserRemovedFromServerWebhookPayloadDealPeopleItem } from './discordUserRemovedFromServerWebhookPayloadDealPeopleItem';
import type { DiscordUserRemovedFromServerWebhookPayloadLeadFormSubmissionsItem } from './discordUserRemovedFromServerWebhookPayloadLeadFormSubmissionsItem';
import type { DiscordUserRemovedFromServerWebhookPayloadAccount } from './discordUserRemovedFromServerWebhookPayloadAccount';
import type { DiscordUserRemovedFromServerWebhookPayloadEmailListPersonItem } from './discordUserRemovedFromServerWebhookPayloadEmailListPersonItem';
import type { DiscordUserRemovedFromServerWebhookPayloadOAuthIntegrationStatus } from './discordUserRemovedFromServerWebhookPayloadOAuthIntegrationStatus';
import type { DiscordUserRemovedFromServerWebhookPayloadDiscordUser } from './discordUserRemovedFromServerWebhookPayloadDiscordUser';
import type { DiscordUserRemovedFromServerActivityData } from './discordUserRemovedFromServerActivityData';

export interface DiscordUserRemovedFromServerWebhookPayload {
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
  MailingAddress?: DiscordUserRemovedFromServerWebhookPayloadMailingAddress;
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
  PersonAccount?: DiscordUserRemovedFromServerWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: DiscordUserRemovedFromServerWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: DiscordUserRemovedFromServerWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: DiscordUserRemovedFromServerWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: DiscordUserRemovedFromServerWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: DiscordUserRemovedFromServerWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: DiscordUserRemovedFromServerWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: DiscordUserRemovedFromServerActivityData;
}
