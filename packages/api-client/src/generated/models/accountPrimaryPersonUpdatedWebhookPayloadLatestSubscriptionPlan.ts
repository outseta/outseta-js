// @ts-nocheck
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanPlanFamily } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanPlanFamily';
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanAccountRegistrationMode } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanAccountRegistrationMode';
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanPlanAddOnsItem } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanPlanAddOnsItem';
import type { AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanContentGroupsItem } from './accountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanContentGroupsItem';

/**
 * @nullable
 */
export type AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlan = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  PlanFamily?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanPlanFamily;
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanAccountRegistrationMode;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  /** @nullable */
  MaximumPeople?: number | null;
  MonthlyRate?: number;
  AnnualRate?: number;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SetupFee?: number;
  SkipSetupFeeOnPlanChange?: boolean;
  IsTaxable?: boolean;
  IsActive?: boolean;
  IsPerUser?: boolean;
  RequirePaymentInformation?: boolean;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  PlanAddOns?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AccountPrimaryPersonUpdatedWebhookPayloadLatestSubscriptionPlanContentGroupsItem[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
} | null;
