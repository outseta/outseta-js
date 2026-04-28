// @ts-nocheck

/**
 * `1` - Website, `2` - Email, `3` - Facebook, `4` - Twitter, `5` - Chat
 */
export type SupportCaseSource = typeof SupportCaseSource[keyof typeof SupportCaseSource];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportCaseSource = {
  Website: 1,
  Email: 2,
  Facebook: 3,
  Twitter: 4,
  Chat: 5,
} as const;
