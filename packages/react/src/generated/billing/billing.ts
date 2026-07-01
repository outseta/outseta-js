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
  DiscountCoupon,
  DiscountCouponAddDiscountCouponBody,
  DiscountCouponGetAllDiscountCouponsParams,
  DiscountCouponGetDiscountCouponByCodeParams,
  DiscountCouponGetDiscountCouponRedemptionsParams,
  DiscountCouponSubscription,
  DiscountCouponUpdateDiscountCouponBody,
  Invoice,
  InvoiceAddInvoiceBody,
  InvoiceUpdateInvoiceBody,
  PaymentInformation,
  PaymentInformationSavePaymentInformationBody,
  Plan,
  PlanAddPlanBody,
  PlanFamily,
  PlanFamilyAddPlanFamilyBody,
  PlanFamilyUpdatePlanFamilyBody,
  PlanUpdatePlanBody,
  Subscription,
  SubscriptionAddOn,
  SubscriptionAddOnAddSubscriptionAddOnBody,
  SubscriptionAddOnAddSubscriptionAddOnPreviewBody,
  SubscriptionAddOnGetAllSubscriptionsAddOnsParams,
  SubscriptionAddOnSetAddOnUpgradeRequiredBody,
  SubscriptionChangeSubscriptionBody,
  SubscriptionChangeSubscriptionParams,
  SubscriptionChangeSubscriptionPreviewBody,
  SubscriptionChangeSubscriptionPreviewParams,
  SubscriptionFirstTimeSubscriptionBody,
  SubscriptionFirstTimeSubscriptionPreviewBody,
  SubscriptionFirstTimeSubscriptionPreviewParams,
  SubscriptionGetAllSubscriptionsParams,
  SubscriptionSetSubscriptionUpgradeRequiredBody,
  Transaction,
  TransactionsAddPaymentTransactionBody,
  Usage,
  UsageAddUsageBody
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
 * Used during registration to confirm that a coupon code can still be applied to a plan.
Returns the coupon when valid, 404 when no coupon matches the code, or a validation
error when the coupon cannot be applied.
 * @summary Retrieve a discount coupon by code.
 */
export const discountCouponGetDiscountCouponByCode = (
    code: string | null,
    params: DiscountCouponGetDiscountCouponByCodeParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DiscountCoupon>(
      {url: `/api/v1/public/billing/discountcoupons/${code}`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getDiscountCouponGetDiscountCouponByCodeQueryKey = (code?: string | null,
    params?: DiscountCouponGetDiscountCouponByCodeParams,) => {
    return [
    `/api/v1/public/billing/discountcoupons/${code}`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getDiscountCouponGetDiscountCouponByCodeQueryOptions = <TData = Awaited<ReturnType<typeof discountCouponGetDiscountCouponByCode>>, TError = void>(code: string | null,
    params: DiscountCouponGetDiscountCouponByCodeParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCouponByCode>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDiscountCouponGetDiscountCouponByCodeQueryKey(code,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof discountCouponGetDiscountCouponByCode>>> = ({ signal }) => discountCouponGetDiscountCouponByCode(code,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(code), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCouponByCode>>, TError, TData> & { queryKey: QueryKey }
}

export type DiscountCouponGetDiscountCouponByCodeQueryResult = NonNullable<Awaited<ReturnType<typeof discountCouponGetDiscountCouponByCode>>>
export type DiscountCouponGetDiscountCouponByCodeQueryError = void


/**
 * @summary Retrieve a discount coupon by code.
 */

export function useDiscountCouponGetDiscountCouponByCode<TData = Awaited<ReturnType<typeof discountCouponGetDiscountCouponByCode>>, TError = void>(
 code: string | null,
    params: DiscountCouponGetDiscountCouponByCodeParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCouponByCode>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDiscountCouponGetDiscountCouponByCodeQueryOptions(code,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Retrieve all discount coupons.
 */
export const discountCouponGetAllDiscountCoupons = (
    params?: DiscountCouponGetAllDiscountCouponsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DiscountCoupon[]>(
      {url: `/api/v1/billing/discountcoupons`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getDiscountCouponGetAllDiscountCouponsQueryKey = (params?: DiscountCouponGetAllDiscountCouponsParams,) => {
    return [
    `/api/v1/billing/discountcoupons`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getDiscountCouponGetAllDiscountCouponsQueryOptions = <TData = Awaited<ReturnType<typeof discountCouponGetAllDiscountCoupons>>, TError = void>(params?: DiscountCouponGetAllDiscountCouponsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetAllDiscountCoupons>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDiscountCouponGetAllDiscountCouponsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof discountCouponGetAllDiscountCoupons>>> = ({ signal }) => discountCouponGetAllDiscountCoupons(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetAllDiscountCoupons>>, TError, TData> & { queryKey: QueryKey }
}

export type DiscountCouponGetAllDiscountCouponsQueryResult = NonNullable<Awaited<ReturnType<typeof discountCouponGetAllDiscountCoupons>>>
export type DiscountCouponGetAllDiscountCouponsQueryError = void


/**
 * @summary Retrieve all discount coupons.
 */

export function useDiscountCouponGetAllDiscountCoupons<TData = Awaited<ReturnType<typeof discountCouponGetAllDiscountCoupons>>, TError = void>(
 params?: DiscountCouponGetAllDiscountCouponsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetAllDiscountCoupons>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDiscountCouponGetAllDiscountCouponsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Only one of AmountOff or PercentOff should be set.
Duration values: 1 = Forever, 2 = Once, 3 = Repeating (DurationInMonths must be set).
 * @summary Add a new discount coupon.
 */
export const discountCouponAddDiscountCoupon = (
    discountCouponAddDiscountCouponBody: NonReadonly<DiscountCouponAddDiscountCouponBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DiscountCoupon>(
      {url: `/api/v1/billing/discountcoupons`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: discountCouponAddDiscountCouponBody, signal
    },
      options);
    }
  


export const getDiscountCouponAddDiscountCouponMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, TError,{data: NonReadonly<DiscountCouponAddDiscountCouponBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, TError,{data: NonReadonly<DiscountCouponAddDiscountCouponBody>}, TContext> => {

const mutationKey = ['discountCouponAddDiscountCoupon'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, {data: NonReadonly<DiscountCouponAddDiscountCouponBody>}> = (props) => {
          const {data} = props ?? {};

          return  discountCouponAddDiscountCoupon(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DiscountCouponAddDiscountCouponMutationResult = NonNullable<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>>
    export type DiscountCouponAddDiscountCouponMutationBody = NonReadonly<DiscountCouponAddDiscountCouponBody>
    export type DiscountCouponAddDiscountCouponMutationError = void

    /**
 * @summary Add a new discount coupon.
 */
export const useDiscountCouponAddDiscountCoupon = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, TError,{data: NonReadonly<DiscountCouponAddDiscountCouponBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>,
        TError,
        {data: NonReadonly<DiscountCouponAddDiscountCouponBody>},
        TContext
      > => {

      const mutationOptions = getDiscountCouponAddDiscountCouponMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a discount coupon.
 */
export const discountCouponGetDiscountCoupon = (
    discountCouponUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DiscountCoupon>(
      {url: `/api/v1/billing/discountcoupons/${discountCouponUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getDiscountCouponGetDiscountCouponQueryKey = (discountCouponUid?: string | null,) => {
    return [
    `/api/v1/billing/discountcoupons/${discountCouponUid}`
    ] as const;
    }

    
export const getDiscountCouponGetDiscountCouponQueryOptions = <TData = Awaited<ReturnType<typeof discountCouponGetDiscountCoupon>>, TError = void>(discountCouponUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCoupon>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDiscountCouponGetDiscountCouponQueryKey(discountCouponUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof discountCouponGetDiscountCoupon>>> = ({ signal }) => discountCouponGetDiscountCoupon(discountCouponUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(discountCouponUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCoupon>>, TError, TData> & { queryKey: QueryKey }
}

export type DiscountCouponGetDiscountCouponQueryResult = NonNullable<Awaited<ReturnType<typeof discountCouponGetDiscountCoupon>>>
export type DiscountCouponGetDiscountCouponQueryError = void


/**
 * @summary Retrieve a discount coupon.
 */

export function useDiscountCouponGetDiscountCoupon<TData = Awaited<ReturnType<typeof discountCouponGetDiscountCoupon>>, TError = void>(
 discountCouponUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCoupon>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDiscountCouponGetDiscountCouponQueryOptions(discountCouponUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Update a discount coupon.
 */
export const discountCouponUpdateDiscountCoupon = (
    discountCouponUid: string | null,
    discountCouponUpdateDiscountCouponBody: NonReadonly<DiscountCouponUpdateDiscountCouponBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<DiscountCoupon>(
      {url: `/api/v1/billing/discountcoupons/${discountCouponUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: discountCouponUpdateDiscountCouponBody
    },
      options);
    }
  


export const getDiscountCouponUpdateDiscountCouponMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponUpdateDiscountCoupon>>, TError,{discountCouponUid: string | null;data: NonReadonly<DiscountCouponUpdateDiscountCouponBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof discountCouponUpdateDiscountCoupon>>, TError,{discountCouponUid: string | null;data: NonReadonly<DiscountCouponUpdateDiscountCouponBody>}, TContext> => {

const mutationKey = ['discountCouponUpdateDiscountCoupon'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof discountCouponUpdateDiscountCoupon>>, {discountCouponUid: string | null;data: NonReadonly<DiscountCouponUpdateDiscountCouponBody>}> = (props) => {
          const {discountCouponUid,data} = props ?? {};

          return  discountCouponUpdateDiscountCoupon(discountCouponUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DiscountCouponUpdateDiscountCouponMutationResult = NonNullable<Awaited<ReturnType<typeof discountCouponUpdateDiscountCoupon>>>
    export type DiscountCouponUpdateDiscountCouponMutationBody = NonReadonly<DiscountCouponUpdateDiscountCouponBody>
    export type DiscountCouponUpdateDiscountCouponMutationError = void

    /**
 * @summary Update a discount coupon.
 */
export const useDiscountCouponUpdateDiscountCoupon = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponUpdateDiscountCoupon>>, TError,{discountCouponUid: string | null;data: NonReadonly<DiscountCouponUpdateDiscountCouponBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof discountCouponUpdateDiscountCoupon>>,
        TError,
        {discountCouponUid: string | null;data: NonReadonly<DiscountCouponUpdateDiscountCouponBody>},
        TContext
      > => {

      const mutationOptions = getDiscountCouponUpdateDiscountCouponMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a discount coupon.
 */
export const discountCouponDeleteDiscountCoupon = (
    discountCouponUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/discountcoupons/${discountCouponUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getDiscountCouponDeleteDiscountCouponMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponDeleteDiscountCoupon>>, TError,{discountCouponUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof discountCouponDeleteDiscountCoupon>>, TError,{discountCouponUid: string | null}, TContext> => {

const mutationKey = ['discountCouponDeleteDiscountCoupon'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof discountCouponDeleteDiscountCoupon>>, {discountCouponUid: string | null}> = (props) => {
          const {discountCouponUid} = props ?? {};

          return  discountCouponDeleteDiscountCoupon(discountCouponUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DiscountCouponDeleteDiscountCouponMutationResult = NonNullable<Awaited<ReturnType<typeof discountCouponDeleteDiscountCoupon>>>
    
    export type DiscountCouponDeleteDiscountCouponMutationError = void

    /**
 * @summary Delete a discount coupon.
 */
export const useDiscountCouponDeleteDiscountCoupon = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponDeleteDiscountCoupon>>, TError,{discountCouponUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof discountCouponDeleteDiscountCoupon>>,
        TError,
        {discountCouponUid: string | null},
        TContext
      > => {

      const mutationOptions = getDiscountCouponDeleteDiscountCouponMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve the redemptions of a discount coupon.
 */
export const discountCouponGetDiscountCouponRedemptions = (
    discountCouponUid: string | null,
    params?: DiscountCouponGetDiscountCouponRedemptionsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DiscountCouponSubscription[]>(
      {url: `/api/v1/billing/discountcoupons/${discountCouponUid}/redemptions`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getDiscountCouponGetDiscountCouponRedemptionsQueryKey = (discountCouponUid?: string | null,
    params?: DiscountCouponGetDiscountCouponRedemptionsParams,) => {
    return [
    `/api/v1/billing/discountcoupons/${discountCouponUid}/redemptions`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getDiscountCouponGetDiscountCouponRedemptionsQueryOptions = <TData = Awaited<ReturnType<typeof discountCouponGetDiscountCouponRedemptions>>, TError = void>(discountCouponUid: string | null,
    params?: DiscountCouponGetDiscountCouponRedemptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCouponRedemptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDiscountCouponGetDiscountCouponRedemptionsQueryKey(discountCouponUid,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof discountCouponGetDiscountCouponRedemptions>>> = ({ signal }) => discountCouponGetDiscountCouponRedemptions(discountCouponUid,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(discountCouponUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCouponRedemptions>>, TError, TData> & { queryKey: QueryKey }
}

export type DiscountCouponGetDiscountCouponRedemptionsQueryResult = NonNullable<Awaited<ReturnType<typeof discountCouponGetDiscountCouponRedemptions>>>
export type DiscountCouponGetDiscountCouponRedemptionsQueryError = void


/**
 * @summary Retrieve the redemptions of a discount coupon.
 */

export function useDiscountCouponGetDiscountCouponRedemptions<TData = Awaited<ReturnType<typeof discountCouponGetDiscountCouponRedemptions>>, TError = void>(
 discountCouponUid: string | null,
    params?: DiscountCouponGetDiscountCouponRedemptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof discountCouponGetDiscountCouponRedemptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDiscountCouponGetDiscountCouponRedemptionsQueryOptions(discountCouponUid,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add a usage entry for an add-on that bills for usage at the end of the month.
 */
export const usageAddUsage = (
    usageAddUsageBody: NonReadonly<UsageAddUsageBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Usage>(
      {url: `/api/v1/billing/usage`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: usageAddUsageBody, signal
    },
      options);
    }
  


export const getUsageAddUsageMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usageAddUsage>>, TError,{data: NonReadonly<UsageAddUsageBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof usageAddUsage>>, TError,{data: NonReadonly<UsageAddUsageBody>}, TContext> => {

const mutationKey = ['usageAddUsage'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof usageAddUsage>>, {data: NonReadonly<UsageAddUsageBody>}> = (props) => {
          const {data} = props ?? {};

          return  usageAddUsage(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UsageAddUsageMutationResult = NonNullable<Awaited<ReturnType<typeof usageAddUsage>>>
    export type UsageAddUsageMutationBody = NonReadonly<UsageAddUsageBody>
    export type UsageAddUsageMutationError = void

    /**
 * @summary Add a usage entry for an add-on that bills for usage at the end of the month.
 */
export const useUsageAddUsage = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usageAddUsage>>, TError,{data: NonReadonly<UsageAddUsageBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof usageAddUsage>>,
        TError,
        {data: NonReadonly<UsageAddUsageBody>},
        TContext
      > => {

      const mutationOptions = getUsageAddUsageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Transactions for a given account, tied to accounts and invoices.
BillingTransactionType: Invoice = 1, Payment = 2, Credit = 3, Refund = 4, Chargeback = 5.
 * @summary Retrieve all transactions.
 */
export const transactionsGetAllTransactionsByAccountId = (
    accountUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Transaction[]>(
      {url: `/api/v1/billing/transactions/${accountUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getTransactionsGetAllTransactionsByAccountIdQueryKey = (accountUid?: string | null,) => {
    return [
    `/api/v1/billing/transactions/${accountUid}`
    ] as const;
    }

    
export const getTransactionsGetAllTransactionsByAccountIdQueryOptions = <TData = Awaited<ReturnType<typeof transactionsGetAllTransactionsByAccountId>>, TError = void>(accountUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof transactionsGetAllTransactionsByAccountId>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTransactionsGetAllTransactionsByAccountIdQueryKey(accountUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof transactionsGetAllTransactionsByAccountId>>> = ({ signal }) => transactionsGetAllTransactionsByAccountId(accountUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(accountUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof transactionsGetAllTransactionsByAccountId>>, TError, TData> & { queryKey: QueryKey }
}

export type TransactionsGetAllTransactionsByAccountIdQueryResult = NonNullable<Awaited<ReturnType<typeof transactionsGetAllTransactionsByAccountId>>>
export type TransactionsGetAllTransactionsByAccountIdQueryError = void


/**
 * @summary Retrieve all transactions.
 */

export function useTransactionsGetAllTransactionsByAccountId<TData = Awaited<ReturnType<typeof transactionsGetAllTransactionsByAccountId>>, TError = void>(
 accountUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof transactionsGetAllTransactionsByAccountId>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTransactionsGetAllTransactionsByAccountIdQueryOptions(accountUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * If the amount matches the outstanding amount of the invoice, the invoice will be marked
as Paid.
 * @summary Add a payment to an invoice.
 */
export const transactionsAddPaymentTransaction = (
    transactionsAddPaymentTransactionBody: NonReadonly<TransactionsAddPaymentTransactionBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Transaction>(
      {url: `/api/v1/billing/transactions/payment`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: transactionsAddPaymentTransactionBody, signal
    },
      options);
    }
  


export const getTransactionsAddPaymentTransactionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, TError,{data: NonReadonly<TransactionsAddPaymentTransactionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, TError,{data: NonReadonly<TransactionsAddPaymentTransactionBody>}, TContext> => {

const mutationKey = ['transactionsAddPaymentTransaction'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, {data: NonReadonly<TransactionsAddPaymentTransactionBody>}> = (props) => {
          const {data} = props ?? {};

          return  transactionsAddPaymentTransaction(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TransactionsAddPaymentTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>>
    export type TransactionsAddPaymentTransactionMutationBody = NonReadonly<TransactionsAddPaymentTransactionBody>
    export type TransactionsAddPaymentTransactionMutationError = void

    /**
 * @summary Add a payment to an invoice.
 */
export const useTransactionsAddPaymentTransaction = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, TError,{data: NonReadonly<TransactionsAddPaymentTransactionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>,
        TError,
        {data: NonReadonly<TransactionsAddPaymentTransactionBody>},
        TContext
      > => {

      const mutationOptions = getTransactionsAddPaymentTransactionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Update payment information for an account.
 */
export const paymentInformationSavePaymentInformation = (
    paymentInformationSavePaymentInformationBody: NonReadonly<PaymentInformationSavePaymentInformationBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<PaymentInformation>(
      {url: `/api/v1/billing/paymentinformation`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: paymentInformationSavePaymentInformationBody, signal
    },
      options);
    }
  


export const getPaymentInformationSavePaymentInformationMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, TError,{data: NonReadonly<PaymentInformationSavePaymentInformationBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, TError,{data: NonReadonly<PaymentInformationSavePaymentInformationBody>}, TContext> => {

const mutationKey = ['paymentInformationSavePaymentInformation'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, {data: NonReadonly<PaymentInformationSavePaymentInformationBody>}> = (props) => {
          const {data} = props ?? {};

          return  paymentInformationSavePaymentInformation(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PaymentInformationSavePaymentInformationMutationResult = NonNullable<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>>
    export type PaymentInformationSavePaymentInformationMutationBody = NonReadonly<PaymentInformationSavePaymentInformationBody>
    export type PaymentInformationSavePaymentInformationMutationError = void

    /**
 * @summary Update payment information for an account.
 */
export const usePaymentInformationSavePaymentInformation = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, TError,{data: NonReadonly<PaymentInformationSavePaymentInformationBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>,
        TError,
        {data: NonReadonly<PaymentInformationSavePaymentInformationBody>},
        TContext
      > => {

      const mutationOptions = getPaymentInformationSavePaymentInformationMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all subscription add-ons.
 */
export const subscriptionAddOnGetAllSubscriptionsAddOns = (
    params?: SubscriptionAddOnGetAllSubscriptionsAddOnsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<SubscriptionAddOn[]>(
      {url: `/api/v1/billing/subscriptionaddons`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getSubscriptionAddOnGetAllSubscriptionsAddOnsQueryKey = (params?: SubscriptionAddOnGetAllSubscriptionsAddOnsParams,) => {
    return [
    `/api/v1/billing/subscriptionaddons`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getSubscriptionAddOnGetAllSubscriptionsAddOnsQueryOptions = <TData = Awaited<ReturnType<typeof subscriptionAddOnGetAllSubscriptionsAddOns>>, TError = void>(params?: SubscriptionAddOnGetAllSubscriptionsAddOnsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionAddOnGetAllSubscriptionsAddOns>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getSubscriptionAddOnGetAllSubscriptionsAddOnsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof subscriptionAddOnGetAllSubscriptionsAddOns>>> = ({ signal }) => subscriptionAddOnGetAllSubscriptionsAddOns(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof subscriptionAddOnGetAllSubscriptionsAddOns>>, TError, TData> & { queryKey: QueryKey }
}

export type SubscriptionAddOnGetAllSubscriptionsAddOnsQueryResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnGetAllSubscriptionsAddOns>>>
export type SubscriptionAddOnGetAllSubscriptionsAddOnsQueryError = void


/**
 * @summary Retrieve all subscription add-ons.
 */

export function useSubscriptionAddOnGetAllSubscriptionsAddOns<TData = Awaited<ReturnType<typeof subscriptionAddOnGetAllSubscriptionsAddOns>>, TError = void>(
 params?: SubscriptionAddOnGetAllSubscriptionsAddOnsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionAddOnGetAllSubscriptionsAddOns>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getSubscriptionAddOnGetAllSubscriptionsAddOnsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add an add-on to a subscription.
 */
export const subscriptionAddOnAddSubscriptionAddOn = (
    subscriptionAddOnAddSubscriptionAddOnBody: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/subscriptionaddons`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionAddOnAddSubscriptionAddOnBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getSubscriptionAddOnAddSubscriptionAddOnMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, TError,{data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, TError,{data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>}, TContext> => {

const mutationKey = ['subscriptionAddOnAddSubscriptionAddOn'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, {data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>}> = (props) => {
          const {data} = props ?? {};

          return  subscriptionAddOnAddSubscriptionAddOn(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionAddOnAddSubscriptionAddOnMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>>
    export type SubscriptionAddOnAddSubscriptionAddOnMutationBody = NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>
    export type SubscriptionAddOnAddSubscriptionAddOnMutationError = void

    /**
 * @summary Add an add-on to a subscription.
 */
export const useSubscriptionAddOnAddSubscriptionAddOn = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, TError,{data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>,
        TError,
        {data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>},
        TContext
      > => {

      const mutationOptions = getSubscriptionAddOnAddSubscriptionAddOnMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a subscription add-on.
 */
export const subscriptionAddOnGetSubscriptionAddOn = (
    subscriptionAddOnUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<SubscriptionAddOn>(
      {url: `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getSubscriptionAddOnGetSubscriptionAddOnQueryKey = (subscriptionAddOnUid?: string | null,) => {
    return [
    `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}`
    ] as const;
    }

    
export const getSubscriptionAddOnGetSubscriptionAddOnQueryOptions = <TData = Awaited<ReturnType<typeof subscriptionAddOnGetSubscriptionAddOn>>, TError = void>(subscriptionAddOnUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionAddOnGetSubscriptionAddOn>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getSubscriptionAddOnGetSubscriptionAddOnQueryKey(subscriptionAddOnUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof subscriptionAddOnGetSubscriptionAddOn>>> = ({ signal }) => subscriptionAddOnGetSubscriptionAddOn(subscriptionAddOnUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(subscriptionAddOnUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof subscriptionAddOnGetSubscriptionAddOn>>, TError, TData> & { queryKey: QueryKey }
}

export type SubscriptionAddOnGetSubscriptionAddOnQueryResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnGetSubscriptionAddOn>>>
export type SubscriptionAddOnGetSubscriptionAddOnQueryError = void


/**
 * @summary Retrieve a subscription add-on.
 */

export function useSubscriptionAddOnGetSubscriptionAddOn<TData = Awaited<ReturnType<typeof subscriptionAddOnGetSubscriptionAddOn>>, TError = void>(
 subscriptionAddOnUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionAddOnGetSubscriptionAddOn>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getSubscriptionAddOnGetSubscriptionAddOnQueryOptions(subscriptionAddOnUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Returns an invoice object with information about the amount outstanding. This method
does not commit the change.
 * @summary Preview the invoice for adding an add-on to a subscription.
 */
export const subscriptionAddOnAddSubscriptionAddOnPreview = (
    subscriptionAddOnAddSubscriptionAddOnPreviewBody: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/subscriptionaddons/addsubscriptionaddonpreview`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionAddOnAddSubscriptionAddOnPreviewBody, signal
    },
      options);
    }
  


export const getSubscriptionAddOnAddSubscriptionAddOnPreviewMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOnPreview>>, TError,{data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOnPreview>>, TError,{data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>}, TContext> => {

const mutationKey = ['subscriptionAddOnAddSubscriptionAddOnPreview'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOnPreview>>, {data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>}> = (props) => {
          const {data} = props ?? {};

          return  subscriptionAddOnAddSubscriptionAddOnPreview(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionAddOnAddSubscriptionAddOnPreviewMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOnPreview>>>
    export type SubscriptionAddOnAddSubscriptionAddOnPreviewMutationBody = NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>
    export type SubscriptionAddOnAddSubscriptionAddOnPreviewMutationError = void

    /**
 * @summary Preview the invoice for adding an add-on to a subscription.
 */
export const useSubscriptionAddOnAddSubscriptionAddOnPreview = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOnPreview>>, TError,{data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOnPreview>>,
        TError,
        {data: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>},
        TContext
      > => {

      const mutationOptions = getSubscriptionAddOnAddSubscriptionAddOnPreviewMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * When a subscription add-on is flagged, the next time the user authenticates the
authentication widget will prompt the user to change their add-on.
 * @summary Indicate that an upgrade of an add-on is required.
 */
export const subscriptionAddOnSetAddOnUpgradeRequired = (
    subscriptionAddOnUid: string | null,
    subscriptionAddOnSetAddOnUpgradeRequiredBody: NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<SubscriptionAddOn>(
      {url: `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}/setaddonupgraderequired`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionAddOnSetAddOnUpgradeRequiredBody
    },
      options);
    }
  


export const getSubscriptionAddOnSetAddOnUpgradeRequiredMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnSetAddOnUpgradeRequired>>, TError,{subscriptionAddOnUid: string | null;data: NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnSetAddOnUpgradeRequired>>, TError,{subscriptionAddOnUid: string | null;data: NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>}, TContext> => {

const mutationKey = ['subscriptionAddOnSetAddOnUpgradeRequired'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionAddOnSetAddOnUpgradeRequired>>, {subscriptionAddOnUid: string | null;data: NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>}> = (props) => {
          const {subscriptionAddOnUid,data} = props ?? {};

          return  subscriptionAddOnSetAddOnUpgradeRequired(subscriptionAddOnUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionAddOnSetAddOnUpgradeRequiredMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnSetAddOnUpgradeRequired>>>
    export type SubscriptionAddOnSetAddOnUpgradeRequiredMutationBody = NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>
    export type SubscriptionAddOnSetAddOnUpgradeRequiredMutationError = void

    /**
 * @summary Indicate that an upgrade of an add-on is required.
 */
export const useSubscriptionAddOnSetAddOnUpgradeRequired = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnSetAddOnUpgradeRequired>>, TError,{subscriptionAddOnUid: string | null;data: NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionAddOnSetAddOnUpgradeRequired>>,
        TError,
        {subscriptionAddOnUid: string | null;data: NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>},
        TContext
      > => {

      const mutationOptions = getSubscriptionAddOnSetAddOnUpgradeRequiredMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Removes the add-on from the subscription going forward and returns the updated
subscription.
 * @summary End an add-on on a subscription.
 */
export const subscriptionAddOnEndSubscriptionAddOn = (
    subscriptionAddOnUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Subscription>(
      {url: `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}/end`, method: 'PUT'
    },
      options);
    }
  


export const getSubscriptionAddOnEndSubscriptionAddOnMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnEndSubscriptionAddOn>>, TError,{subscriptionAddOnUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnEndSubscriptionAddOn>>, TError,{subscriptionAddOnUid: string | null}, TContext> => {

const mutationKey = ['subscriptionAddOnEndSubscriptionAddOn'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionAddOnEndSubscriptionAddOn>>, {subscriptionAddOnUid: string | null}> = (props) => {
          const {subscriptionAddOnUid} = props ?? {};

          return  subscriptionAddOnEndSubscriptionAddOn(subscriptionAddOnUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionAddOnEndSubscriptionAddOnMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnEndSubscriptionAddOn>>>
    
    export type SubscriptionAddOnEndSubscriptionAddOnMutationError = void

    /**
 * @summary End an add-on on a subscription.
 */
export const useSubscriptionAddOnEndSubscriptionAddOn = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnEndSubscriptionAddOn>>, TError,{subscriptionAddOnUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionAddOnEndSubscriptionAddOn>>,
        TError,
        {subscriptionAddOnUid: string | null},
        TContext
      > => {

      const mutationOptions = getSubscriptionAddOnEndSubscriptionAddOnMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Immediately ends an add-on.
 */
export const subscriptionAddOnExpireSubscriptionAddOn = (
    subscriptionAddOnUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}/expire`, method: 'PUT',
        responseType: 'blob'
    },
      options);
    }
  


export const getSubscriptionAddOnExpireSubscriptionAddOnMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnExpireSubscriptionAddOn>>, TError,{subscriptionAddOnUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnExpireSubscriptionAddOn>>, TError,{subscriptionAddOnUid: string | null}, TContext> => {

const mutationKey = ['subscriptionAddOnExpireSubscriptionAddOn'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionAddOnExpireSubscriptionAddOn>>, {subscriptionAddOnUid: string | null}> = (props) => {
          const {subscriptionAddOnUid} = props ?? {};

          return  subscriptionAddOnExpireSubscriptionAddOn(subscriptionAddOnUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionAddOnExpireSubscriptionAddOnMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnExpireSubscriptionAddOn>>>
    
    export type SubscriptionAddOnExpireSubscriptionAddOnMutationError = void

    /**
 * @summary Immediately ends an add-on.
 */
export const useSubscriptionAddOnExpireSubscriptionAddOn = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnExpireSubscriptionAddOn>>, TError,{subscriptionAddOnUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionAddOnExpireSubscriptionAddOn>>,
        TError,
        {subscriptionAddOnUid: string | null},
        TContext
      > => {

      const mutationOptions = getSubscriptionAddOnExpireSubscriptionAddOnMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Admins and API key callers see every invoice. Non-admin users see only invoices
belonging to the account they are the primary contact of.
Pass excludeInvoiceUid as a query parameter to omit a specific invoice from the result set.
 * @summary Retrieve all invoices.
 */
export const invoiceGetAllInvoices = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Invoice[]>(
      {url: `/api/v1/billing/invoices`, method: 'GET', signal
    },
      options);
    }
  



export const getInvoiceGetAllInvoicesQueryKey = () => {
    return [
    `/api/v1/billing/invoices`
    ] as const;
    }

    
export const getInvoiceGetAllInvoicesQueryOptions = <TData = Awaited<ReturnType<typeof invoiceGetAllInvoices>>, TError = void>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof invoiceGetAllInvoices>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getInvoiceGetAllInvoicesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof invoiceGetAllInvoices>>> = ({ signal }) => invoiceGetAllInvoices(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof invoiceGetAllInvoices>>, TError, TData> & { queryKey: QueryKey }
}

export type InvoiceGetAllInvoicesQueryResult = NonNullable<Awaited<ReturnType<typeof invoiceGetAllInvoices>>>
export type InvoiceGetAllInvoicesQueryError = void


/**
 * @summary Retrieve all invoices.
 */

export function useInvoiceGetAllInvoices<TData = Awaited<ReturnType<typeof invoiceGetAllInvoices>>, TError = void>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof invoiceGetAllInvoices>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getInvoiceGetAllInvoicesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Create an ad-hoc invoice for a given account.
 */
export const invoiceAddInvoice = (
    invoiceAddInvoiceBody: NonReadonly<InvoiceAddInvoiceBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/invoices`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: invoiceAddInvoiceBody, signal
    },
      options);
    }
  


export const getInvoiceAddInvoiceMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceAddInvoice>>, TError,{data: NonReadonly<InvoiceAddInvoiceBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof invoiceAddInvoice>>, TError,{data: NonReadonly<InvoiceAddInvoiceBody>}, TContext> => {

const mutationKey = ['invoiceAddInvoice'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof invoiceAddInvoice>>, {data: NonReadonly<InvoiceAddInvoiceBody>}> = (props) => {
          const {data} = props ?? {};

          return  invoiceAddInvoice(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type InvoiceAddInvoiceMutationResult = NonNullable<Awaited<ReturnType<typeof invoiceAddInvoice>>>
    export type InvoiceAddInvoiceMutationBody = NonReadonly<InvoiceAddInvoiceBody>
    export type InvoiceAddInvoiceMutationError = void

    /**
 * @summary Create an ad-hoc invoice for a given account.
 */
export const useInvoiceAddInvoice = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceAddInvoice>>, TError,{data: NonReadonly<InvoiceAddInvoiceBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof invoiceAddInvoice>>,
        TError,
        {data: NonReadonly<InvoiceAddInvoiceBody>},
        TContext
      > => {

      const mutationOptions = getInvoiceAddInvoiceMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve an invoice.
 */
export const invoiceGetInvoice = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/invoices/${invoiceUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getInvoiceGetInvoiceQueryKey = (invoiceUid?: string | null,) => {
    return [
    `/api/v1/billing/invoices/${invoiceUid}`
    ] as const;
    }

    
export const getInvoiceGetInvoiceQueryOptions = <TData = Awaited<ReturnType<typeof invoiceGetInvoice>>, TError = void>(invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof invoiceGetInvoice>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getInvoiceGetInvoiceQueryKey(invoiceUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof invoiceGetInvoice>>> = ({ signal }) => invoiceGetInvoice(invoiceUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(invoiceUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof invoiceGetInvoice>>, TError, TData> & { queryKey: QueryKey }
}

export type InvoiceGetInvoiceQueryResult = NonNullable<Awaited<ReturnType<typeof invoiceGetInvoice>>>
export type InvoiceGetInvoiceQueryError = void


/**
 * @summary Retrieve an invoice.
 */

export function useInvoiceGetInvoice<TData = Awaited<ReturnType<typeof invoiceGetInvoice>>, TError = void>(
 invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof invoiceGetInvoice>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getInvoiceGetInvoiceQueryOptions(invoiceUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Only invoices created manually via the API or admin UI can be updated; invoices
generated by a subscription's billing cycle are immutable and will return a
validation error.
 * @summary Update an ad-hoc (manually created) invoice.
 */
export const invoiceUpdateInvoice = (
    invoiceUid: string | null,
    invoiceUpdateInvoiceBody: NonReadonly<InvoiceUpdateInvoiceBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/invoices/${invoiceUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: invoiceUpdateInvoiceBody
    },
      options);
    }
  


export const getInvoiceUpdateInvoiceMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, TError,{invoiceUid: string | null;data: NonReadonly<InvoiceUpdateInvoiceBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, TError,{invoiceUid: string | null;data: NonReadonly<InvoiceUpdateInvoiceBody>}, TContext> => {

const mutationKey = ['invoiceUpdateInvoice'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, {invoiceUid: string | null;data: NonReadonly<InvoiceUpdateInvoiceBody>}> = (props) => {
          const {invoiceUid,data} = props ?? {};

          return  invoiceUpdateInvoice(invoiceUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type InvoiceUpdateInvoiceMutationResult = NonNullable<Awaited<ReturnType<typeof invoiceUpdateInvoice>>>
    export type InvoiceUpdateInvoiceMutationBody = NonReadonly<InvoiceUpdateInvoiceBody>
    export type InvoiceUpdateInvoiceMutationError = void

    /**
 * @summary Update an ad-hoc (manually created) invoice.
 */
export const useInvoiceUpdateInvoice = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, TError,{invoiceUid: string | null;data: NonReadonly<InvoiceUpdateInvoiceBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof invoiceUpdateInvoice>>,
        TError,
        {invoiceUid: string | null;data: NonReadonly<InvoiceUpdateInvoiceBody>},
        TContext
      > => {

      const mutationOptions = getInvoiceUpdateInvoiceMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete an invoice.
 */
export const invoiceDeleteInvoice = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/invoices/${invoiceUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getInvoiceDeleteInvoiceMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceDeleteInvoice>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof invoiceDeleteInvoice>>, TError,{invoiceUid: string | null}, TContext> => {

const mutationKey = ['invoiceDeleteInvoice'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof invoiceDeleteInvoice>>, {invoiceUid: string | null}> = (props) => {
          const {invoiceUid} = props ?? {};

          return  invoiceDeleteInvoice(invoiceUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type InvoiceDeleteInvoiceMutationResult = NonNullable<Awaited<ReturnType<typeof invoiceDeleteInvoice>>>
    
    export type InvoiceDeleteInvoiceMutationError = void

    /**
 * @summary Delete an invoice.
 */
export const useInvoiceDeleteInvoice = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceDeleteInvoice>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof invoiceDeleteInvoice>>,
        TError,
        {invoiceUid: string | null},
        TContext
      > => {

      const mutationOptions = getInvoiceDeleteInvoiceMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Response body is a binary PDF (Content-Type: application/pdf) served as an
attachment named invoice-{Number}-{InvoiceDate}-{AccountName}.pdf.
 * @summary Retrieve a rendered PDF copy of an invoice.
 */
export const invoiceGetInvoiceAsPdf = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/invoices/${invoiceUid}/pdf`, method: 'GET',
        responseType: 'blob', signal
    },
      options);
    }
  



export const getInvoiceGetInvoiceAsPdfQueryKey = (invoiceUid?: string | null,) => {
    return [
    `/api/v1/billing/invoices/${invoiceUid}/pdf`
    ] as const;
    }

    
export const getInvoiceGetInvoiceAsPdfQueryOptions = <TData = Awaited<ReturnType<typeof invoiceGetInvoiceAsPdf>>, TError = void>(invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof invoiceGetInvoiceAsPdf>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getInvoiceGetInvoiceAsPdfQueryKey(invoiceUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof invoiceGetInvoiceAsPdf>>> = ({ signal }) => invoiceGetInvoiceAsPdf(invoiceUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(invoiceUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof invoiceGetInvoiceAsPdf>>, TError, TData> & { queryKey: QueryKey }
}

export type InvoiceGetInvoiceAsPdfQueryResult = NonNullable<Awaited<ReturnType<typeof invoiceGetInvoiceAsPdf>>>
export type InvoiceGetInvoiceAsPdfQueryError = void


/**
 * @summary Retrieve a rendered PDF copy of an invoice.
 */

export function useInvoiceGetInvoiceAsPdf<TData = Awaited<ReturnType<typeof invoiceGetInvoiceAsPdf>>, TError = void>(
 invoiceUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof invoiceGetInvoiceAsPdf>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getInvoiceGetInvoiceAsPdfQueryOptions(invoiceUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Optional query parameters:
  note - free-text note to include in the email body.
  bcc  - comma-separated list of email addresses to BCC.
 * @summary Email an invoice to the account's billing contact.
 */
export const invoiceSendInvoiceEmail = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/invoices/${invoiceUid}/sendinvoiceemail`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getInvoiceSendInvoiceEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceSendInvoiceEmail>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof invoiceSendInvoiceEmail>>, TError,{invoiceUid: string | null}, TContext> => {

const mutationKey = ['invoiceSendInvoiceEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof invoiceSendInvoiceEmail>>, {invoiceUid: string | null}> = (props) => {
          const {invoiceUid} = props ?? {};

          return  invoiceSendInvoiceEmail(invoiceUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type InvoiceSendInvoiceEmailMutationResult = NonNullable<Awaited<ReturnType<typeof invoiceSendInvoiceEmail>>>
    
    export type InvoiceSendInvoiceEmailMutationError = void

    /**
 * @summary Email an invoice to the account's billing contact.
 */
export const useInvoiceSendInvoiceEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceSendInvoiceEmail>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof invoiceSendInvoiceEmail>>,
        TError,
        {invoiceUid: string | null},
        TContext
      > => {

      const mutationOptions = getInvoiceSendInvoiceEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns 400 Bad Request if the invoice is not in the Paid status.
 * @summary Send the "invoice paid" receipt email to the account's billing contact.
 */
export const invoiceSendInvoicePaidEmail = (
    invoiceUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/invoices/${invoiceUid}/sendinvoicepaidemail`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getInvoiceSendInvoicePaidEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceSendInvoicePaidEmail>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof invoiceSendInvoicePaidEmail>>, TError,{invoiceUid: string | null}, TContext> => {

const mutationKey = ['invoiceSendInvoicePaidEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof invoiceSendInvoicePaidEmail>>, {invoiceUid: string | null}> = (props) => {
          const {invoiceUid} = props ?? {};

          return  invoiceSendInvoicePaidEmail(invoiceUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type InvoiceSendInvoicePaidEmailMutationResult = NonNullable<Awaited<ReturnType<typeof invoiceSendInvoicePaidEmail>>>
    
    export type InvoiceSendInvoicePaidEmailMutationError = void

    /**
 * @summary Send the "invoice paid" receipt email to the account's billing contact.
 */
export const useInvoiceSendInvoicePaidEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceSendInvoicePaidEmail>>, TError,{invoiceUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof invoiceSendInvoicePaidEmail>>,
        TError,
        {invoiceUid: string | null},
        TContext
      > => {

      const mutationOptions = getInvoiceSendInvoicePaidEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Admins and API key callers see every subscription; non-admin users see only
subscriptions on accounts they are related to. That scope is determined by the auth
token and cannot be widened by the caller. Optionally pass
Account.PersonAccount.Person.Uid as a query parameter to narrow the results to a
specific person.
 * @summary Retrieve all subscriptions.
 */
export const subscriptionGetAllSubscriptions = (
    params?: SubscriptionGetAllSubscriptionsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Subscription[]>(
      {url: `/api/v1/billing/subscriptions`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getSubscriptionGetAllSubscriptionsQueryKey = (params?: SubscriptionGetAllSubscriptionsParams,) => {
    return [
    `/api/v1/billing/subscriptions`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getSubscriptionGetAllSubscriptionsQueryOptions = <TData = Awaited<ReturnType<typeof subscriptionGetAllSubscriptions>>, TError = void>(params?: SubscriptionGetAllSubscriptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionGetAllSubscriptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getSubscriptionGetAllSubscriptionsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof subscriptionGetAllSubscriptions>>> = ({ signal }) => subscriptionGetAllSubscriptions(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof subscriptionGetAllSubscriptions>>, TError, TData> & { queryKey: QueryKey }
}

export type SubscriptionGetAllSubscriptionsQueryResult = NonNullable<Awaited<ReturnType<typeof subscriptionGetAllSubscriptions>>>
export type SubscriptionGetAllSubscriptionsQueryError = void


/**
 * @summary Retrieve all subscriptions.
 */

export function useSubscriptionGetAllSubscriptions<TData = Awaited<ReturnType<typeof subscriptionGetAllSubscriptions>>, TError = void>(
 params?: SubscriptionGetAllSubscriptionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionGetAllSubscriptions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getSubscriptionGetAllSubscriptionsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Retrieve a subscription.
 */
export const subscriptionGetSubscription = (
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Subscription>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getSubscriptionGetSubscriptionQueryKey = (subscriptionUid?: string | null,) => {
    return [
    `/api/v1/billing/subscriptions/${subscriptionUid}`
    ] as const;
    }

    
export const getSubscriptionGetSubscriptionQueryOptions = <TData = Awaited<ReturnType<typeof subscriptionGetSubscription>>, TError = void>(subscriptionUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionGetSubscription>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getSubscriptionGetSubscriptionQueryKey(subscriptionUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof subscriptionGetSubscription>>> = ({ signal }) => subscriptionGetSubscription(subscriptionUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(subscriptionUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof subscriptionGetSubscription>>, TError, TData> & { queryKey: QueryKey }
}

export type SubscriptionGetSubscriptionQueryResult = NonNullable<Awaited<ReturnType<typeof subscriptionGetSubscription>>>
export type SubscriptionGetSubscriptionQueryError = void


/**
 * @summary Retrieve a subscription.
 */

export function useSubscriptionGetSubscription<TData = Awaited<ReturnType<typeof subscriptionGetSubscription>>, TError = void>(
 subscriptionUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof subscriptionGetSubscription>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getSubscriptionGetSubscriptionQueryOptions(subscriptionUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Only a future-dated subscription can be deleted; the current subscription on an
account cannot be removed this way.
 * @summary Delete a subscription.
 */
export const subscriptionDeleteSubscription = (
    subscriptionUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getSubscriptionDeleteSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionDeleteSubscription>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionDeleteSubscription>>, TError,{subscriptionUid: string | null}, TContext> => {

const mutationKey = ['subscriptionDeleteSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionDeleteSubscription>>, {subscriptionUid: string | null}> = (props) => {
          const {subscriptionUid} = props ?? {};

          return  subscriptionDeleteSubscription(subscriptionUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionDeleteSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionDeleteSubscription>>>
    
    export type SubscriptionDeleteSubscriptionMutationError = void

    /**
 * @summary Delete a subscription.
 */
export const useSubscriptionDeleteSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionDeleteSubscription>>, TError,{subscriptionUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionDeleteSubscription>>,
        TError,
        {subscriptionUid: string | null},
        TContext
      > => {

      const mutationOptions = getSubscriptionDeleteSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Add a discount to a subscription.
 */
export const subscriptionAddDiscountToSubscription = (
    subscriptionUid: string | null,
    discountUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}/discounts/${discountUid}`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getSubscriptionAddDiscountToSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddDiscountToSubscription>>, TError,{subscriptionUid: string | null;discountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddDiscountToSubscription>>, TError,{subscriptionUid: string | null;discountUid: string | null}, TContext> => {

const mutationKey = ['subscriptionAddDiscountToSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionAddDiscountToSubscription>>, {subscriptionUid: string | null;discountUid: string | null}> = (props) => {
          const {subscriptionUid,discountUid} = props ?? {};

          return  subscriptionAddDiscountToSubscription(subscriptionUid,discountUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionAddDiscountToSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddDiscountToSubscription>>>
    
    export type SubscriptionAddDiscountToSubscriptionMutationError = void

    /**
 * @summary Add a discount to a subscription.
 */
export const useSubscriptionAddDiscountToSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddDiscountToSubscription>>, TError,{subscriptionUid: string | null;discountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionAddDiscountToSubscription>>,
        TError,
        {subscriptionUid: string | null;discountUid: string | null},
        TContext
      > => {

      const mutationOptions = getSubscriptionAddDiscountToSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Expires the active discount coupon on the subscription as of now.
 * @summary Remove a discount from a subscription.
 */
export const subscriptionExpireDiscountCouponSubscription = (
    subscriptionUid: string | null,
    discountUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}/discounts/${discountUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getSubscriptionExpireDiscountCouponSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionExpireDiscountCouponSubscription>>, TError,{subscriptionUid: string | null;discountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionExpireDiscountCouponSubscription>>, TError,{subscriptionUid: string | null;discountUid: string | null}, TContext> => {

const mutationKey = ['subscriptionExpireDiscountCouponSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionExpireDiscountCouponSubscription>>, {subscriptionUid: string | null;discountUid: string | null}> = (props) => {
          const {subscriptionUid,discountUid} = props ?? {};

          return  subscriptionExpireDiscountCouponSubscription(subscriptionUid,discountUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionExpireDiscountCouponSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionExpireDiscountCouponSubscription>>>
    
    export type SubscriptionExpireDiscountCouponSubscriptionMutationError = void

    /**
 * @summary Remove a discount from a subscription.
 */
export const useSubscriptionExpireDiscountCouponSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionExpireDiscountCouponSubscription>>, TError,{subscriptionUid: string | null;discountUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionExpireDiscountCouponSubscription>>,
        TError,
        {subscriptionUid: string | null;discountUid: string | null},
        TContext
      > => {

      const mutationOptions = getSubscriptionExpireDiscountCouponSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * When a subscription is flagged, next time the user authenticates the authentication
widget will prompt the user to change plan.
 * @summary Indicate that an upgrade of plan is required.
 */
export const subscriptionSetSubscriptionUpgradeRequired = (
    subscriptionUid: string | null,
    subscriptionSetSubscriptionUpgradeRequiredBody: NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Subscription>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}/setsubscriptionupgraderequired`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionSetSubscriptionUpgradeRequiredBody
    },
      options);
    }
  


export const getSubscriptionSetSubscriptionUpgradeRequiredMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>}, TContext> => {

const mutationKey = ['subscriptionSetSubscriptionUpgradeRequired'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, {subscriptionUid: string | null;data: NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>}> = (props) => {
          const {subscriptionUid,data} = props ?? {};

          return  subscriptionSetSubscriptionUpgradeRequired(subscriptionUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionSetSubscriptionUpgradeRequiredMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>>
    export type SubscriptionSetSubscriptionUpgradeRequiredMutationBody = NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>
    export type SubscriptionSetSubscriptionUpgradeRequiredMutationError = void

    /**
 * @summary Indicate that an upgrade of plan is required.
 */
export const useSubscriptionSetSubscriptionUpgradeRequired = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>,
        TError,
        {subscriptionUid: string | null;data: NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>},
        TContext
      > => {

      const mutationOptions = getSubscriptionSetSubscriptionUpgradeRequiredMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns an invoice object with information about the amount outstanding if an account
were to register with this subscription. BillingRenewalTerm values: 1 = Monthly,
2 = Yearly, 3 = Quarterly, 4 = OneTime. Pass asOf=renewal to see the renewal invoice
instead of the initial invoice.
 * @summary Preview the initial or renewal invoice for a hypothetical subscription.
 */
export const subscriptionFirstTimeSubscriptionPreview = (
    subscriptionFirstTimeSubscriptionPreviewBody: NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>,
    params?: SubscriptionFirstTimeSubscriptionPreviewParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/subscriptions/compute-charge-summary`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionFirstTimeSubscriptionPreviewBody,
        params, signal
    },
      options);
    }
  


export const getSubscriptionFirstTimeSubscriptionPreviewMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, TError,{data: NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>;params?: SubscriptionFirstTimeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, TError,{data: NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>;params?: SubscriptionFirstTimeSubscriptionPreviewParams}, TContext> => {

const mutationKey = ['subscriptionFirstTimeSubscriptionPreview'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, {data: NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>;params?: SubscriptionFirstTimeSubscriptionPreviewParams}> = (props) => {
          const {data,params} = props ?? {};

          return  subscriptionFirstTimeSubscriptionPreview(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionFirstTimeSubscriptionPreviewMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>>
    export type SubscriptionFirstTimeSubscriptionPreviewMutationBody = NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>
    export type SubscriptionFirstTimeSubscriptionPreviewMutationError = unknown

    /**
 * @summary Preview the initial or renewal invoice for a hypothetical subscription.
 */
export const useSubscriptionFirstTimeSubscriptionPreview = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, TError,{data: NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>;params?: SubscriptionFirstTimeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>,
        TError,
        {data: NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>;params?: SubscriptionFirstTimeSubscriptionPreviewParams},
        TContext
      > => {

      const mutationOptions = getSubscriptionFirstTimeSubscriptionPreviewMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns an invoice object with information about the amount outstanding.
 * @summary Add a subscription to an account for the first time.
 */
export const subscriptionFirstTimeSubscription = (
    subscriptionFirstTimeSubscriptionBody: NonReadonly<SubscriptionFirstTimeSubscriptionBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/subscriptions/firsttimesubscription`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionFirstTimeSubscriptionBody
    },
      options);
    }
  


export const getSubscriptionFirstTimeSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, TError,{data: NonReadonly<SubscriptionFirstTimeSubscriptionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, TError,{data: NonReadonly<SubscriptionFirstTimeSubscriptionBody>}, TContext> => {

const mutationKey = ['subscriptionFirstTimeSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, {data: NonReadonly<SubscriptionFirstTimeSubscriptionBody>}> = (props) => {
          const {data} = props ?? {};

          return  subscriptionFirstTimeSubscription(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionFirstTimeSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>>
    export type SubscriptionFirstTimeSubscriptionMutationBody = NonReadonly<SubscriptionFirstTimeSubscriptionBody>
    export type SubscriptionFirstTimeSubscriptionMutationError = void

    /**
 * @summary Add a subscription to an account for the first time.
 */
export const useSubscriptionFirstTimeSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, TError,{data: NonReadonly<SubscriptionFirstTimeSubscriptionBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>,
        TError,
        {data: NonReadonly<SubscriptionFirstTimeSubscriptionBody>},
        TContext
      > => {

      const mutationOptions = getSubscriptionFirstTimeSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns an invoice object with information about the amount outstanding. This method
does not commit the subscription change.
 * @summary Preview the invoice for a subscription change.
 */
export const subscriptionChangeSubscriptionPreview = (
    subscriptionUid: string | null,
    subscriptionChangeSubscriptionPreviewBody: NonReadonly<SubscriptionChangeSubscriptionPreviewBody>,
    params?: SubscriptionChangeSubscriptionPreviewParams,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}/changesubscriptionpreview`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionChangeSubscriptionPreviewBody,
        params
    },
      options);
    }
  


export const getSubscriptionChangeSubscriptionPreviewMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionPreviewBody>;params?: SubscriptionChangeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionPreviewBody>;params?: SubscriptionChangeSubscriptionPreviewParams}, TContext> => {

const mutationKey = ['subscriptionChangeSubscriptionPreview'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, {subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionPreviewBody>;params?: SubscriptionChangeSubscriptionPreviewParams}> = (props) => {
          const {subscriptionUid,data,params} = props ?? {};

          return  subscriptionChangeSubscriptionPreview(subscriptionUid,data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionChangeSubscriptionPreviewMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>>
    export type SubscriptionChangeSubscriptionPreviewMutationBody = NonReadonly<SubscriptionChangeSubscriptionPreviewBody>
    export type SubscriptionChangeSubscriptionPreviewMutationError = void

    /**
 * @summary Preview the invoice for a subscription change.
 */
export const useSubscriptionChangeSubscriptionPreview = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionPreviewBody>;params?: SubscriptionChangeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>,
        TError,
        {subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionPreviewBody>;params?: SubscriptionChangeSubscriptionPreviewParams},
        TContext
      > => {

      const mutationOptions = getSubscriptionChangeSubscriptionPreviewMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns an invoice object with information about the amount outstanding.
 * @summary Change a subscription on an account.
 */
export const subscriptionChangeSubscription = (
    subscriptionUid: string | null,
    subscriptionChangeSubscriptionBody: NonReadonly<SubscriptionChangeSubscriptionBody>,
    params?: SubscriptionChangeSubscriptionParams,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Subscription>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}/changesubscription`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionChangeSubscriptionBody,
        params
    },
      options);
    }
  


export const getSubscriptionChangeSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionBody>;params?: SubscriptionChangeSubscriptionParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionBody>;params?: SubscriptionChangeSubscriptionParams}, TContext> => {

const mutationKey = ['subscriptionChangeSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, {subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionBody>;params?: SubscriptionChangeSubscriptionParams}> = (props) => {
          const {subscriptionUid,data,params} = props ?? {};

          return  subscriptionChangeSubscription(subscriptionUid,data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionChangeSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionChangeSubscription>>>
    export type SubscriptionChangeSubscriptionMutationBody = NonReadonly<SubscriptionChangeSubscriptionBody>
    export type SubscriptionChangeSubscriptionMutationError = void

    /**
 * @summary Change a subscription on an account.
 */
export const useSubscriptionChangeSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, TError,{subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionBody>;params?: SubscriptionChangeSubscriptionParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionChangeSubscription>>,
        TError,
        {subscriptionUid: string | null;data: NonReadonly<SubscriptionChangeSubscriptionBody>;params?: SubscriptionChangeSubscriptionParams},
        TContext
      > => {

      const mutationOptions = getSubscriptionChangeSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all plans.
 */
export const planGetAllPlans = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Plan[]>(
      {url: `/api/v1/billing/plans`, method: 'GET', signal
    },
      options);
    }
  



export const getPlanGetAllPlansQueryKey = () => {
    return [
    `/api/v1/billing/plans`
    ] as const;
    }

    
export const getPlanGetAllPlansQueryOptions = <TData = Awaited<ReturnType<typeof planGetAllPlans>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planGetAllPlans>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPlanGetAllPlansQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof planGetAllPlans>>> = ({ signal }) => planGetAllPlans(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof planGetAllPlans>>, TError, TData> & { queryKey: QueryKey }
}

export type PlanGetAllPlansQueryResult = NonNullable<Awaited<ReturnType<typeof planGetAllPlans>>>
export type PlanGetAllPlansQueryError = unknown


/**
 * @summary Retrieve all plans.
 */

export function usePlanGetAllPlans<TData = Awaited<ReturnType<typeof planGetAllPlans>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planGetAllPlans>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPlanGetAllPlansQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add a new plan.
 */
export const planAddPlan = (
    planAddPlanBody: NonReadonly<PlanAddPlanBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Plan>(
      {url: `/api/v1/billing/plans`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: planAddPlanBody, signal
    },
      options);
    }
  


export const getPlanAddPlanMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planAddPlan>>, TError,{data: NonReadonly<PlanAddPlanBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof planAddPlan>>, TError,{data: NonReadonly<PlanAddPlanBody>}, TContext> => {

const mutationKey = ['planAddPlan'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof planAddPlan>>, {data: NonReadonly<PlanAddPlanBody>}> = (props) => {
          const {data} = props ?? {};

          return  planAddPlan(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlanAddPlanMutationResult = NonNullable<Awaited<ReturnType<typeof planAddPlan>>>
    export type PlanAddPlanMutationBody = NonReadonly<PlanAddPlanBody>
    export type PlanAddPlanMutationError = void

    /**
 * @summary Add a new plan.
 */
export const usePlanAddPlan = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planAddPlan>>, TError,{data: NonReadonly<PlanAddPlanBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof planAddPlan>>,
        TError,
        {data: NonReadonly<PlanAddPlanBody>},
        TContext
      > => {

      const mutationOptions = getPlanAddPlanMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a plan.
 */
export const planGetPlan = (
    planUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Plan>(
      {url: `/api/v1/billing/plans/${planUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getPlanGetPlanQueryKey = (planUid?: string | null,) => {
    return [
    `/api/v1/billing/plans/${planUid}`
    ] as const;
    }

    
export const getPlanGetPlanQueryOptions = <TData = Awaited<ReturnType<typeof planGetPlan>>, TError = void>(planUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planGetPlan>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPlanGetPlanQueryKey(planUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof planGetPlan>>> = ({ signal }) => planGetPlan(planUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(planUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof planGetPlan>>, TError, TData> & { queryKey: QueryKey }
}

export type PlanGetPlanQueryResult = NonNullable<Awaited<ReturnType<typeof planGetPlan>>>
export type PlanGetPlanQueryError = void


/**
 * @summary Retrieve a plan.
 */

export function usePlanGetPlan<TData = Awaited<ReturnType<typeof planGetPlan>>, TError = void>(
 planUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planGetPlan>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPlanGetPlanQueryOptions(planUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Update a plan.
 */
export const planUpdatePlan = (
    planUid: string | null,
    planUpdatePlanBody: NonReadonly<PlanUpdatePlanBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Plan>(
      {url: `/api/v1/billing/plans/${planUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: planUpdatePlanBody
    },
      options);
    }
  


export const getPlanUpdatePlanMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planUpdatePlan>>, TError,{planUid: string | null;data: NonReadonly<PlanUpdatePlanBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof planUpdatePlan>>, TError,{planUid: string | null;data: NonReadonly<PlanUpdatePlanBody>}, TContext> => {

const mutationKey = ['planUpdatePlan'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof planUpdatePlan>>, {planUid: string | null;data: NonReadonly<PlanUpdatePlanBody>}> = (props) => {
          const {planUid,data} = props ?? {};

          return  planUpdatePlan(planUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlanUpdatePlanMutationResult = NonNullable<Awaited<ReturnType<typeof planUpdatePlan>>>
    export type PlanUpdatePlanMutationBody = NonReadonly<PlanUpdatePlanBody>
    export type PlanUpdatePlanMutationError = void

    /**
 * @summary Update a plan.
 */
export const usePlanUpdatePlan = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planUpdatePlan>>, TError,{planUid: string | null;data: NonReadonly<PlanUpdatePlanBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof planUpdatePlan>>,
        TError,
        {planUid: string | null;data: NonReadonly<PlanUpdatePlanBody>},
        TContext
      > => {

      const mutationOptions = getPlanUpdatePlanMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a plan.
 */
export const planDeletePlan = (
    planUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/plans/${planUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getPlanDeletePlanMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planDeletePlan>>, TError,{planUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof planDeletePlan>>, TError,{planUid: string | null}, TContext> => {

const mutationKey = ['planDeletePlan'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof planDeletePlan>>, {planUid: string | null}> = (props) => {
          const {planUid} = props ?? {};

          return  planDeletePlan(planUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlanDeletePlanMutationResult = NonNullable<Awaited<ReturnType<typeof planDeletePlan>>>
    
    export type PlanDeletePlanMutationError = void

    /**
 * @summary Delete a plan.
 */
export const usePlanDeletePlan = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planDeletePlan>>, TError,{planUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof planDeletePlan>>,
        TError,
        {planUid: string | null},
        TContext
      > => {

      const mutationOptions = getPlanDeletePlanMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all plan families.
 */
export const planFamilyGetAllPlanFamilies = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<PlanFamily[]>(
      {url: `/api/v1/billing/planfamilies`, method: 'GET', signal
    },
      options);
    }
  



export const getPlanFamilyGetAllPlanFamiliesQueryKey = () => {
    return [
    `/api/v1/billing/planfamilies`
    ] as const;
    }

    
export const getPlanFamilyGetAllPlanFamiliesQueryOptions = <TData = Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPlanFamilyGetAllPlanFamiliesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>> = ({ signal }) => planFamilyGetAllPlanFamilies(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>, TError, TData> & { queryKey: QueryKey }
}

export type PlanFamilyGetAllPlanFamiliesQueryResult = NonNullable<Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>>
export type PlanFamilyGetAllPlanFamiliesQueryError = unknown


/**
 * @summary Retrieve all plan families.
 */

export function usePlanFamilyGetAllPlanFamilies<TData = Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPlanFamilyGetAllPlanFamiliesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add a new plan family.
 */
export const planFamilyAddPlanFamily = (
    planFamilyAddPlanFamilyBody: NonReadonly<PlanFamilyAddPlanFamilyBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<PlanFamily>(
      {url: `/api/v1/billing/planfamilies`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: planFamilyAddPlanFamilyBody, signal
    },
      options);
    }
  


export const getPlanFamilyAddPlanFamilyMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planFamilyAddPlanFamily>>, TError,{data: NonReadonly<PlanFamilyAddPlanFamilyBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof planFamilyAddPlanFamily>>, TError,{data: NonReadonly<PlanFamilyAddPlanFamilyBody>}, TContext> => {

const mutationKey = ['planFamilyAddPlanFamily'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof planFamilyAddPlanFamily>>, {data: NonReadonly<PlanFamilyAddPlanFamilyBody>}> = (props) => {
          const {data} = props ?? {};

          return  planFamilyAddPlanFamily(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlanFamilyAddPlanFamilyMutationResult = NonNullable<Awaited<ReturnType<typeof planFamilyAddPlanFamily>>>
    export type PlanFamilyAddPlanFamilyMutationBody = NonReadonly<PlanFamilyAddPlanFamilyBody>
    export type PlanFamilyAddPlanFamilyMutationError = void

    /**
 * @summary Add a new plan family.
 */
export const usePlanFamilyAddPlanFamily = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planFamilyAddPlanFamily>>, TError,{data: NonReadonly<PlanFamilyAddPlanFamilyBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof planFamilyAddPlanFamily>>,
        TError,
        {data: NonReadonly<PlanFamilyAddPlanFamilyBody>},
        TContext
      > => {

      const mutationOptions = getPlanFamilyAddPlanFamilyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a plan family.
 */
export const planFamilyGetPlanFamily = (
    planFamilyUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<PlanFamily>(
      {url: `/api/v1/billing/planfamilies/${planFamilyUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getPlanFamilyGetPlanFamilyQueryKey = (planFamilyUid?: string | null,) => {
    return [
    `/api/v1/billing/planfamilies/${planFamilyUid}`
    ] as const;
    }

    
export const getPlanFamilyGetPlanFamilyQueryOptions = <TData = Awaited<ReturnType<typeof planFamilyGetPlanFamily>>, TError = void>(planFamilyUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planFamilyGetPlanFamily>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPlanFamilyGetPlanFamilyQueryKey(planFamilyUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof planFamilyGetPlanFamily>>> = ({ signal }) => planFamilyGetPlanFamily(planFamilyUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(planFamilyUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof planFamilyGetPlanFamily>>, TError, TData> & { queryKey: QueryKey }
}

export type PlanFamilyGetPlanFamilyQueryResult = NonNullable<Awaited<ReturnType<typeof planFamilyGetPlanFamily>>>
export type PlanFamilyGetPlanFamilyQueryError = void


/**
 * @summary Retrieve a plan family.
 */

export function usePlanFamilyGetPlanFamily<TData = Awaited<ReturnType<typeof planFamilyGetPlanFamily>>, TError = void>(
 planFamilyUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planFamilyGetPlanFamily>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPlanFamilyGetPlanFamilyQueryOptions(planFamilyUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Update a plan family.
 */
export const planFamilyUpdatePlanFamily = (
    planFamilyUid: string | null,
    planFamilyUpdatePlanFamilyBody: NonReadonly<PlanFamilyUpdatePlanFamilyBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<PlanFamily>(
      {url: `/api/v1/billing/planfamilies/${planFamilyUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: planFamilyUpdatePlanFamilyBody
    },
      options);
    }
  


export const getPlanFamilyUpdatePlanFamilyMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planFamilyUpdatePlanFamily>>, TError,{planFamilyUid: string | null;data: NonReadonly<PlanFamilyUpdatePlanFamilyBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof planFamilyUpdatePlanFamily>>, TError,{planFamilyUid: string | null;data: NonReadonly<PlanFamilyUpdatePlanFamilyBody>}, TContext> => {

const mutationKey = ['planFamilyUpdatePlanFamily'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof planFamilyUpdatePlanFamily>>, {planFamilyUid: string | null;data: NonReadonly<PlanFamilyUpdatePlanFamilyBody>}> = (props) => {
          const {planFamilyUid,data} = props ?? {};

          return  planFamilyUpdatePlanFamily(planFamilyUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlanFamilyUpdatePlanFamilyMutationResult = NonNullable<Awaited<ReturnType<typeof planFamilyUpdatePlanFamily>>>
    export type PlanFamilyUpdatePlanFamilyMutationBody = NonReadonly<PlanFamilyUpdatePlanFamilyBody>
    export type PlanFamilyUpdatePlanFamilyMutationError = void

    /**
 * @summary Update a plan family.
 */
export const usePlanFamilyUpdatePlanFamily = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planFamilyUpdatePlanFamily>>, TError,{planFamilyUid: string | null;data: NonReadonly<PlanFamilyUpdatePlanFamilyBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof planFamilyUpdatePlanFamily>>,
        TError,
        {planFamilyUid: string | null;data: NonReadonly<PlanFamilyUpdatePlanFamilyBody>},
        TContext
      > => {

      const mutationOptions = getPlanFamilyUpdatePlanFamilyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete a plan family.
 */
export const planFamilyDeletePlanFamily = (
    planFamilyUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/billing/planfamilies/${planFamilyUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getPlanFamilyDeletePlanFamilyMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planFamilyDeletePlanFamily>>, TError,{planFamilyUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof planFamilyDeletePlanFamily>>, TError,{planFamilyUid: string | null}, TContext> => {

const mutationKey = ['planFamilyDeletePlanFamily'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof planFamilyDeletePlanFamily>>, {planFamilyUid: string | null}> = (props) => {
          const {planFamilyUid} = props ?? {};

          return  planFamilyDeletePlanFamily(planFamilyUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PlanFamilyDeletePlanFamilyMutationResult = NonNullable<Awaited<ReturnType<typeof planFamilyDeletePlanFamily>>>
    
    export type PlanFamilyDeletePlanFamilyMutationError = void

    /**
 * @summary Delete a plan family.
 */
export const usePlanFamilyDeletePlanFamily = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof planFamilyDeletePlanFamily>>, TError,{planFamilyUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof planFamilyDeletePlanFamily>>,
        TError,
        {planFamilyUid: string | null},
        TContext
      > => {

      const mutationOptions = getPlanFamilyDeletePlanFamilyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    