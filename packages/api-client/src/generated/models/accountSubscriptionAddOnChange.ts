// @ts-nocheck
import type { AddOnChangeType } from './addOnChangeType';

export interface AccountSubscriptionAddOnChange {
  AddOnChangeType?: AddOnChangeType;
  /** @nullable */
  AddOnUid?: string | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  Quantity?: number | null;
}
