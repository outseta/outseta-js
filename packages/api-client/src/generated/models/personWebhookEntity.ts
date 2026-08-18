// @ts-nocheck
import type { PersonWebhookEntityMailingAddress } from './personWebhookEntityMailingAddress';
import type { PersonWebhookEntityPersonAccountItem } from './personWebhookEntityPersonAccountItem';
import type { PersonWebhookEntityDealPeopleItem } from './personWebhookEntityDealPeopleItem';
import type { PersonWebhookEntityLeadFormSubmissionsItem } from './personWebhookEntityLeadFormSubmissionsItem';
import type { PersonWebhookEntityAccount } from './personWebhookEntityAccount';
import type { PersonWebhookEntityEmailListPersonItem } from './personWebhookEntityEmailListPersonItem';
import type { PersonWebhookEntityOAuthIntegrationStatus } from './personWebhookEntityOAuthIntegrationStatus';
import type { PersonWebhookEntityDiscordUser } from './personWebhookEntityDiscordUser';

export interface PersonWebhookEntity {
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
  MailingAddress?: PersonWebhookEntityMailingAddress;
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
  PersonAccount?: PersonWebhookEntityPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonWebhookEntityDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonWebhookEntityLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonWebhookEntityAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonWebhookEntityEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonWebhookEntityOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonWebhookEntityDiscordUser;
  IsConnectedToDiscord?: boolean;
}
