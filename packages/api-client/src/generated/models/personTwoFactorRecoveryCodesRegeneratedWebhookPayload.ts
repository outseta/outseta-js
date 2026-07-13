// @ts-nocheck
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadMailingAddress } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadMailingAddress';
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadPersonAccountItem } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadPersonAccountItem';
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadDealPeopleItem } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadDealPeopleItem';
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadLeadFormSubmissionsItem } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadAccount } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadAccount';
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadEmailListPersonItem } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadEmailListPersonItem';
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadOAuthIntegrationStatus } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadOAuthIntegrationStatus';
import type { PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadDiscordUser } from './personTwoFactorRecoveryCodesRegeneratedWebhookPayloadDiscordUser';

export interface PersonTwoFactorRecoveryCodesRegeneratedWebhookPayload {
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
  MailingAddress?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonTwoFactorRecoveryCodesRegeneratedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
