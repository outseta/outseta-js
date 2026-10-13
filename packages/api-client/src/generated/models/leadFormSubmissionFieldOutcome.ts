// @ts-nocheck

/**
 * `Written` - Saved, `Unchanged` - Unchanged, `Skipped` - Not saved
 */
export type LeadFormSubmissionFieldOutcome = typeof LeadFormSubmissionFieldOutcome[keyof typeof LeadFormSubmissionFieldOutcome];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LeadFormSubmissionFieldOutcome = {
  /** Saved */
  Written: 'Written',
  /** Unchanged */
  Unchanged: 'Unchanged',
  /** Not saved */
  Skipped: 'Skipped',
} as const;
