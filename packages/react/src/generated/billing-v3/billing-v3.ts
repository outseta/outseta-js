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
  ImportResult,
  StripeCoupon,
  StripeCouponsCreateBody,
  StripeCouponsGetAll200,
  StripeCouponsGetAllParams,
  StripeCouponsGetRedemptions200,
  StripeCouponsGetRedemptionsParams,
  StripeInvoice,
  StripeInvoiceLineItem,
  StripeInvoiceLineItemsGetAll200,
  StripeInvoiceLineItemsGetAllParams,
  StripeInvoicesChangeInvoiceStatusBody,
  StripeInvoicesGetAll200,
  StripeInvoicesGetAllParams,
  StripeInvoicesIssueInvoiceCreditBody,
  StripeInvoicesPostBody,
  StripePaymentMethod,
  StripePaymentMethodsGetAll200,
  StripePaymentMethodsGetAllParams,
  StripePrice,
  StripePricesGetAll200,
  StripePricesGetAllParams,
  StripeProduct,
  StripeProductFamiliesGetAll200,
  StripeProductFamiliesGetAllParams,
  StripeProductFamiliesPostBody,
  StripeProductFamiliesPutBody,
  StripeProductFamily,
  StripeProductsGetAll200,
  StripeProductsGetAllParams,
  StripeProductsPostBody,
  StripeProductsPutBody,
  StripePromotionCode,
  StripePromotionCodesCreateBody,
  StripePromotionCodesGetAll200,
  StripePromotionCodesGetAllParams,
  StripePromotionCodesUpdateBody,
  StripeSubscription,
  StripeSubscriptionsChangeBody,
  StripeSubscriptionsCreateBody,
  StripeSubscriptionsExtendTrialBody,
  StripeSubscriptionsGetAll200,
  StripeSubscriptionsGetAllParams,
  StripeSubscriptionsPauseCollectionBody,
  StripeSubscriptionsPreviewChangeBody
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
 * Pass accountUid in the query string to return only the line items on that account's
invoices.
 * @summary Retrieve all invoice line items.
 */
export const stripeInvoiceLineItemsGetAll = (
    params?: StripeInvoiceLineItemsGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeInvoiceLineItemsGetAll200>(
      {url: `/api/v1/billing/stripe/invoice-line-items`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripeInvoiceLineItemsGetAllQueryKey = (params?: StripeInvoiceLineItemsGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/invoice-line-items`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripeInvoiceLineItemsGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripeInvoiceLineItemsGetAll>>, TError = void>(params?: StripeInvoiceLineItemsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoiceLineItemsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeInvoiceLineItemsGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeInvoiceLineItemsGetAll>>> = ({ signal }) => stripeInvoiceLineItemsGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeInvoiceLineItemsGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeInvoiceLineItemsGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripeInvoiceLineItemsGetAll>>>
export type StripeInvoiceLineItemsGetAllQueryError = void


/**
 * @summary Retrieve all invoice line items.
 */

export function useStripeInvoiceLineItemsGetAll<TData = Awaited<ReturnType<typeof stripeInvoiceLineItemsGetAll>>, TError = void>(
 params?: StripeInvoiceLineItemsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoiceLineItemsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeInvoiceLineItemsGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
Access ends now. This sets the line item's EndDate and updates the account's products
and stage. The invoice is not changed.
 * @summary End the product access that a line item gives.
 */
export const stripeInvoiceLineItemsCancelAccess = (
    lineItemUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<StripeInvoiceLineItem>(
      {url: `/api/v1/billing/stripe/invoice-line-items/${lineItemUid}/cancel`, method: 'PUT'
    },
      options);
    }
  


export const getStripeInvoiceLineItemsCancelAccessMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoiceLineItemsCancelAccess>>, TError,{lineItemUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeInvoiceLineItemsCancelAccess>>, TError,{lineItemUid: string | null}, TContext> => {

const mutationKey = ['stripeInvoiceLineItemsCancelAccess'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeInvoiceLineItemsCancelAccess>>, {lineItemUid: string | null}> = (props) => {
          const {lineItemUid} = props ?? {};

          return  stripeInvoiceLineItemsCancelAccess(lineItemUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeInvoiceLineItemsCancelAccessMutationResult = NonNullable<Awaited<ReturnType<typeof stripeInvoiceLineItemsCancelAccess>>>
    
    export type StripeInvoiceLineItemsCancelAccessMutationError = void

    /**
 * @summary End the product access that a line item gives.
 */
export const useStripeInvoiceLineItemsCancelAccess = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoiceLineItemsCancelAccess>>, TError,{lineItemUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeInvoiceLineItemsCancelAccess>>,
        TError,
        {lineItemUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeInvoiceLineItemsCancelAccessMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * These are the payment methods saved in the connected Stripe account for each account.
Only display details are stored, such as the type, card brand, last 4 digits and
expiry. Full card and bank numbers are never stored.
 * @summary Retrieve all payment methods.
 */
export const stripePaymentMethodsGetAll = (
    params?: StripePaymentMethodsGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripePaymentMethodsGetAll200>(
      {url: `/api/v1/billing/stripe/payment-methods`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripePaymentMethodsGetAllQueryKey = (params?: StripePaymentMethodsGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/payment-methods`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripePaymentMethodsGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripePaymentMethodsGetAll>>, TError = void>(params?: StripePaymentMethodsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePaymentMethodsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripePaymentMethodsGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripePaymentMethodsGetAll>>> = ({ signal }) => stripePaymentMethodsGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripePaymentMethodsGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripePaymentMethodsGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripePaymentMethodsGetAll>>>
export type StripePaymentMethodsGetAllQueryError = void


/**
 * @summary Retrieve all payment methods.
 */

export function useStripePaymentMethodsGetAll<TData = Awaited<ReturnType<typeof stripePaymentMethodsGetAll>>, TError = void>(
 params?: StripePaymentMethodsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePaymentMethodsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripePaymentMethodsGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Retrieve a payment method.
 */
export const stripePaymentMethodsGet = (
    uid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripePaymentMethod>(
      {url: `/api/v1/billing/stripe/payment-methods/${uid}`, method: 'GET', signal
    },
      options);
    }
  



export const getStripePaymentMethodsGetQueryKey = (uid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/payment-methods/${uid}`
    ] as const;
    }

    
export const getStripePaymentMethodsGetQueryOptions = <TData = Awaited<ReturnType<typeof stripePaymentMethodsGet>>, TError = void>(uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePaymentMethodsGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripePaymentMethodsGetQueryKey(uid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripePaymentMethodsGet>>> = ({ signal }) => stripePaymentMethodsGet(uid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(uid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripePaymentMethodsGet>>, TError, TData> & { queryKey: QueryKey }
}

export type StripePaymentMethodsGetQueryResult = NonNullable<Awaited<ReturnType<typeof stripePaymentMethodsGet>>>
export type StripePaymentMethodsGetQueryError = void


/**
 * @summary Retrieve a payment method.
 */

export function useStripePaymentMethodsGet<TData = Awaited<ReturnType<typeof stripePaymentMethodsGet>>, TError = void>(
 uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePaymentMethodsGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripePaymentMethodsGetQueryOptions(uid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Prices are created and updated through their product.
 * @summary Retrieve all prices.
 */
export const stripePricesGetAll = (
    params?: StripePricesGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripePricesGetAll200>(
      {url: `/api/v1/billing/stripe/prices`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripePricesGetAllQueryKey = (params?: StripePricesGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/prices`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripePricesGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripePricesGetAll>>, TError = void>(params?: StripePricesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePricesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripePricesGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripePricesGetAll>>> = ({ signal }) => stripePricesGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripePricesGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripePricesGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripePricesGetAll>>>
export type StripePricesGetAllQueryError = void


/**
 * @summary Retrieve all prices.
 */

export function useStripePricesGetAll<TData = Awaited<ReturnType<typeof stripePricesGetAll>>, TError = void>(
 params?: StripePricesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePricesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripePricesGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Retrieve a price.
 */
export const stripePricesGet = (
    uid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripePrice>(
      {url: `/api/v1/billing/stripe/prices/${uid}`, method: 'GET', signal
    },
      options);
    }
  



export const getStripePricesGetQueryKey = (uid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/prices/${uid}`
    ] as const;
    }

    
export const getStripePricesGetQueryOptions = <TData = Awaited<ReturnType<typeof stripePricesGet>>, TError = void>(uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePricesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripePricesGetQueryKey(uid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripePricesGet>>> = ({ signal }) => stripePricesGet(uid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(uid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripePricesGet>>, TError, TData> & { queryKey: QueryKey }
}

export type StripePricesGetQueryResult = NonNullable<Awaited<ReturnType<typeof stripePricesGet>>>
export type StripePricesGetQueryError = void


/**
 * @summary Retrieve a price.
 */

export function useStripePricesGet<TData = Awaited<ReturnType<typeof stripePricesGet>>, TError = void>(
 uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePricesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripePricesGetQueryOptions(uid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Retrieve all promotion codes.
 */
export const stripePromotionCodesGetAll = (
    params?: StripePromotionCodesGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripePromotionCodesGetAll200>(
      {url: `/api/v1/billing/stripe/promotion-codes`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripePromotionCodesGetAllQueryKey = (params?: StripePromotionCodesGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/promotion-codes`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripePromotionCodesGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripePromotionCodesGetAll>>, TError = void>(params?: StripePromotionCodesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripePromotionCodesGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripePromotionCodesGetAll>>> = ({ signal }) => stripePromotionCodesGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripePromotionCodesGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripePromotionCodesGetAll>>>
export type StripePromotionCodesGetAllQueryError = void


/**
 * @summary Retrieve all promotion codes.
 */

export function useStripePromotionCodesGetAll<TData = Awaited<ReturnType<typeof stripePromotionCodesGetAll>>, TError = void>(
 params?: StripePromotionCodesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripePromotionCodesGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/discountcoupons instead.
            
A promotion code belongs to a coupon. The code is also created in the connected Stripe
account.
 * @summary Add a new promotion code.
 */
export const stripePromotionCodesCreate = (
    stripePromotionCodesCreateBody: NonReadonly<StripePromotionCodesCreateBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripePromotionCode>(
      {url: `/api/v1/billing/stripe/promotion-codes`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripePromotionCodesCreateBody, signal
    },
      options);
    }
  


export const getStripePromotionCodesCreateMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripePromotionCodesCreate>>, TError,{data: NonReadonly<StripePromotionCodesCreateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripePromotionCodesCreate>>, TError,{data: NonReadonly<StripePromotionCodesCreateBody>}, TContext> => {

const mutationKey = ['stripePromotionCodesCreate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripePromotionCodesCreate>>, {data: NonReadonly<StripePromotionCodesCreateBody>}> = (props) => {
          const {data} = props ?? {};

          return  stripePromotionCodesCreate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripePromotionCodesCreateMutationResult = NonNullable<Awaited<ReturnType<typeof stripePromotionCodesCreate>>>
    export type StripePromotionCodesCreateMutationBody = NonReadonly<StripePromotionCodesCreateBody>
    export type StripePromotionCodesCreateMutationError = void

    /**
 * @summary Add a new promotion code.
 */
export const useStripePromotionCodesCreate = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripePromotionCodesCreate>>, TError,{data: NonReadonly<StripePromotionCodesCreateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripePromotionCodesCreate>>,
        TError,
        {data: NonReadonly<StripePromotionCodesCreateBody>},
        TContext
      > => {

      const mutationOptions = getStripePromotionCodesCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a promotion code.
 */
export const stripePromotionCodesGet = (
    promotionCodeUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripePromotionCode>(
      {url: `/api/v1/billing/stripe/promotion-codes/${promotionCodeUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getStripePromotionCodesGetQueryKey = (promotionCodeUid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/promotion-codes/${promotionCodeUid}`
    ] as const;
    }

    
export const getStripePromotionCodesGetQueryOptions = <TData = Awaited<ReturnType<typeof stripePromotionCodesGet>>, TError = void>(promotionCodeUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripePromotionCodesGetQueryKey(promotionCodeUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripePromotionCodesGet>>> = ({ signal }) => stripePromotionCodesGet(promotionCodeUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(promotionCodeUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesGet>>, TError, TData> & { queryKey: QueryKey }
}

export type StripePromotionCodesGetQueryResult = NonNullable<Awaited<ReturnType<typeof stripePromotionCodesGet>>>
export type StripePromotionCodesGetQueryError = void


/**
 * @summary Retrieve a promotion code.
 */

export function useStripePromotionCodesGet<TData = Awaited<ReturnType<typeof stripePromotionCodesGet>>, TError = void>(
 promotionCodeUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripePromotionCodesGetQueryOptions(promotionCodeUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
The code can no longer be redeemed. It is also ended in the connected Stripe account.
No other change is made. The promotion code to end is identified by the Uid in the
request body.
 * @summary End a promotion code.
 */
export const stripePromotionCodesUpdate = (
    promotionCodeUid: string | null,
    stripePromotionCodesUpdateBody: NonReadonly<StripePromotionCodesUpdateBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<StripePromotionCode>(
      {url: `/api/v1/billing/stripe/promotion-codes/${promotionCodeUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: stripePromotionCodesUpdateBody
    },
      options);
    }
  


export const getStripePromotionCodesUpdateMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripePromotionCodesUpdate>>, TError,{promotionCodeUid: string | null;data: NonReadonly<StripePromotionCodesUpdateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripePromotionCodesUpdate>>, TError,{promotionCodeUid: string | null;data: NonReadonly<StripePromotionCodesUpdateBody>}, TContext> => {

const mutationKey = ['stripePromotionCodesUpdate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripePromotionCodesUpdate>>, {promotionCodeUid: string | null;data: NonReadonly<StripePromotionCodesUpdateBody>}> = (props) => {
          const {promotionCodeUid,data} = props ?? {};

          return  stripePromotionCodesUpdate(promotionCodeUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripePromotionCodesUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof stripePromotionCodesUpdate>>>
    export type StripePromotionCodesUpdateMutationBody = NonReadonly<StripePromotionCodesUpdateBody>
    export type StripePromotionCodesUpdateMutationError = void

    /**
 * @summary End a promotion code.
 */
export const useStripePromotionCodesUpdate = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripePromotionCodesUpdate>>, TError,{promotionCodeUid: string | null;data: NonReadonly<StripePromotionCodesUpdateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripePromotionCodesUpdate>>,
        TError,
        {promotionCodeUid: string | null;data: NonReadonly<StripePromotionCodesUpdateBody>},
        TContext
      > => {

      const mutationOptions = getStripePromotionCodesUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Only an active promotion code that can still be redeemed is found. The match is
case-sensitive. Returns only the Code and StripeCoupon.Uid, and 404 if no code matches.
No authentication is required.
 * @summary Find a promotion code by its code.
 */
export const stripePromotionCodesSearchByCode = (
    promotionCode: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/promotion-codes/search/${promotionCode}`, method: 'GET',
        responseType: 'blob', signal
    },
      options);
    }
  



export const getStripePromotionCodesSearchByCodeQueryKey = (promotionCode?: string | null,) => {
    return [
    `/api/v1/billing/stripe/promotion-codes/search/${promotionCode}`
    ] as const;
    }

    
export const getStripePromotionCodesSearchByCodeQueryOptions = <TData = Awaited<ReturnType<typeof stripePromotionCodesSearchByCode>>, TError = unknown>(promotionCode: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesSearchByCode>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripePromotionCodesSearchByCodeQueryKey(promotionCode);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripePromotionCodesSearchByCode>>> = ({ signal }) => stripePromotionCodesSearchByCode(promotionCode, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(promotionCode), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesSearchByCode>>, TError, TData> & { queryKey: QueryKey }
}

export type StripePromotionCodesSearchByCodeQueryResult = NonNullable<Awaited<ReturnType<typeof stripePromotionCodesSearchByCode>>>
export type StripePromotionCodesSearchByCodeQueryError = unknown


/**
 * @summary Find a promotion code by its code.
 */

export function useStripePromotionCodesSearchByCode<TData = Awaited<ReturnType<typeof stripePromotionCodesSearchByCode>>, TError = unknown>(
 promotionCode: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripePromotionCodesSearchByCode>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripePromotionCodesSearchByCodeQueryOptions(promotionCode,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Retrieve all product families.
 */
export const stripeProductFamiliesGetAll = (
    params?: StripeProductFamiliesGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeProductFamiliesGetAll200>(
      {url: `/api/v1/billing/stripe/product-families`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripeProductFamiliesGetAllQueryKey = (params?: StripeProductFamiliesGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/product-families`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripeProductFamiliesGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripeProductFamiliesGetAll>>, TError = unknown>(params?: StripeProductFamiliesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductFamiliesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeProductFamiliesGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeProductFamiliesGetAll>>> = ({ signal }) => stripeProductFamiliesGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeProductFamiliesGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeProductFamiliesGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripeProductFamiliesGetAll>>>
export type StripeProductFamiliesGetAllQueryError = unknown


/**
 * @summary Retrieve all product families.
 */

export function useStripeProductFamiliesGetAll<TData = Awaited<ReturnType<typeof stripeProductFamiliesGetAll>>, TError = unknown>(
 params?: StripeProductFamiliesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductFamiliesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeProductFamiliesGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/planfamilies instead.
            
A product added to this family is removed from any other family.
 * @summary Add a new product family.
 */
export const stripeProductFamiliesPost = (
    stripeProductFamiliesPostBody: NonReadonly<StripeProductFamiliesPostBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeProductFamily>(
      {url: `/api/v1/billing/stripe/product-families`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeProductFamiliesPostBody, signal
    },
      options);
    }
  


export const getStripeProductFamiliesPostMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesPost>>, TError,{data: NonReadonly<StripeProductFamiliesPostBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesPost>>, TError,{data: NonReadonly<StripeProductFamiliesPostBody>}, TContext> => {

const mutationKey = ['stripeProductFamiliesPost'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeProductFamiliesPost>>, {data: NonReadonly<StripeProductFamiliesPostBody>}> = (props) => {
          const {data} = props ?? {};

          return  stripeProductFamiliesPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeProductFamiliesPostMutationResult = NonNullable<Awaited<ReturnType<typeof stripeProductFamiliesPost>>>
    export type StripeProductFamiliesPostMutationBody = NonReadonly<StripeProductFamiliesPostBody>
    export type StripeProductFamiliesPostMutationError = void

    /**
 * @summary Add a new product family.
 */
export const useStripeProductFamiliesPost = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesPost>>, TError,{data: NonReadonly<StripeProductFamiliesPostBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeProductFamiliesPost>>,
        TError,
        {data: NonReadonly<StripeProductFamiliesPostBody>},
        TContext
      > => {

      const mutationOptions = getStripeProductFamiliesPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a product family.
 */
export const stripeProductFamiliesGet = (
    uid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeProductFamily>(
      {url: `/api/v1/billing/stripe/product-families/${uid}`, method: 'GET', signal
    },
      options);
    }
  



export const getStripeProductFamiliesGetQueryKey = (uid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/product-families/${uid}`
    ] as const;
    }

    
export const getStripeProductFamiliesGetQueryOptions = <TData = Awaited<ReturnType<typeof stripeProductFamiliesGet>>, TError = unknown>(uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductFamiliesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeProductFamiliesGetQueryKey(uid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeProductFamiliesGet>>> = ({ signal }) => stripeProductFamiliesGet(uid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(uid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeProductFamiliesGet>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeProductFamiliesGetQueryResult = NonNullable<Awaited<ReturnType<typeof stripeProductFamiliesGet>>>
export type StripeProductFamiliesGetQueryError = unknown


/**
 * @summary Retrieve a product family.
 */

export function useStripeProductFamiliesGet<TData = Awaited<ReturnType<typeof stripeProductFamiliesGet>>, TError = unknown>(
 uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductFamiliesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeProductFamiliesGetQueryOptions(uid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/planfamilies/{planFamilyUid} instead.
            
A product added to this family is removed from any other family.
 * @summary Update a product family.
 */
export const stripeProductFamiliesPut = (
    productFamilyUid: string | null,
    stripeProductFamiliesPutBody: NonReadonly<StripeProductFamiliesPutBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<StripeProductFamily>(
      {url: `/api/v1/billing/stripe/product-families/${productFamilyUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: stripeProductFamiliesPutBody
    },
      options);
    }
  


export const getStripeProductFamiliesPutMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesPut>>, TError,{productFamilyUid: string | null;data: NonReadonly<StripeProductFamiliesPutBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesPut>>, TError,{productFamilyUid: string | null;data: NonReadonly<StripeProductFamiliesPutBody>}, TContext> => {

const mutationKey = ['stripeProductFamiliesPut'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeProductFamiliesPut>>, {productFamilyUid: string | null;data: NonReadonly<StripeProductFamiliesPutBody>}> = (props) => {
          const {productFamilyUid,data} = props ?? {};

          return  stripeProductFamiliesPut(productFamilyUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeProductFamiliesPutMutationResult = NonNullable<Awaited<ReturnType<typeof stripeProductFamiliesPut>>>
    export type StripeProductFamiliesPutMutationBody = NonReadonly<StripeProductFamiliesPutBody>
    export type StripeProductFamiliesPutMutationError = void

    /**
 * @summary Update a product family.
 */
export const useStripeProductFamiliesPut = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesPut>>, TError,{productFamilyUid: string | null;data: NonReadonly<StripeProductFamiliesPutBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeProductFamiliesPut>>,
        TError,
        {productFamilyUid: string | null;data: NonReadonly<StripeProductFamiliesPutBody>},
        TContext
      > => {

      const mutationOptions = getStripeProductFamiliesPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a product family.
 */
export const stripeProductFamiliesDelete = (
    productFamilyUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/product-families/${productFamilyUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getStripeProductFamiliesDeleteMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesDelete>>, TError,{productFamilyUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesDelete>>, TError,{productFamilyUid: string | null}, TContext> => {

const mutationKey = ['stripeProductFamiliesDelete'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeProductFamiliesDelete>>, {productFamilyUid: string | null}> = (props) => {
          const {productFamilyUid} = props ?? {};

          return  stripeProductFamiliesDelete(productFamilyUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeProductFamiliesDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof stripeProductFamiliesDelete>>>
    
    export type StripeProductFamiliesDeleteMutationError = void

    /**
 * @summary Delete a product family.
 */
export const useStripeProductFamiliesDelete = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductFamiliesDelete>>, TError,{productFamilyUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeProductFamiliesDelete>>,
        TError,
        {productFamilyUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeProductFamiliesDeleteMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all coupons.
 */
export const stripeCouponsGetAll = (
    params?: StripeCouponsGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeCouponsGetAll200>(
      {url: `/api/v1/billing/stripe/coupons`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripeCouponsGetAllQueryKey = (params?: StripeCouponsGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/coupons`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripeCouponsGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripeCouponsGetAll>>, TError = void>(params?: StripeCouponsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeCouponsGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeCouponsGetAll>>> = ({ signal }) => stripeCouponsGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeCouponsGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripeCouponsGetAll>>>
export type StripeCouponsGetAllQueryError = void


/**
 * @summary Retrieve all coupons.
 */

export function useStripeCouponsGetAll<TData = Awaited<ReturnType<typeof stripeCouponsGetAll>>, TError = void>(
 params?: StripeCouponsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeCouponsGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/discountcoupons instead.
            
Set exactly one of PercentOff or CurrencyAmountOff. The coupon is also created in the
connected Stripe account.
 * @summary Add a new coupon.
 */
export const stripeCouponsCreate = (
    stripeCouponsCreateBody: NonReadonly<StripeCouponsCreateBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeCoupon>(
      {url: `/api/v1/billing/stripe/coupons`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeCouponsCreateBody, signal
    },
      options);
    }
  


export const getStripeCouponsCreateMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsCreate>>, TError,{data: NonReadonly<StripeCouponsCreateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsCreate>>, TError,{data: NonReadonly<StripeCouponsCreateBody>}, TContext> => {

const mutationKey = ['stripeCouponsCreate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeCouponsCreate>>, {data: NonReadonly<StripeCouponsCreateBody>}> = (props) => {
          const {data} = props ?? {};

          return  stripeCouponsCreate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeCouponsCreateMutationResult = NonNullable<Awaited<ReturnType<typeof stripeCouponsCreate>>>
    export type StripeCouponsCreateMutationBody = NonReadonly<StripeCouponsCreateBody>
    export type StripeCouponsCreateMutationError = void

    /**
 * @summary Add a new coupon.
 */
export const useStripeCouponsCreate = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsCreate>>, TError,{data: NonReadonly<StripeCouponsCreateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeCouponsCreate>>,
        TError,
        {data: NonReadonly<StripeCouponsCreateBody>},
        TContext
      > => {

      const mutationOptions = getStripeCouponsCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a coupon.
 */
export const stripeCouponsGet = (
    couponUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeCoupon>(
      {url: `/api/v1/billing/stripe/coupons/${couponUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getStripeCouponsGetQueryKey = (couponUid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/coupons/${couponUid}`
    ] as const;
    }

    
export const getStripeCouponsGetQueryOptions = <TData = Awaited<ReturnType<typeof stripeCouponsGet>>, TError = void>(couponUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeCouponsGetQueryKey(couponUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeCouponsGet>>> = ({ signal }) => stripeCouponsGet(couponUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(couponUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGet>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeCouponsGetQueryResult = NonNullable<Awaited<ReturnType<typeof stripeCouponsGet>>>
export type StripeCouponsGetQueryError = void


/**
 * @summary Retrieve a coupon.
 */

export function useStripeCouponsGet<TData = Awaited<ReturnType<typeof stripeCouponsGet>>, TError = void>(
 couponUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeCouponsGetQueryOptions(couponUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * The coupon is also deleted in the connected Stripe account. A coupon that was ever
applied to a subscription or invoice cannot be deleted.
 * @summary Delete a coupon.
 */
export const stripeCouponsDelete = (
    couponUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/coupons/${couponUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getStripeCouponsDeleteMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsDelete>>, TError,{couponUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsDelete>>, TError,{couponUid: string | null}, TContext> => {

const mutationKey = ['stripeCouponsDelete'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeCouponsDelete>>, {couponUid: string | null}> = (props) => {
          const {couponUid} = props ?? {};

          return  stripeCouponsDelete(couponUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeCouponsDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof stripeCouponsDelete>>>
    
    export type StripeCouponsDeleteMutationError = void

    /**
 * @summary Delete a coupon.
 */
export const useStripeCouponsDelete = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsDelete>>, TError,{couponUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeCouponsDelete>>,
        TError,
        {couponUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeCouponsDeleteMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * A redemption is the discount created when one of the coupon's promotion codes was
applied.
 * @summary Retrieve the redemptions of a coupon.
 */
export const stripeCouponsGetRedemptions = (
    couponUid: string | null,
    params?: StripeCouponsGetRedemptionsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeCouponsGetRedemptions200>(
      {url: `/api/v1/billing/stripe/coupons/${couponUid}/redemptions`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripeCouponsGetRedemptionsQueryKey = (couponUid?: string | null,
    params?: StripeCouponsGetRedemptionsParams,) => {
    return [
    `/api/v1/billing/stripe/coupons/${couponUid}/redemptions`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripeCouponsGetRedemptionsQueryOptions = <TData = Awaited<ReturnType<typeof stripeCouponsGetRedemptions>>, TError = void>(couponUid: string | null,
    params?: StripeCouponsGetRedemptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGetRedemptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeCouponsGetRedemptionsQueryKey(couponUid,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeCouponsGetRedemptions>>> = ({ signal }) => stripeCouponsGetRedemptions(couponUid,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(couponUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGetRedemptions>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeCouponsGetRedemptionsQueryResult = NonNullable<Awaited<ReturnType<typeof stripeCouponsGetRedemptions>>>
export type StripeCouponsGetRedemptionsQueryError = void


/**
 * @summary Retrieve the redemptions of a coupon.
 */

export function useStripeCouponsGetRedemptions<TData = Awaited<ReturnType<typeof stripeCouponsGetRedemptions>>, TError = void>(
 couponUid: string | null,
    params?: StripeCouponsGetRedemptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeCouponsGetRedemptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeCouponsGetRedemptionsQueryOptions(couponUid,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import all coupons and promotion codes from the connected Stripe account.
 */
export const stripeCouponsSyncCouponsFromStripe = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<ImportResult>(
      {url: `/api/v1/billing/stripe/coupons/sync`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeCouponsSyncCouponsFromStripeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsSyncCouponsFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsSyncCouponsFromStripe>>, TError,void, TContext> => {

const mutationKey = ['stripeCouponsSyncCouponsFromStripe'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeCouponsSyncCouponsFromStripe>>, void> = () => {
          

          return  stripeCouponsSyncCouponsFromStripe(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeCouponsSyncCouponsFromStripeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeCouponsSyncCouponsFromStripe>>>
    
    export type StripeCouponsSyncCouponsFromStripeMutationError = void

    /**
 * @summary Import all coupons and promotion codes from the connected Stripe account.
 */
export const useStripeCouponsSyncCouponsFromStripe = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsSyncCouponsFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeCouponsSyncCouponsFromStripe>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getStripeCouponsSyncCouponsFromStripeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import a coupon from the connected Stripe account.
 */
export const stripeCouponsSyncCouponFromStripe = (
    uid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/coupons/${uid}/sync`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getStripeCouponsSyncCouponFromStripeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsSyncCouponFromStripe>>, TError,{uid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsSyncCouponFromStripe>>, TError,{uid: string | null}, TContext> => {

const mutationKey = ['stripeCouponsSyncCouponFromStripe'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeCouponsSyncCouponFromStripe>>, {uid: string | null}> = (props) => {
          const {uid} = props ?? {};

          return  stripeCouponsSyncCouponFromStripe(uid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeCouponsSyncCouponFromStripeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeCouponsSyncCouponFromStripe>>>
    
    export type StripeCouponsSyncCouponFromStripeMutationError = void

    /**
 * @summary Import a coupon from the connected Stripe account.
 */
export const useStripeCouponsSyncCouponFromStripe = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeCouponsSyncCouponFromStripe>>, TError,{uid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeCouponsSyncCouponFromStripe>>,
        TError,
        {uid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeCouponsSyncCouponFromStripeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Invoices imported from another billing system are left out, unless IsImported=true is
passed in the query string, which returns only imported invoices. Pass
excludeInvoiceUid in the query string to leave out one invoice.
 * @summary Retrieve all invoices.
 */
export const stripeInvoicesGetAll = (
    params?: StripeInvoicesGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeInvoicesGetAll200>(
      {url: `/api/v1/billing/stripe/invoices`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripeInvoicesGetAllQueryKey = (params?: StripeInvoicesGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/invoices`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripeInvoicesGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripeInvoicesGetAll>>, TError = void>(params?: StripeInvoicesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeInvoicesGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeInvoicesGetAll>>> = ({ signal }) => stripeInvoicesGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeInvoicesGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesGetAll>>>
export type StripeInvoicesGetAllQueryError = void


/**
 * @summary Retrieve all invoices.
 */

export function useStripeInvoicesGetAll<TData = Awaited<ReturnType<typeof stripeInvoicesGetAll>>, TError = void>(
 params?: StripeInvoicesGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeInvoicesGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/invoices instead.
            
The invoice is created for an account, and also in the connected Stripe account.
 * @summary Add a new invoice.
 */
export const stripeInvoicesPost = (
    stripeInvoicesPostBody: NonReadonly<StripeInvoicesPostBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeInvoice>(
      {url: `/api/v1/billing/stripe/invoices`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeInvoicesPostBody, signal
    },
      options);
    }
  


export const getStripeInvoicesPostMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesPost>>, TError,{data: NonReadonly<StripeInvoicesPostBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesPost>>, TError,{data: NonReadonly<StripeInvoicesPostBody>}, TContext> => {

const mutationKey = ['stripeInvoicesPost'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeInvoicesPost>>, {data: NonReadonly<StripeInvoicesPostBody>}> = (props) => {
          const {data} = props ?? {};

          return  stripeInvoicesPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeInvoicesPostMutationResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesPost>>>
    export type StripeInvoicesPostMutationBody = NonReadonly<StripeInvoicesPostBody>
    export type StripeInvoicesPostMutationError = void

    /**
 * @summary Add a new invoice.
 */
export const useStripeInvoicesPost = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesPost>>, TError,{data: NonReadonly<StripeInvoicesPostBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeInvoicesPost>>,
        TError,
        {data: NonReadonly<StripeInvoicesPostBody>},
        TContext
      > => {

      const mutationOptions = getStripeInvoicesPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve an invoice.
 */
export const stripeInvoicesGet = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeInvoice>(
      {url: `/api/v1/billing/stripe/invoices/${invoiceUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getStripeInvoicesGetQueryKey = (invoiceUid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/invoices/${invoiceUid}`
    ] as const;
    }

    
export const getStripeInvoicesGetQueryOptions = <TData = Awaited<ReturnType<typeof stripeInvoicesGet>>, TError = void>(invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeInvoicesGetQueryKey(invoiceUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeInvoicesGet>>> = ({ signal }) => stripeInvoicesGet(invoiceUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(invoiceUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGet>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeInvoicesGetQueryResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesGet>>>
export type StripeInvoicesGetQueryError = void


/**
 * @summary Retrieve an invoice.
 */

export function useStripeInvoicesGet<TData = Awaited<ReturnType<typeof stripeInvoicesGet>>, TError = void>(
 invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeInvoicesGetQueryOptions(invoiceUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * The response is a 302 redirect to the PDF. A user token can only download invoices on
its own account, and only as the account's primary contact.
 * @summary Download an invoice as a PDF.
 */
export const stripeInvoicesGetInvoiceAsPdf = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/invoices/${invoiceUid}/pdf`, method: 'GET',
        responseType: 'blob', signal
    },
      options);
    }
  



export const getStripeInvoicesGetInvoiceAsPdfQueryKey = (invoiceUid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/invoices/${invoiceUid}/pdf`
    ] as const;
    }

    
export const getStripeInvoicesGetInvoiceAsPdfQueryOptions = <TData = Awaited<ReturnType<typeof stripeInvoicesGetInvoiceAsPdf>>, TError = void>(invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGetInvoiceAsPdf>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeInvoicesGetInvoiceAsPdfQueryKey(invoiceUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeInvoicesGetInvoiceAsPdf>>> = ({ signal }) => stripeInvoicesGetInvoiceAsPdf(invoiceUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(invoiceUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGetInvoiceAsPdf>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeInvoicesGetInvoiceAsPdfQueryResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesGetInvoiceAsPdf>>>
export type StripeInvoicesGetInvoiceAsPdfQueryError = void


/**
 * @summary Download an invoice as a PDF.
 */

export function useStripeInvoicesGetInvoiceAsPdf<TData = Awaited<ReturnType<typeof stripeInvoicesGetInvoiceAsPdf>>, TError = void>(
 invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeInvoicesGetInvoiceAsPdf>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeInvoicesGetInvoiceAsPdfQueryOptions(invoiceUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
NewStatus is one of paid (paid outside Stripe), uncollectible or void. The change is
also made in the connected Stripe account.
 * @summary Change the status of an invoice.
 */
export const stripeInvoicesChangeInvoiceStatus = (
    invoiceUid: string | null,
    stripeInvoicesChangeInvoiceStatusBody: StripeInvoicesChangeInvoiceStatusBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/invoices/${invoiceUid}/change-status`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeInvoicesChangeInvoiceStatusBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getStripeInvoicesChangeInvoiceStatusMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesChangeInvoiceStatus>>, TError,{invoiceUid: string | null;data: StripeInvoicesChangeInvoiceStatusBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesChangeInvoiceStatus>>, TError,{invoiceUid: string | null;data: StripeInvoicesChangeInvoiceStatusBody}, TContext> => {

const mutationKey = ['stripeInvoicesChangeInvoiceStatus'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeInvoicesChangeInvoiceStatus>>, {invoiceUid: string | null;data: StripeInvoicesChangeInvoiceStatusBody}> = (props) => {
          const {invoiceUid,data} = props ?? {};

          return  stripeInvoicesChangeInvoiceStatus(invoiceUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeInvoicesChangeInvoiceStatusMutationResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesChangeInvoiceStatus>>>
    export type StripeInvoicesChangeInvoiceStatusMutationBody = StripeInvoicesChangeInvoiceStatusBody
    export type StripeInvoicesChangeInvoiceStatusMutationError = void

    /**
 * @summary Change the status of an invoice.
 */
export const useStripeInvoicesChangeInvoiceStatus = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesChangeInvoiceStatus>>, TError,{invoiceUid: string | null;data: StripeInvoicesChangeInvoiceStatusBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeInvoicesChangeInvoiceStatus>>,
        TError,
        {invoiceUid: string | null;data: StripeInvoicesChangeInvoiceStatusBody},
        TContext
      > => {

      const mutationOptions = getStripeInvoicesChangeInvoiceStatusMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
CreditType is one of account_balance, payment_method (refund to the payment method) or
out_of_band. The credit note is created in the connected Stripe account.
 * @summary Issue a credit note against an invoice.
 */
export const stripeInvoicesIssueInvoiceCredit = (
    invoiceUid: string | null,
    stripeInvoicesIssueInvoiceCreditBody: StripeInvoicesIssueInvoiceCreditBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/invoices/${invoiceUid}/issue-credit`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeInvoicesIssueInvoiceCreditBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getStripeInvoicesIssueInvoiceCreditMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesIssueInvoiceCredit>>, TError,{invoiceUid: string | null;data: StripeInvoicesIssueInvoiceCreditBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesIssueInvoiceCredit>>, TError,{invoiceUid: string | null;data: StripeInvoicesIssueInvoiceCreditBody}, TContext> => {

const mutationKey = ['stripeInvoicesIssueInvoiceCredit'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeInvoicesIssueInvoiceCredit>>, {invoiceUid: string | null;data: StripeInvoicesIssueInvoiceCreditBody}> = (props) => {
          const {invoiceUid,data} = props ?? {};

          return  stripeInvoicesIssueInvoiceCredit(invoiceUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeInvoicesIssueInvoiceCreditMutationResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesIssueInvoiceCredit>>>
    export type StripeInvoicesIssueInvoiceCreditMutationBody = StripeInvoicesIssueInvoiceCreditBody
    export type StripeInvoicesIssueInvoiceCreditMutationError = void

    /**
 * @summary Issue a credit note against an invoice.
 */
export const useStripeInvoicesIssueInvoiceCredit = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesIssueInvoiceCredit>>, TError,{invoiceUid: string | null;data: StripeInvoicesIssueInvoiceCreditBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeInvoicesIssueInvoiceCredit>>,
        TError,
        {invoiceUid: string | null;data: StripeInvoicesIssueInvoiceCreditBody},
        TContext
      > => {

      const mutationOptions = getStripeInvoicesIssueInvoiceCreditMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Email an invoice to the account.
 */
export const stripeInvoicesSendInvoiceEmail = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/invoices/${invoiceUid}/send`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getStripeInvoicesSendInvoiceEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesSendInvoiceEmail>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesSendInvoiceEmail>>, TError,{invoiceUid: string | null}, TContext> => {

const mutationKey = ['stripeInvoicesSendInvoiceEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeInvoicesSendInvoiceEmail>>, {invoiceUid: string | null}> = (props) => {
          const {invoiceUid} = props ?? {};

          return  stripeInvoicesSendInvoiceEmail(invoiceUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeInvoicesSendInvoiceEmailMutationResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesSendInvoiceEmail>>>
    
    export type StripeInvoicesSendInvoiceEmailMutationError = void

    /**
 * @summary Email an invoice to the account.
 */
export const useStripeInvoicesSendInvoiceEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesSendInvoiceEmail>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeInvoicesSendInvoiceEmail>>,
        TError,
        {invoiceUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeInvoicesSendInvoiceEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import all invoices from the connected Stripe account.
 */
export const stripeInvoicesSyncInvoicesFromStripe = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<ImportResult>(
      {url: `/api/v1/billing/stripe/invoices/sync`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeInvoicesSyncInvoicesFromStripeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesSyncInvoicesFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesSyncInvoicesFromStripe>>, TError,void, TContext> => {

const mutationKey = ['stripeInvoicesSyncInvoicesFromStripe'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeInvoicesSyncInvoicesFromStripe>>, void> = () => {
          

          return  stripeInvoicesSyncInvoicesFromStripe(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeInvoicesSyncInvoicesFromStripeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeInvoicesSyncInvoicesFromStripe>>>
    
    export type StripeInvoicesSyncInvoicesFromStripeMutationError = void

    /**
 * @summary Import all invoices from the connected Stripe account.
 */
export const useStripeInvoicesSyncInvoicesFromStripe = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeInvoicesSyncInvoicesFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeInvoicesSyncInvoicesFromStripe>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getStripeInvoicesSyncInvoicesFromStripeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all subscriptions.
 */
export const stripeSubscriptionsGetAll = (
    params?: StripeSubscriptionsGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscriptionsGetAll200>(
      {url: `/api/v1/billing/stripe/subscriptions`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripeSubscriptionsGetAllQueryKey = (params?: StripeSubscriptionsGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/subscriptions`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripeSubscriptionsGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripeSubscriptionsGetAll>>, TError = void>(params?: StripeSubscriptionsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeSubscriptionsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeSubscriptionsGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeSubscriptionsGetAll>>> = ({ signal }) => stripeSubscriptionsGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeSubscriptionsGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeSubscriptionsGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsGetAll>>>
export type StripeSubscriptionsGetAllQueryError = void


/**
 * @summary Retrieve all subscriptions.
 */

export function useStripeSubscriptionsGetAll<TData = Awaited<ReturnType<typeof stripeSubscriptionsGetAll>>, TError = void>(
 params?: StripeSubscriptionsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeSubscriptionsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeSubscriptionsGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/subscriptions/firsttimesubscription instead.
            
The subscription is created for an account, and also in the connected Stripe account.
Identify each item's StripePrice by Uid or StripeId. A discount can name a
StripePromotionCode, or a StripeCoupon, in which case the first promotion code of
that coupon that the account can redeem is used.
 * @summary Add a new subscription.
 */
export const stripeSubscriptionsCreate = (
    stripeSubscriptionsCreateBody: NonReadonly<StripeSubscriptionsCreateBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeSubscriptionsCreateBody, signal
    },
      options);
    }
  


export const getStripeSubscriptionsCreateMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsCreate>>, TError,{data: NonReadonly<StripeSubscriptionsCreateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsCreate>>, TError,{data: NonReadonly<StripeSubscriptionsCreateBody>}, TContext> => {

const mutationKey = ['stripeSubscriptionsCreate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsCreate>>, {data: NonReadonly<StripeSubscriptionsCreateBody>}> = (props) => {
          const {data} = props ?? {};

          return  stripeSubscriptionsCreate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsCreateMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsCreate>>>
    export type StripeSubscriptionsCreateMutationBody = NonReadonly<StripeSubscriptionsCreateBody>
    export type StripeSubscriptionsCreateMutationError = void

    /**
 * @summary Add a new subscription.
 */
export const useStripeSubscriptionsCreate = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsCreate>>, TError,{data: NonReadonly<StripeSubscriptionsCreateBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsCreate>>,
        TError,
        {data: NonReadonly<StripeSubscriptionsCreateBody>},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
By default the subscription ends at the end of the current billing period. Pass
cancelImmediately=true in the query string to end it now.
 * @summary Cancel a subscription.
 */
export const stripeSubscriptionsCancel = (
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/cancel`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeSubscriptionsCancelMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsCancel>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsCancel>>, TError,{subscriptionUid: string | null}, TContext> => {

const mutationKey = ['stripeSubscriptionsCancel'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsCancel>>, {subscriptionUid: string | null}> = (props) => {
          const {subscriptionUid} = props ?? {};

          return  stripeSubscriptionsCancel(subscriptionUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsCancelMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsCancel>>>
    
    export type StripeSubscriptionsCancelMutationError = void

    /**
 * @summary Cancel a subscription.
 */
export const useStripeSubscriptionsCancel = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsCancel>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsCancel>>,
        TError,
        {subscriptionUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsCancelMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
Behavior is one of Stripe's pause_collection behaviors: keep_as_draft,
mark_uncollectible or void. ResumesAt is optional; without it, collection stays paused
until resumed.
 * @summary Pause payment collection on a subscription.
 */
export const stripeSubscriptionsPauseCollection = (
    subscriptionUid: string | null,
    stripeSubscriptionsPauseCollectionBody: StripeSubscriptionsPauseCollectionBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/pause`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeSubscriptionsPauseCollectionBody, signal
    },
      options);
    }
  


export const getStripeSubscriptionsPauseCollectionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsPauseCollection>>, TError,{subscriptionUid: string | null;data: StripeSubscriptionsPauseCollectionBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsPauseCollection>>, TError,{subscriptionUid: string | null;data: StripeSubscriptionsPauseCollectionBody}, TContext> => {

const mutationKey = ['stripeSubscriptionsPauseCollection'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsPauseCollection>>, {subscriptionUid: string | null;data: StripeSubscriptionsPauseCollectionBody}> = (props) => {
          const {subscriptionUid,data} = props ?? {};

          return  stripeSubscriptionsPauseCollection(subscriptionUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsPauseCollectionMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsPauseCollection>>>
    export type StripeSubscriptionsPauseCollectionMutationBody = StripeSubscriptionsPauseCollectionBody
    export type StripeSubscriptionsPauseCollectionMutationError = void

    /**
 * @summary Pause payment collection on a subscription.
 */
export const useStripeSubscriptionsPauseCollection = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsPauseCollection>>, TError,{subscriptionUid: string | null;data: StripeSubscriptionsPauseCollectionBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsPauseCollection>>,
        TError,
        {subscriptionUid: string | null;data: StripeSubscriptionsPauseCollectionBody},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsPauseCollectionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/subscriptions/{subscriptionUid}/changesubscription instead.
            
Use this, for example, to move a subscription to another price. Identify each item's
StripePrice by Uid or StripeId. A user token can only change a subscription on its own
account, and only as the account's primary contact.
 * @summary Change the items of a subscription.
 */
export const stripeSubscriptionsChange = (
    subscriptionUid: string | null,
    stripeSubscriptionsChangeBody: NonReadonly<StripeSubscriptionsChangeBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/change`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: stripeSubscriptionsChangeBody
    },
      options);
    }
  


export const getStripeSubscriptionsChangeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsChange>>, TError,{subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsChangeBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsChange>>, TError,{subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsChangeBody>}, TContext> => {

const mutationKey = ['stripeSubscriptionsChange'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsChange>>, {subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsChangeBody>}> = (props) => {
          const {subscriptionUid,data} = props ?? {};

          return  stripeSubscriptionsChange(subscriptionUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsChangeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsChange>>>
    export type StripeSubscriptionsChangeMutationBody = NonReadonly<StripeSubscriptionsChangeBody>
    export type StripeSubscriptionsChangeMutationError = void

    /**
 * @summary Change the items of a subscription.
 */
export const useStripeSubscriptionsChange = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsChange>>, TError,{subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsChangeBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsChange>>,
        TError,
        {subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsChangeBody>},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsChangeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns the invoice that the change would create, without making the change. The
request body is the same as for the change. Pass asOf in the query string to preview
the change at a later date (default: now). A user token can only preview a change on
its own account, and only as the account's primary contact.
 * @summary Preview a subscription change.
 */
export const stripeSubscriptionsPreviewChange = (
    subscriptionUid: string | null,
    stripeSubscriptionsPreviewChangeBody: NonReadonly<StripeSubscriptionsPreviewChangeBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeInvoice>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/change-preview`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeSubscriptionsPreviewChangeBody, signal
    },
      options);
    }
  


export const getStripeSubscriptionsPreviewChangeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsPreviewChange>>, TError,{subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsPreviewChangeBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsPreviewChange>>, TError,{subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsPreviewChangeBody>}, TContext> => {

const mutationKey = ['stripeSubscriptionsPreviewChange'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsPreviewChange>>, {subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsPreviewChangeBody>}> = (props) => {
          const {subscriptionUid,data} = props ?? {};

          return  stripeSubscriptionsPreviewChange(subscriptionUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsPreviewChangeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsPreviewChange>>>
    export type StripeSubscriptionsPreviewChangeMutationBody = NonReadonly<StripeSubscriptionsPreviewChangeBody>
    export type StripeSubscriptionsPreviewChangeMutationError = void

    /**
 * @summary Preview a subscription change.
 */
export const useStripeSubscriptionsPreviewChange = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsPreviewChange>>, TError,{subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsPreviewChangeBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsPreviewChange>>,
        TError,
        {subscriptionUid: string | null;data: NonReadonly<StripeSubscriptionsPreviewChangeBody>},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsPreviewChangeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
This sets the subscription's trial end to ToDate, without proration.
 * @summary Extend the date of a subscription's next invoice.
 */
export const stripeSubscriptionsExtendTrial = (
    subscriptionUid: string | null,
    stripeSubscriptionsExtendTrialBody: StripeSubscriptionsExtendTrialBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/extend`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: stripeSubscriptionsExtendTrialBody,
        responseType: 'blob'
    },
      options);
    }
  


export const getStripeSubscriptionsExtendTrialMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsExtendTrial>>, TError,{subscriptionUid: string | null;data: StripeSubscriptionsExtendTrialBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsExtendTrial>>, TError,{subscriptionUid: string | null;data: StripeSubscriptionsExtendTrialBody}, TContext> => {

const mutationKey = ['stripeSubscriptionsExtendTrial'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsExtendTrial>>, {subscriptionUid: string | null;data: StripeSubscriptionsExtendTrialBody}> = (props) => {
          const {subscriptionUid,data} = props ?? {};

          return  stripeSubscriptionsExtendTrial(subscriptionUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsExtendTrialMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsExtendTrial>>>
    export type StripeSubscriptionsExtendTrialMutationBody = StripeSubscriptionsExtendTrialBody
    export type StripeSubscriptionsExtendTrialMutationError = void

    /**
 * @summary Extend the date of a subscription's next invoice.
 */
export const useStripeSubscriptionsExtendTrial = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsExtendTrial>>, TError,{subscriptionUid: string | null;data: StripeSubscriptionsExtendTrialBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsExtendTrial>>,
        TError,
        {subscriptionUid: string | null;data: StripeSubscriptionsExtendTrialBody},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsExtendTrialMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
The scheduled changes no longer happen, and the subscription keeps its current items.
Nothing happens when there is no active schedule.
 * @summary Release a subscription's active schedule.
 */
export const stripeSubscriptionsReleaseSchedule = (
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/release-schedule`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeSubscriptionsReleaseScheduleMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsReleaseSchedule>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsReleaseSchedule>>, TError,{subscriptionUid: string | null}, TContext> => {

const mutationKey = ['stripeSubscriptionsReleaseSchedule'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsReleaseSchedule>>, {subscriptionUid: string | null}> = (props) => {
          const {subscriptionUid} = props ?? {};

          return  stripeSubscriptionsReleaseSchedule(subscriptionUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsReleaseScheduleMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsReleaseSchedule>>>
    
    export type StripeSubscriptionsReleaseScheduleMutationError = void

    /**
 * @summary Release a subscription's active schedule.
 */
export const useStripeSubscriptionsReleaseSchedule = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsReleaseSchedule>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsReleaseSchedule>>,
        TError,
        {subscriptionUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsReleaseScheduleMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Resume payment collection on a paused subscription.
 */
export const stripeSubscriptionsResumeCollection = (
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/resume`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeSubscriptionsResumeCollectionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsResumeCollection>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsResumeCollection>>, TError,{subscriptionUid: string | null}, TContext> => {

const mutationKey = ['stripeSubscriptionsResumeCollection'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsResumeCollection>>, {subscriptionUid: string | null}> = (props) => {
          const {subscriptionUid} = props ?? {};

          return  stripeSubscriptionsResumeCollection(subscriptionUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsResumeCollectionMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsResumeCollection>>>
    
    export type StripeSubscriptionsResumeCollectionMutationError = void

    /**
 * @summary Resume payment collection on a paused subscription.
 */
export const useStripeSubscriptionsResumeCollection = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsResumeCollection>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsResumeCollection>>,
        TError,
        {subscriptionUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsResumeCollectionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
The trial ends now, so that the subscription starts and is invoiced.
 * @summary Start a trialing subscription.
 */
export const stripeSubscriptionsStart = (
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/start`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeSubscriptionsStartMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsStart>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsStart>>, TError,{subscriptionUid: string | null}, TContext> => {

const mutationKey = ['stripeSubscriptionsStart'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsStart>>, {subscriptionUid: string | null}> = (props) => {
          const {subscriptionUid} = props ?? {};

          return  stripeSubscriptionsStart(subscriptionUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsStartMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsStart>>>
    
    export type StripeSubscriptionsStartMutationError = void

    /**
 * @summary Start a trialing subscription.
 */
export const useStripeSubscriptionsStart = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsStart>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsStart>>,
        TError,
        {subscriptionUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsStartMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
Pass productUid in the query string to import only the subscriptions to that
product's prices. The response is an import result wrapped in a Count property.
 * @summary Import subscriptions from the connected Stripe account.
 */
export const stripeSubscriptionsSyncSubscriptionsFromStripe = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/subscriptions/sync`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getStripeSubscriptionsSyncSubscriptionsFromStripeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsSyncSubscriptionsFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsSyncSubscriptionsFromStripe>>, TError,void, TContext> => {

const mutationKey = ['stripeSubscriptionsSyncSubscriptionsFromStripe'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsSyncSubscriptionsFromStripe>>, void> = () => {
          

          return  stripeSubscriptionsSyncSubscriptionsFromStripe(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsSyncSubscriptionsFromStripeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsSyncSubscriptionsFromStripe>>>
    
    export type StripeSubscriptionsSyncSubscriptionsFromStripeMutationError = void

    /**
 * @summary Import subscriptions from the connected Stripe account.
 */
export const useStripeSubscriptionsSyncSubscriptionsFromStripe = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsSyncSubscriptionsFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsSyncSubscriptionsFromStripe>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsSyncSubscriptionsFromStripeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
A subscription set to end at the end of its billing period renews instead.
 * @summary Remove a subscription's pending cancellation.
 */
export const stripeSubscriptionsUncancel = (
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeSubscription>(
      {url: `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/uncancel`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeSubscriptionsUncancelMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsUncancel>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsUncancel>>, TError,{subscriptionUid: string | null}, TContext> => {

const mutationKey = ['stripeSubscriptionsUncancel'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeSubscriptionsUncancel>>, {subscriptionUid: string | null}> = (props) => {
          const {subscriptionUid} = props ?? {};

          return  stripeSubscriptionsUncancel(subscriptionUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeSubscriptionsUncancelMutationResult = NonNullable<Awaited<ReturnType<typeof stripeSubscriptionsUncancel>>>
    
    export type StripeSubscriptionsUncancelMutationError = void

    /**
 * @summary Remove a subscription's pending cancellation.
 */
export const useStripeSubscriptionsUncancel = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeSubscriptionsUncancel>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeSubscriptionsUncancel>>,
        TError,
        {subscriptionUid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeSubscriptionsUncancelMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all products.
 */
export const stripeProductsGetAll = (
    params?: StripeProductsGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeProductsGetAll200>(
      {url: `/api/v1/billing/stripe/products`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getStripeProductsGetAllQueryKey = (params?: StripeProductsGetAllParams,) => {
    return [
    `/api/v1/billing/stripe/products`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getStripeProductsGetAllQueryOptions = <TData = Awaited<ReturnType<typeof stripeProductsGetAll>>, TError = void>(params?: StripeProductsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeProductsGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeProductsGetAll>>> = ({ signal }) => stripeProductsGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeProductsGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeProductsGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof stripeProductsGetAll>>>
export type StripeProductsGetAllQueryError = void


/**
 * @summary Retrieve all products.
 */

export function useStripeProductsGetAll<TData = Awaited<ReturnType<typeof stripeProductsGetAll>>, TError = void>(
 params?: StripeProductsGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductsGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeProductsGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/plans or POST /billing/addons instead.
            
The product is also created in the connected Stripe account.
 * @summary Add a new product.
 */
export const stripeProductsPost = (
    stripeProductsPostBody: NonReadonly<StripeProductsPostBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeProduct>(
      {url: `/api/v1/billing/stripe/products`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: stripeProductsPostBody, signal
    },
      options);
    }
  


export const getStripeProductsPostMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsPost>>, TError,{data: NonReadonly<StripeProductsPostBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeProductsPost>>, TError,{data: NonReadonly<StripeProductsPostBody>}, TContext> => {

const mutationKey = ['stripeProductsPost'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeProductsPost>>, {data: NonReadonly<StripeProductsPostBody>}> = (props) => {
          const {data} = props ?? {};

          return  stripeProductsPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeProductsPostMutationResult = NonNullable<Awaited<ReturnType<typeof stripeProductsPost>>>
    export type StripeProductsPostMutationBody = NonReadonly<StripeProductsPostBody>
    export type StripeProductsPostMutationError = void

    /**
 * @summary Add a new product.
 */
export const useStripeProductsPost = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsPost>>, TError,{data: NonReadonly<StripeProductsPostBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeProductsPost>>,
        TError,
        {data: NonReadonly<StripeProductsPostBody>},
        TContext
      > => {

      const mutationOptions = getStripeProductsPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import all products and their prices from the connected Stripe account.
 */
export const stripeProductsSyncProductsFromStripe = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<ImportResult>(
      {url: `/api/v1/billing/stripe/products/sync`, method: 'POST', signal
    },
      options);
    }
  


export const getStripeProductsSyncProductsFromStripeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsSyncProductsFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeProductsSyncProductsFromStripe>>, TError,void, TContext> => {

const mutationKey = ['stripeProductsSyncProductsFromStripe'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeProductsSyncProductsFromStripe>>, void> = () => {
          

          return  stripeProductsSyncProductsFromStripe(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeProductsSyncProductsFromStripeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeProductsSyncProductsFromStripe>>>
    
    export type StripeProductsSyncProductsFromStripeMutationError = void

    /**
 * @summary Import all products and their prices from the connected Stripe account.
 */
export const useStripeProductsSyncProductsFromStripe = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsSyncProductsFromStripe>>, TError,void, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeProductsSyncProductsFromStripe>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getStripeProductsSyncProductsFromStripeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a product.
 */
export const stripeProductsGet = (
    uid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<StripeProduct>(
      {url: `/api/v1/billing/stripe/products/${uid}`, method: 'GET', signal
    },
      options);
    }
  



export const getStripeProductsGetQueryKey = (uid?: string | null,) => {
    return [
    `/api/v1/billing/stripe/products/${uid}`
    ] as const;
    }

    
export const getStripeProductsGetQueryOptions = <TData = Awaited<ReturnType<typeof stripeProductsGet>>, TError = void>(uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductsGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getStripeProductsGetQueryKey(uid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof stripeProductsGet>>> = ({ signal }) => stripeProductsGet(uid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(uid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof stripeProductsGet>>, TError, TData> & { queryKey: QueryKey }
}

export type StripeProductsGetQueryResult = NonNullable<Awaited<ReturnType<typeof stripeProductsGet>>>
export type StripeProductsGetQueryError = void


/**
 * @summary Retrieve a product.
 */

export function useStripeProductsGet<TData = Awaited<ReturnType<typeof stripeProductsGet>>, TError = void>(
 uid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof stripeProductsGet>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getStripeProductsGetQueryOptions(uid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/plans/{planUid} or PUT /billing/addons/{addOnUid} instead.
            
The changes are also sent to the connected Stripe account.
 * @summary Update a product.
 */
export const stripeProductsPut = (
    uid: string | null,
    stripeProductsPutBody: NonReadonly<StripeProductsPutBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<StripeProduct>(
      {url: `/api/v1/billing/stripe/products/${uid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: stripeProductsPutBody
    },
      options);
    }
  


export const getStripeProductsPutMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsPut>>, TError,{uid: string | null;data: NonReadonly<StripeProductsPutBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeProductsPut>>, TError,{uid: string | null;data: NonReadonly<StripeProductsPutBody>}, TContext> => {

const mutationKey = ['stripeProductsPut'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeProductsPut>>, {uid: string | null;data: NonReadonly<StripeProductsPutBody>}> = (props) => {
          const {uid,data} = props ?? {};

          return  stripeProductsPut(uid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeProductsPutMutationResult = NonNullable<Awaited<ReturnType<typeof stripeProductsPut>>>
    export type StripeProductsPutMutationBody = NonReadonly<StripeProductsPutBody>
    export type StripeProductsPutMutationError = void

    /**
 * @summary Update a product.
 */
export const useStripeProductsPut = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsPut>>, TError,{uid: string | null;data: NonReadonly<StripeProductsPutBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeProductsPut>>,
        TError,
        {uid: string | null;data: NonReadonly<StripeProductsPutBody>},
        TContext
      > => {

      const mutationOptions = getStripeProductsPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import a product and its prices from the connected Stripe account.
 */
export const stripeProductsSyncProductFromStripe = (
    uid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/stripe/products/${uid}/sync`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getStripeProductsSyncProductFromStripeMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsSyncProductFromStripe>>, TError,{uid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof stripeProductsSyncProductFromStripe>>, TError,{uid: string | null}, TContext> => {

const mutationKey = ['stripeProductsSyncProductFromStripe'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof stripeProductsSyncProductFromStripe>>, {uid: string | null}> = (props) => {
          const {uid} = props ?? {};

          return  stripeProductsSyncProductFromStripe(uid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type StripeProductsSyncProductFromStripeMutationResult = NonNullable<Awaited<ReturnType<typeof stripeProductsSyncProductFromStripe>>>
    
    export type StripeProductsSyncProductFromStripeMutationError = void

    /**
 * @summary Import a product and its prices from the connected Stripe account.
 */
export const useStripeProductsSyncProductFromStripe = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof stripeProductsSyncProductFromStripe>>, TError,{uid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof stripeProductsSyncProductFromStripe>>,
        TError,
        {uid: string | null},
        TContext
      > => {

      const mutationOptions = getStripeProductsSyncProductFromStripeMutationOptions(options);

      return useMutation(mutationOptions);
    }
    