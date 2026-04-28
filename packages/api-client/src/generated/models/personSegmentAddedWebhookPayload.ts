// @ts-nocheck
import type { PersonSegmentAddedWebhookPayloadMailingAddress } from './personSegmentAddedWebhookPayloadMailingAddress';
import type { PersonSegmentAddedWebhookPayloadPersonAccountItem } from './personSegmentAddedWebhookPayloadPersonAccountItem';
import type { PersonSegmentAddedWebhookPayloadDealPeopleItem } from './personSegmentAddedWebhookPayloadDealPeopleItem';
import type { PersonSegmentAddedWebhookPayloadLeadFormSubmissionsItem } from './personSegmentAddedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonSegmentAddedWebhookPayloadAccount } from './personSegmentAddedWebhookPayloadAccount';
import type { PersonSegmentAddedWebhookPayloadEmailListPersonItem } from './personSegmentAddedWebhookPayloadEmailListPersonItem';
import type { PersonSegmentAddedWebhookPayloadOAuthIntegrationStatus } from './personSegmentAddedWebhookPayloadOAuthIntegrationStatus';
import type { PersonSegmentAddedWebhookPayloadDiscordUser } from './personSegmentAddedWebhookPayloadDiscordUser';
import type { PersonSegmentAddedActivityData } from './personSegmentAddedActivityData';

export interface PersonSegmentAddedWebhookPayload {
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
  MailingAddress?: PersonSegmentAddedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonSegmentAddedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonSegmentAddedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonSegmentAddedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonSegmentAddedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonSegmentAddedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonSegmentAddedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonSegmentAddedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonSegmentAddedActivityData;
}
