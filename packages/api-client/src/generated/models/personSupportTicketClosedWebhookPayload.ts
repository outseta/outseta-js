// @ts-nocheck
import type { PersonSupportTicketClosedWebhookPayloadMailingAddress } from './personSupportTicketClosedWebhookPayloadMailingAddress';
import type { PersonSupportTicketClosedWebhookPayloadPersonAccountItem } from './personSupportTicketClosedWebhookPayloadPersonAccountItem';
import type { PersonSupportTicketClosedWebhookPayloadDealPeopleItem } from './personSupportTicketClosedWebhookPayloadDealPeopleItem';
import type { PersonSupportTicketClosedWebhookPayloadLeadFormSubmissionsItem } from './personSupportTicketClosedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonSupportTicketClosedWebhookPayloadAccount } from './personSupportTicketClosedWebhookPayloadAccount';
import type { PersonSupportTicketClosedWebhookPayloadEmailListPersonItem } from './personSupportTicketClosedWebhookPayloadEmailListPersonItem';
import type { PersonSupportTicketClosedWebhookPayloadOAuthIntegrationStatus } from './personSupportTicketClosedWebhookPayloadOAuthIntegrationStatus';
import type { PersonSupportTicketClosedWebhookPayloadDiscordUser } from './personSupportTicketClosedWebhookPayloadDiscordUser';
import type { PersonSupportTicketClosedActivityData } from './personSupportTicketClosedActivityData';

export interface PersonSupportTicketClosedWebhookPayload {
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
  MailingAddress?: PersonSupportTicketClosedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonSupportTicketClosedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonSupportTicketClosedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonSupportTicketClosedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonSupportTicketClosedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonSupportTicketClosedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonSupportTicketClosedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonSupportTicketClosedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonSupportTicketClosedActivityData;
}
