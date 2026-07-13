// @ts-nocheck
import type { PersonEmailSpamWebhookPayloadMailingAddress } from './personEmailSpamWebhookPayloadMailingAddress';
import type { PersonEmailSpamWebhookPayloadPersonAccountItem } from './personEmailSpamWebhookPayloadPersonAccountItem';
import type { PersonEmailSpamWebhookPayloadDealPeopleItem } from './personEmailSpamWebhookPayloadDealPeopleItem';
import type { PersonEmailSpamWebhookPayloadLeadFormSubmissionsItem } from './personEmailSpamWebhookPayloadLeadFormSubmissionsItem';
import type { PersonEmailSpamWebhookPayloadAccount } from './personEmailSpamWebhookPayloadAccount';
import type { PersonEmailSpamWebhookPayloadEmailListPersonItem } from './personEmailSpamWebhookPayloadEmailListPersonItem';
import type { PersonEmailSpamWebhookPayloadOAuthIntegrationStatus } from './personEmailSpamWebhookPayloadOAuthIntegrationStatus';
import type { PersonEmailSpamWebhookPayloadDiscordUser } from './personEmailSpamWebhookPayloadDiscordUser';

export interface PersonEmailSpamWebhookPayload {
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
  MailingAddress?: PersonEmailSpamWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonEmailSpamWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonEmailSpamWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonEmailSpamWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonEmailSpamWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonEmailSpamWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonEmailSpamWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonEmailSpamWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
