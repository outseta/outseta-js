// @ts-nocheck
import type { StripeProduct } from './stripeProduct';

export type StripeProductFamilyAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
  /** @nullable */
  BillingCycleAnchorDayOfMonth?: number | null;
  /** @nullable */
  BillingCycleAnchorHour?: number | null;
  /** @nullable */
  BillingCycleAnchorMonth?: number | null;
  /** @nullable */
  StripeProducts?: StripeProduct[] | null;
  [key: string]: unknown | null;
};
