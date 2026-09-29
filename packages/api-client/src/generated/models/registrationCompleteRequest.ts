// @ts-nocheck

/**
 * Request body for POST /api/v1/crm/registrations/complete: the client secret
of the Stripe intent, from the setup_intent_client_secret or
payment_intent_client_secret querystring value Stripe returns the user with.
 */
export interface RegistrationCompleteRequest {
  /** @nullable */
  ClientSecret?: string | null;
}
