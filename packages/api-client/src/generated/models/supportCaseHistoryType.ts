// @ts-nocheck

/**
 * `1` - PersonReply, `2` - Note, `3` - Closed, `4` - Reopened, `5` - Assigned, `6` - AgentReply, `7` - AutoReply, `8` - ContactChange
 */
export type SupportCaseHistoryType = typeof SupportCaseHistoryType[keyof typeof SupportCaseHistoryType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportCaseHistoryType = {
  PersonReply: 1,
  Note: 2,
  Closed: 3,
  Reopened: 4,
  Assigned: 5,
  AgentReply: 6,
  AutoReply: 7,
  ContactChange: 8,
} as const;
