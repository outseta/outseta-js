// @ts-nocheck

/**
 * Returned from POST /api/v1/tokens/two-factor/enroll/totp/begin when a
user forced into 2FA chooses to enroll an authenticator app. Carries the
shared secret in the three forms a client may need to present it, plus the
challenge token the user's first generated code is confirmed against. The
property names are snake_case to match the wire format of the other token
endpoints (see TokenPayload).
 */
export interface TwoFactorTotpEnrollmentPayload {
  /**
   * Short-lived signed JWT identifying the enrollment-test challenge.
Echo it back to POST /api/v1/tokens/two-factor/enroll/totp/confirm
along with the first code from the authenticator app.
   * @nullable
   */
  challenge_token?: string | null;
  /**
   * The Base32-encoded shared secret. Offer this for manual entry by users
who cannot scan the QR code.
   * @nullable
   */
  secret?: string | null;
  /**
   * The full otpauth://totp/... URI encoding the secret, issuer and
parameters. Most authenticator apps add an account directly from this.
   * @nullable
   */
  otpauth_uri?: string | null;
  /**
   * A QR code rendering of otpauth_uri as a PNG, Base64
encoded — render it as an <img> for the user to scan.
   * @nullable
   */
  qr_code_png_base64?: string | null;
  /** Seconds until the enrollment-test challenge expires (600). */
  expires_in?: number;
}
