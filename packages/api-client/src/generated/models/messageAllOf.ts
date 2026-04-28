// @ts-nocheck
import type { MessageAllOfTemplate } from './messageAllOfTemplate';
import type { EmailLink } from './emailLink';
import type { SpamStatus } from './spamStatus';

export type MessageAllOf = {
  /** @nullable */
  Template?: MessageAllOfTemplate;
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Subject?: string | null;
  /** @nullable */
  Body?: string | null;
  /** @nullable */
  Design?: string | null;
  CountSent?: number;
  CountDelivered?: number;
  CountBounce?: number;
  CountSpam?: number;
  CountOpen?: number;
  CountClick?: number;
  CountUnsubscribed?: number;
  CountTotalOpen?: number;
  CountTotalClick?: number;
  IgnoredSpamBounce?: number;
  IsBounceRatePaused?: boolean;
  /** @nullable */
  EmailLinks?: EmailLink[] | null;
  SpamAssassinScore?: number;
  SpamStatus?: SpamStatus;
};
