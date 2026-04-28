// @ts-nocheck
import type { SetupIntentBillingAddress } from './setupIntentBillingAddress';

export interface SetupIntent {
  /** @nullable */
  AddOnUid?: string | null;
  /** @nullable */
  BillingAddress?: SetupIntentBillingAddress;
  CheckoutAmount?: number;
  /** @nullable */
  ClientSecret?: string | null;
  /** @nullable */
  CompanyName?: string | null;
  /** @nullable */
  CustomerToken?: string | null;
  /** @nullable */
  Email?: string | null;
  /** @nullable */
  FirstName?: string | null;
  /** @nullable */
  InvoiceUid?: string | null;
  IsSetupIntent?: boolean;
  IsPaymentAuthentication?: boolean;
  /** @nullable */
  LastName?: string | null;
  OutstandingAmount?: number;
  /** @nullable */
  PaymentToken?: string | null;
  /** @nullable */
  PlanUid?: string | null;
  /** @nullable */
  ToltReferralId?: string | null;
}
