// @ts-nocheck
import type { PersonDeletedWebhookPayloadMailingAddress } from './personDeletedWebhookPayloadMailingAddress';
import type { PersonDeletedWebhookPayloadPersonAccountItem } from './personDeletedWebhookPayloadPersonAccountItem';
import type { PersonDeletedWebhookPayloadDealPeopleItem } from './personDeletedWebhookPayloadDealPeopleItem';
import type { PersonDeletedWebhookPayloadLeadFormSubmissionsItem } from './personDeletedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonDeletedWebhookPayloadAccount } from './personDeletedWebhookPayloadAccount';
import type { PersonDeletedWebhookPayloadEmailListPersonItem } from './personDeletedWebhookPayloadEmailListPersonItem';
import type { PersonDeletedWebhookPayloadOAuthIntegrationStatus } from './personDeletedWebhookPayloadOAuthIntegrationStatus';
import type { PersonDeletedWebhookPayloadDiscordUser } from './personDeletedWebhookPayloadDiscordUser';

export interface PersonDeletedWebhookPayload {
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
  MailingAddress?: PersonDeletedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonDeletedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonDeletedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonDeletedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonDeletedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonDeletedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonDeletedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonDeletedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
