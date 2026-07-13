// @ts-nocheck
import type { PersonEmailOpenedWebhookPayloadMailingAddress } from './personEmailOpenedWebhookPayloadMailingAddress';
import type { PersonEmailOpenedWebhookPayloadPersonAccountItem } from './personEmailOpenedWebhookPayloadPersonAccountItem';
import type { PersonEmailOpenedWebhookPayloadDealPeopleItem } from './personEmailOpenedWebhookPayloadDealPeopleItem';
import type { PersonEmailOpenedWebhookPayloadLeadFormSubmissionsItem } from './personEmailOpenedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonEmailOpenedWebhookPayloadAccount } from './personEmailOpenedWebhookPayloadAccount';
import type { PersonEmailOpenedWebhookPayloadEmailListPersonItem } from './personEmailOpenedWebhookPayloadEmailListPersonItem';
import type { PersonEmailOpenedWebhookPayloadOAuthIntegrationStatus } from './personEmailOpenedWebhookPayloadOAuthIntegrationStatus';
import type { PersonEmailOpenedWebhookPayloadDiscordUser } from './personEmailOpenedWebhookPayloadDiscordUser';

export interface PersonEmailOpenedWebhookPayload {
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
  MailingAddress?: PersonEmailOpenedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonEmailOpenedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonEmailOpenedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonEmailOpenedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonEmailOpenedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonEmailOpenedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonEmailOpenedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonEmailOpenedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
