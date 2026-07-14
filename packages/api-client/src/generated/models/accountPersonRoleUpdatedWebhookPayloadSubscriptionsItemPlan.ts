// @ts-nocheck
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanPlanFamily } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanPlanFamily';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanAccountRegistrationMode } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanAccountRegistrationMode';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanPlanAddOnsItem } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanPlanAddOnsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanContentGroupsItem } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanContentGroupsItem';

/**
 * @nullable
 */
export type AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlan = {
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
  PlanFamily?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanPlanFamily;
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanAccountRegistrationMode;
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
  PlanAddOns?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItemPlanContentGroupsItem[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
} | null;
