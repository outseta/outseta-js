// @ts-nocheck
import type { PersonEmailBounceWebhookPayloadMailingAddress } from './personEmailBounceWebhookPayloadMailingAddress';
import type { PersonEmailBounceWebhookPayloadPersonAccountItem } from './personEmailBounceWebhookPayloadPersonAccountItem';
import type { PersonEmailBounceWebhookPayloadDealPeopleItem } from './personEmailBounceWebhookPayloadDealPeopleItem';
import type { PersonEmailBounceWebhookPayloadLeadFormSubmissionsItem } from './personEmailBounceWebhookPayloadLeadFormSubmissionsItem';
import type { PersonEmailBounceWebhookPayloadAccount } from './personEmailBounceWebhookPayloadAccount';
import type { PersonEmailBounceWebhookPayloadEmailListPersonItem } from './personEmailBounceWebhookPayloadEmailListPersonItem';
import type { PersonEmailBounceWebhookPayloadOAuthIntegrationStatus } from './personEmailBounceWebhookPayloadOAuthIntegrationStatus';
import type { PersonEmailBounceWebhookPayloadDiscordUser } from './personEmailBounceWebhookPayloadDiscordUser';

export interface PersonEmailBounceWebhookPayload {
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
  MailingAddress?: PersonEmailBounceWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonEmailBounceWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonEmailBounceWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonEmailBounceWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonEmailBounceWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonEmailBounceWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonEmailBounceWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonEmailBounceWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
}
