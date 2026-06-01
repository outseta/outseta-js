// @ts-nocheck

/**
 * Returned from the mid-login enrollment confirm endpoints
(POST /api/v1/tokens/two-factor/enroll/{email|totp}/confirm) once the
user has proven control of the new mechanism. Completes a forced-enrollment
login: it both finalizes the JWT access token and surfaces the freshly
generated recovery codes. The property names are snake_case to match the
wire format of the other token endpoints (see TokenPayload).
 */
export interface TwoFactorEnrollmentConfirmationPayload {
  /** Always true on a success response; the enrollment is now active. */
  confirmed?: boolean;
  /**
   * The user's recovery codes, generated as part of first-time enrollment.
These are shown once and never returned again — prompt the user
to store them somewhere safe. Each code is single-use at
POST /api/v1/tokens/two-factor/recovery.
   * @nullable
   */
  recovery_codes?: string[] | null;
  /**
   * The JWT access token. Use it as Authorization: bearer {access_token}
for subsequent API calls — login is complete.
   * @nullable
   */
  access_token?: string | null;
  /**
   * Always Bearer.
   * @nullable
   */
  token_type?: string | null;
  /** Seconds until the access token expires. */
  expires_in?: number;
}
