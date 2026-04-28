// @ts-nocheck

/**
 * `1` - Broadcast, `2` - Drip
 */
export type CampaignType = typeof CampaignType[keyof typeof CampaignType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CampaignType = {
  Broadcast: 1,
  Drip: 2,
} as const;
