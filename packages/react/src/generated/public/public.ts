// @ts-nocheck
import {
  useMutation
} from '../../query';
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '../../query';

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
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';

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



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * This endpoint does not require authentication. The email list must be public, and the
subscription is subject to bot protection and the list's double opt-in settings.
 * @summary Publicly subscribe a person to an email list.
 */
export const publicEmailListAddSubscription = (
    emailListUid: string | null,
    publicEmailListAddSubscriptionBody: NonReadonly<PublicEmailListAddSubscriptionBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/public/email/lists/${emailListUid}/subscriptions`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: publicEmailListAddSubscriptionBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getPublicEmailListAddSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof publicEmailListAddSubscription>>, TError,{emailListUid: string | null;data: NonReadonly<PublicEmailListAddSubscriptionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof publicEmailListAddSubscription>>, TError,{emailListUid: string | null;data: NonReadonly<PublicEmailListAddSubscriptionBody>}, TContext> => {

const mutationKey = ['publicEmailListAddSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof publicEmailListAddSubscription>>, {emailListUid: string | null;data: NonReadonly<PublicEmailListAddSubscriptionBody>}> = (props) => {
          const {emailListUid,data} = props ?? {};

          return  publicEmailListAddSubscription(emailListUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PublicEmailListAddSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof publicEmailListAddSubscription>>>
    export type PublicEmailListAddSubscriptionMutationBody = NonReadonly<PublicEmailListAddSubscriptionBody>
    export type PublicEmailListAddSubscriptionMutationError = void

    /**
 * @summary Publicly subscribe a person to an email list.
 */
export const usePublicEmailListAddSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof publicEmailListAddSubscription>>, TError,{emailListUid: string | null;data: NonReadonly<PublicEmailListAddSubscriptionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof publicEmailListAddSubscription>>,
        TError,
        {emailListUid: string | null;data: NonReadonly<PublicEmailListAddSubscriptionBody>},
        TContext
      > => {

      const mutationOptions = getPublicEmailListAddSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const authGetToken = (
    params: AuthGetTokenParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TokenPayload | TwoFactorChallengePayload>(
      {url: `/api/v1/tokens`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getAuthGetTokenMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authGetToken>>, TError,{params: AuthGetTokenParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof authGetToken>>, TError,{params: AuthGetTokenParams}, TContext> => {

const mutationKey = ['authGetToken'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authGetToken>>, {params: AuthGetTokenParams}> = (props) => {
          const {params} = props ?? {};

          return  authGetToken(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthGetTokenMutationResult = NonNullable<Awaited<ReturnType<typeof authGetToken>>>
    
    export type AuthGetTokenMutationError = string

    /**
 * @summary Log a user in.
 */
export const useAuthGetToken = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authGetToken>>, TError,{params: AuthGetTokenParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof authGetToken>>,
        TError,
        {params: AuthGetTokenParams},
        TContext
      > => {

      const mutationOptions = getAuthGetTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const authVerifyTwoFactorToken = (
    twoFactorVerifyRequest: TwoFactorVerifyRequest,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TokenPayload>(
      {url: `/api/v1/tokens/two-factor`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: twoFactorVerifyRequest, signal
    },
      options);
    }
  


export const getAuthVerifyTwoFactorTokenMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authVerifyTwoFactorToken>>, TError,{data: TwoFactorVerifyRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof authVerifyTwoFactorToken>>, TError,{data: TwoFactorVerifyRequest}, TContext> => {

const mutationKey = ['authVerifyTwoFactorToken'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authVerifyTwoFactorToken>>, {data: TwoFactorVerifyRequest}> = (props) => {
          const {data} = props ?? {};

          return  authVerifyTwoFactorToken(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthVerifyTwoFactorTokenMutationResult = NonNullable<Awaited<ReturnType<typeof authVerifyTwoFactorToken>>>
    export type AuthVerifyTwoFactorTokenMutationBody = TwoFactorVerifyRequest
    export type AuthVerifyTwoFactorTokenMutationError = string

    /**
 * @summary Complete login when user has two-factor authentication enabled.
 */
export const useAuthVerifyTwoFactorToken = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authVerifyTwoFactorToken>>, TError,{data: TwoFactorVerifyRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof authVerifyTwoFactorToken>>,
        TError,
        {data: TwoFactorVerifyRequest},
        TContext
      > => {

      const mutationOptions = getAuthVerifyTwoFactorTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const authResendTwoFactor = (
    params: AuthResendTwoFactorParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TwoFactorChallengePayload>(
      {url: `/api/v1/tokens/two-factor/resend`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getAuthResendTwoFactorMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authResendTwoFactor>>, TError,{params: AuthResendTwoFactorParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof authResendTwoFactor>>, TError,{params: AuthResendTwoFactorParams}, TContext> => {

const mutationKey = ['authResendTwoFactor'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authResendTwoFactor>>, {params: AuthResendTwoFactorParams}> = (props) => {
          const {params} = props ?? {};

          return  authResendTwoFactor(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthResendTwoFactorMutationResult = NonNullable<Awaited<ReturnType<typeof authResendTwoFactor>>>
    
    export type AuthResendTwoFactorMutationError = string

    /**
 * @summary Re-send the one-time code for an in-progress email two-factor challenge.
 */
export const useAuthResendTwoFactor = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authResendTwoFactor>>, TError,{params: AuthResendTwoFactorParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof authResendTwoFactor>>,
        TError,
        {params: AuthResendTwoFactorParams},
        TContext
      > => {

      const mutationOptions = getAuthResendTwoFactorMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const authSwitchTwoFactorMechanism = (
    params: AuthSwitchTwoFactorMechanismParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TwoFactorChallengePayload>(
      {url: `/api/v1/tokens/two-factor/switch-mechanism`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getAuthSwitchTwoFactorMechanismMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authSwitchTwoFactorMechanism>>, TError,{params: AuthSwitchTwoFactorMechanismParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof authSwitchTwoFactorMechanism>>, TError,{params: AuthSwitchTwoFactorMechanismParams}, TContext> => {

const mutationKey = ['authSwitchTwoFactorMechanism'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authSwitchTwoFactorMechanism>>, {params: AuthSwitchTwoFactorMechanismParams}> = (props) => {
          const {params} = props ?? {};

          return  authSwitchTwoFactorMechanism(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthSwitchTwoFactorMechanismMutationResult = NonNullable<Awaited<ReturnType<typeof authSwitchTwoFactorMechanism>>>
    
    export type AuthSwitchTwoFactorMechanismMutationError = string

    /**
 * @summary Switch an in-progress login challenge to a different enrolled mechanism.
 */
export const useAuthSwitchTwoFactorMechanism = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authSwitchTwoFactorMechanism>>, TError,{params: AuthSwitchTwoFactorMechanismParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof authSwitchTwoFactorMechanism>>,
        TError,
        {params: AuthSwitchTwoFactorMechanismParams},
        TContext
      > => {

      const mutationOptions = getAuthSwitchTwoFactorMechanismMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const authVerifyTwoFactorRecovery = (
    params: AuthVerifyTwoFactorRecoveryParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TokenPayload>(
      {url: `/api/v1/tokens/two-factor/recovery`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getAuthVerifyTwoFactorRecoveryMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authVerifyTwoFactorRecovery>>, TError,{params: AuthVerifyTwoFactorRecoveryParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof authVerifyTwoFactorRecovery>>, TError,{params: AuthVerifyTwoFactorRecoveryParams}, TContext> => {

const mutationKey = ['authVerifyTwoFactorRecovery'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authVerifyTwoFactorRecovery>>, {params: AuthVerifyTwoFactorRecoveryParams}> = (props) => {
          const {params} = props ?? {};

          return  authVerifyTwoFactorRecovery(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthVerifyTwoFactorRecoveryMutationResult = NonNullable<Awaited<ReturnType<typeof authVerifyTwoFactorRecovery>>>
    
    export type AuthVerifyTwoFactorRecoveryMutationError = string

    /**
 * @summary Complete login with a two-factor recovery code.
 */
export const useAuthVerifyTwoFactorRecovery = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authVerifyTwoFactorRecovery>>, TError,{params: AuthVerifyTwoFactorRecoveryParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof authVerifyTwoFactorRecovery>>,
        TError,
        {params: AuthVerifyTwoFactorRecoveryParams},
        TContext
      > => {

      const mutationOptions = getAuthVerifyTwoFactorRecoveryMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const tokenTwoFactorEnrollmentBeginEmail = (
    params: TokenTwoFactorEnrollmentBeginEmailParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TwoFactorChallengePayload>(
      {url: `/api/v1/tokens/two-factor/enroll/email/begin`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getTokenTwoFactorEnrollmentBeginEmailMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginEmail>>, TError,{params: TokenTwoFactorEnrollmentBeginEmailParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginEmail>>, TError,{params: TokenTwoFactorEnrollmentBeginEmailParams}, TContext> => {

const mutationKey = ['tokenTwoFactorEnrollmentBeginEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginEmail>>, {params: TokenTwoFactorEnrollmentBeginEmailParams}> = (props) => {
          const {params} = props ?? {};

          return  tokenTwoFactorEnrollmentBeginEmail(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TokenTwoFactorEnrollmentBeginEmailMutationResult = NonNullable<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginEmail>>>
    
    export type TokenTwoFactorEnrollmentBeginEmailMutationError = string

    /**
 * @summary Begin email enrollment during a forced-2FA login.
 */
export const useTokenTwoFactorEnrollmentBeginEmail = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginEmail>>, TError,{params: TokenTwoFactorEnrollmentBeginEmailParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginEmail>>,
        TError,
        {params: TokenTwoFactorEnrollmentBeginEmailParams},
        TContext
      > => {

      const mutationOptions = getTokenTwoFactorEnrollmentBeginEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const tokenTwoFactorEnrollmentBeginTotp = (
    params: TokenTwoFactorEnrollmentBeginTotpParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TwoFactorTotpEnrollmentPayload>(
      {url: `/api/v1/tokens/two-factor/enroll/totp/begin`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getTokenTwoFactorEnrollmentBeginTotpMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginTotp>>, TError,{params: TokenTwoFactorEnrollmentBeginTotpParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginTotp>>, TError,{params: TokenTwoFactorEnrollmentBeginTotpParams}, TContext> => {

const mutationKey = ['tokenTwoFactorEnrollmentBeginTotp'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginTotp>>, {params: TokenTwoFactorEnrollmentBeginTotpParams}> = (props) => {
          const {params} = props ?? {};

          return  tokenTwoFactorEnrollmentBeginTotp(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TokenTwoFactorEnrollmentBeginTotpMutationResult = NonNullable<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginTotp>>>
    
    export type TokenTwoFactorEnrollmentBeginTotpMutationError = string

    export const useTokenTwoFactorEnrollmentBeginTotp = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginTotp>>, TError,{params: TokenTwoFactorEnrollmentBeginTotpParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof tokenTwoFactorEnrollmentBeginTotp>>,
        TError,
        {params: TokenTwoFactorEnrollmentBeginTotpParams},
        TContext
      > => {

      const mutationOptions = getTokenTwoFactorEnrollmentBeginTotpMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const tokenTwoFactorEnrollmentConfirmEmail = (
    params: TokenTwoFactorEnrollmentConfirmEmailParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TwoFactorEnrollmentConfirmationPayload>(
      {url: `/api/v1/tokens/two-factor/enroll/email/confirm`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getTokenTwoFactorEnrollmentConfirmEmailMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmEmail>>, TError,{params: TokenTwoFactorEnrollmentConfirmEmailParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmEmail>>, TError,{params: TokenTwoFactorEnrollmentConfirmEmailParams}, TContext> => {

const mutationKey = ['tokenTwoFactorEnrollmentConfirmEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmEmail>>, {params: TokenTwoFactorEnrollmentConfirmEmailParams}> = (props) => {
          const {params} = props ?? {};

          return  tokenTwoFactorEnrollmentConfirmEmail(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TokenTwoFactorEnrollmentConfirmEmailMutationResult = NonNullable<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmEmail>>>
    
    export type TokenTwoFactorEnrollmentConfirmEmailMutationError = string

    /**
 * @summary Confirm email enrollment and complete a forced-2FA login.
 */
export const useTokenTwoFactorEnrollmentConfirmEmail = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmEmail>>, TError,{params: TokenTwoFactorEnrollmentConfirmEmailParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmEmail>>,
        TError,
        {params: TokenTwoFactorEnrollmentConfirmEmailParams},
        TContext
      > => {

      const mutationOptions = getTokenTwoFactorEnrollmentConfirmEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const tokenTwoFactorEnrollmentConfirmTotp = (
    params: TokenTwoFactorEnrollmentConfirmTotpParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TwoFactorEnrollmentConfirmationPayload>(
      {url: `/api/v1/tokens/two-factor/enroll/totp/confirm`, method: 'POST',
        params, signal
    },
      options);
    }
  


export const getTokenTwoFactorEnrollmentConfirmTotpMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmTotp>>, TError,{params: TokenTwoFactorEnrollmentConfirmTotpParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmTotp>>, TError,{params: TokenTwoFactorEnrollmentConfirmTotpParams}, TContext> => {

const mutationKey = ['tokenTwoFactorEnrollmentConfirmTotp'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmTotp>>, {params: TokenTwoFactorEnrollmentConfirmTotpParams}> = (props) => {
          const {params} = props ?? {};

          return  tokenTwoFactorEnrollmentConfirmTotp(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TokenTwoFactorEnrollmentConfirmTotpMutationResult = NonNullable<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmTotp>>>
    
    export type TokenTwoFactorEnrollmentConfirmTotpMutationError = string

    /**
 * @summary Confirm authenticator-app (TOTP) enrollment and complete a forced-2FA login.
 */
export const useTokenTwoFactorEnrollmentConfirmTotp = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmTotp>>, TError,{params: TokenTwoFactorEnrollmentConfirmTotpParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof tokenTwoFactorEnrollmentConfirmTotp>>,
        TError,
        {params: TokenTwoFactorEnrollmentConfirmTotpParams},
        TContext
      > => {

      const mutationOptions = getTokenTwoFactorEnrollmentConfirmTotpMutationOptions(options);

      return useMutation(mutationOptions);
    }
    