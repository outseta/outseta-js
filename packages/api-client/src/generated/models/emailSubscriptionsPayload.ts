// @ts-nocheck
import type { EmailListPerson } from './emailListPerson';

export interface EmailSubscriptionsPayload {
  /** @nullable */
  ActiveSubscriptions?: EmailListPerson[] | null;
  /** @nullable */
  RecaptchaToken?: string | null;
}
