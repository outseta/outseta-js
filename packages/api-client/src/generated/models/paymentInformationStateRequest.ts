// @ts-nocheck

/**
 * Request body for POST /api/v1/billing/paymentinformation/state: the account
whose payment information is being updated, and the client secret of the Stripe
intent the user is about to confirm.
 */
export interface PaymentInformationStateRequest {
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  ClientSecret?: string | null;
}
