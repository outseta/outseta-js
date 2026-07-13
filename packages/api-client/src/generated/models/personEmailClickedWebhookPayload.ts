// @ts-nocheck
import type { PersonEmailClickedWebhookPayloadMailingAddress } from './personEmailClickedWebhookPayloadMailingAddress';
import type { PersonEmailClickedWebhookPayloadPersonAccountItem } from './personEmailClickedWebhookPayloadPersonAccountItem';
import type { PersonEmailClickedWebhookPayloadDealPeopleItem } from './personEmailClickedWebhookPayloadDealPeopleItem';
import type { PersonEmailClickedWebhookPayloadLeadFormSubmissionsItem } from './personEmailClickedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonEmailClickedWebhookPayloadAccount } from './personEmailClickedWebhookPayloadAccount';
import type { PersonEmailClickedWebhookPayloadEmailListPersonItem } from './personEmailClickedWebhookPayloadEmailListPersonItem';
import type { PersonEmailClickedWebhookPayloadOAuthIntegrationStatus } from './personEmailClickedWebhookPayloadOAuthIntegrationStatus';
import type { PersonEmailClickedWebhookPayloadDiscordUser } from './personEmailClickedWebhookPayloadDiscordUser';

export interface PersonEmailClickedWebhookPayload {
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
  MailingAddress?: PersonEmailClickedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonEmailClickedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonEmailClickedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonEmailClickedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonEmailClickedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonEmailClickedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonEmailClickedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonEmailClickedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
