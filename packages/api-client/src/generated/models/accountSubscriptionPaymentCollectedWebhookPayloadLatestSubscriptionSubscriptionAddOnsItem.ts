// @ts-nocheck
import type { AccountSubscriptionPaymentCollectedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm } from './accountSubscriptionPaymentCollectedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItemAddOn } from './accountSubscriptionPaymentCollectedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItemAddOn';

export type AccountSubscriptionPaymentCollectedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItem = {
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
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountSubscriptionPaymentCollectedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm;
  /** @nullable */
  AddOn?: AccountSubscriptionPaymentCollectedWebhookPayloadLatestSubscriptionSubscriptionAddOnsItemAddOn;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  /** @nullable */
  Rate?: number | null;
};
