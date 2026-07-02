// @ts-nocheck
import type { PersonLeadFormSubmittedWebhookPayloadMailingAddress } from './personLeadFormSubmittedWebhookPayloadMailingAddress';
import type { PersonLeadFormSubmittedWebhookPayloadPersonAccountItem } from './personLeadFormSubmittedWebhookPayloadPersonAccountItem';
import type { PersonLeadFormSubmittedWebhookPayloadDealPeopleItem } from './personLeadFormSubmittedWebhookPayloadDealPeopleItem';
import type { PersonLeadFormSubmittedWebhookPayloadLeadFormSubmissionsItem } from './personLeadFormSubmittedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonLeadFormSubmittedWebhookPayloadAccount } from './personLeadFormSubmittedWebhookPayloadAccount';
import type { PersonLeadFormSubmittedWebhookPayloadEmailListPersonItem } from './personLeadFormSubmittedWebhookPayloadEmailListPersonItem';
import type { PersonLeadFormSubmittedWebhookPayloadOAuthIntegrationStatus } from './personLeadFormSubmittedWebhookPayloadOAuthIntegrationStatus';
import type { PersonLeadFormSubmittedWebhookPayloadDiscordUser } from './personLeadFormSubmittedWebhookPayloadDiscordUser';
import type { PersonLeadFormSubmittedActivityData } from './personLeadFormSubmittedActivityData';

export interface PersonLeadFormSubmittedWebhookPayload {
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
  MailingAddress?: PersonLeadFormSubmittedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonLeadFormSubmittedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonLeadFormSubmittedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonLeadFormSubmittedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonLeadFormSubmittedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonLeadFormSubmittedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonLeadFormSubmittedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonLeadFormSubmittedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonLeadFormSubmittedActivityData;
}
