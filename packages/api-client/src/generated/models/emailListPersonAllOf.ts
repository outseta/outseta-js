// @ts-nocheck
import type { EmailListPersonAllOfEmailList } from './emailListPersonAllOfEmailList';
import type { EmailListPersonAllOfPerson } from './emailListPersonAllOfPerson';
import type { EmailListSubscriberStatus } from './emailListSubscriberStatus';

export type EmailListPersonAllOf = {
  /** @nullable */
  EmailList?: EmailListPersonAllOfEmailList;
  /** @nullable */
  Person?: EmailListPersonAllOfPerson;
  /**
   * @minimum 1
   * @maximum 4
   */
  EmailListSubscriberStatus?: EmailListSubscriberStatus;
  SubscribedDate?: string;
  /** @nullable */
  ConfirmedDate?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  ConfirmationNotes?: string | null;
  /** @nullable */
  UnsubscribedDate?: string | null;
  /** @nullable */
  CleanedDate?: string | null;
  /** @nullable */
  WelcomeEmailDeliverDateTime?: string | null;
  /** @nullable */
  WelcomeEmailOpenDateTime?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  UnsubscribeReason?: string | null;
  /** @nullable */
  UnsubscribeReasonOther?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
  SendWelcomeEmail?: boolean;
  /** @nullable */
  Source?: string | null;
};
