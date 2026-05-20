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
  DiscountCoupon,
  DiscountCouponAddDiscountCouponBody,
  Invoice,
  InvoiceAddInvoiceBody,
  InvoiceUpdateInvoiceBody,
  PaymentInformation,
  PaymentInformationSavePaymentInformationBody,
  Plan,
  PlanFamily,
  Subscription,
  SubscriptionAddOnAddSubscriptionAddOnBody,
  SubscriptionChangeSubscriptionBody,
  SubscriptionChangeSubscriptionParams,
  SubscriptionChangeSubscriptionPreviewBody,
  SubscriptionChangeSubscriptionPreviewParams,
  SubscriptionFirstTimeSubscriptionBody,
  SubscriptionFirstTimeSubscriptionPreviewBody,
  SubscriptionFirstTimeSubscriptionPreviewParams,
  SubscriptionSetSubscriptionUpgradeRequiredBody,
  Transaction,
  TransactionsAddPaymentTransactionBody,
  Usage,
  UsageAddUsageBody
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Only one of AmountOff or PercentOff should be set.
Duration values: 1 = Forever, 2 = Once, 3 = Repeating (DurationInMonths must be set).
 * @summary Add a new discount coupon.
 */
export const discountCouponAddDiscountCoupon = (
    discountCouponAddDiscountCouponBody: DiscountCouponAddDiscountCouponBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, TError,{data: DiscountCouponAddDiscountCouponBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, TError,{data: DiscountCouponAddDiscountCouponBody}, TContext> => {

const mutationKey = ['discountCouponAddDiscountCoupon'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, {data: DiscountCouponAddDiscountCouponBody}> = (props) => {
          const {data} = props ?? {};

          return  discountCouponAddDiscountCoupon(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DiscountCouponAddDiscountCouponMutationResult = NonNullable<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>>
    export type DiscountCouponAddDiscountCouponMutationBody = DiscountCouponAddDiscountCouponBody
    export type DiscountCouponAddDiscountCouponMutationError = void

    /**
 * @summary Add a new discount coupon.
 */
export const useDiscountCouponAddDiscountCoupon = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>, TError,{data: DiscountCouponAddDiscountCouponBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof discountCouponAddDiscountCoupon>>,
        TError,
        {data: DiscountCouponAddDiscountCouponBody},
        TContext
      > => {

      const mutationOptions = getDiscountCouponAddDiscountCouponMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Add a usage entry for an add-on that bills for usage at the end of the month.
 */
export const usageAddUsage = (
    usageAddUsageBody: UsageAddUsageBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usageAddUsage>>, TError,{data: UsageAddUsageBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof usageAddUsage>>, TError,{data: UsageAddUsageBody}, TContext> => {

const mutationKey = ['usageAddUsage'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof usageAddUsage>>, {data: UsageAddUsageBody}> = (props) => {
          const {data} = props ?? {};

          return  usageAddUsage(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UsageAddUsageMutationResult = NonNullable<Awaited<ReturnType<typeof usageAddUsage>>>
    export type UsageAddUsageMutationBody = UsageAddUsageBody
    export type UsageAddUsageMutationError = void

    /**
 * @summary Add a usage entry for an add-on that bills for usage at the end of the month.
 */
export const useUsageAddUsage = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usageAddUsage>>, TError,{data: UsageAddUsageBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof usageAddUsage>>,
        TError,
        {data: UsageAddUsageBody},
        TContext
      > => {

      const mutationOptions = getUsageAddUsageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Transactions are tied to accounts and invoices.
BillingTransactionType: Invoice = 1, Payment = 2, Credit = 3, Refund = 4, Chargeback = 5.
 * @summary Retrieve all transactions for a given account.
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
 * @summary Retrieve all transactions for a given account.
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
    transactionsAddPaymentTransactionBody: TransactionsAddPaymentTransactionBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, TError,{data: TransactionsAddPaymentTransactionBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, TError,{data: TransactionsAddPaymentTransactionBody}, TContext> => {

const mutationKey = ['transactionsAddPaymentTransaction'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, {data: TransactionsAddPaymentTransactionBody}> = (props) => {
          const {data} = props ?? {};

          return  transactionsAddPaymentTransaction(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TransactionsAddPaymentTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>>
    export type TransactionsAddPaymentTransactionMutationBody = TransactionsAddPaymentTransactionBody
    export type TransactionsAddPaymentTransactionMutationError = void

    /**
 * @summary Add a payment to an invoice.
 */
export const useTransactionsAddPaymentTransaction = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>, TError,{data: TransactionsAddPaymentTransactionBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof transactionsAddPaymentTransaction>>,
        TError,
        {data: TransactionsAddPaymentTransactionBody},
        TContext
      > => {

      const mutationOptions = getTransactionsAddPaymentTransactionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Update payment information for an account.
 */
export const paymentInformationSavePaymentInformation = (
    paymentInformationSavePaymentInformationBody: PaymentInformationSavePaymentInformationBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, TError,{data: PaymentInformationSavePaymentInformationBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, TError,{data: PaymentInformationSavePaymentInformationBody}, TContext> => {

const mutationKey = ['paymentInformationSavePaymentInformation'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, {data: PaymentInformationSavePaymentInformationBody}> = (props) => {
          const {data} = props ?? {};

          return  paymentInformationSavePaymentInformation(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PaymentInformationSavePaymentInformationMutationResult = NonNullable<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>>
    export type PaymentInformationSavePaymentInformationMutationBody = PaymentInformationSavePaymentInformationBody
    export type PaymentInformationSavePaymentInformationMutationError = void

    /**
 * @summary Update payment information for an account.
 */
export const usePaymentInformationSavePaymentInformation = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>, TError,{data: PaymentInformationSavePaymentInformationBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof paymentInformationSavePaymentInformation>>,
        TError,
        {data: PaymentInformationSavePaymentInformationBody},
        TContext
      > => {

      const mutationOptions = getPaymentInformationSavePaymentInformationMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Add an add-on to a subscription.
 */
export const subscriptionAddOnAddSubscriptionAddOn = (
    subscriptionAddOnAddSubscriptionAddOnBody: SubscriptionAddOnAddSubscriptionAddOnBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, TError,{data: SubscriptionAddOnAddSubscriptionAddOnBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, TError,{data: SubscriptionAddOnAddSubscriptionAddOnBody}, TContext> => {

const mutationKey = ['subscriptionAddOnAddSubscriptionAddOn'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, {data: SubscriptionAddOnAddSubscriptionAddOnBody}> = (props) => {
          const {data} = props ?? {};

          return  subscriptionAddOnAddSubscriptionAddOn(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionAddOnAddSubscriptionAddOnMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>>
    export type SubscriptionAddOnAddSubscriptionAddOnMutationBody = SubscriptionAddOnAddSubscriptionAddOnBody
    export type SubscriptionAddOnAddSubscriptionAddOnMutationError = void

    /**
 * @summary Add an add-on to a subscription.
 */
export const useSubscriptionAddOnAddSubscriptionAddOn = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>, TError,{data: SubscriptionAddOnAddSubscriptionAddOnBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionAddOnAddSubscriptionAddOn>>,
        TError,
        {data: SubscriptionAddOnAddSubscriptionAddOnBody},
        TContext
      > => {

      const mutationOptions = getSubscriptionAddOnAddSubscriptionAddOnMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Admins and API key callers see every invoice. Non-admin users see only invoices
belonging to the account they are the primary contact of.
Pass excludeInvoiceUid as a query parameter to omit a specific invoice from the result set.
 * @summary Returns all invoices, optionally restricted to the requester's account.
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
 * @summary Returns all invoices, optionally restricted to the requester's account.
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
    invoiceAddInvoiceBody: InvoiceAddInvoiceBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceAddInvoice>>, TError,{data: InvoiceAddInvoiceBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof invoiceAddInvoice>>, TError,{data: InvoiceAddInvoiceBody}, TContext> => {

const mutationKey = ['invoiceAddInvoice'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof invoiceAddInvoice>>, {data: InvoiceAddInvoiceBody}> = (props) => {
          const {data} = props ?? {};

          return  invoiceAddInvoice(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type InvoiceAddInvoiceMutationResult = NonNullable<Awaited<ReturnType<typeof invoiceAddInvoice>>>
    export type InvoiceAddInvoiceMutationBody = InvoiceAddInvoiceBody
    export type InvoiceAddInvoiceMutationError = void

    /**
 * @summary Create an ad-hoc invoice for a given account.
 */
export const useInvoiceAddInvoice = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceAddInvoice>>, TError,{data: InvoiceAddInvoiceBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof invoiceAddInvoice>>,
        TError,
        {data: InvoiceAddInvoiceBody},
        TContext
      > => {

      const mutationOptions = getInvoiceAddInvoiceMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Returns a single invoice by UID.
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
 * @summary Returns a single invoice by UID.
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
    invoiceUpdateInvoiceBody: InvoiceUpdateInvoiceBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/invoices/${invoiceUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: invoiceUpdateInvoiceBody
    },
      options);
    }
  


export const getInvoiceUpdateInvoiceMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, TError,{invoiceUid: string | null;data: InvoiceUpdateInvoiceBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, TError,{invoiceUid: string | null;data: InvoiceUpdateInvoiceBody}, TContext> => {

const mutationKey = ['invoiceUpdateInvoice'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, {invoiceUid: string | null;data: InvoiceUpdateInvoiceBody}> = (props) => {
          const {invoiceUid,data} = props ?? {};

          return  invoiceUpdateInvoice(invoiceUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type InvoiceUpdateInvoiceMutationResult = NonNullable<Awaited<ReturnType<typeof invoiceUpdateInvoice>>>
    export type InvoiceUpdateInvoiceMutationBody = InvoiceUpdateInvoiceBody
    export type InvoiceUpdateInvoiceMutationError = void

    /**
 * @summary Update an ad-hoc (manually created) invoice.
 */
export const useInvoiceUpdateInvoice = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof invoiceUpdateInvoice>>, TError,{invoiceUid: string | null;data: InvoiceUpdateInvoiceBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof invoiceUpdateInvoice>>,
        TError,
        {invoiceUid: string | null;data: InvoiceUpdateInvoiceBody},
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
 * @summary Returns a rendered PDF copy of an invoice.
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
 * @summary Returns a rendered PDF copy of an invoice.
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
 * @summary Retrieves a subscription.
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
 * @summary Retrieves a subscription.
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
 * When a subscription is flagged, next time the user authenticates the authentication
widget will prompt the user to change plan.
 * @summary Indicate that an upgrade of plan is required.
 */
export const subscriptionSetSubscriptionUpgradeRequired = (
    subscriptionUid: string | null,
    subscriptionSetSubscriptionUpgradeRequiredBody: SubscriptionSetSubscriptionUpgradeRequiredBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Subscription>(
      {url: `/api/v1/billing/subscriptions/${subscriptionUid}/setsubscriptionupgraderequired`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionSetSubscriptionUpgradeRequiredBody
    },
      options);
    }
  


export const getSubscriptionSetSubscriptionUpgradeRequiredMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, TError,{subscriptionUid: string | null;data: SubscriptionSetSubscriptionUpgradeRequiredBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, TError,{subscriptionUid: string | null;data: SubscriptionSetSubscriptionUpgradeRequiredBody}, TContext> => {

const mutationKey = ['subscriptionSetSubscriptionUpgradeRequired'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, {subscriptionUid: string | null;data: SubscriptionSetSubscriptionUpgradeRequiredBody}> = (props) => {
          const {subscriptionUid,data} = props ?? {};

          return  subscriptionSetSubscriptionUpgradeRequired(subscriptionUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionSetSubscriptionUpgradeRequiredMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>>
    export type SubscriptionSetSubscriptionUpgradeRequiredMutationBody = SubscriptionSetSubscriptionUpgradeRequiredBody
    export type SubscriptionSetSubscriptionUpgradeRequiredMutationError = void

    /**
 * @summary Indicate that an upgrade of plan is required.
 */
export const useSubscriptionSetSubscriptionUpgradeRequired = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>, TError,{subscriptionUid: string | null;data: SubscriptionSetSubscriptionUpgradeRequiredBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionSetSubscriptionUpgradeRequired>>,
        TError,
        {subscriptionUid: string | null;data: SubscriptionSetSubscriptionUpgradeRequiredBody},
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
    subscriptionFirstTimeSubscriptionPreviewBody: SubscriptionFirstTimeSubscriptionPreviewBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, TError,{data: SubscriptionFirstTimeSubscriptionPreviewBody;params?: SubscriptionFirstTimeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, TError,{data: SubscriptionFirstTimeSubscriptionPreviewBody;params?: SubscriptionFirstTimeSubscriptionPreviewParams}, TContext> => {

const mutationKey = ['subscriptionFirstTimeSubscriptionPreview'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, {data: SubscriptionFirstTimeSubscriptionPreviewBody;params?: SubscriptionFirstTimeSubscriptionPreviewParams}> = (props) => {
          const {data,params} = props ?? {};

          return  subscriptionFirstTimeSubscriptionPreview(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionFirstTimeSubscriptionPreviewMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>>
    export type SubscriptionFirstTimeSubscriptionPreviewMutationBody = SubscriptionFirstTimeSubscriptionPreviewBody
    export type SubscriptionFirstTimeSubscriptionPreviewMutationError = unknown

    /**
 * @summary Preview the initial or renewal invoice for a hypothetical subscription.
 */
export const useSubscriptionFirstTimeSubscriptionPreview = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>, TError,{data: SubscriptionFirstTimeSubscriptionPreviewBody;params?: SubscriptionFirstTimeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionFirstTimeSubscriptionPreview>>,
        TError,
        {data: SubscriptionFirstTimeSubscriptionPreviewBody;params?: SubscriptionFirstTimeSubscriptionPreviewParams},
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
    subscriptionFirstTimeSubscriptionBody: SubscriptionFirstTimeSubscriptionBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Invoice>(
      {url: `/api/v1/billing/subscriptions/firsttimesubscription`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: subscriptionFirstTimeSubscriptionBody
    },
      options);
    }
  


export const getSubscriptionFirstTimeSubscriptionMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, TError,{data: SubscriptionFirstTimeSubscriptionBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, TError,{data: SubscriptionFirstTimeSubscriptionBody}, TContext> => {

const mutationKey = ['subscriptionFirstTimeSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, {data: SubscriptionFirstTimeSubscriptionBody}> = (props) => {
          const {data} = props ?? {};

          return  subscriptionFirstTimeSubscription(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionFirstTimeSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>>
    export type SubscriptionFirstTimeSubscriptionMutationBody = SubscriptionFirstTimeSubscriptionBody
    export type SubscriptionFirstTimeSubscriptionMutationError = void

    /**
 * @summary Add a subscription to an account for the first time.
 */
export const useSubscriptionFirstTimeSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>, TError,{data: SubscriptionFirstTimeSubscriptionBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionFirstTimeSubscription>>,
        TError,
        {data: SubscriptionFirstTimeSubscriptionBody},
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
    subscriptionChangeSubscriptionPreviewBody: SubscriptionChangeSubscriptionPreviewBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, TError,{subscriptionUid: string | null;data: SubscriptionChangeSubscriptionPreviewBody;params?: SubscriptionChangeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, TError,{subscriptionUid: string | null;data: SubscriptionChangeSubscriptionPreviewBody;params?: SubscriptionChangeSubscriptionPreviewParams}, TContext> => {

const mutationKey = ['subscriptionChangeSubscriptionPreview'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, {subscriptionUid: string | null;data: SubscriptionChangeSubscriptionPreviewBody;params?: SubscriptionChangeSubscriptionPreviewParams}> = (props) => {
          const {subscriptionUid,data,params} = props ?? {};

          return  subscriptionChangeSubscriptionPreview(subscriptionUid,data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionChangeSubscriptionPreviewMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>>
    export type SubscriptionChangeSubscriptionPreviewMutationBody = SubscriptionChangeSubscriptionPreviewBody
    export type SubscriptionChangeSubscriptionPreviewMutationError = void

    /**
 * @summary Preview the invoice for a subscription change.
 */
export const useSubscriptionChangeSubscriptionPreview = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>, TError,{subscriptionUid: string | null;data: SubscriptionChangeSubscriptionPreviewBody;params?: SubscriptionChangeSubscriptionPreviewParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionChangeSubscriptionPreview>>,
        TError,
        {subscriptionUid: string | null;data: SubscriptionChangeSubscriptionPreviewBody;params?: SubscriptionChangeSubscriptionPreviewParams},
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
    subscriptionChangeSubscriptionBody: SubscriptionChangeSubscriptionBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, TError,{subscriptionUid: string | null;data: SubscriptionChangeSubscriptionBody;params?: SubscriptionChangeSubscriptionParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, TError,{subscriptionUid: string | null;data: SubscriptionChangeSubscriptionBody;params?: SubscriptionChangeSubscriptionParams}, TContext> => {

const mutationKey = ['subscriptionChangeSubscription'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, {subscriptionUid: string | null;data: SubscriptionChangeSubscriptionBody;params?: SubscriptionChangeSubscriptionParams}> = (props) => {
          const {subscriptionUid,data,params} = props ?? {};

          return  subscriptionChangeSubscription(subscriptionUid,data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SubscriptionChangeSubscriptionMutationResult = NonNullable<Awaited<ReturnType<typeof subscriptionChangeSubscription>>>
    export type SubscriptionChangeSubscriptionMutationBody = SubscriptionChangeSubscriptionBody
    export type SubscriptionChangeSubscriptionMutationError = void

    /**
 * @summary Change a subscription on an account.
 */
export const useSubscriptionChangeSubscription = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof subscriptionChangeSubscription>>, TError,{subscriptionUid: string | null;data: SubscriptionChangeSubscriptionBody;params?: SubscriptionChangeSubscriptionParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof subscriptionChangeSubscription>>,
        TError,
        {subscriptionUid: string | null;data: SubscriptionChangeSubscriptionBody;params?: SubscriptionChangeSubscriptionParams},
        TContext
      > => {

      const mutationOptions = getSubscriptionChangeSubscriptionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieves all plans.
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
 * @summary Retrieves all plans.
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
 * @summary Retrieves all plan families.
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
 * @summary Retrieves all plan families.
 */

export function usePlanFamilyGetAllPlanFamilies<TData = Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof planFamilyGetAllPlanFamilies>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPlanFamilyGetAllPlanFamiliesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




