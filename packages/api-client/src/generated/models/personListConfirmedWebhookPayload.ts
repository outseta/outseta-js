// @ts-nocheck
import type { PersonListConfirmedWebhookPayloadMailingAddress } from './personListConfirmedWebhookPayloadMailingAddress';
import type { PersonListConfirmedWebhookPayloadPersonAccountItem } from './personListConfirmedWebhookPayloadPersonAccountItem';
import type { PersonListConfirmedWebhookPayloadDealPeopleItem } from './personListConfirmedWebhookPayloadDealPeopleItem';
import type { PersonListConfirmedWebhookPayloadLeadFormSubmissionsItem } from './personListConfirmedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonListConfirmedWebhookPayloadAccount } from './personListConfirmedWebhookPayloadAccount';
import type { PersonListConfirmedWebhookPayloadEmailListPersonItem } from './personListConfirmedWebhookPayloadEmailListPersonItem';
import type { PersonListConfirmedWebhookPayloadOAuthIntegrationStatus } from './personListConfirmedWebhookPayloadOAuthIntegrationStatus';
import type { PersonListConfirmedWebhookPayloadDiscordUser } from './personListConfirmedWebhookPayloadDiscordUser';
import type { PersonListConfirmedActivityData } from './personListConfirmedActivityData';

export interface PersonListConfirmedWebhookPayload {
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
  MailingAddress?: PersonListConfirmedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonListConfirmedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonListConfirmedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonListConfirmedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonListConfirmedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonListConfirmedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonListConfirmedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonListConfirmedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonListConfirmedActivityData;
}
