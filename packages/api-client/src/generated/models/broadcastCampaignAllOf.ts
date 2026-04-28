// @ts-nocheck
import type { BroadcastCampaignAllOfCampaign } from './broadcastCampaignAllOfCampaign';
import type { BroadcastCampaignAllOfMessage } from './broadcastCampaignAllOfMessage';
import type { BroadcastCampaignStatus } from './broadcastCampaignStatus';
import type { Tag } from './tag';

export type BroadcastCampaignAllOf = {
  /** @nullable */
  SendDateTime?: string | null;
  /** @nullable */
  NextRunDateTime?: string | null;
  /** @nullable */
  Campaign?: BroadcastCampaignAllOfCampaign;
  /** @nullable */
  Message?: BroadcastCampaignAllOfMessage;
  /** @nullable */
  RecipientData?: string | null;
  /** @nullable */
  EmailListUids?: string[] | null;
  /** @nullable */
  SegmentUids?: string[] | null;
  Status?: BroadcastCampaignStatus;
  /**
   * @maxLength 500
   * @nullable
   */
  ErrorMessage?: string | null;
  /** @nullable */
  Tags?: Tag[] | null;
};
