// @ts-nocheck

/**
 * Returned when a login cannot complete with a password alone because the
user has two-factor authentication enabled. Carries the opaque challenge
token that must be echoed back to POST /api/v1/tokens/two-factor
(or the recovery / resend / switch-mechanism endpoints) along with enough
metadata for a client to render the verification step without a second
round-trip. The property names are snake_case to match the wire format of
the other token endpoints (see TokenPayload).
 */
export interface TwoFactorChallengePayload {
  /**
   * Present and true on the 202 response from POST /api/v1/tokens
when the user has at least one verified 2FA method. Absent on the
resend / switch-mechanism responses, which only ever follow an
already-issued login challenge.
   * @nullable
   */
  two_factor_required?: boolean | null;
  /**
   * Present and true instead of two_factor_required
when the tenant forces 2FA but the user has not yet enrolled any
method. In that case only challenge_token and
expires_in are populated and the client must route the
user through the mid-login enrollment endpoints
(/api/v1/tokens/two-factor/enroll/...) before a token can be issued.
   * @nullable
   */
  two_factor_enrollment_required?: boolean | null;
  /**
   * Short-lived signed JWT (audience outseta:2fa-challenge) that
identifies this challenge. Echo it back verbatim to complete the login.
   * @nullable
   */
  challenge_token?: string | null;
  /**
   * The mechanism this challenge was issued against: Email or
Totp (authenticator app). For Email a code has already
been sent to the user; for Totp the user reads the current
code from their authenticator app and nothing is sent.
   * @nullable
   */
  mechanism?: string | null;
  /**
   * A masked view of where an emailed code was sent (e.g. b***@outseta.com),
suitable for display. Empty when mechanism is Totp.
   * @nullable
   */
  masked_destination?: string | null;
  /** Seconds until the challenge expires (600). After this the
challenge_token can no longer be verified and the login must restart. */
  expires_in?: number;
  /**
   * Every verified mechanism enrolled for this user (excluding recovery
codes), e.g. ["Totp", "Email"]. A client can offer a
"use a different method" option for any value other than the current
mechanism via POST /api/v1/tokens/two-factor/switch-mechanism.
   * @nullable
   */
  available_mechanisms?: string[] | null;
  /**
   * true when the user has a batch of recovery codes on file, in
which case POST /api/v1/tokens/two-factor/recovery can be used
as a fallback if they cannot produce a primary code.
   * @nullable
   */
  recovery_codes_available?: boolean | null;
}
