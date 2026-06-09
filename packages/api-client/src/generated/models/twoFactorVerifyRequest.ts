// @ts-nocheck

/**
 * Request body for POST /api/v1/tokens/two-factor: the challenge token
from the login response plus the user's one-time code. Property names are
snake_case to match the wire format of the token endpoints.
            
The action binds the body as a loose JObject at runtime; this type
exists so the API docs describe the body instead of an opaque data
parameter (see [OpenApiRequestBody] on the action).
 */
export interface TwoFactorVerifyRequest {
  /**
   * The challenge_token returned by POST /api/v1/tokens when
two-factor authentication is required. Echo it back verbatim.
   * @nullable
   */
  challenge_token?: string | null;
  /**
   * The user's one-time code: the emailed code for an Email challenge,
or the current code from their authenticator app for a Totp challenge.
   * @nullable
   */
  code?: string | null;
}
