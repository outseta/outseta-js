// @ts-nocheck
import type { ActivityType } from './activityType';

export type ActivityNotificationAllOf = {
  ActivityType?: ActivityType;
  /** @nullable */
  NotificationEmail?: string | null;
  /** @nullable */
  CallbackURL?: string | null;
  /**
   * @maxLength 512
   * @nullable
   */
  SlackWebhookURL?: string | null;
  CallbackErrorCount?: number;
  /**
   * @maxLength 512
   * @nullable
   */
  CallbackErrorDescription?: string | null;
};
