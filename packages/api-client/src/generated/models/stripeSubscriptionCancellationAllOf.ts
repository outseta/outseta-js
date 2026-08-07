// @ts-nocheck
import type { StripeSubscriptionCancellationAllOfAccount } from './stripeSubscriptionCancellationAllOfAccount';
import type { StripeSubscriptionCancellationAllOfLastProduct } from './stripeSubscriptionCancellationAllOfLastProduct';

export type StripeSubscriptionCancellationAllOf = {
  /**
   * @maxLength 1024
   * @nullable
   */
  Comment?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Feedback?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Reason?: string | null;
  /** @nullable */
  Account?: StripeSubscriptionCancellationAllOfAccount;
  /** @nullable */
  CancelationReason?: string | null;
  /** @nullable */
  LastProduct?: StripeSubscriptionCancellationAllOfLastProduct;
  SubmittedDateTime?: string;
  SubscribingStartDate?: string;
};
