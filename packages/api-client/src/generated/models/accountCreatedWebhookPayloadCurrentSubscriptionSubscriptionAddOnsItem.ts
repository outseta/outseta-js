// @ts-nocheck
import type { AccountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm } from './accountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm';
import type { AccountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItemAddOn } from './accountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItemAddOn';

export type AccountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItem = {
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
  BillingRenewalTerm?: AccountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm;
  /** @nullable */
  AddOn?: AccountCreatedWebhookPayloadCurrentSubscriptionSubscriptionAddOnsItemAddOn;
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
