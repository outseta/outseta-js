// @ts-nocheck

export type AccountPersonRoleUpdatedWebhookPayloadStripeSubscriptionsItem = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created: string;
  /** @minLength 1 */
  Updated: string;
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  /** @nullable */
  CancelAt?: string | null;
  CancelAtPeriodEnd?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  EndedAt?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  PauseCollection_Behavior?: string | null;
  /** @nullable */
  PauseCollection_ResumesAt?: string | null;
  StartDate?: string;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  TrialEnd?: string | null;
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  BillingCycleAnchor?: string | null;
  /** @nullable */
  CollectionMethod?: string | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  DaysUntilDue?: number | null;
  /** @nullable */
  ScheduleId?: string | null;
  /** @nullable */
  StripeDiscountIds?: string[] | null;
  /** @nullable */
  StripePriceIds?: string | null;
  TrialPeriodDays?: number;
};
