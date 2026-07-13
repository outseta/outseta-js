// @ts-nocheck
import type { PersonEmailUnsubscribedWebhookPayloadMailingAddress } from './personEmailUnsubscribedWebhookPayloadMailingAddress';
import type { PersonEmailUnsubscribedWebhookPayloadPersonAccountItem } from './personEmailUnsubscribedWebhookPayloadPersonAccountItem';
import type { PersonEmailUnsubscribedWebhookPayloadDealPeopleItem } from './personEmailUnsubscribedWebhookPayloadDealPeopleItem';
import type { PersonEmailUnsubscribedWebhookPayloadLeadFormSubmissionsItem } from './personEmailUnsubscribedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonEmailUnsubscribedWebhookPayloadAccount } from './personEmailUnsubscribedWebhookPayloadAccount';
import type { PersonEmailUnsubscribedWebhookPayloadEmailListPersonItem } from './personEmailUnsubscribedWebhookPayloadEmailListPersonItem';
import type { PersonEmailUnsubscribedWebhookPayloadOAuthIntegrationStatus } from './personEmailUnsubscribedWebhookPayloadOAuthIntegrationStatus';
import type { PersonEmailUnsubscribedWebhookPayloadDiscordUser } from './personEmailUnsubscribedWebhookPayloadDiscordUser';
import type { PersonEmailUnsubscribedActivityData } from './personEmailUnsubscribedActivityData';

export interface PersonEmailUnsubscribedWebhookPayload {
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
  MailingAddress?: PersonEmailUnsubscribedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonEmailUnsubscribedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonEmailUnsubscribedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonEmailUnsubscribedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonEmailUnsubscribedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonEmailUnsubscribedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonEmailUnsubscribedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonEmailUnsubscribedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonEmailUnsubscribedActivityData;
}
