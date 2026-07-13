// @ts-nocheck
import type { PersonTemporaryPasswordSetWebhookPayloadMailingAddress } from './personTemporaryPasswordSetWebhookPayloadMailingAddress';
import type { PersonTemporaryPasswordSetWebhookPayloadPersonAccountItem } from './personTemporaryPasswordSetWebhookPayloadPersonAccountItem';
import type { PersonTemporaryPasswordSetWebhookPayloadDealPeopleItem } from './personTemporaryPasswordSetWebhookPayloadDealPeopleItem';
import type { PersonTemporaryPasswordSetWebhookPayloadLeadFormSubmissionsItem } from './personTemporaryPasswordSetWebhookPayloadLeadFormSubmissionsItem';
import type { PersonTemporaryPasswordSetWebhookPayloadAccount } from './personTemporaryPasswordSetWebhookPayloadAccount';
import type { PersonTemporaryPasswordSetWebhookPayloadEmailListPersonItem } from './personTemporaryPasswordSetWebhookPayloadEmailListPersonItem';
import type { PersonTemporaryPasswordSetWebhookPayloadOAuthIntegrationStatus } from './personTemporaryPasswordSetWebhookPayloadOAuthIntegrationStatus';
import type { PersonTemporaryPasswordSetWebhookPayloadDiscordUser } from './personTemporaryPasswordSetWebhookPayloadDiscordUser';

export interface PersonTemporaryPasswordSetWebhookPayload {
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
  MailingAddress?: PersonTemporaryPasswordSetWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonTemporaryPasswordSetWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonTemporaryPasswordSetWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonTemporaryPasswordSetWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonTemporaryPasswordSetWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonTemporaryPasswordSetWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonTemporaryPasswordSetWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonTemporaryPasswordSetWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
