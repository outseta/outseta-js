// @ts-nocheck
import type { StripeSubscriptionSchedulePhaseItem } from './stripeSubscriptionSchedulePhaseItem';
import type { StripeSubscriptionSchedulePhaseAllOfStripeSubscriptionSchedule } from './stripeSubscriptionSchedulePhaseAllOfStripeSubscriptionSchedule';

export type StripeSubscriptionSchedulePhaseAllOf = {
  EndDate?: string;
  IsLivemode?: boolean;
  StartDate?: string;
  /** @nullable */
  StripeSubscriptionSchedulePhaseItems?: StripeSubscriptionSchedulePhaseItem[] | null;
  /** @nullable */
  StripeSubscriptionSchedule?: StripeSubscriptionSchedulePhaseAllOfStripeSubscriptionSchedule;
  /** @nullable */
  TrialEnd?: string | null;
  [key: string]: unknown | null;
};
