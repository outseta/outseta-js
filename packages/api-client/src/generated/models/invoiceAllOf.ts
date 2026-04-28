// @ts-nocheck
import type { BillingInvoiceStatus } from './billingInvoiceStatus';
import type { InvoiceAllOfSubscription } from './invoiceAllOfSubscription';
import type { InvoiceLineItem } from './invoiceLineItem';

export type InvoiceAllOf = {
  InvoiceDate?: string;
  /** @nullable */
  PaymentReminderSentDate?: string | null;
  Number?: number;
  BillingInvoiceStatus?: BillingInvoiceStatus;
  /** @nullable */
  Subscription?: InvoiceAllOfSubscription;
  Amount?: number;
  AmountOutstanding?: number;
  /** @nullable */
  InvoiceLineItems?: InvoiceLineItem[] | null;
  IsUserGenerated?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeTaxCalculationId?: string | null;
  /**
   * @maxLength 10
   * @nullable
   */
  StripeTaxBehavior?: string | null;
  AmountCredit?: number;
  AmountDiscount?: number;
  AmountPaid?: number;
  AmountRefunded?: number;
  AmountSubtotal?: number;
  AmountTax?: number;
  AmountTaxRefunded?: number;
  IsTaxable?: boolean;
  HasPaymentGatewayTransactions?: boolean;
  /** @nullable */
  StripePaymentTransactionIds?: string | null;
  /** @nullable */
  StripeRefundTransactionIds?: string | null;
  /** @nullable */
  StripeTaxRefundTransactionIds?: string | null;
};
