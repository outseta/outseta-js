// @ts-nocheck
import type { PersonSupportTicketUpdatedWebhookPayloadMailingAddress } from './personSupportTicketUpdatedWebhookPayloadMailingAddress';
import type { PersonSupportTicketUpdatedWebhookPayloadPersonAccountItem } from './personSupportTicketUpdatedWebhookPayloadPersonAccountItem';
import type { PersonSupportTicketUpdatedWebhookPayloadDealPeopleItem } from './personSupportTicketUpdatedWebhookPayloadDealPeopleItem';
import type { PersonSupportTicketUpdatedWebhookPayloadLeadFormSubmissionsItem } from './personSupportTicketUpdatedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonSupportTicketUpdatedWebhookPayloadAccount } from './personSupportTicketUpdatedWebhookPayloadAccount';
import type { PersonSupportTicketUpdatedWebhookPayloadEmailListPersonItem } from './personSupportTicketUpdatedWebhookPayloadEmailListPersonItem';
import type { PersonSupportTicketUpdatedWebhookPayloadOAuthIntegrationStatus } from './personSupportTicketUpdatedWebhookPayloadOAuthIntegrationStatus';
import type { PersonSupportTicketUpdatedWebhookPayloadDiscordUser } from './personSupportTicketUpdatedWebhookPayloadDiscordUser';
import type { PersonSupportTicketUpdatedActivityData } from './personSupportTicketUpdatedActivityData';

export interface PersonSupportTicketUpdatedWebhookPayload {
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
  MailingAddress?: PersonSupportTicketUpdatedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonSupportTicketUpdatedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonSupportTicketUpdatedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonSupportTicketUpdatedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonSupportTicketUpdatedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonSupportTicketUpdatedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonSupportTicketUpdatedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonSupportTicketUpdatedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonSupportTicketUpdatedActivityData;
}
