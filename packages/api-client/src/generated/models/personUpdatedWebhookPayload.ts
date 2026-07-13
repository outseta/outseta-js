// @ts-nocheck
import type { PersonUpdatedWebhookPayloadMailingAddress } from './personUpdatedWebhookPayloadMailingAddress';
import type { PersonUpdatedWebhookPayloadPersonAccountItem } from './personUpdatedWebhookPayloadPersonAccountItem';
import type { PersonUpdatedWebhookPayloadDealPeopleItem } from './personUpdatedWebhookPayloadDealPeopleItem';
import type { PersonUpdatedWebhookPayloadLeadFormSubmissionsItem } from './personUpdatedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonUpdatedWebhookPayloadAccount } from './personUpdatedWebhookPayloadAccount';
import type { PersonUpdatedWebhookPayloadEmailListPersonItem } from './personUpdatedWebhookPayloadEmailListPersonItem';
import type { PersonUpdatedWebhookPayloadOAuthIntegrationStatus } from './personUpdatedWebhookPayloadOAuthIntegrationStatus';
import type { PersonUpdatedWebhookPayloadDiscordUser } from './personUpdatedWebhookPayloadDiscordUser';
import type { PersonUpdatedActivityData } from './personUpdatedActivityData';

export interface PersonUpdatedWebhookPayload {
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
  MailingAddress?: PersonUpdatedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonUpdatedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonUpdatedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonUpdatedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonUpdatedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonUpdatedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonUpdatedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonUpdatedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonUpdatedActivityData;
}
