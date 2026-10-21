// @ts-nocheck
import type { LeadFormSubmissionFieldOutcome } from './leadFormSubmissionFieldOutcome';

export interface LeadFormSubmissionField {
  /** @nullable */
  SystemName?: string | null;
  /** @nullable */
  Value?: string | null;
  Outcome?: LeadFormSubmissionFieldOutcome;
  /** @nullable */
  PersonValue?: string | null;
  /** @nullable */
  ResolvedBy?: string | null;
  /** @nullable */
  ResolvedDate?: string | null;
  /** @nullable */
  CurrentValue?: string | null;
}
