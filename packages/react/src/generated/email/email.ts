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
  BroadcastCampaign,
  CampaignAddBroadcastEmailBody,
  CampaignSendTestCampaignEmailBody,
  CampaignUpdateBroadcastEmailBody,
  EmailListAddSubscriptionBody,
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
 * @summary Retrieves all non-archived broadcast campaigns.
 */
export const campaignGetAllBroadcastEmails = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<BroadcastCampaign[]>(
      {url: `/api/v1/email/campaigns/broadcasts`, method: 'GET', signal
    },
      options);
    }
  



export const getCampaignGetAllBroadcastEmailsQueryKey = () => {
    return [
    `/api/v1/email/campaigns/broadcasts`
    ] as const;
    }

    
export const getCampaignGetAllBroadcastEmailsQueryOptions = <TData = Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError = void>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCampaignGetAllBroadcastEmailsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>> = ({ signal }) => campaignGetAllBroadcastEmails(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError, TData> & { queryKey: QueryKey }
}

export type CampaignGetAllBroadcastEmailsQueryResult = NonNullable<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>>
export type CampaignGetAllBroadcastEmailsQueryError = void


/**
 * @summary Retrieves all non-archived broadcast campaigns.
 */

export function useCampaignGetAllBroadcastEmails<TData = Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError = void>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof campaignGetAllBroadcastEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCampaignGetAllBroadcastEmailsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * To copy an existing broadcast, retrieve it and pass its data as the request body — the
Uid, SendDateTime, and message counts are automatically reset. Recipients can be
specified using EmailListUids and SegmentUids instead of populating RecipientData
directly. If both are provided, they are merged.
 * @summary Create a new broadcast campaign.
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
 * @summary Create a new broadcast campaign.
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
 * @summary Retrieves a single broadcast campaign by its Uid.
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
 * @summary Retrieves a single broadcast campaign by its Uid.
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
 * Setting SendDateTime to a future date schedules the broadcast for sending and its status
changes to Pending. Clearing SendDateTime unschedules the broadcast. Recipients can be
specified using EmailListUids and SegmentUids instead of populating RecipientData
directly. If both are provided, they are merged.
 * @summary Update a broadcast campaign.
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
 * @summary Update a broadcast campaign.
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
 * Only campaigns in Draft or Pending status can be deleted. Campaigns that have been
processed should be archived instead.
 * @summary Delete a broadcast campaign.
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
 * @summary Delete a broadcast campaign.
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
 * @summary Unschedules a pending broadcast campaign, reverting its status to Draft.
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
 * @summary Unschedules a pending broadcast campaign, reverting its status to Draft.
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
 * @summary Archives a broadcast campaign. Archived campaigns are excluded from the default list results.
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
 * @summary Archives a broadcast campaign. Archived campaigns are excluded from the default list results.
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
 * @summary Send a test email for a broadcast campaign.
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
 * @summary Send a test email for a broadcast campaign.
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
 * @summary Retrieves all the people subscribing to an email list.
 */
export const emailListGetAllSubscriptions = (
    emailListUid: string | null,
    params?: EmailListGetAllSubscriptionsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<EmailListPerson[]>(
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
 * @summary Retrieves all the people subscribing to an email list.
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
    