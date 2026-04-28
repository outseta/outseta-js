// @ts-nocheck

/**
 * `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created
 */
export type AccountStage = typeof AccountStage[keyof typeof AccountStage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountStage = {
  Trialing: 2,
  Subscribing: 3,
  Cancelling: 4,
  Expired: 5,
  /** Trial Expired */
  TrialExpired: 6,
  /** Past Due */
  PastDue: 7,
  /** Cancelling Trial */
  CancellingTrial: 8,
  Paused: 9,
  Created: 10,
} as const;
