// @ts-nocheck
import type { ContentGroup } from './contentGroup';
import type { StripePrice } from './stripePrice';
import type { AccountRegistrationMode } from './accountRegistrationMode';
import type { StripeProductCrossSell } from './stripeProductCrossSell';
import type { StripeProductAllOfStripeProductFamily } from './stripeProductAllOfStripeProductFamily';

export type StripeProductAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  DefaultPriceId?: string | null;
  /** @nullable */
  Description?: string | null;
  IsActive?: boolean;
  /**
   * @maxLength 36
   * @nullable
   */
  TaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitLabel?: string | null;
  /** @nullable */
  ContentGroups?: ContentGroup[] | null;
  /** @nullable */
  StripePrices?: StripePrice[] | null;
  AccountRegistrationMode?: AccountRegistrationMode;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  IsPerUser?: boolean;
  IsQuantityEditable?: boolean;
  /** @nullable */
  MaximumPeople?: number | null;
  /**
   * @maxLength 8
   * @nullable
   */
  MigratedAddOnUid?: string | null;
  /**
   * @maxLength 8
   * @nullable
   */
  MigratedPlanUid?: string | null;
  /** @nullable */
  MinimumQuantity?: number | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  PostPurchaseUrl?: string | null;
  RequirePaymentInformation?: boolean;
  /** @nullable */
  StripeProductCrossSells?: StripeProductCrossSell[] | null;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  CanDelete?: boolean;
  NumberOfPurchases?: number;
  NumberOfSubscriptions?: number;
  /** @nullable */
  StripeProductFamily?: StripeProductAllOfStripeProductFamily;
  [key: string]: unknown | null;
};
