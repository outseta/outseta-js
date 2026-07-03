// @ts-nocheck

export type AccountSubscriptionStartedWebhookPayloadStripeInvoicesItem = {
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
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  AmountDue?: number;
  AmountPaid?: number;
  AmountShipping?: number;
  AttemptCount?: number;
  Attempted?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  FinalizedAt?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  HostedInvoiceUrl?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  InvoicePdf?: string | null;
  /** @nullable */
  NextPaymentAttempt?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Number?: string | null;
  PeriodEnd?: string;
  PeriodStart?: string;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  SubTotal?: number;
  /** @nullable */
  SubTotalExcludingTax?: number | null;
  /**
   * @maxLength 255
   * @nullable
   */
  SubscriptionId?: string | null;
  /** @nullable */
  Tax?: number | null;
  Total?: number;
  /** @nullable */
  TotalExcludingTax?: number | null;
  IsRefunded?: boolean;
  CurrencyAmountCreditedPostPayment?: number;
  CurrencyAmountCreditedPrePayment?: number;
  CurrencyAmountDue?: number;
  CurrencyAmountPaid?: number;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyTotal?: number;
  CurrencyTotalExcludingTax?: number;
  CurrencySubTotal?: number;
  CurrencySubTotalExcludingTax?: number;
  CurrencyTax?: number;
  /** @nullable */
  DaysUntilDue?: number | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  PaymentStatus?: string | null;
  /** @nullable */
  StripePaymentMethodId?: string | null;
};
