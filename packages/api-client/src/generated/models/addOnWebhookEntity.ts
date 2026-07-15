// @ts-nocheck
import type { AddOnWebhookEntityBillingAddOnType } from './addOnWebhookEntityBillingAddOnType';
import type { AddOnWebhookEntityPlanAddOnsItem } from './addOnWebhookEntityPlanAddOnsItem';
import type { AddOnWebhookEntityContentGroupsItem } from './addOnWebhookEntityContentGroupsItem';

export interface AddOnWebhookEntity {
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
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** `1` - Recurring, `2` - Usage, `3` - OneTime */
  BillingAddOnType?: AddOnWebhookEntityBillingAddOnType;
  IsQuantityEditable: boolean;
  MinimumQuantity?: number;
  MonthlyRate?: number;
  AnnualRate?: number;
  SetupFee?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  IsTaxable: boolean;
  IsBilledDuringTrial: boolean;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /** @nullable */
  PlanAddOns?: AddOnWebhookEntityPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AddOnWebhookEntityContentGroupsItem[] | null;
  IsPerUser?: boolean;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SubscriptionCount?: number;
  Quantity?: number;
}
