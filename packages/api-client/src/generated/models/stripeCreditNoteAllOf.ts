// @ts-nocheck

export type StripeCreditNoteAllOf = {
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  CustomerId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  InvoiceId?: string | null;
  /** @nullable */
  OutOfBandAmount?: number | null;
  PostPaymentAmount?: number;
  PrePaymentAmount?: number;
  /**
   * @maxLength 30
   * @nullable
   */
  Reason?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  Total?: number;
  /**
   * @maxLength 30
   * @nullable
   */
  Type?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyTotal?: number;
  [key: string]: unknown | null;
};
