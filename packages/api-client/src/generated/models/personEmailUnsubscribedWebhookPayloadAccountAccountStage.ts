// @ts-nocheck

/**
 * `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created
 */
export type PersonEmailUnsubscribedWebhookPayloadAccountAccountStage = typeof PersonEmailUnsubscribedWebhookPayloadAccountAccountStage[keyof typeof PersonEmailUnsubscribedWebhookPayloadAccountAccountStage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonEmailUnsubscribedWebhookPayloadAccountAccountStage = {
  Trialing: 2,
  Subscribing: 3,
  Cancelling: 4,
  Expired: 5,
  TrialExpired: 6,
  PastDue: 7,
  CancellingTrial: 8,
  Paused: 9,
  Created: 10,
} as const;
