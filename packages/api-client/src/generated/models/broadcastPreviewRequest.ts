// @ts-nocheck
import type { BroadcastPreviewRequestBroadcastCampaign } from './broadcastPreviewRequestBroadcastCampaign';

/**
 * Request body for POST /api/v1/email/campaigns/broadcasts/preview.
 */
export interface BroadcastPreviewRequest {
  /** @nullable */
  BroadcastCampaign?: BroadcastPreviewRequestBroadcastCampaign;
  /**
   * The person to render the broadcast for. When empty, only the tokens are returned.
   * @nullable
   */
  PersonUid?: string | null;
}
