// @ts-nocheck
import type { DripCampaignMessageAllOfDripCampaign } from './dripCampaignMessageAllOfDripCampaign';
import type { DripCampaignMessageAllOfMessage } from './dripCampaignMessageAllOfMessage';

export type DripCampaignMessageAllOf = {
  /** @nullable */
  DripCampaign?: DripCampaignMessageAllOfDripCampaign;
  /** @nullable */
  Message?: DripCampaignMessageAllOfMessage;
  DelayFromPriorDay?: number;
  DelayInHours?: number;
  Weight?: number;
};
