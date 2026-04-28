// @ts-nocheck
import type { ActivityType } from './activityType';

export interface SlackChannelSetting {
  /** @nullable */
  Channel?: string | null;
  /** @nullable */
  ChannelId?: string | null;
  /** @nullable */
  Webhook?: string | null;
  /** @nullable */
  Notifications?: ActivityType[] | null;
}
