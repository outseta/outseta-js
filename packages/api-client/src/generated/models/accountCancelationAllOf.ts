// @ts-nocheck
import type { CancelationStatus } from './cancelationStatus';
import type { AccountCancelationAllOfAccount } from './accountCancelationAllOfAccount';
import type { AccountCancelationAllOfLastPlan } from './accountCancelationAllOfLastPlan';

export type AccountCancelationAllOf = {
  SubmittedDateTime?: string;
  /** @nullable */
  CancelationReason?: string | null;
  /** @nullable */
  Comment?: string | null;
  CancelationStatus?: CancelationStatus;
  /** @nullable */
  Account?: AccountCancelationAllOfAccount;
  /** @nullable */
  LastPlan?: AccountCancelationAllOfLastPlan;
  /** @nullable */
  SubscribingStartDate?: string | null;
};
