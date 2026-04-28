// @ts-nocheck
import {
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  Account,
  AccountAddAccountBody,
  AccountAddAccountParams,
  AccountAddPersonToAccountBody,
  AccountCancelAccountBody,
  AccountExtendTrialBody,
  AccountGetAllAccountsParams,
  AccountUpdateAccountBody,
  AccountUpdateMembershipBody,
  Deal,
  DealAddDealBody,
  DealGetAllDealsParams,
  DealUpdateDealBody,
  Person,
  PersonAccount,
  PersonAddPersonBody,
  PersonForgotPasswordBody,
  PersonGetAllPeopleParams,
  PersonSetTemporaryPasswordBody,
  PersonUpdatePersonBody
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * @summary Retrieves all the deals associated with your account.
 */
export const dealGetAllDeals = (
    params?: DealGetAllDealsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Deal[]>(
      {url: `/api/v1/crm/deals`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getDealGetAllDealsQueryKey = (params?: DealGetAllDealsParams,) => {
    return [
    `/api/v1/crm/deals`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getDealGetAllDealsQueryOptions = <TData = Awaited<ReturnType<typeof dealGetAllDeals>>, TError = void>(params?: DealGetAllDealsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dealGetAllDeals>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDealGetAllDealsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof dealGetAllDeals>>> = ({ signal }) => dealGetAllDeals(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof dealGetAllDeals>>, TError, TData> & { queryKey: QueryKey }
}

export type DealGetAllDealsQueryResult = NonNullable<Awaited<ReturnType<typeof dealGetAllDeals>>>
export type DealGetAllDealsQueryError = void


/**
 * @summary Retrieves all the deals associated with your account.
 */

export function useDealGetAllDeals<TData = Awaited<ReturnType<typeof dealGetAllDeals>>, TError = void>(
 params?: DealGetAllDealsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dealGetAllDeals>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDealGetAllDealsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add a new deal.
 */
export const dealAddDeal = (
    dealAddDealBody: DealAddDealBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Deal>(
      {url: `/api/v1/crm/deals`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dealAddDealBody, signal
    },
      options);
    }
  


export const getDealAddDealMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dealAddDeal>>, TError,{data: DealAddDealBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dealAddDeal>>, TError,{data: DealAddDealBody}, TContext> => {

const mutationKey = ['dealAddDeal'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dealAddDeal>>, {data: DealAddDealBody}> = (props) => {
          const {data} = props ?? {};

          return  dealAddDeal(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DealAddDealMutationResult = NonNullable<Awaited<ReturnType<typeof dealAddDeal>>>
    export type DealAddDealMutationBody = DealAddDealBody
    export type DealAddDealMutationError = void

    /**
 * @summary Add a new deal.
 */
export const useDealAddDeal = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dealAddDeal>>, TError,{data: DealAddDealBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dealAddDeal>>,
        TError,
        {data: DealAddDealBody},
        TContext
      > => {

      const mutationOptions = getDealAddDealMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieves one deal associated with your account.
 */
export const dealGetDeal = (
    dealUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Deal>(
      {url: `/api/v1/crm/deals/${dealUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getDealGetDealQueryKey = (dealUid?: string | null,) => {
    return [
    `/api/v1/crm/deals/${dealUid}`
    ] as const;
    }

    
export const getDealGetDealQueryOptions = <TData = Awaited<ReturnType<typeof dealGetDeal>>, TError = void>(dealUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dealGetDeal>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDealGetDealQueryKey(dealUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof dealGetDeal>>> = ({ signal }) => dealGetDeal(dealUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(dealUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof dealGetDeal>>, TError, TData> & { queryKey: QueryKey }
}

export type DealGetDealQueryResult = NonNullable<Awaited<ReturnType<typeof dealGetDeal>>>
export type DealGetDealQueryError = void


/**
 * @summary Retrieves one deal associated with your account.
 */

export function useDealGetDeal<TData = Awaited<ReturnType<typeof dealGetDeal>>, TError = void>(
 dealUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dealGetDeal>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDealGetDealQueryOptions(dealUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Update a deal.
 */
export const dealUpdateDeal = (
    dealUid: string | null,
    dealUpdateDealBody: DealUpdateDealBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Deal>(
      {url: `/api/v1/crm/deals/${dealUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dealUpdateDealBody
    },
      options);
    }
  


export const getDealUpdateDealMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dealUpdateDeal>>, TError,{dealUid: string | null;data: DealUpdateDealBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dealUpdateDeal>>, TError,{dealUid: string | null;data: DealUpdateDealBody}, TContext> => {

const mutationKey = ['dealUpdateDeal'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dealUpdateDeal>>, {dealUid: string | null;data: DealUpdateDealBody}> = (props) => {
          const {dealUid,data} = props ?? {};

          return  dealUpdateDeal(dealUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DealUpdateDealMutationResult = NonNullable<Awaited<ReturnType<typeof dealUpdateDeal>>>
    export type DealUpdateDealMutationBody = DealUpdateDealBody
    export type DealUpdateDealMutationError = void

    /**
 * @summary Update a deal.
 */
export const useDealUpdateDeal = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dealUpdateDeal>>, TError,{dealUid: string | null;data: DealUpdateDealBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dealUpdateDeal>>,
        TError,
        {dealUid: string | null;data: DealUpdateDealBody},
        TContext
      > => {

      const mutationOptions = getDealUpdateDealMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a deal.
 */
export const dealDeleteDeal = (
    dealUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/deals/${dealUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getDealDeleteDealMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dealDeleteDeal>>, TError,{dealUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dealDeleteDeal>>, TError,{dealUid: string | null}, TContext> => {

const mutationKey = ['dealDeleteDeal'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dealDeleteDeal>>, {dealUid: string | null}> = (props) => {
          const {dealUid} = props ?? {};

          return  dealDeleteDeal(dealUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DealDeleteDealMutationResult = NonNullable<Awaited<ReturnType<typeof dealDeleteDeal>>>
    
    export type DealDeleteDealMutationError = void

    /**
 * @summary Delete a deal.
 */
export const useDealDeleteDeal = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dealDeleteDeal>>, TError,{dealUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dealDeleteDeal>>,
        TError,
        {dealUid: string | null},
        TContext
      > => {

      const mutationOptions = getDealDeleteDealMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Register a new account. This is the same endpoint the sign up embed uses to create accounts.
At a minimum you must pass one Primary Contact with an Email address and one Subscription
record with a reference to a Plan. Other fields (e.g. Account Name, Billing Address,
Payment Information, etc.) can be passed as desired. A confirmation email will be sent
to the user unless you've specifically toggled this option off on the AUTH > SIGN UP AND LOGIN page.
 */
export const registrationRegisterAccount = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Account>(
      {url: `/api/v1/crm/registrations`, method: 'POST', signal
    },
      options);
    }
  


export const getRegistrationRegisterAccountMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registrationRegisterAccount>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof registrationRegisterAccount>>, TError,void, TContext> => {

const mutationKey = ['registrationRegisterAccount'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof registrationRegisterAccount>>, void> = () => {
          

          return  registrationRegisterAccount(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RegistrationRegisterAccountMutationResult = NonNullable<Awaited<ReturnType<typeof registrationRegisterAccount>>>
    
    export type RegistrationRegisterAccountMutationError = unknown

    /**
 * @summary Register a new account. This is the same endpoint the sign up embed uses to create accounts.
At a minimum you must pass one Primary Contact with an Email address and one Subscription
record with a reference to a Plan. Other fields (e.g. Account Name, Billing Address,
Payment Information, etc.) can be passed as desired. A confirmation email will be sent
to the user unless you've specifically toggled this option off on the AUTH > SIGN UP AND LOGIN page.
 */
export const useRegistrationRegisterAccount = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registrationRegisterAccount>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof registrationRegisterAccount>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getRegistrationRegisterAccountMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Returns all accounts, optionally filtered by segment or search query.
 */
export const accountGetAllAccounts = (
    params?: AccountGetAllAccountsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Account[]>(
      {url: `/api/v1/crm/accounts`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getAccountGetAllAccountsQueryKey = (params?: AccountGetAllAccountsParams,) => {
    return [
    `/api/v1/crm/accounts`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getAccountGetAllAccountsQueryOptions = <TData = Awaited<ReturnType<typeof accountGetAllAccounts>>, TError = void>(params?: AccountGetAllAccountsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof accountGetAllAccounts>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAccountGetAllAccountsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof accountGetAllAccounts>>> = ({ signal }) => accountGetAllAccounts(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof accountGetAllAccounts>>, TError, TData> & { queryKey: QueryKey }
}

export type AccountGetAllAccountsQueryResult = NonNullable<Awaited<ReturnType<typeof accountGetAllAccounts>>>
export type AccountGetAllAccountsQueryError = void


/**
 * @summary Returns all accounts, optionally filtered by segment or search query.
 */

export function useAccountGetAllAccounts<TData = Awaited<ReturnType<typeof accountGetAllAccounts>>, TError = void>(
 params?: AccountGetAllAccountsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof accountGetAllAccounts>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getAccountGetAllAccountsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add a new account.
To add an account with an existing person, the Account payload include something like this:
{ ... other Account properties ..., "PersonAccount": [ { "Person": { "Uid": [personUid] }, "IsPrimary": "true" } ] }
 */
export const accountAddAccount = (
    accountAddAccountBody: AccountAddAccountBody,
    params?: AccountAddAccountParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: accountAddAccountBody,
        params,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getAccountAddAccountMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountAddAccount>>, TError,{data: AccountAddAccountBody;params?: AccountAddAccountParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountAddAccount>>, TError,{data: AccountAddAccountBody;params?: AccountAddAccountParams}, TContext> => {

const mutationKey = ['accountAddAccount'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountAddAccount>>, {data: AccountAddAccountBody;params?: AccountAddAccountParams}> = (props) => {
          const {data,params} = props ?? {};

          return  accountAddAccount(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountAddAccountMutationResult = NonNullable<Awaited<ReturnType<typeof accountAddAccount>>>
    export type AccountAddAccountMutationBody = AccountAddAccountBody
    export type AccountAddAccountMutationError = void

    /**
 * @summary Add a new account.
To add an account with an existing person, the Account payload include something like this:
{ ... other Account properties ..., "PersonAccount": [ { "Person": { "Uid": [personUid] }, "IsPrimary": "true" } ] }
 */
export const useAccountAddAccount = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountAddAccount>>, TError,{data: AccountAddAccountBody;params?: AccountAddAccountParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountAddAccount>>,
        TError,
        {data: AccountAddAccountBody;params?: AccountAddAccountParams},
        TContext
      > => {

      const mutationOptions = getAccountAddAccountMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Returns a single account by UID.
 */
export const accountGetAccount = (
    accountUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Account>(
      {url: `/api/v1/crm/accounts/${accountUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getAccountGetAccountQueryKey = (accountUid?: string | null,) => {
    return [
    `/api/v1/crm/accounts/${accountUid}`
    ] as const;
    }

    
export const getAccountGetAccountQueryOptions = <TData = Awaited<ReturnType<typeof accountGetAccount>>, TError = void>(accountUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof accountGetAccount>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAccountGetAccountQueryKey(accountUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof accountGetAccount>>> = ({ signal }) => accountGetAccount(accountUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(accountUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof accountGetAccount>>, TError, TData> & { queryKey: QueryKey }
}

export type AccountGetAccountQueryResult = NonNullable<Awaited<ReturnType<typeof accountGetAccount>>>
export type AccountGetAccountQueryError = void


/**
 * @summary Returns a single account by UID.
 */

export function useAccountGetAccount<TData = Awaited<ReturnType<typeof accountGetAccount>>, TError = void>(
 accountUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof accountGetAccount>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getAccountGetAccountQueryOptions(accountUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Delete an account record.
 */
export const accountDeleteAccount = (
    accountUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts/${accountUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getAccountDeleteAccountMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountDeleteAccount>>, TError,{accountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountDeleteAccount>>, TError,{accountUid: string | null}, TContext> => {

const mutationKey = ['accountDeleteAccount'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountDeleteAccount>>, {accountUid: string | null}> = (props) => {
          const {accountUid} = props ?? {};

          return  accountDeleteAccount(accountUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountDeleteAccountMutationResult = NonNullable<Awaited<ReturnType<typeof accountDeleteAccount>>>
    
    export type AccountDeleteAccountMutationError = void

    /**
 * @summary Delete an account record.
 */
export const useAccountDeleteAccount = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountDeleteAccount>>, TError,{accountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountDeleteAccount>>,
        TError,
        {accountUid: string | null},
        TContext
      > => {

      const mutationOptions = getAccountDeleteAccountMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Update account information. You can update one or multiple properties on the object.
Any property that you include in the json schema will be updated.
To update custom properties just include them in the same way that they are included when you do a get on the object.
 */
export const accountUpdateAccount = (
    accountUid: string | null,
    accountUpdateAccountBody: AccountUpdateAccountBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Account>(
      {url: `/api/v1/crm/accounts/${accountUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: accountUpdateAccountBody
    },
      options);
    }
  


export const getAccountUpdateAccountMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountUpdateAccount>>, TError,{accountUid: string | null;data: AccountUpdateAccountBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountUpdateAccount>>, TError,{accountUid: string | null;data: AccountUpdateAccountBody}, TContext> => {

const mutationKey = ['accountUpdateAccount'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountUpdateAccount>>, {accountUid: string | null;data: AccountUpdateAccountBody}> = (props) => {
          const {accountUid,data} = props ?? {};

          return  accountUpdateAccount(accountUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountUpdateAccountMutationResult = NonNullable<Awaited<ReturnType<typeof accountUpdateAccount>>>
    export type AccountUpdateAccountMutationBody = AccountUpdateAccountBody
    export type AccountUpdateAccountMutationError = void

    /**
 * @summary Update account information. You can update one or multiple properties on the object.
Any property that you include in the json schema will be updated.
To update custom properties just include them in the same way that they are included when you do a get on the object.
 */
export const useAccountUpdateAccount = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountUpdateAccount>>, TError,{accountUid: string | null;data: AccountUpdateAccountBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountUpdateAccount>>,
        TError,
        {accountUid: string | null;data: AccountUpdateAccountBody},
        TContext
      > => {

      const mutationOptions = getAccountUpdateAccountMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Add a person to an existing account. Set sendWelcomeEmail=true to send a welcome email to the person added.
 */
export const accountAddPersonToAccount = (
    accountUid: string | null,
    accountAddPersonToAccountBody: AccountAddPersonToAccountBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<PersonAccount>(
      {url: `/api/v1/crm/accounts/${accountUid}/memberships`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: accountAddPersonToAccountBody, signal
    },
      options);
    }
  


export const getAccountAddPersonToAccountMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountAddPersonToAccount>>, TError,{accountUid: string | null;data: AccountAddPersonToAccountBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountAddPersonToAccount>>, TError,{accountUid: string | null;data: AccountAddPersonToAccountBody}, TContext> => {

const mutationKey = ['accountAddPersonToAccount'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountAddPersonToAccount>>, {accountUid: string | null;data: AccountAddPersonToAccountBody}> = (props) => {
          const {accountUid,data} = props ?? {};

          return  accountAddPersonToAccount(accountUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountAddPersonToAccountMutationResult = NonNullable<Awaited<ReturnType<typeof accountAddPersonToAccount>>>
    export type AccountAddPersonToAccountMutationBody = AccountAddPersonToAccountBody
    export type AccountAddPersonToAccountMutationError = void

    /**
 * @summary Add a person to an existing account. Set sendWelcomeEmail=true to send a welcome email to the person added.
 */
export const useAccountAddPersonToAccount = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountAddPersonToAccount>>, TError,{accountUid: string | null;data: AccountAddPersonToAccountBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountAddPersonToAccount>>,
        TError,
        {accountUid: string | null;data: AccountAddPersonToAccountBody},
        TContext
      > => {

      const mutationOptions = getAccountAddPersonToAccountMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Update an account membership. This is the method by which you can change the primary contact of an account.
 */
export const accountUpdateMembership = (
    accountUid: string | null,
    membershipUid: string | null,
    accountUpdateMembershipBody: AccountUpdateMembershipBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts/${accountUid}/memberships/${membershipUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: accountUpdateMembershipBody,
        responseType: 'blob'
    },
      options);
    }
  


export const getAccountUpdateMembershipMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountUpdateMembership>>, TError,{accountUid: string | null;membershipUid: string | null;data: AccountUpdateMembershipBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountUpdateMembership>>, TError,{accountUid: string | null;membershipUid: string | null;data: AccountUpdateMembershipBody}, TContext> => {

const mutationKey = ['accountUpdateMembership'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountUpdateMembership>>, {accountUid: string | null;membershipUid: string | null;data: AccountUpdateMembershipBody}> = (props) => {
          const {accountUid,membershipUid,data} = props ?? {};

          return  accountUpdateMembership(accountUid,membershipUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountUpdateMembershipMutationResult = NonNullable<Awaited<ReturnType<typeof accountUpdateMembership>>>
    export type AccountUpdateMembershipMutationBody = AccountUpdateMembershipBody
    export type AccountUpdateMembershipMutationError = void

    /**
 * @summary Update an account membership. This is the method by which you can change the primary contact of an account.
 */
export const useAccountUpdateMembership = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountUpdateMembership>>, TError,{accountUid: string | null;membershipUid: string | null;data: AccountUpdateMembershipBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountUpdateMembership>>,
        TError,
        {accountUid: string | null;membershipUid: string | null;data: AccountUpdateMembershipBody},
        TContext
      > => {

      const mutationOptions = getAccountUpdateMembershipMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Remove a person from an account. Note that you cannot remove the primary contact of an account.
 */
export const accountDeleteMembership = (
    accountUid: string | null,
    membershipUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts/${accountUid}/memberships/${membershipUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getAccountDeleteMembershipMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountDeleteMembership>>, TError,{accountUid: string | null;membershipUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountDeleteMembership>>, TError,{accountUid: string | null;membershipUid: string | null}, TContext> => {

const mutationKey = ['accountDeleteMembership'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountDeleteMembership>>, {accountUid: string | null;membershipUid: string | null}> = (props) => {
          const {accountUid,membershipUid} = props ?? {};

          return  accountDeleteMembership(accountUid,membershipUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountDeleteMembershipMutationResult = NonNullable<Awaited<ReturnType<typeof accountDeleteMembership>>>
    
    export type AccountDeleteMembershipMutationError = void

    /**
 * @summary Remove a person from an account. Note that you cannot remove the primary contact of an account.
 */
export const useAccountDeleteMembership = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountDeleteMembership>>, TError,{accountUid: string | null;membershipUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountDeleteMembership>>,
        TError,
        {accountUid: string | null;membershipUid: string | null},
        TContext
      > => {

      const mutationOptions = getAccountDeleteMembershipMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Add a cancellation request to an account. The account needs to be in subscribing stage.
The stage will automatically change over to cancelling. If the account has a subscription
attached to it then at the subscription renewal the subscription will end and the account
will be automatically set to expired.
 */
export const accountCancelAccount = (
    accountUid: string | null,
    accountCancelAccountBody: AccountCancelAccountBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts/${accountUid}/cancel`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: accountCancelAccountBody,
        responseType: 'blob'
    },
      options);
    }
  


export const getAccountCancelAccountMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountCancelAccount>>, TError,{accountUid: string | null;data: AccountCancelAccountBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountCancelAccount>>, TError,{accountUid: string | null;data: AccountCancelAccountBody}, TContext> => {

const mutationKey = ['accountCancelAccount'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountCancelAccount>>, {accountUid: string | null;data: AccountCancelAccountBody}> = (props) => {
          const {accountUid,data} = props ?? {};

          return  accountCancelAccount(accountUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountCancelAccountMutationResult = NonNullable<Awaited<ReturnType<typeof accountCancelAccount>>>
    export type AccountCancelAccountMutationBody = AccountCancelAccountBody
    export type AccountCancelAccountMutationError = void

    /**
 * @summary Add a cancellation request to an account. The account needs to be in subscribing stage.
The stage will automatically change over to cancelling. If the account has a subscription
attached to it then at the subscription renewal the subscription will end and the account
will be automatically set to expired.
 */
export const useAccountCancelAccount = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountCancelAccount>>, TError,{accountUid: string | null;data: AccountCancelAccountBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountCancelAccount>>,
        TError,
        {accountUid: string | null;data: AccountCancelAccountBody},
        TContext
      > => {

      const mutationOptions = getAccountCancelAccountMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Remove a previous cancellation request from an account.
 */
export const accountRemoveCancellation = (
    accountUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts/${accountUid}/remove-cancellation`, method: 'PUT',
        responseType: 'blob'
    },
      options);
    }
  


export const getAccountRemoveCancellationMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountRemoveCancellation>>, TError,{accountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountRemoveCancellation>>, TError,{accountUid: string | null}, TContext> => {

const mutationKey = ['accountRemoveCancellation'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountRemoveCancellation>>, {accountUid: string | null}> = (props) => {
          const {accountUid} = props ?? {};

          return  accountRemoveCancellation(accountUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountRemoveCancellationMutationResult = NonNullable<Awaited<ReturnType<typeof accountRemoveCancellation>>>
    
    export type AccountRemoveCancellationMutationError = void

    /**
 * @summary Remove a previous cancellation request from an account.
 */
export const useAccountRemoveCancellation = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountRemoveCancellation>>, TError,{accountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountRemoveCancellation>>,
        TError,
        {accountUid: string | null},
        TContext
      > => {

      const mutationOptions = getAccountRemoveCancellationMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Extend the date that a trial subscription expires.
 */
export const accountExtendTrial = (
    accountUid: string | null,
    accountExtendTrialBody: AccountExtendTrialBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts/${accountUid}/extend-trial`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: accountExtendTrialBody,
        responseType: 'blob'
    },
      options);
    }
  


export const getAccountExtendTrialMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountExtendTrial>>, TError,{accountUid: string | null;data: AccountExtendTrialBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountExtendTrial>>, TError,{accountUid: string | null;data: AccountExtendTrialBody}, TContext> => {

const mutationKey = ['accountExtendTrial'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountExtendTrial>>, {accountUid: string | null;data: AccountExtendTrialBody}> = (props) => {
          const {accountUid,data} = props ?? {};

          return  accountExtendTrial(accountUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountExtendTrialMutationResult = NonNullable<Awaited<ReturnType<typeof accountExtendTrial>>>
    export type AccountExtendTrialMutationBody = AccountExtendTrialBody
    export type AccountExtendTrialMutationError = void

    /**
 * @summary Extend the date that a trial subscription expires.
 */
export const useAccountExtendTrial = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountExtendTrial>>, TError,{accountUid: string | null;data: AccountExtendTrialBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountExtendTrial>>,
        TError,
        {accountUid: string | null;data: AccountExtendTrialBody},
        TContext
      > => {

      const mutationOptions = getAccountExtendTrialMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Send a confirmation email to people on an account. Pass personUid as a query parameter
to send to a specific person, or personUid=* to send to all people on the account.
If no personUid is provided, the email is sent to the primary contact.
 */
export const accountSendConfirmationEmail = (
    accountUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/accounts/${accountUid}/send-confirmation-email`, method: 'PUT',
        responseType: 'blob'
    },
      options);
    }
  


export const getAccountSendConfirmationEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountSendConfirmationEmail>>, TError,{accountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof accountSendConfirmationEmail>>, TError,{accountUid: string | null}, TContext> => {

const mutationKey = ['accountSendConfirmationEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof accountSendConfirmationEmail>>, {accountUid: string | null}> = (props) => {
          const {accountUid} = props ?? {};

          return  accountSendConfirmationEmail(accountUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AccountSendConfirmationEmailMutationResult = NonNullable<Awaited<ReturnType<typeof accountSendConfirmationEmail>>>
    
    export type AccountSendConfirmationEmailMutationError = void

    /**
 * @summary Send a confirmation email to people on an account. Pass personUid as a query parameter
to send to a specific person, or personUid=* to send to all people on the account.
If no personUid is provided, the email is sent to the primary contact.
 */
export const useAccountSendConfirmationEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof accountSendConfirmationEmail>>, TError,{accountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof accountSendConfirmationEmail>>,
        TError,
        {accountUid: string | null},
        TContext
      > => {

      const mutationOptions = getAccountSendConfirmationEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieves all the people associated with your account.
 */
export const personGetAllPeople = (
    params?: PersonGetAllPeopleParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Person[]>(
      {url: `/api/v1/crm/people`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getPersonGetAllPeopleQueryKey = (params?: PersonGetAllPeopleParams,) => {
    return [
    `/api/v1/crm/people`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getPersonGetAllPeopleQueryOptions = <TData = Awaited<ReturnType<typeof personGetAllPeople>>, TError = void>(params?: PersonGetAllPeopleParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof personGetAllPeople>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPersonGetAllPeopleQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof personGetAllPeople>>> = ({ signal }) => personGetAllPeople(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof personGetAllPeople>>, TError, TData> & { queryKey: QueryKey }
}

export type PersonGetAllPeopleQueryResult = NonNullable<Awaited<ReturnType<typeof personGetAllPeople>>>
export type PersonGetAllPeopleQueryError = void


/**
 * @summary Retrieves all the people associated with your account.
 */

export function usePersonGetAllPeople<TData = Awaited<ReturnType<typeof personGetAllPeople>>, TError = void>(
 params?: PersonGetAllPeopleParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof personGetAllPeople>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPersonGetAllPeopleQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add a new person.
 */
export const personAddPerson = (
    personAddPersonBody: PersonAddPersonBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Person>(
      {url: `/api/v1/crm/people`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: personAddPersonBody, signal
    },
      options);
    }
  


export const getPersonAddPersonMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personAddPerson>>, TError,{data: PersonAddPersonBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof personAddPerson>>, TError,{data: PersonAddPersonBody}, TContext> => {

const mutationKey = ['personAddPerson'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof personAddPerson>>, {data: PersonAddPersonBody}> = (props) => {
          const {data} = props ?? {};

          return  personAddPerson(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PersonAddPersonMutationResult = NonNullable<Awaited<ReturnType<typeof personAddPerson>>>
    export type PersonAddPersonMutationBody = PersonAddPersonBody
    export type PersonAddPersonMutationError = void

    /**
 * @summary Add a new person.
 */
export const usePersonAddPerson = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personAddPerson>>, TError,{data: PersonAddPersonBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof personAddPerson>>,
        TError,
        {data: PersonAddPersonBody},
        TContext
      > => {

      const mutationOptions = getPersonAddPersonMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieves a person.
 */
export const personGetPerson = (
    personUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Person>(
      {url: `/api/v1/crm/people/${personUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getPersonGetPersonQueryKey = (personUid?: string | null,) => {
    return [
    `/api/v1/crm/people/${personUid}`
    ] as const;
    }

    
export const getPersonGetPersonQueryOptions = <TData = Awaited<ReturnType<typeof personGetPerson>>, TError = void>(personUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof personGetPerson>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPersonGetPersonQueryKey(personUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof personGetPerson>>> = ({ signal }) => personGetPerson(personUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(personUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof personGetPerson>>, TError, TData> & { queryKey: QueryKey }
}

export type PersonGetPersonQueryResult = NonNullable<Awaited<ReturnType<typeof personGetPerson>>>
export type PersonGetPersonQueryError = void


/**
 * @summary Retrieves a person.
 */

export function usePersonGetPerson<TData = Awaited<ReturnType<typeof personGetPerson>>, TError = void>(
 personUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof personGetPerson>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPersonGetPersonQueryOptions(personUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Update a person record. You can update one or multiple properties on the object.
Any property that you include in the json schema will be updated.
To update custom properties just include them in the same way that they are included when you do a get on the object.
 */
export const personUpdatePerson = (
    personUid: string | null,
    personUpdatePersonBody: PersonUpdatePersonBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Person>(
      {url: `/api/v1/crm/people/${personUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: personUpdatePersonBody
    },
      options);
    }
  


export const getPersonUpdatePersonMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personUpdatePerson>>, TError,{personUid: string | null;data: PersonUpdatePersonBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof personUpdatePerson>>, TError,{personUid: string | null;data: PersonUpdatePersonBody}, TContext> => {

const mutationKey = ['personUpdatePerson'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof personUpdatePerson>>, {personUid: string | null;data: PersonUpdatePersonBody}> = (props) => {
          const {personUid,data} = props ?? {};

          return  personUpdatePerson(personUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PersonUpdatePersonMutationResult = NonNullable<Awaited<ReturnType<typeof personUpdatePerson>>>
    export type PersonUpdatePersonMutationBody = PersonUpdatePersonBody
    export type PersonUpdatePersonMutationError = void

    /**
 * @summary Update a person record. You can update one or multiple properties on the object.
Any property that you include in the json schema will be updated.
To update custom properties just include them in the same way that they are included when you do a get on the object.
 */
export const usePersonUpdatePerson = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personUpdatePerson>>, TError,{personUid: string | null;data: PersonUpdatePersonBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof personUpdatePerson>>,
        TError,
        {personUid: string | null;data: PersonUpdatePersonBody},
        TContext
      > => {

      const mutationOptions = getPersonUpdatePersonMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a person record.
 */
export const personDeletePerson = (
    personUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/people/${personUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getPersonDeletePersonMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personDeletePerson>>, TError,{personUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof personDeletePerson>>, TError,{personUid: string | null}, TContext> => {

const mutationKey = ['personDeletePerson'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof personDeletePerson>>, {personUid: string | null}> = (props) => {
          const {personUid} = props ?? {};

          return  personDeletePerson(personUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PersonDeletePersonMutationResult = NonNullable<Awaited<ReturnType<typeof personDeletePerson>>>
    
    export type PersonDeletePersonMutationError = void

    /**
 * @summary Delete a person record.
 */
export const usePersonDeletePerson = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personDeletePerson>>, TError,{personUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof personDeletePerson>>,
        TError,
        {personUid: string | null},
        TContext
      > => {

      const mutationOptions = getPersonDeletePersonMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Set a temporary password for a user. The user needs to update the password with the next login.
 */
export const personSetTemporaryPassword = (
    personUid: string | null,
    personSetTemporaryPasswordBody: PersonSetTemporaryPasswordBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/people/${personUid}/setTemporaryPassword`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: personSetTemporaryPasswordBody,
        responseType: 'blob'
    },
      options);
    }
  


export const getPersonSetTemporaryPasswordMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personSetTemporaryPassword>>, TError,{personUid: string | null;data: PersonSetTemporaryPasswordBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof personSetTemporaryPassword>>, TError,{personUid: string | null;data: PersonSetTemporaryPasswordBody}, TContext> => {

const mutationKey = ['personSetTemporaryPassword'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof personSetTemporaryPassword>>, {personUid: string | null;data: PersonSetTemporaryPasswordBody}> = (props) => {
          const {personUid,data} = props ?? {};

          return  personSetTemporaryPassword(personUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PersonSetTemporaryPasswordMutationResult = NonNullable<Awaited<ReturnType<typeof personSetTemporaryPassword>>>
    export type PersonSetTemporaryPasswordMutationBody = PersonSetTemporaryPasswordBody
    export type PersonSetTemporaryPasswordMutationError = void

    /**
 * @summary Set a temporary password for a user. The user needs to update the password with the next login.
 */
export const usePersonSetTemporaryPassword = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personSetTemporaryPassword>>, TError,{personUid: string | null;data: PersonSetTemporaryPasswordBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof personSetTemporaryPassword>>,
        TError,
        {personUid: string | null;data: PersonSetTemporaryPasswordBody},
        TContext
      > => {

      const mutationOptions = getPersonSetTemporaryPasswordMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Initiate the forgot password flow by sending an email to the user with a link to a page
where they can reset their password. The reset password token in the link is valid for 30 minutes.
 */
export const personForgotPassword = (
    personForgotPasswordBody: PersonForgotPasswordBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/crm/people/forgotPassword`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: personForgotPasswordBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getPersonForgotPasswordMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personForgotPassword>>, TError,{data: PersonForgotPasswordBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof personForgotPassword>>, TError,{data: PersonForgotPasswordBody}, TContext> => {

const mutationKey = ['personForgotPassword'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof personForgotPassword>>, {data: PersonForgotPasswordBody}> = (props) => {
          const {data} = props ?? {};

          return  personForgotPassword(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PersonForgotPasswordMutationResult = NonNullable<Awaited<ReturnType<typeof personForgotPassword>>>
    export type PersonForgotPasswordMutationBody = PersonForgotPasswordBody
    export type PersonForgotPasswordMutationError = unknown

    /**
 * @summary Initiate the forgot password flow by sending an email to the user with a link to a page
where they can reset their password. The reset password token in the link is valid for 30 minutes.
 */
export const usePersonForgotPassword = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof personForgotPassword>>, TError,{data: PersonForgotPasswordBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof personForgotPassword>>,
        TError,
        {data: PersonForgotPasswordBody},
        TContext
      > => {

      const mutationOptions = getPersonForgotPasswordMutationOptions(options);

      return useMutation(mutationOptions);
    }
    