// @ts-nocheck
import {
  useMutation,
  useQuery
} from '../../query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '../../query';

import type {
  BroadcastCampaign,
  CampaignAddBroadcastEmailBody,
  CampaignGetAllBroadcastEmails200,
  CampaignGetAllBroadcastEmailsParams,
  CampaignSendTestCampaignEmailBody,
  CampaignUpdateBroadcastEmailBody,
  DripCampaign,
  DripCampaignAddDripCampaignBody,
  DripCampaignAddDripCampaignMessageBody,
  DripCampaignGetAllDripCampaigns200,
  DripCampaignGetAllDripCampaignsParams,
  DripCampaignMessage,
  DripCampaignSendTestCampaignEmailBody,
  DripCampaignUpdateDripCampaignBody,
  DripCampaignUpdateDripCampaignMessageBody,
  EmailListAddSubscriptionBody,
  EmailListGetAllSubscriptions200,
  EmailListGetAllSubscriptionsParams,
  EmailListPerson
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
 * @summary Retrieve all drip campaigns.
 */
export const dripCampaignGetAllDripCampaigns = (
    params?: DripCampaignGetAllDripCampaignsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DripCampaignGetAllDripCampaigns200>(
      {url: `/api/v1/email/campaigns/drips`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getDripCampaignGetAllDripCampaignsQueryKey = (params?: DripCampaignGetAllDripCampaignsParams,) => {
    return [
    `/api/v1/email/campaigns/drips`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getDripCampaignGetAllDripCampaignsQueryOptions = <TData = Awaited<ReturnType<typeof dripCampaignGetAllDripCampaigns>>, TError = void>(params?: DripCampaignGetAllDripCampaignsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetAllDripCampaigns>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDripCampaignGetAllDripCampaignsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof dripCampaignGetAllDripCampaigns>>> = ({ signal }) => dripCampaignGetAllDripCampaigns(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetAllDripCampaigns>>, TError, TData> & { queryKey: QueryKey }
}

export type DripCampaignGetAllDripCampaignsQueryResult = NonNullable<Awaited<ReturnType<typeof dripCampaignGetAllDripCampaigns>>>
export type DripCampaignGetAllDripCampaignsQueryError = void


/**
 * @summary Retrieve all drip campaigns.
 */

export function useDripCampaignGetAllDripCampaigns<TData = Awaited<ReturnType<typeof dripCampaignGetAllDripCampaigns>>, TError = void>(
 params?: DripCampaignGetAllDripCampaignsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetAllDripCampaigns>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDripCampaignGetAllDripCampaignsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * To copy an existing drip campaign, retrieve it and pass its data as the request body — the
Uid and per-message counts are automatically reset. Messages can be supplied inline via
DripCampaignMessages, or added later with the messages endpoint. Each inline message's Name
defaults to its position (e.g. "Message 1") when omitted.
 * @summary Create a new drip campaign.
 */
export const dripCampaignAddDripCampaign = (
    dripCampaignAddDripCampaignBody: NonReadonly<DripCampaignAddDripCampaignBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DripCampaign>(
      {url: `/api/v1/email/campaigns/drips`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dripCampaignAddDripCampaignBody, signal
    },
      options);
    }
  


export const getDripCampaignAddDripCampaignMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignAddDripCampaign>>, TError,{data: NonReadonly<DripCampaignAddDripCampaignBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dripCampaignAddDripCampaign>>, TError,{data: NonReadonly<DripCampaignAddDripCampaignBody>}, TContext> => {

const mutationKey = ['dripCampaignAddDripCampaign'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dripCampaignAddDripCampaign>>, {data: NonReadonly<DripCampaignAddDripCampaignBody>}> = (props) => {
          const {data} = props ?? {};

          return  dripCampaignAddDripCampaign(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DripCampaignAddDripCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof dripCampaignAddDripCampaign>>>
    export type DripCampaignAddDripCampaignMutationBody = NonReadonly<DripCampaignAddDripCampaignBody>
    export type DripCampaignAddDripCampaignMutationError = void

    /**
 * @summary Create a new drip campaign.
 */
export const useDripCampaignAddDripCampaign = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignAddDripCampaign>>, TError,{data: NonReadonly<DripCampaignAddDripCampaignBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dripCampaignAddDripCampaign>>,
        TError,
        {data: NonReadonly<DripCampaignAddDripCampaignBody>},
        TContext
      > => {

      const mutationOptions = getDripCampaignAddDripCampaignMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a drip campaign.
 */
export const dripCampaignGetDripCampaign = (
    dripCampaignUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DripCampaign>(
      {url: `/api/v1/email/campaigns/drips/${dripCampaignUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getDripCampaignGetDripCampaignQueryKey = (dripCampaignUid?: string | null,) => {
    return [
    `/api/v1/email/campaigns/drips/${dripCampaignUid}`
    ] as const;
    }

    
export const getDripCampaignGetDripCampaignQueryOptions = <TData = Awaited<ReturnType<typeof dripCampaignGetDripCampaign>>, TError = void>(dripCampaignUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetDripCampaign>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDripCampaignGetDripCampaignQueryKey(dripCampaignUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof dripCampaignGetDripCampaign>>> = ({ signal }) => dripCampaignGetDripCampaign(dripCampaignUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(dripCampaignUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetDripCampaign>>, TError, TData> & { queryKey: QueryKey }
}

export type DripCampaignGetDripCampaignQueryResult = NonNullable<Awaited<ReturnType<typeof dripCampaignGetDripCampaign>>>
export type DripCampaignGetDripCampaignQueryError = void


/**
 * @summary Retrieve a drip campaign.
 */

export function useDripCampaignGetDripCampaign<TData = Awaited<ReturnType<typeof dripCampaignGetDripCampaign>>, TError = void>(
 dripCampaignUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetDripCampaign>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDripCampaignGetDripCampaignQueryOptions(dripCampaignUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Activating a drip campaign (setting IsActive) begins sending its messages to members.
StartDripToExistingMembers controls whether members already in the campaign receive the
messages or only members added going forward.
 * @summary Update a drip campaign.
 */
export const dripCampaignUpdateDripCampaign = (
    dripCampaignUid: string | null,
    dripCampaignUpdateDripCampaignBody: NonReadonly<DripCampaignUpdateDripCampaignBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<DripCampaign>(
      {url: `/api/v1/email/campaigns/drips/${dripCampaignUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dripCampaignUpdateDripCampaignBody
    },
      options);
    }
  


export const getDripCampaignUpdateDripCampaignMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaign>>, TError,{dripCampaignUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaign>>, TError,{dripCampaignUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignBody>}, TContext> => {

const mutationKey = ['dripCampaignUpdateDripCampaign'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaign>>, {dripCampaignUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignBody>}> = (props) => {
          const {dripCampaignUid,data} = props ?? {};

          return  dripCampaignUpdateDripCampaign(dripCampaignUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DripCampaignUpdateDripCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaign>>>
    export type DripCampaignUpdateDripCampaignMutationBody = NonReadonly<DripCampaignUpdateDripCampaignBody>
    export type DripCampaignUpdateDripCampaignMutationError = void

    /**
 * @summary Update a drip campaign.
 */
export const useDripCampaignUpdateDripCampaign = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaign>>, TError,{dripCampaignUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dripCampaignUpdateDripCampaign>>,
        TError,
        {dripCampaignUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignBody>},
        TContext
      > => {

      const mutationOptions = getDripCampaignUpdateDripCampaignMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a drip campaign.
 */
export const dripCampaignDeleteDripCampaign = (
    dripCampaignUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/email/campaigns/drips/${dripCampaignUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getDripCampaignDeleteDripCampaignMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaign>>, TError,{dripCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaign>>, TError,{dripCampaignUid: string | null}, TContext> => {

const mutationKey = ['dripCampaignDeleteDripCampaign'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaign>>, {dripCampaignUid: string | null}> = (props) => {
          const {dripCampaignUid} = props ?? {};

          return  dripCampaignDeleteDripCampaign(dripCampaignUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DripCampaignDeleteDripCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaign>>>
    
    export type DripCampaignDeleteDripCampaignMutationError = void

    /**
 * @summary Delete a drip campaign.
 */
export const useDripCampaignDeleteDripCampaign = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaign>>, TError,{dripCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dripCampaignDeleteDripCampaign>>,
        TError,
        {dripCampaignUid: string | null},
        TContext
      > => {

      const mutationOptions = getDripCampaignDeleteDripCampaignMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Adding a message deactivates the drip campaign so its schedule can be reviewed before it
resumes sending. Use DelayInHours to control how long after the trigger the message is sent.
 * @summary Add a message to a drip campaign.
 */
export const dripCampaignAddDripCampaignMessage = (
    dripCampaignUid: string | null,
    dripCampaignAddDripCampaignMessageBody: NonReadonly<DripCampaignAddDripCampaignMessageBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DripCampaignMessage>(
      {url: `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dripCampaignAddDripCampaignMessageBody, signal
    },
      options);
    }
  


export const getDripCampaignAddDripCampaignMessageMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignAddDripCampaignMessage>>, TError,{dripCampaignUid: string | null;data: NonReadonly<DripCampaignAddDripCampaignMessageBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dripCampaignAddDripCampaignMessage>>, TError,{dripCampaignUid: string | null;data: NonReadonly<DripCampaignAddDripCampaignMessageBody>}, TContext> => {

const mutationKey = ['dripCampaignAddDripCampaignMessage'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dripCampaignAddDripCampaignMessage>>, {dripCampaignUid: string | null;data: NonReadonly<DripCampaignAddDripCampaignMessageBody>}> = (props) => {
          const {dripCampaignUid,data} = props ?? {};

          return  dripCampaignAddDripCampaignMessage(dripCampaignUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DripCampaignAddDripCampaignMessageMutationResult = NonNullable<Awaited<ReturnType<typeof dripCampaignAddDripCampaignMessage>>>
    export type DripCampaignAddDripCampaignMessageMutationBody = NonReadonly<DripCampaignAddDripCampaignMessageBody>
    export type DripCampaignAddDripCampaignMessageMutationError = void

    /**
 * @summary Add a message to a drip campaign.
 */
export const useDripCampaignAddDripCampaignMessage = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignAddDripCampaignMessage>>, TError,{dripCampaignUid: string | null;data: NonReadonly<DripCampaignAddDripCampaignMessageBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dripCampaignAddDripCampaignMessage>>,
        TError,
        {dripCampaignUid: string | null;data: NonReadonly<DripCampaignAddDripCampaignMessageBody>},
        TContext
      > => {

      const mutationOptions = getDripCampaignAddDripCampaignMessageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a message from a drip campaign.
 */
export const dripCampaignGetDripCampaignMessage = (
    dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DripCampaignMessage>(
      {url: `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages/${dripCampaignMessageUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getDripCampaignGetDripCampaignMessageQueryKey = (dripCampaignUid?: string | null,
    dripCampaignMessageUid?: string | null,) => {
    return [
    `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages/${dripCampaignMessageUid}`
    ] as const;
    }

    
export const getDripCampaignGetDripCampaignMessageQueryOptions = <TData = Awaited<ReturnType<typeof dripCampaignGetDripCampaignMessage>>, TError = void>(dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetDripCampaignMessage>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDripCampaignGetDripCampaignMessageQueryKey(dripCampaignUid,dripCampaignMessageUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof dripCampaignGetDripCampaignMessage>>> = ({ signal }) => dripCampaignGetDripCampaignMessage(dripCampaignUid,dripCampaignMessageUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(dripCampaignUid && dripCampaignMessageUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetDripCampaignMessage>>, TError, TData> & { queryKey: QueryKey }
}

export type DripCampaignGetDripCampaignMessageQueryResult = NonNullable<Awaited<ReturnType<typeof dripCampaignGetDripCampaignMessage>>>
export type DripCampaignGetDripCampaignMessageQueryError = void


/**
 * @summary Retrieve a message from a drip campaign.
 */

export function useDripCampaignGetDripCampaignMessage<TData = Awaited<ReturnType<typeof dripCampaignGetDripCampaignMessage>>, TError = void>(
 dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof dripCampaignGetDripCampaignMessage>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDripCampaignGetDripCampaignMessageQueryOptions(dripCampaignUid,dripCampaignMessageUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Changing DelayInHours on an active drip campaign reschedules the drip for its existing
members. The DripCampaign Uid on the body, if supplied, must match the dripCampaignUid in
the URL, and the message Uid on the body must match the dripCampaignMessageUid in the URL.
 * @summary Update a message in a drip campaign.
 */
export const dripCampaignUpdateDripCampaignMessage = (
    dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null,
    dripCampaignUpdateDripCampaignMessageBody: NonReadonly<DripCampaignUpdateDripCampaignMessageBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<DripCampaignMessage>(
      {url: `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages/${dripCampaignMessageUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dripCampaignUpdateDripCampaignMessageBody
    },
      options);
    }
  


export const getDripCampaignUpdateDripCampaignMessageMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaignMessage>>, TError,{dripCampaignUid: string | null;dripCampaignMessageUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignMessageBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaignMessage>>, TError,{dripCampaignUid: string | null;dripCampaignMessageUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignMessageBody>}, TContext> => {

const mutationKey = ['dripCampaignUpdateDripCampaignMessage'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaignMessage>>, {dripCampaignUid: string | null;dripCampaignMessageUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignMessageBody>}> = (props) => {
          const {dripCampaignUid,dripCampaignMessageUid,data} = props ?? {};

          return  dripCampaignUpdateDripCampaignMessage(dripCampaignUid,dripCampaignMessageUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DripCampaignUpdateDripCampaignMessageMutationResult = NonNullable<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaignMessage>>>
    export type DripCampaignUpdateDripCampaignMessageMutationBody = NonReadonly<DripCampaignUpdateDripCampaignMessageBody>
    export type DripCampaignUpdateDripCampaignMessageMutationError = void

    /**
 * @summary Update a message in a drip campaign.
 */
export const useDripCampaignUpdateDripCampaignMessage = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignUpdateDripCampaignMessage>>, TError,{dripCampaignUid: string | null;dripCampaignMessageUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignMessageBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dripCampaignUpdateDripCampaignMessage>>,
        TError,
        {dripCampaignUid: string | null;dripCampaignMessageUid: string | null;data: NonReadonly<DripCampaignUpdateDripCampaignMessageBody>},
        TContext
      > => {

      const mutationOptions = getDripCampaignUpdateDripCampaignMessageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Deleting a message deactivates the drip campaign (like adding a message) so its schedule can be
reviewed before it resumes. Reactivate the campaign to resume sending.
 * @summary Delete a message from a drip campaign.
 */
export const dripCampaignDeleteDripCampaignMessage = (
    dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages/${dripCampaignMessageUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getDripCampaignDeleteDripCampaignMessageMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaignMessage>>, TError,{dripCampaignUid: string | null;dripCampaignMessageUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaignMessage>>, TError,{dripCampaignUid: string | null;dripCampaignMessageUid: string | null}, TContext> => {

const mutationKey = ['dripCampaignDeleteDripCampaignMessage'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaignMessage>>, {dripCampaignUid: string | null;dripCampaignMessageUid: string | null}> = (props) => {
          const {dripCampaignUid,dripCampaignMessageUid} = props ?? {};

          return  dripCampaignDeleteDripCampaignMessage(dripCampaignUid,dripCampaignMessageUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DripCampaignDeleteDripCampaignMessageMutationResult = NonNullable<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaignMessage>>>
    
    export type DripCampaignDeleteDripCampaignMessageMutationError = void

    /**
 * @summary Delete a message from a drip campaign.
 */
export const useDripCampaignDeleteDripCampaignMessage = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignDeleteDripCampaignMessage>>, TError,{dripCampaignUid: string | null;dripCampaignMessageUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dripCampaignDeleteDripCampaignMessage>>,
        TError,
        {dripCampaignUid: string | null;dripCampaignMessageUid: string | null},
        TContext
      > => {

      const mutationOptions = getDripCampaignDeleteDripCampaignMessageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Sends the drip campaign to the logged-in user and optionally to additional recipients.
Additional recipients are specified as a list of person Uids and must belong to the same
account as the logged-in user. Sending is skipped when the account is restricted due to
unpaid invoices.
 * @summary Send a test email for a drip campaign.
 */
export const dripCampaignSendTestCampaignEmail = (
    dripCampaignSendTestCampaignEmailBody: DripCampaignSendTestCampaignEmailBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/email/campaigns/drips/sendtestemail`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dripCampaignSendTestCampaignEmailBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getDripCampaignSendTestCampaignEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignSendTestCampaignEmail>>, TError,{data: DripCampaignSendTestCampaignEmailBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof dripCampaignSendTestCampaignEmail>>, TError,{data: DripCampaignSendTestCampaignEmailBody}, TContext> => {

const mutationKey = ['dripCampaignSendTestCampaignEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dripCampaignSendTestCampaignEmail>>, {data: DripCampaignSendTestCampaignEmailBody}> = (props) => {
          const {data} = props ?? {};

          return  dripCampaignSendTestCampaignEmail(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DripCampaignSendTestCampaignEmailMutationResult = NonNullable<Awaited<ReturnType<typeof dripCampaignSendTestCampaignEmail>>>
    export type DripCampaignSendTestCampaignEmailMutationBody = DripCampaignSendTestCampaignEmailBody
    export type DripCampaignSendTestCampaignEmailMutationError = void

    /**
 * @summary Send a test email for a drip campaign.
 */
export const useDripCampaignSendTestCampaignEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dripCampaignSendTestCampaignEmail>>, TError,{data: DripCampaignSendTestCampaignEmailBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof dripCampaignSendTestCampaignEmail>>,
        TError,
        {data: DripCampaignSendTestCampaignEmailBody},
        TContext
      > => {

      const mutationOptions = getDripCampaignSendTestCampaignEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Archived broadcasts are excluded.
 * @summary Retrieve all broadcasts.
 */
export const campaignGetAllBroadcastEmails = (
    params?: CampaignGetAllBroadcastEmailsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<CampaignGetAllBroadcastEmails200>(
      {url: `/api/v1/email/campaigns/broadcasts`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getCampaignGetAllBroadcastEmailsQueryKey = (params?: CampaignGetAllBroadcastEmailsParams,) => {
    return [
    `/api/v1/email/campaigns/broadcasts`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getCampaignGetAllBroadcastEmailsQueryOptions = <TData = Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError = void>(params?: CampaignGetAllBroadcastEmailsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCampaignGetAllBroadcastEmailsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>> = ({ signal }) => campaignGetAllBroadcastEmails(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError, TData> & { queryKey: QueryKey }
}

export type CampaignGetAllBroadcastEmailsQueryResult = NonNullable<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>>
export type CampaignGetAllBroadcastEmailsQueryError = void


/**
 * @summary Retrieve all broadcasts.
 */

export function useCampaignGetAllBroadcastEmails<TData = Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError = void>(
 params?: CampaignGetAllBroadcastEmailsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCampaignGetAllBroadcastEmailsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * To copy an existing broadcast, retrieve it and pass its data as the request body — the
Uid, SendDateTime, and message counts are automatically reset. A new broadcast is always
created as a Draft; schedule it by updating it with a SendDateTime (see the update endpoint).
            
Specify who the broadcast is sent to with EmailListUids and/or SegmentUids: EmailListUids is
an array of email list Uids (from GET /api/v1/email/lists) and SegmentUids is an array of
segment Uids (from GET /api/v1/crm/segments). These are the recommended way to set recipients
— they are merged into the underlying RecipientData for you, so callers (including LLM tools)
do not need to build that structure by hand; unknown Uids are rejected. RecipientData may
still be supplied directly (a JSON string of the form
{"BroadcastRecipientsEmailLists":[{"Uid":"..."}],"BroadcastRecipientsSegments":[{"Uid":"..."}]});
when both are present they are merged.
            
Message.Body is rendered as a Liquid template, so it may include merge tags such as
{{ Person.FirstName }}; unknown {{ }} tokens render as empty text. An inline-styled HTML
fragment is recommended. Message.Design (the drag-and-drop editor state) is optional — when
omitted it is derived automatically, so callers (including LLM tools) do not need to
understand it. Use Message.PreviewText for inbox preview text rather than an in-body
preheader.
            
When Body is a content fragment with no Design, it is composed into the account's API
email layout — a branded header and footer that includes the unsubscribe and
manage-subscriptions links — and the composed result is what is sent and opened in the
editor. Do not add your own unsubscribe link in this case; the layout provides one. The
layout is editable in the app; TemplateUid selects a specific layout template when the
account has more than one.
            
The layout is NOT applied when a Design is supplied or when the body is a complex full
HTML document (Outlook conditional comments, stylesheet links) — in those cases the body
is sent exactly as supplied, and you must include a visible unsubscribe link in it
yourself: add {{ UnsubscribeLink }} (a ready-made anchor) or {{ UnsubscribeUrl }} (the raw
URL) where you want it. Its presence is not validated. A one-click List-Unsubscribe header
is always added, but most anti-spam laws (e.g. CAN-SPAM) also require a visible
unsubscribe link in the body.
 * @summary Create a new broadcast.
 */
export const campaignAddBroadcastEmail = (
    campaignAddBroadcastEmailBody: NonReadonly<CampaignAddBroadcastEmailBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<BroadcastCampaign>(
      {url: `/api/v1/email/campaigns/broadcasts`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: campaignAddBroadcastEmailBody, signal
    },
      options);
    }
  


export const getCampaignAddBroadcastEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignAddBroadcastEmail>>, TError,{data: NonReadonly<CampaignAddBroadcastEmailBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof campaignAddBroadcastEmail>>, TError,{data: NonReadonly<CampaignAddBroadcastEmailBody>}, TContext> => {

const mutationKey = ['campaignAddBroadcastEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof campaignAddBroadcastEmail>>, {data: NonReadonly<CampaignAddBroadcastEmailBody>}> = (props) => {
          const {data} = props ?? {};

          return  campaignAddBroadcastEmail(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CampaignAddBroadcastEmailMutationResult = NonNullable<Awaited<ReturnType<typeof campaignAddBroadcastEmail>>>
    export type CampaignAddBroadcastEmailMutationBody = NonReadonly<CampaignAddBroadcastEmailBody>
    export type CampaignAddBroadcastEmailMutationError = void

    /**
 * @summary Create a new broadcast.
 */
export const useCampaignAddBroadcastEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignAddBroadcastEmail>>, TError,{data: NonReadonly<CampaignAddBroadcastEmailBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof campaignAddBroadcastEmail>>,
        TError,
        {data: NonReadonly<CampaignAddBroadcastEmailBody>},
        TContext
      > => {

      const mutationOptions = getCampaignAddBroadcastEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a broadcast.
 */
export const campaignGetBroadcastEmail = (
    broadcastCampaignUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<BroadcastCampaign>(
      {url: `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getCampaignGetBroadcastEmailQueryKey = (broadcastCampaignUid?: string | null,) => {
    return [
    `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}`
    ] as const;
    }

    
export const getCampaignGetBroadcastEmailQueryOptions = <TData = Awaited<ReturnType<typeof campaignGetBroadcastEmail>>, TError = void>(broadcastCampaignUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof campaignGetBroadcastEmail>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCampaignGetBroadcastEmailQueryKey(broadcastCampaignUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof campaignGetBroadcastEmail>>> = ({ signal }) => campaignGetBroadcastEmail(broadcastCampaignUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(broadcastCampaignUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof campaignGetBroadcastEmail>>, TError, TData> & { queryKey: QueryKey }
}

export type CampaignGetBroadcastEmailQueryResult = NonNullable<Awaited<ReturnType<typeof campaignGetBroadcastEmail>>>
export type CampaignGetBroadcastEmailQueryError = void


/**
 * @summary Retrieve a broadcast.
 */

export function useCampaignGetBroadcastEmail<TData = Awaited<ReturnType<typeof campaignGetBroadcastEmail>>, TError = void>(
 broadcastCampaignUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof campaignGetBroadcastEmail>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCampaignGetBroadcastEmailQueryOptions(broadcastCampaignUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Setting SendDateTime to a future UTC date schedules the broadcast for sending and its status
changes to Pending. An account may only have 5 broadcasts scheduled or sending at one time;
scheduling beyond that is rejected until one finishes sending or is unscheduled. There is no
limit on the number of drafts. Clearing SendDateTime unschedules the broadcast. Recipients can be added
with EmailListUids and SegmentUids (see the create endpoint): on update these are merged onto
the broadcast's existing recipients and only ever add — to remove recipients or replace the
set, send RecipientData directly.
            
When changing Message.Body, omit Message.Design: it is regenerated from the new Body so the
drag-and-drop editor stays in sync. Sending a Design that was captured from an earlier
response alongside an edited Body would otherwise keep the stale design. A body that was
composed into the API email layout keeps the layout on such updates without duplicating
it — its content is re-composed into the layout — and a bare fragment is composed like on
create. See the create endpoint for how Body is rendered (Liquid), when the layout
applies, and the unsubscribe-token expectation when it does not.
 * @summary Update a broadcast.
 */
export const campaignUpdateBroadcastEmail = (
    broadcastCampaignUid: string | null,
    campaignUpdateBroadcastEmailBody: NonReadonly<CampaignUpdateBroadcastEmailBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<BroadcastCampaign>(
      {url: `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: campaignUpdateBroadcastEmailBody
    },
      options);
    }
  


export const getCampaignUpdateBroadcastEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignUpdateBroadcastEmail>>, TError,{broadcastCampaignUid: string | null;data: NonReadonly<CampaignUpdateBroadcastEmailBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof campaignUpdateBroadcastEmail>>, TError,{broadcastCampaignUid: string | null;data: NonReadonly<CampaignUpdateBroadcastEmailBody>}, TContext> => {

const mutationKey = ['campaignUpdateBroadcastEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof campaignUpdateBroadcastEmail>>, {broadcastCampaignUid: string | null;data: NonReadonly<CampaignUpdateBroadcastEmailBody>}> = (props) => {
          const {broadcastCampaignUid,data} = props ?? {};

          return  campaignUpdateBroadcastEmail(broadcastCampaignUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CampaignUpdateBroadcastEmailMutationResult = NonNullable<Awaited<ReturnType<typeof campaignUpdateBroadcastEmail>>>
    export type CampaignUpdateBroadcastEmailMutationBody = NonReadonly<CampaignUpdateBroadcastEmailBody>
    export type CampaignUpdateBroadcastEmailMutationError = void

    /**
 * @summary Update a broadcast.
 */
export const useCampaignUpdateBroadcastEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignUpdateBroadcastEmail>>, TError,{broadcastCampaignUid: string | null;data: NonReadonly<CampaignUpdateBroadcastEmailBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof campaignUpdateBroadcastEmail>>,
        TError,
        {broadcastCampaignUid: string | null;data: NonReadonly<CampaignUpdateBroadcastEmailBody>},
        TContext
      > => {

      const mutationOptions = getCampaignUpdateBroadcastEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Only broadcasts in Draft or Pending status can be deleted. Broadcasts that have been
processed should be archived instead.
 * @summary Delete a broadcast.
 */
export const campaignDeleteBroadcastCampaign = (
    broadcastCampaignUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getCampaignDeleteBroadcastCampaignMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignDeleteBroadcastCampaign>>, TError,{broadcastCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof campaignDeleteBroadcastCampaign>>, TError,{broadcastCampaignUid: string | null}, TContext> => {

const mutationKey = ['campaignDeleteBroadcastCampaign'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof campaignDeleteBroadcastCampaign>>, {broadcastCampaignUid: string | null}> = (props) => {
          const {broadcastCampaignUid} = props ?? {};

          return  campaignDeleteBroadcastCampaign(broadcastCampaignUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CampaignDeleteBroadcastCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof campaignDeleteBroadcastCampaign>>>
    
    export type CampaignDeleteBroadcastCampaignMutationError = void

    /**
 * @summary Delete a broadcast.
 */
export const useCampaignDeleteBroadcastCampaign = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignDeleteBroadcastCampaign>>, TError,{broadcastCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof campaignDeleteBroadcastCampaign>>,
        TError,
        {broadcastCampaignUid: string | null},
        TContext
      > => {

      const mutationOptions = getCampaignDeleteBroadcastCampaignMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Unschedules a pending broadcast, reverting its status to Draft.
 * @summary Unschedule a broadcast.
 */
export const campaignUnscheduleBroadcastEmail = (
    broadcastCampaignUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<BroadcastCampaign>(
      {url: `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}/unschedule`, method: 'POST', signal
    },
      options);
    }
  


export const getCampaignUnscheduleBroadcastEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignUnscheduleBroadcastEmail>>, TError,{broadcastCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof campaignUnscheduleBroadcastEmail>>, TError,{broadcastCampaignUid: string | null}, TContext> => {

const mutationKey = ['campaignUnscheduleBroadcastEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof campaignUnscheduleBroadcastEmail>>, {broadcastCampaignUid: string | null}> = (props) => {
          const {broadcastCampaignUid} = props ?? {};

          return  campaignUnscheduleBroadcastEmail(broadcastCampaignUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CampaignUnscheduleBroadcastEmailMutationResult = NonNullable<Awaited<ReturnType<typeof campaignUnscheduleBroadcastEmail>>>
    
    export type CampaignUnscheduleBroadcastEmailMutationError = void

    /**
 * @summary Unschedule a broadcast.
 */
export const useCampaignUnscheduleBroadcastEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignUnscheduleBroadcastEmail>>, TError,{broadcastCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof campaignUnscheduleBroadcastEmail>>,
        TError,
        {broadcastCampaignUid: string | null},
        TContext
      > => {

      const mutationOptions = getCampaignUnscheduleBroadcastEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Archived broadcasts are excluded from the default list results.
 * @summary Archive a broadcast.
 */
export const campaignArchiveBroadcastCampaign = (
    broadcastCampaignUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}/archive`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getCampaignArchiveBroadcastCampaignMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignArchiveBroadcastCampaign>>, TError,{broadcastCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof campaignArchiveBroadcastCampaign>>, TError,{broadcastCampaignUid: string | null}, TContext> => {

const mutationKey = ['campaignArchiveBroadcastCampaign'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof campaignArchiveBroadcastCampaign>>, {broadcastCampaignUid: string | null}> = (props) => {
          const {broadcastCampaignUid} = props ?? {};

          return  campaignArchiveBroadcastCampaign(broadcastCampaignUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CampaignArchiveBroadcastCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof campaignArchiveBroadcastCampaign>>>
    
    export type CampaignArchiveBroadcastCampaignMutationError = void

    /**
 * @summary Archive a broadcast.
 */
export const useCampaignArchiveBroadcastCampaign = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignArchiveBroadcastCampaign>>, TError,{broadcastCampaignUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof campaignArchiveBroadcastCampaign>>,
        TError,
        {broadcastCampaignUid: string | null},
        TContext
      > => {

      const mutationOptions = getCampaignArchiveBroadcastCampaignMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Sends to the logged-in user and optionally to additional recipients. Additional
recipients are specified as a list of person Uids and must belong to the same account
as the logged-in user.
 * @summary Send a test email for a broadcast.
 */
export const campaignSendTestCampaignEmail = (
    campaignSendTestCampaignEmailBody: CampaignSendTestCampaignEmailBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/email/campaigns/broadcasts/sendtestemail`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: campaignSendTestCampaignEmailBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getCampaignSendTestCampaignEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignSendTestCampaignEmail>>, TError,{data: CampaignSendTestCampaignEmailBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof campaignSendTestCampaignEmail>>, TError,{data: CampaignSendTestCampaignEmailBody}, TContext> => {

const mutationKey = ['campaignSendTestCampaignEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof campaignSendTestCampaignEmail>>, {data: CampaignSendTestCampaignEmailBody}> = (props) => {
          const {data} = props ?? {};

          return  campaignSendTestCampaignEmail(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CampaignSendTestCampaignEmailMutationResult = NonNullable<Awaited<ReturnType<typeof campaignSendTestCampaignEmail>>>
    export type CampaignSendTestCampaignEmailMutationBody = CampaignSendTestCampaignEmailBody
    export type CampaignSendTestCampaignEmailMutationError = void

    /**
 * @summary Send a test email for a broadcast.
 */
export const useCampaignSendTestCampaignEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof campaignSendTestCampaignEmail>>, TError,{data: CampaignSendTestCampaignEmailBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof campaignSendTestCampaignEmail>>,
        TError,
        {data: CampaignSendTestCampaignEmailBody},
        TContext
      > => {

      const mutationOptions = getCampaignSendTestCampaignEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all subscribers to an email list.
 */
export const emailListGetAllSubscriptions = (
    emailListUid: string | null,
    params?: EmailListGetAllSubscriptionsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<EmailListGetAllSubscriptions200>(
      {url: `/api/v1/email/lists/${emailListUid}/subscriptions`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getEmailListGetAllSubscriptionsQueryKey = (emailListUid?: string | null,
    params?: EmailListGetAllSubscriptionsParams,) => {
    return [
    `/api/v1/email/lists/${emailListUid}/subscriptions`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getEmailListGetAllSubscriptionsQueryOptions = <TData = Awaited<ReturnType<typeof emailListGetAllSubscriptions>>, TError = void>(emailListUid: string | null,
    params?: EmailListGetAllSubscriptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof emailListGetAllSubscriptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getEmailListGetAllSubscriptionsQueryKey(emailListUid,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof emailListGetAllSubscriptions>>> = ({ signal }) => emailListGetAllSubscriptions(emailListUid,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(emailListUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof emailListGetAllSubscriptions>>, TError, TData> & { queryKey: QueryKey }
}

export type EmailListGetAllSubscriptionsQueryResult = NonNullable<Awaited<ReturnType<typeof emailListGetAllSubscriptions>>>
export type EmailListGetAllSubscriptionsQueryError = void


/**
 * @summary Retrieve all subscribers to an email list.
 */

export function useEmailListGetAllSubscriptions<TData = Awaited<ReturnType<typeof emailListGetAllSubscriptions>>, TError = void>(
 emailListUid: string | null,
    params?: EmailListGetAllSubscriptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof emailListGetAllSubscriptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getEmailListGetAllSubscriptionsQueryOptions(emailListUid,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * To subscribe a new person, pass a Person object with an Email address. To subscribe an
existing person, pass a Person object with a Uid. The SendWelcomeEmail property
determines if the person is sent a welcome email and defaults to false.
 * @summary Subscribe a person to an email list.
 */
export const emailListAddSubscription = (
    emailListUid: string | null,
    emailListAddSubscriptionBody: NonReadonly<EmailListAddSubscriptionBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<EmailListPerson>(
      {url: `/api/v1/email/lists/${emailListUid}/subscriptions`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: emailListAddSubscriptionBody, signal
    },
      options);
    }
  


export const getEmailListAddSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof emailListAddSubscription>>, TError,{emailListUid: string | null;data: NonReadonly<EmailListAddSubscriptionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof emailListAddSubscription>>, TError,{emailListUid: string | null;data: NonReadonly<EmailListAddSubscriptionBody>}, TContext> => {

const mutationKey = ['emailListAddSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof emailListAddSubscription>>, {emailListUid: string | null;data: NonReadonly<EmailListAddSubscriptionBody>}> = (props) => {
          const {emailListUid,data} = props ?? {};

          return  emailListAddSubscription(emailListUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EmailListAddSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof emailListAddSubscription>>>
    export type EmailListAddSubscriptionMutationBody = NonReadonly<EmailListAddSubscriptionBody>
    export type EmailListAddSubscriptionMutationError = void

    /**
 * @summary Subscribe a person to an email list.
 */
export const useEmailListAddSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof emailListAddSubscription>>, TError,{emailListUid: string | null;data: NonReadonly<EmailListAddSubscriptionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof emailListAddSubscription>>,
        TError,
        {emailListUid: string | null;data: NonReadonly<EmailListAddSubscriptionBody>},
        TContext
      > => {

      const mutationOptions = getEmailListAddSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Remove a subscriber from an email list.
 */
export const emailListDeleteSubscription = (
    emailListUid: string | null,
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/email/lists/${emailListUid}/subscriptions/${subscriptionUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getEmailListDeleteSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof emailListDeleteSubscription>>, TError,{emailListUid: string | null;subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof emailListDeleteSubscription>>, TError,{emailListUid: string | null;subscriptionUid: string | null}, TContext> => {

const mutationKey = ['emailListDeleteSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof emailListDeleteSubscription>>, {emailListUid: string | null;subscriptionUid: string | null}> = (props) => {
          const {emailListUid,subscriptionUid} = props ?? {};

          return  emailListDeleteSubscription(emailListUid,subscriptionUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EmailListDeleteSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof emailListDeleteSubscription>>>
    
    export type EmailListDeleteSubscriptionMutationError = void

    /**
 * @summary Remove a subscriber from an email list.
 */
export const useEmailListDeleteSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof emailListDeleteSubscription>>, TError,{emailListUid: string | null;subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof emailListDeleteSubscription>>,
        TError,
        {emailListUid: string | null;subscriptionUid: string | null},
        TContext
      > => {

      const mutationOptions = getEmailListDeleteSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    