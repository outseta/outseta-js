// @ts-nocheck
import type { PersonListSubscribedWebhookPayloadMailingAddress } from './personListSubscribedWebhookPayloadMailingAddress';
import type { PersonListSubscribedWebhookPayloadPersonAccountItem } from './personListSubscribedWebhookPayloadPersonAccountItem';
import type { PersonListSubscribedWebhookPayloadDealPeopleItem } from './personListSubscribedWebhookPayloadDealPeopleItem';
import type { PersonListSubscribedWebhookPayloadLeadFormSubmissionsItem } from './personListSubscribedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonListSubscribedWebhookPayloadAccount } from './personListSubscribedWebhookPayloadAccount';
import type { PersonListSubscribedWebhookPayloadEmailListPersonItem } from './personListSubscribedWebhookPayloadEmailListPersonItem';
import type { PersonListSubscribedWebhookPayloadOAuthIntegrationStatus } from './personListSubscribedWebhookPayloadOAuthIntegrationStatus';
import type { PersonListSubscribedWebhookPayloadDiscordUser } from './personListSubscribedWebhookPayloadDiscordUser';
import type { PersonListSubscribedActivityData } from './personListSubscribedActivityData';

export interface PersonListSubscribedWebhookPayload {
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
  MailingAddress?: PersonListSubscribedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonListSubscribedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonListSubscribedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonListSubscribedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonListSubscribedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonListSubscribedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonListSubscribedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonListSubscribedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonListSubscribedActivityData;
}
