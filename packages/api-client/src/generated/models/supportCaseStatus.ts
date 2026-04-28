// @ts-nocheck

/**
 * `1` - Open, `2` - Closed
 */
export type SupportCaseStatus = typeof SupportCaseStatus[keyof typeof SupportCaseStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportCaseStatus = {
  Open: 1,
  Closed: 2,
} as const;
