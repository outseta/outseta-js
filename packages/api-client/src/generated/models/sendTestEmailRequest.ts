// @ts-nocheck
import type { SendTestEmailRequestDripCampaign } from './sendTestEmailRequestDripCampaign';

export interface SendTestEmailRequest {
  /** @nullable */
  DripCampaign?: SendTestEmailRequestDripCampaign;
  /** @nullable */
  AdditionalRecipients?: string[] | null;
}
