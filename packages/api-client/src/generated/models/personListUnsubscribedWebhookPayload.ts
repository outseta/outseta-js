// @ts-nocheck
import type { PersonListUnsubscribedWebhookPayloadMailingAddress } from './personListUnsubscribedWebhookPayloadMailingAddress';
import type { PersonListUnsubscribedWebhookPayloadPersonAccountItem } from './personListUnsubscribedWebhookPayloadPersonAccountItem';
import type { PersonListUnsubscribedWebhookPayloadDealPeopleItem } from './personListUnsubscribedWebhookPayloadDealPeopleItem';
import type { PersonListUnsubscribedWebhookPayloadLeadFormSubmissionsItem } from './personListUnsubscribedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonListUnsubscribedWebhookPayloadAccount } from './personListUnsubscribedWebhookPayloadAccount';
import type { PersonListUnsubscribedWebhookPayloadEmailListPersonItem } from './personListUnsubscribedWebhookPayloadEmailListPersonItem';
import type { PersonListUnsubscribedWebhookPayloadOAuthIntegrationStatus } from './personListUnsubscribedWebhookPayloadOAuthIntegrationStatus';
import type { PersonListUnsubscribedWebhookPayloadDiscordUser } from './personListUnsubscribedWebhookPayloadDiscordUser';
import type { PersonListUnsubscribedActivityData } from './personListUnsubscribedActivityData';

export interface PersonListUnsubscribedWebhookPayload {
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
  MailingAddress?: PersonListUnsubscribedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonListUnsubscribedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonListUnsubscribedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonListUnsubscribedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonListUnsubscribedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonListUnsubscribedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonListUnsubscribedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonListUnsubscribedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonListUnsubscribedActivityData;
}
