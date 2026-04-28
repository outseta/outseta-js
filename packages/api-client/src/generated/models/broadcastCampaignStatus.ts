// @ts-nocheck

/**
 * `1` - Draft, `2` - Pending, `3` - Sent, `4` - Queuing, `5` - Queued, `6` - Sending, `7` - Error, `8` - WaitingToResume, `9` - QueuedEmails, `10` - Archived
 */
export type BroadcastCampaignStatus = typeof BroadcastCampaignStatus[keyof typeof BroadcastCampaignStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BroadcastCampaignStatus = {
  Draft: 1,
  Pending: 2,
  Sent: 3,
  Queuing: 4,
  Queued: 5,
  Sending: 6,
  Error: 7,
  WaitingToResume: 8,
  QueuedEmails: 9,
  Archived: 10,
} as const;
