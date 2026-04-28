// @ts-nocheck
import type { BillingTransactionType } from './billingTransactionType';
import type { TransactionAllOfAccount } from './transactionAllOfAccount';
import type { TransactionAllOfInvoice } from './transactionAllOfInvoice';

export type TransactionAllOf = {
  TransactionDate?: string;
  BillingTransactionType?: BillingTransactionType;
  /** @nullable */
  Account?: TransactionAllOfAccount;
  /** @nullable */
  Invoice?: TransactionAllOfInvoice;
  Amount?: number;
  IsCaptured?: boolean;
  IsElectronicTransaction?: boolean;
};
