// @ts-nocheck
import type { DiscordUserRolesUpdatedWebhookPayloadMailingAddress } from './discordUserRolesUpdatedWebhookPayloadMailingAddress';
import type { DiscordUserRolesUpdatedWebhookPayloadPersonAccountItem } from './discordUserRolesUpdatedWebhookPayloadPersonAccountItem';
import type { DiscordUserRolesUpdatedWebhookPayloadDealPeopleItem } from './discordUserRolesUpdatedWebhookPayloadDealPeopleItem';
import type { DiscordUserRolesUpdatedWebhookPayloadLeadFormSubmissionsItem } from './discordUserRolesUpdatedWebhookPayloadLeadFormSubmissionsItem';
import type { DiscordUserRolesUpdatedWebhookPayloadAccount } from './discordUserRolesUpdatedWebhookPayloadAccount';
import type { DiscordUserRolesUpdatedWebhookPayloadEmailListPersonItem } from './discordUserRolesUpdatedWebhookPayloadEmailListPersonItem';
import type { DiscordUserRolesUpdatedWebhookPayloadOAuthIntegrationStatus } from './discordUserRolesUpdatedWebhookPayloadOAuthIntegrationStatus';
import type { DiscordUserRolesUpdatedWebhookPayloadDiscordUser } from './discordUserRolesUpdatedWebhookPayloadDiscordUser';
import type { DiscordUserRolesUpdatedActivityData } from './discordUserRolesUpdatedActivityData';

export interface DiscordUserRolesUpdatedWebhookPayload {
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
  MailingAddress?: DiscordUserRolesUpdatedWebhookPayloadMailingAddress;
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
  PersonAccount?: DiscordUserRolesUpdatedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: DiscordUserRolesUpdatedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: DiscordUserRolesUpdatedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: DiscordUserRolesUpdatedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: DiscordUserRolesUpdatedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: DiscordUserRolesUpdatedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: DiscordUserRolesUpdatedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: DiscordUserRolesUpdatedActivityData;
}
