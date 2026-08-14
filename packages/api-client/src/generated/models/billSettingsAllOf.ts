// @ts-nocheck
import type { PaymentsMode } from './paymentsMode';
import type { BillingSystem } from './billingSystem';

export type BillSettingsAllOf = {
  DaysPastDueToSetAccountToCanceling?: number;
  IsInvoicePaymentEmailDisabled: boolean;
  PaymentsMode?: PaymentsMode;
  BillingSystem?: BillingSystem;
  RestrictSubscriptionActions?: boolean;
  StripeCheckoutRequireBillingAddress?: boolean;
  StripeCheckoutRequireConsentTermsOfService?: boolean;
  /** @nullable */
  StripeTaxCode?: string | null;
  StripeTaxEnabled?: boolean;
  /** @nullable */
  StripeTaxTaxIdTypes?: string | null;
};
