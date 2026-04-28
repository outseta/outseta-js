// @ts-nocheck
import type { Person } from './person';
import type { LeadForm } from './leadForm';

export type LeadFormSubmissionAllOf = {
  Person: Person;
  LeadForm: LeadForm;
  /** @nullable */
  RefererURL?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
};
