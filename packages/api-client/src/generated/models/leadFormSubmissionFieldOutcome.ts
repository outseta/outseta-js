// @ts-nocheck

/**
 * `Written` - Saved, `Unchanged` - Unchanged, `Skipped` - Not saved, `Applied` - Applied, `Dismissed` - Dismissed
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
  /** Applied */
  Applied: 'Applied',
  /** Dismissed */
  Dismissed: 'Dismissed',
} as const;
