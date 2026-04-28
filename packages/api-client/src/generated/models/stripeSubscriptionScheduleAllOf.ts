// @ts-nocheck
import type { StripeSubscriptionSchedulePhase } from './stripeSubscriptionSchedulePhase';
import type { StripeSubscriptionScheduleAllOfStripeSubscription } from './stripeSubscriptionScheduleAllOfStripeSubscription';

export type StripeSubscriptionScheduleAllOf = {
  /** @nullable */
  CompletedAt?: string | null;
  /** @nullable */
  CurrentPhase_EndDate?: string | null;
  /** @nullable */
  CurrentPhase_StartDate?: string | null;
  /** @nullable */
  EndBehavior?: string | null;
  /** @nullable */
  StripeSubscriptionSchedulePhases?: StripeSubscriptionSchedulePhase[] | null;
  /** @nullable */
  ReleasedAt?: string | null;
  /** @nullable */
  Status?: string | null;
  /** @nullable */
  StripeSubscription?: StripeSubscriptionScheduleAllOfStripeSubscription;
  /** @nullable */
  SubscriptionId?: string | null;
  /** @nullable */
  ReleasedSubscriptionId?: string | null;
  [key: string]: unknown | null;
};
