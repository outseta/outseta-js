// @ts-nocheck
import type {
  AuthGetTokenParams,
  AuthResendTwoFactorParams,
  AuthSwitchTwoFactorMechanismParams,
  AuthVerifyTwoFactorRecoveryParams,
  PublicEmailListAddSubscriptionBody,
  TokenPayload,
  TokenTwoFactorEnrollmentBeginEmailParams,
  TokenTwoFactorEnrollmentBeginTotpParams,
  TokenTwoFactorEnrollmentConfirmEmailParams,
  TokenTwoFactorEnrollmentConfirmTotpParams,
  TwoFactorChallengePayload,
  TwoFactorEnrollmentConfirmationPayload,
  TwoFactorTotpEnrollmentPayload,
  TwoFactorVerifyRequest
} from '.././models';

import { customFetch } from '../../client';

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
T,
>() => T extends Y ? 1 : 2
? A
: B;

type WritableKeys<T> = {
[P in keyof T]-?: IfEquals<
  { [Q in P]: T[P] },
  { -readonly [Q in P]: T[P] },
  P
>;
}[keyof T];

type UnionToIntersection<U> =
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;

type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>] ? {
  [P in keyof Writable<T>]: T[P] extends object
    ? NonReadonly<NonNullable<T[P]>>
    : T[P];
} : DistributeReadOnlyOverUnions<T>;


/**
 * This endpoint does not require authentication. The email list must be public, and the
subscription is subject to bot protection and the list's double opt-in settings.
 * @summary Publicly subscribe a person to an email list.
 */
export type publicEmailListAddSubscriptionResponse200 = {
  data: Blob
  status: 200
}

export type publicEmailListAddSubscriptionResponse400 = {
  data: void
  status: 400
}

export type publicEmailListAddSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type publicEmailListAddSubscriptionResponseSuccess = (publicEmailListAddSubscriptionResponse200) & {
  headers: Headers;
};
export type publicEmailListAddSubscriptionResponseError = (publicEmailListAddSubscriptionResponse400 | publicEmailListAddSubscriptionResponse404) & {
  headers: Headers;
};

export type publicEmailListAddSubscriptionResponse = (publicEmailListAddSubscriptionResponseSuccess | publicEmailListAddSubscriptionResponseError)

export const getPublicEmailListAddSubscriptionUrl = (emailListUid: string | null,) => {


  

  return `/api/v1/public/email/lists/${emailListUid}/subscriptions`
}

export const publicEmailListAddSubscription = async (emailListUid: string | null,
    publicEmailListAddSubscriptionBody: NonReadonly<PublicEmailListAddSubscriptionBody>, options?: RequestInit): Promise<publicEmailListAddSubscriptionResponse> => {
  
  return customFetch<publicEmailListAddSubscriptionResponse>(getPublicEmailListAddSubscriptionUrl(emailListUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      publicEmailListAddSubscriptionBody,)
  }
);}


/**
 * Authenticates a user and returns a JWT access token (plus a refresh token).
            
Post a JSON body with the user's credentials:
            
    { "username": "user@example.com", "password": "their-password" }
            
On success the response is `200` with an access token and refresh token:
            
    { "access_token": "eyJ...", "refresh_token": "...", "token_type": "Bearer", "expires_in": 31536000 }
            
**Two-factor authentication.** If the user has a verified 2FA method,
the password alone is not enough. After verifying the password this
endpoint instead returns `202 Accepted` with a challenge that must be
satisfied via `POST /api/v1/tokens/two-factor`:
            
    {
      "two_factor_required": true,
      "challenge_token": "eyJ...",
      "mechanism": "Totp",
      "masked_destination": "",
      "expires_in": 600,
      "available_mechanisms": ["Totp", "Email"],
      "recovery_codes_available": true
    }
            
`mechanism` is the method this challenge targets. When it is `Email`,
a one-time code has already been emailed to the user (see
`masked_destination`); when it is `Totp`, the user reads the current
code from their authenticator app and nothing is sent.
`available_mechanisms` lists every method the user has enrolled so a
client can offer a switch via `POST /api/v1/tokens/two-factor/switch-mechanism`.
            
If the tenant forces 2FA but the user has not enrolled yet, the `202`
body instead contains `"two_factor_enrollment_required": true` with a
`challenge_token` to drive the mid-login enrollment endpoints.
            
Invalid credentials return `400` with a body of `invalid_grant`.
 * @summary Log a user in.
 */
export type authGetTokenResponse200 = {
  data: TokenPayload
  status: 200
}

export type authGetTokenResponse202 = {
  data: TwoFactorChallengePayload
  status: 202
}

export type authGetTokenResponse400 = {
  data: string
  status: 400
}
    
export type authGetTokenResponseSuccess = (authGetTokenResponse200 | authGetTokenResponse202) & {
  headers: Headers;
};
export type authGetTokenResponseError = (authGetTokenResponse400) & {
  headers: Headers;
};

export type authGetTokenResponse = (authGetTokenResponseSuccess | authGetTokenResponseError)

export const getAuthGetTokenUrl = (params: AuthGetTokenParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens?${stringifiedParams}` : `/api/v1/tokens`
}

export const authGetToken = async (params: AuthGetTokenParams, options?: RequestInit): Promise<authGetTokenResponse> => {
  
  return customFetch<authGetTokenResponse>(getAuthGetTokenUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Call this after `POST /api/v1/tokens` returns `two_factor_required`.
Post the challenge token from that response together with the user's
one-time code (the emailed code, or the current code from their
authenticator app):
            
    { "challenge_token": "eyJ...", "code": "123456" }
            
On success the response is `200` with the final access token, in the
same shape as `POST /api/v1/tokens`:
            
    { "access_token": "eyJ...", "refresh_token": "...", "token_type": "Bearer", "expires_in": 31536000 }
            
An incorrect code returns `400` (`invalid_grant`). A code has at most
five attempts before the challenge locks. An expired challenge returns
`410` (`challenge_expired`) — restart at `POST /api/v1/tokens`. The
endpoint is rate limited to 10 requests per minute (`429`).
 * @summary Complete login when user has two-factor authentication enabled.
 */
export type authVerifyTwoFactorTokenResponse200 = {
  data: TokenPayload
  status: 200
}

export type authVerifyTwoFactorTokenResponse400 = {
  data: string
  status: 400
}

export type authVerifyTwoFactorTokenResponse410 = {
  data: string
  status: 410
}
    
export type authVerifyTwoFactorTokenResponseSuccess = (authVerifyTwoFactorTokenResponse200) & {
  headers: Headers;
};
export type authVerifyTwoFactorTokenResponseError = (authVerifyTwoFactorTokenResponse400 | authVerifyTwoFactorTokenResponse410) & {
  headers: Headers;
};

export type authVerifyTwoFactorTokenResponse = (authVerifyTwoFactorTokenResponseSuccess | authVerifyTwoFactorTokenResponseError)

export const getAuthVerifyTwoFactorTokenUrl = () => {


  

  return `/api/v1/tokens/two-factor`
}

export const authVerifyTwoFactorToken = async (twoFactorVerifyRequest: TwoFactorVerifyRequest, options?: RequestInit): Promise<authVerifyTwoFactorTokenResponse> => {
  
  return customFetch<authVerifyTwoFactorTokenResponse>(getAuthVerifyTwoFactorTokenUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      twoFactorVerifyRequest,)
  }
);}


/**
 * Post the challenge token from the original `POST /api/v1/tokens` response:
            
    { "challenge_token": "eyJ..." }
            
A fresh code is emailed and a new challenge is returned (superseding
the previous one), in the same shape as the `202` from
`POST /api/v1/tokens` minus `two_factor_required`. Only `Email`
challenges can be resent — there is nothing to resend for `Totp`
(the authenticator app generates codes locally), so a `Totp`
challenge returns `400` with a body of `not_supported`. Rate limited
to 3 requests per minute (`429`).
 * @summary Re-send the one-time code for an in-progress email two-factor challenge.
 */
export type authResendTwoFactorResponse200 = {
  data: TwoFactorChallengePayload
  status: 200
}

export type authResendTwoFactorResponse400 = {
  data: string
  status: 400
}

export type authResendTwoFactorResponse410 = {
  data: string
  status: 410
}
    
export type authResendTwoFactorResponseSuccess = (authResendTwoFactorResponse200) & {
  headers: Headers;
};
export type authResendTwoFactorResponseError = (authResendTwoFactorResponse400 | authResendTwoFactorResponse410) & {
  headers: Headers;
};

export type authResendTwoFactorResponse = (authResendTwoFactorResponseSuccess | authResendTwoFactorResponseError)

export const getAuthResendTwoFactorUrl = (params: AuthResendTwoFactorParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens/two-factor/resend?${stringifiedParams}` : `/api/v1/tokens/two-factor/resend`
}

export const authResendTwoFactor = async (params: AuthResendTwoFactorParams, options?: RequestInit): Promise<authResendTwoFactorResponse> => {
  
  return customFetch<authResendTwoFactorResponse>(getAuthResendTwoFactorUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * When a user has more than one method enrolled (see
`available_mechanisms` on the login response) they can switch the
active challenge — for example from `Totp` to `Email` when they have
lost access to their authenticator. Post the current challenge token
and the desired mechanism:
            
    { "challenge_token": "eyJ...", "mechanism": "Email" }
            
A fresh challenge for that mechanism is returned (and, for `Email`, a
code is sent), in the same shape as the `202` from `POST /api/v1/tokens`
minus `two_factor_required`. An unrecognized mechanism returns `400`
(`invalid_mechanism`); a mechanism the user has not enrolled returns
`400` (`not_enrolled`). Rate limited to 5 requests per minute (`429`).
 * @summary Switch an in-progress login challenge to a different enrolled mechanism.
 */
export type authSwitchTwoFactorMechanismResponse200 = {
  data: TwoFactorChallengePayload
  status: 200
}

export type authSwitchTwoFactorMechanismResponse400 = {
  data: string
  status: 400
}
    
export type authSwitchTwoFactorMechanismResponseSuccess = (authSwitchTwoFactorMechanismResponse200) & {
  headers: Headers;
};
export type authSwitchTwoFactorMechanismResponseError = (authSwitchTwoFactorMechanismResponse400) & {
  headers: Headers;
};

export type authSwitchTwoFactorMechanismResponse = (authSwitchTwoFactorMechanismResponseSuccess | authSwitchTwoFactorMechanismResponseError)

export const getAuthSwitchTwoFactorMechanismUrl = (params: AuthSwitchTwoFactorMechanismParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens/two-factor/switch-mechanism?${stringifiedParams}` : `/api/v1/tokens/two-factor/switch-mechanism`
}

export const authSwitchTwoFactorMechanism = async (params: AuthSwitchTwoFactorMechanismParams, options?: RequestInit): Promise<authSwitchTwoFactorMechanismResponse> => {
  
  return customFetch<authSwitchTwoFactorMechanismResponse>(getAuthSwitchTwoFactorMechanismUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * A fallback for users who cannot produce their primary code but still
have a recovery code on file (see `recovery_codes_available` on the
login response). Post the challenge token together with one recovery
code:
            
    { "challenge_token": "eyJ...", "recovery_code": "abcd-efgh-ijkl" }
            
On success the response is `200` with the final access token, in the
same shape as `POST /api/v1/tokens`. Each recovery code is single-use.
An incorrect code returns `400` (`invalid_grant`); an expired
challenge returns `410` (`challenge_expired`). Rate limited to 10
requests per minute (`429`).
            
Used by the embed login widget; the hosted Razor flow has its own
equivalent action on the AuthenticationController.
 * @summary Complete login with a two-factor recovery code.
 */
export type authVerifyTwoFactorRecoveryResponse200 = {
  data: TokenPayload
  status: 200
}

export type authVerifyTwoFactorRecoveryResponse400 = {
  data: string
  status: 400
}

export type authVerifyTwoFactorRecoveryResponse410 = {
  data: string
  status: 410
}
    
export type authVerifyTwoFactorRecoveryResponseSuccess = (authVerifyTwoFactorRecoveryResponse200) & {
  headers: Headers;
};
export type authVerifyTwoFactorRecoveryResponseError = (authVerifyTwoFactorRecoveryResponse400 | authVerifyTwoFactorRecoveryResponse410) & {
  headers: Headers;
};

export type authVerifyTwoFactorRecoveryResponse = (authVerifyTwoFactorRecoveryResponseSuccess | authVerifyTwoFactorRecoveryResponseError)

export const getAuthVerifyTwoFactorRecoveryUrl = (params: AuthVerifyTwoFactorRecoveryParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens/two-factor/recovery?${stringifiedParams}` : `/api/v1/tokens/two-factor/recovery`
}

export const authVerifyTwoFactorRecovery = async (params: AuthVerifyTwoFactorRecoveryParams, options?: RequestInit): Promise<authVerifyTwoFactorRecoveryResponse> => {
  
  return customFetch<authVerifyTwoFactorRecoveryResponse>(getAuthVerifyTwoFactorRecoveryUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Call this when `POST /api/v1/tokens` returned
`two_factor_enrollment_required` and the user chooses email. Post the
enrollment token from that response:
            
    { "enrollment_token": "eyJ..." }
            
A verification code is emailed to the user and a challenge is returned:
            
    {
      "challenge_token": "eyJ...",
      "mechanism": "Email",
      "masked_destination": "b***@outseta.com",
      "expires_in": 600
    }
            
Confirm the code via `POST /api/v1/tokens/two-factor/enroll/email/confirm`.
Returns `401` if the enrollment token is invalid/expired and `403` if
forced enrollment does not apply to this user. Rate limited to 5
requests per minute (`429`).
 * @summary Begin email enrollment during a forced-2FA login.
 */
export type tokenTwoFactorEnrollmentBeginEmailResponse200 = {
  data: TwoFactorChallengePayload
  status: 200
}

export type tokenTwoFactorEnrollmentBeginEmailResponse401 = {
  data: string
  status: 401
}

export type tokenTwoFactorEnrollmentBeginEmailResponse403 = {
  data: string
  status: 403
}
    
export type tokenTwoFactorEnrollmentBeginEmailResponseSuccess = (tokenTwoFactorEnrollmentBeginEmailResponse200) & {
  headers: Headers;
};
export type tokenTwoFactorEnrollmentBeginEmailResponseError = (tokenTwoFactorEnrollmentBeginEmailResponse401 | tokenTwoFactorEnrollmentBeginEmailResponse403) & {
  headers: Headers;
};

export type tokenTwoFactorEnrollmentBeginEmailResponse = (tokenTwoFactorEnrollmentBeginEmailResponseSuccess | tokenTwoFactorEnrollmentBeginEmailResponseError)

export const getTokenTwoFactorEnrollmentBeginEmailUrl = (params: TokenTwoFactorEnrollmentBeginEmailParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens/two-factor/enroll/email/begin?${stringifiedParams}` : `/api/v1/tokens/two-factor/enroll/email/begin`
}

export const tokenTwoFactorEnrollmentBeginEmail = async (params: TokenTwoFactorEnrollmentBeginEmailParams, options?: RequestInit): Promise<tokenTwoFactorEnrollmentBeginEmailResponse> => {
  
  return customFetch<tokenTwoFactorEnrollmentBeginEmailResponse>(getTokenTwoFactorEnrollmentBeginEmailUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


export type tokenTwoFactorEnrollmentBeginTotpResponse200 = {
  data: TwoFactorTotpEnrollmentPayload
  status: 200
}

export type tokenTwoFactorEnrollmentBeginTotpResponse401 = {
  data: string
  status: 401
}

export type tokenTwoFactorEnrollmentBeginTotpResponse403 = {
  data: string
  status: 403
}
    
export type tokenTwoFactorEnrollmentBeginTotpResponseSuccess = (tokenTwoFactorEnrollmentBeginTotpResponse200) & {
  headers: Headers;
};
export type tokenTwoFactorEnrollmentBeginTotpResponseError = (tokenTwoFactorEnrollmentBeginTotpResponse401 | tokenTwoFactorEnrollmentBeginTotpResponse403) & {
  headers: Headers;
};

export type tokenTwoFactorEnrollmentBeginTotpResponse = (tokenTwoFactorEnrollmentBeginTotpResponseSuccess | tokenTwoFactorEnrollmentBeginTotpResponseError)

export const getTokenTwoFactorEnrollmentBeginTotpUrl = (params: TokenTwoFactorEnrollmentBeginTotpParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens/two-factor/enroll/totp/begin?${stringifiedParams}` : `/api/v1/tokens/two-factor/enroll/totp/begin`
}

export const tokenTwoFactorEnrollmentBeginTotp = async (params: TokenTwoFactorEnrollmentBeginTotpParams, options?: RequestInit): Promise<tokenTwoFactorEnrollmentBeginTotpResponse> => {
  
  return customFetch<tokenTwoFactorEnrollmentBeginTotpResponse>(getTokenTwoFactorEnrollmentBeginTotpUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Post the enrollment token (from `POST /api/v1/tokens`), the challenge
token (from `.../enroll/email/begin`), and the emailed code:
            
    { "enrollment_token": "eyJ...", "challenge_token": "eyJ...", "code": "123456" }
            
On success email 2FA is enabled and login completes — the response
carries the final access token plus the user's one-time recovery codes:
            
    {
      "confirmed": true,
      "recovery_codes": ["abcd-efgh-ijkl", "..."],
      "access_token": "eyJ...",
      "token_type": "Bearer",
      "expires_in": 31536000
    }
            
Show the `recovery_codes` to the user once — they are not returned
again. An incorrect code returns `400` (`invalid_grant`); an expired
challenge returns `410` (`challenge_expired`). Rate limited to 10
requests per minute (`429`).
 * @summary Confirm email enrollment and complete a forced-2FA login.
 */
export type tokenTwoFactorEnrollmentConfirmEmailResponse200 = {
  data: TwoFactorEnrollmentConfirmationPayload
  status: 200
}

export type tokenTwoFactorEnrollmentConfirmEmailResponse400 = {
  data: string
  status: 400
}

export type tokenTwoFactorEnrollmentConfirmEmailResponse401 = {
  data: string
  status: 401
}

export type tokenTwoFactorEnrollmentConfirmEmailResponse410 = {
  data: string
  status: 410
}
    
export type tokenTwoFactorEnrollmentConfirmEmailResponseSuccess = (tokenTwoFactorEnrollmentConfirmEmailResponse200) & {
  headers: Headers;
};
export type tokenTwoFactorEnrollmentConfirmEmailResponseError = (tokenTwoFactorEnrollmentConfirmEmailResponse400 | tokenTwoFactorEnrollmentConfirmEmailResponse401 | tokenTwoFactorEnrollmentConfirmEmailResponse410) & {
  headers: Headers;
};

export type tokenTwoFactorEnrollmentConfirmEmailResponse = (tokenTwoFactorEnrollmentConfirmEmailResponseSuccess | tokenTwoFactorEnrollmentConfirmEmailResponseError)

export const getTokenTwoFactorEnrollmentConfirmEmailUrl = (params: TokenTwoFactorEnrollmentConfirmEmailParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens/two-factor/enroll/email/confirm?${stringifiedParams}` : `/api/v1/tokens/two-factor/enroll/email/confirm`
}

export const tokenTwoFactorEnrollmentConfirmEmail = async (params: TokenTwoFactorEnrollmentConfirmEmailParams, options?: RequestInit): Promise<tokenTwoFactorEnrollmentConfirmEmailResponse> => {
  
  return customFetch<tokenTwoFactorEnrollmentConfirmEmailResponse>(getTokenTwoFactorEnrollmentConfirmEmailUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Post the enrollment token (from `POST /api/v1/tokens`), the challenge
token (from `.../enroll/totp/begin`), and the current code from the
user's authenticator app:
            
    { "enrollment_token": "eyJ...", "challenge_token": "eyJ...", "code": "123456" }
            
On success authenticator-app 2FA is enabled and login completes — the
response carries the final access token plus the user's one-time
recovery codes:
            
    {
      "confirmed": true,
      "recovery_codes": ["abcd-efgh-ijkl", "..."],
      "access_token": "eyJ...",
      "token_type": "Bearer",
      "expires_in": 31536000
    }
            
Show the `recovery_codes` to the user once — they are not returned
again. An incorrect code returns `400` (`invalid_grant`); an expired
challenge returns `410` (`challenge_expired`). Rate limited to 10
requests per minute (`429`).
 * @summary Confirm authenticator-app (TOTP) enrollment and complete a forced-2FA login.
 */
export type tokenTwoFactorEnrollmentConfirmTotpResponse200 = {
  data: TwoFactorEnrollmentConfirmationPayload
  status: 200
}

export type tokenTwoFactorEnrollmentConfirmTotpResponse400 = {
  data: string
  status: 400
}

export type tokenTwoFactorEnrollmentConfirmTotpResponse401 = {
  data: string
  status: 401
}

export type tokenTwoFactorEnrollmentConfirmTotpResponse410 = {
  data: string
  status: 410
}
    
export type tokenTwoFactorEnrollmentConfirmTotpResponseSuccess = (tokenTwoFactorEnrollmentConfirmTotpResponse200) & {
  headers: Headers;
};
export type tokenTwoFactorEnrollmentConfirmTotpResponseError = (tokenTwoFactorEnrollmentConfirmTotpResponse400 | tokenTwoFactorEnrollmentConfirmTotpResponse401 | tokenTwoFactorEnrollmentConfirmTotpResponse410) & {
  headers: Headers;
};

export type tokenTwoFactorEnrollmentConfirmTotpResponse = (tokenTwoFactorEnrollmentConfirmTotpResponseSuccess | tokenTwoFactorEnrollmentConfirmTotpResponseError)

export const getTokenTwoFactorEnrollmentConfirmTotpUrl = (params: TokenTwoFactorEnrollmentConfirmTotpParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/tokens/two-factor/enroll/totp/confirm?${stringifiedParams}` : `/api/v1/tokens/two-factor/enroll/totp/confirm`
}

export const tokenTwoFactorEnrollmentConfirmTotp = async (params: TokenTwoFactorEnrollmentConfirmTotpParams, options?: RequestInit): Promise<tokenTwoFactorEnrollmentConfirmTotpResponse> => {
  
  return customFetch<tokenTwoFactorEnrollmentConfirmTotpResponse>(getTokenTwoFactorEnrollmentConfirmTotpUrl(params),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


