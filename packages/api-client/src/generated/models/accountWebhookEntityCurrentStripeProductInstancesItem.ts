// @ts-nocheck
import type { AccountWebhookEntityCurrentStripeProductInstancesItemAccountRegistrationMode } from './accountWebhookEntityCurrentStripeProductInstancesItemAccountRegistrationMode';

export type AccountWebhookEntityCurrentStripeProductInstancesItem = {
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
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: AccountWebhookEntityCurrentStripeProductInstancesItemAccountRegistrationMode;
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
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  CanDelete?: boolean;
  NumberOfPurchases?: number;
  NumberOfSubscriptions?: number;
  /** @nullable */
  Quantity?: number | null;
};
