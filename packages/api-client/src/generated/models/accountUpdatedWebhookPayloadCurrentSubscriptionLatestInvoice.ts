// @ts-nocheck
import type { AccountUpdatedWebhookPayloadCurrentSubscriptionLatestInvoiceBillingInvoiceStatus } from './accountUpdatedWebhookPayloadCurrentSubscriptionLatestInvoiceBillingInvoiceStatus';

/**
 * @nullable
 */
export type AccountUpdatedWebhookPayloadCurrentSubscriptionLatestInvoice = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  InvoiceDate?: string;
  /** @nullable */
  PaymentReminderSentDate?: string | null;
  Number?: number;
  /** `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing */
  BillingInvoiceStatus?: AccountUpdatedWebhookPayloadCurrentSubscriptionLatestInvoiceBillingInvoiceStatus;
  Amount?: number;
  AmountOutstanding?: number;
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
} | null;
