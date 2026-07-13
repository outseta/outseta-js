// @ts-nocheck
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanPlanFamily } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanPlanFamily';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanAccountRegistrationMode } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanAccountRegistrationMode';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanPlanAddOnsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanPlanAddOnsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanContentGroupsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanContentGroupsItem';

/**
 * @nullable
 */
export type AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlan = {
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
  PlanFamily?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanPlanFamily;
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanAccountRegistrationMode;
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
  PlanAddOns?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscriptionPlanContentGroupsItem[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
} | null;
