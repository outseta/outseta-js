// @ts-nocheck
import type { ContentGroupItem } from './contentGroupItem';
import type { Plan } from './plan';
import type { StripeProduct } from './stripeProduct';
import type { AddOn } from './addOn';

export type ContentGroupAllOf = {
  /**
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
  /** @nullable */
  ContentGroupItems?: ContentGroupItem[] | null;
  /** @nullable */
  AllowedPlans?: Plan[] | null;
  /** @nullable */
  AllowedProducts?: StripeProduct[] | null;
  /** @nullable */
  AllowedAddOns?: AddOn[] | null;
};
