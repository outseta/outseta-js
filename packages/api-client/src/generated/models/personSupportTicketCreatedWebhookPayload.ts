// @ts-nocheck
import type { PersonSupportTicketCreatedWebhookPayloadMailingAddress } from './personSupportTicketCreatedWebhookPayloadMailingAddress';
import type { PersonSupportTicketCreatedWebhookPayloadPersonAccountItem } from './personSupportTicketCreatedWebhookPayloadPersonAccountItem';
import type { PersonSupportTicketCreatedWebhookPayloadDealPeopleItem } from './personSupportTicketCreatedWebhookPayloadDealPeopleItem';
import type { PersonSupportTicketCreatedWebhookPayloadLeadFormSubmissionsItem } from './personSupportTicketCreatedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonSupportTicketCreatedWebhookPayloadAccount } from './personSupportTicketCreatedWebhookPayloadAccount';
import type { PersonSupportTicketCreatedWebhookPayloadEmailListPersonItem } from './personSupportTicketCreatedWebhookPayloadEmailListPersonItem';
import type { PersonSupportTicketCreatedWebhookPayloadOAuthIntegrationStatus } from './personSupportTicketCreatedWebhookPayloadOAuthIntegrationStatus';
import type { PersonSupportTicketCreatedWebhookPayloadDiscordUser } from './personSupportTicketCreatedWebhookPayloadDiscordUser';
import type { PersonSupportTicketCreatedActivityData } from './personSupportTicketCreatedActivityData';

export interface PersonSupportTicketCreatedWebhookPayload {
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
  MailingAddress?: PersonSupportTicketCreatedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonSupportTicketCreatedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonSupportTicketCreatedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonSupportTicketCreatedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonSupportTicketCreatedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonSupportTicketCreatedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonSupportTicketCreatedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonSupportTicketCreatedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonSupportTicketCreatedActivityData;
}
