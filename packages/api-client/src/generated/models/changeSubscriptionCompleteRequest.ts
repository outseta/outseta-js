// @ts-nocheck

/**
 * Request body for POST /api/v1/billing/subscriptions/changesubscription/complete:
the client secret of the Stripe intent the user confirmed.
 */
export interface ChangeSubscriptionCompleteRequest {
  /** @nullable */
  ClientSecret?: string | null;
}
