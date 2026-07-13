// @ts-nocheck
import type { PersonDeletedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus } from './personDeletedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus';

export type PersonDeletedWebhookPayloadEmailListPersonItem = {
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
  /** `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed */
  EmailListSubscriberStatus?: PersonDeletedWebhookPayloadEmailListPersonItemEmailListSubscriberStatus;
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
