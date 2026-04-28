// @ts-nocheck
import type { PersonSegmentRemovedWebhookPayloadMailingAddress } from './personSegmentRemovedWebhookPayloadMailingAddress';
import type { PersonSegmentRemovedWebhookPayloadPersonAccountItem } from './personSegmentRemovedWebhookPayloadPersonAccountItem';
import type { PersonSegmentRemovedWebhookPayloadDealPeopleItem } from './personSegmentRemovedWebhookPayloadDealPeopleItem';
import type { PersonSegmentRemovedWebhookPayloadLeadFormSubmissionsItem } from './personSegmentRemovedWebhookPayloadLeadFormSubmissionsItem';
import type { PersonSegmentRemovedWebhookPayloadAccount } from './personSegmentRemovedWebhookPayloadAccount';
import type { PersonSegmentRemovedWebhookPayloadEmailListPersonItem } from './personSegmentRemovedWebhookPayloadEmailListPersonItem';
import type { PersonSegmentRemovedWebhookPayloadOAuthIntegrationStatus } from './personSegmentRemovedWebhookPayloadOAuthIntegrationStatus';
import type { PersonSegmentRemovedWebhookPayloadDiscordUser } from './personSegmentRemovedWebhookPayloadDiscordUser';
import type { PersonSegmentRemovedActivityData } from './personSegmentRemovedActivityData';

export interface PersonSegmentRemovedWebhookPayload {
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
  MailingAddress?: PersonSegmentRemovedWebhookPayloadMailingAddress;
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
  PersonAccount?: PersonSegmentRemovedWebhookPayloadPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonSegmentRemovedWebhookPayloadDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonSegmentRemovedWebhookPayloadLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonSegmentRemovedWebhookPayloadAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonSegmentRemovedWebhookPayloadEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonSegmentRemovedWebhookPayloadOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonSegmentRemovedWebhookPayloadDiscordUser;
  IsConnectedToDiscord?: boolean;
  ActivityEventData?: PersonSegmentRemovedActivityData;
}
