// @ts-nocheck
import type { AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm } from './accountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm';
import type { AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItemAddOn } from './accountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItemAddOn';

export type AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItem = {
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
  BillingRenewalTerm?: AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm;
  /** @nullable */
  AddOn?: AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItemSubscriptionAddOnsItemAddOn;
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
