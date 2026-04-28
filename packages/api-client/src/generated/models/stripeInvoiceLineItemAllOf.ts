// @ts-nocheck
import type { StripeInvoiceLineItemAllOfStripeInvoice } from './stripeInvoiceLineItemAllOfStripeInvoice';
import type { StripeDiscount } from './stripeDiscount';
import type { StripeInvoiceLineItemAllOfStripePrice } from './stripeInvoiceLineItemAllOfStripePrice';

export type StripeInvoiceLineItemAllOf = {
  /** @nullable */
  StripeInvoice?: StripeInvoiceLineItemAllOfStripeInvoice;
  Amount?: number;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  PeriodStart?: string;
  PeriodEnd?: string;
  /** @nullable */
  Quantity?: number | null;
  /** @nullable */
  StripeDiscounts?: StripeDiscount[] | null;
  /** @nullable */
  StripePrice?: StripeInvoiceLineItemAllOfStripePrice;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  CurrencyAmount?: number | null;
  /** @nullable */
  PriceId?: string | null;
  Proration?: boolean;
  [key: string]: unknown | null;
};
