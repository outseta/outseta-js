// @ts-nocheck
import type { Person } from './person';
import type { LeadForm } from './leadForm';
import type { LeadFormSubmissionField } from './leadFormSubmissionField';

export type LeadFormSubmissionAllOf = {
  Person: Person;
  LeadForm: LeadForm;
  /** @nullable */
  RefererURL?: string | null;
  HasPendingFields?: boolean;
  /** @nullable */
  Fields?: LeadFormSubmissionField[] | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
};
