// @ts-nocheck
import type { EntityType } from './entityType';
import type { Plan } from './plan';
import type { AddOn } from './addOn';
import type { StripeProduct } from './stripeProduct';
import type { DirectoryFieldConfiguration } from './directoryFieldConfiguration';
import type { DirectoryFilterConfiguration } from './directoryFilterConfiguration';
import type { DirectoryActionConfiguration } from './directoryActionConfiguration';

export type DirectoryAllOf = {
  /**
   * @minLength 1
   * @maxLength 100
   */
  Name: string;
  EntityType?: EntityType;
  /**
   * @maxLength 50
   * @nullable
   */
  ItemLabelSingular?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  ItemLabelPlural?: string | null;
  RequiresSignIn?: boolean;
  ListsAll?: boolean;
  ShowSearch?: boolean;
  /** @nullable */
  ListedPlans?: Plan[] | null;
  /** @nullable */
  ListedAddOns?: AddOn[] | null;
  /** @nullable */
  ListedProducts?: StripeProduct[] | null;
  /** @nullable */
  CardFieldConfiguration?: DirectoryFieldConfiguration[] | null;
  /** @nullable */
  ProfileFieldConfiguration?: DirectoryFieldConfiguration[] | null;
  /** @nullable */
  FilterConfiguration?: DirectoryFilterConfiguration[] | null;
  /** @nullable */
  ActionConfiguration?: DirectoryActionConfiguration[] | null;
};
