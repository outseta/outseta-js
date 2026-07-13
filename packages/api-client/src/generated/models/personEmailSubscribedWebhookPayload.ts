// @ts-nocheck
import type { PersonEmailSubscribedWebhookPayloadMailingAddress } from './personEmailSubscribedWebhookPayloadMailingAddress';
import type { PersonEmailSubscribedWebhookPayloadPersonAccountItem } from './personEmailSubscribedWebhookPayloadPersonAccountItem';
import type { PersonEmailSubscribedWebhookPayloadDealPeopleItem } from './personEmailSubscribedWebhookPayloadDealPeopleItem';
import type { PersonEmailSubscribedWebhookPayloadLeadFormSubmissionsItem } from './personEmailSubscribedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonEmailSubscribedWebhookPayloadAccount } from './personEmailSubscribedWebhookPayloadAccount';
import type { PersonEmailSubscribedWebhookPayloadEmailListPersonItem } from './personEmailSubscribedWebhookPayloadEmailListPersonItem';
import type { PersonEmailSubscribedWebhookPayloadOAuthIntegrationStatus } from './personEmailSubscribedWebhookPayloadOAuthIntegrationStatus';
import type { PersonEmailSubscribedWebhookPayloadDiscordUser } from './personEmailSubscribedWebhookPayloadDiscordUser';

export interface PersonEmailSubscribedWebhookPayload {
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
  MailingAddress?: PersonEmailSubscribedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonEmailSubscribedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonEmailSubscribedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonEmailSubscribedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonEmailSubscribedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonEmailSubscribedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonEmailSubscribedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonEmailSubscribedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
