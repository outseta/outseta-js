// @ts-nocheck
import type { InvoiceLineItemAllOfInvoice } from './invoiceLineItemAllOfInvoice';
import type { InvoiceLineItemAllOfLineItemType } from './invoiceLineItemAllOfLineItemType';

export type InvoiceLineItemAllOf = {
  /** @nullable */
  StartDate?: string | null;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  Description?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  Quantity?: number | null;
  Rate?: number;
  Amount?: number;
  Tax?: number;
  /** @nullable */
  Invoice?: InvoiceLineItemAllOfInvoice;
  /** @nullable */
  LineItemType?: InvoiceLineItemAllOfLineItemType;
  /** @nullable */
  EntityId?: number | null;
  /**
   * @maxLength 10
   * @nullable
   */
  StripeTaxReference?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeTaxLineItemId?: string | null;
  /** @nullable */
  EntityUid?: string | null;
};
