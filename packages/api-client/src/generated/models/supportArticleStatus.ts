// @ts-nocheck

/**
 * `1` - Draft, `2` - WaitingReview, `3` - Published
 */
export type SupportArticleStatus = typeof SupportArticleStatus[keyof typeof SupportArticleStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportArticleStatus = {
  Draft: 1,
  WaitingReview: 2,
  Published: 3,
} as const;
