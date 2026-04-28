// @ts-nocheck
import type { StripePaymentMethodAllOfAccount } from './stripePaymentMethodAllOfAccount';

export type StripePaymentMethodAllOf = {
  /** @nullable */
  Account?: StripePaymentMethodAllOfAccount;
  /** @nullable */
  Card_Brand?: string | null;
  /** @nullable */
  Card_ExpMonth?: number | null;
  /** @nullable */
  Card_ExpYear?: number | null;
  /** @nullable */
  Card_Wallet_Type?: string | null;
  /** @nullable */
  BankName?: string | null;
  /** @nullable */
  Last4?: string | null;
  /** @nullable */
  Type?: string | null;
  /** @nullable */
  Label?: string | null;
  [key: string]: unknown | null;
};
