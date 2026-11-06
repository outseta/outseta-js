// @ts-nocheck

/**
 * Request body for POST /api/v1/billing/paymentinformation/complete: the client
secret of the Stripe intent the user confirmed.
 */
export interface PaymentInformationCompleteRequest {
  /** @nullable */
  ClientSecret?: string | null;
}
