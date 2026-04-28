// @ts-nocheck
import type { UsageAllOfInvoice } from './usageAllOfInvoice';
import type { SubscriptionAddOn } from './subscriptionAddOn';

export type UsageAllOf = {
  /** @minLength 1 */
  UsageDate: string;
  /** @nullable */
  Invoice?: UsageAllOfInvoice;
  SubscriptionAddOn: SubscriptionAddOn;
  Amount: number;
  /**
   * @maxLength 1024
   * @nullable
   */
  AdditionalUsageData?: string | null;
};
