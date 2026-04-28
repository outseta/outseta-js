// @ts-nocheck
import type {
  DiscountCoupon,
  DiscountCouponAddDiscountCouponBody,
  Invoice,
  InvoiceAddInvoiceBody,
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
} from '.././models';

import { customFetch } from '../../client';

/**
 * @summary Add a new discount coupon. Only one of AmountOff or PercentOff should be set.
Duration values: 1 = Forever, 2 = Once, 3 = Repeating (DurationInMonths must be set).
 */
export type discountCouponAddDiscountCouponResponse200 = {
  data: DiscountCoupon
  status: 200
}

export type discountCouponAddDiscountCouponResponse401 = {
  data: void
  status: 401
}
    
export type discountCouponAddDiscountCouponResponseSuccess = (discountCouponAddDiscountCouponResponse200) & {
  headers: Headers;
};
export type discountCouponAddDiscountCouponResponseError = (discountCouponAddDiscountCouponResponse401) & {
  headers: Headers;
};

export type discountCouponAddDiscountCouponResponse = (discountCouponAddDiscountCouponResponseSuccess | discountCouponAddDiscountCouponResponseError)

export const getDiscountCouponAddDiscountCouponUrl = () => {


  

  return `/api/v1/billing/discountcoupons`
}

export const discountCouponAddDiscountCoupon = async (discountCouponAddDiscountCouponBody: DiscountCouponAddDiscountCouponBody, options?: RequestInit): Promise<discountCouponAddDiscountCouponResponse> => {
  
  return customFetch<discountCouponAddDiscountCouponResponse>(getDiscountCouponAddDiscountCouponUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      discountCouponAddDiscountCouponBody,)
  }
);}


/**
 * @summary Add a usage entry for an add-on that bills for usage at the end of the month.
 */
export type usageAddUsageResponse200 = {
  data: Usage
  status: 200
}

export type usageAddUsageResponse401 = {
  data: void
  status: 401
}
    
export type usageAddUsageResponseSuccess = (usageAddUsageResponse200) & {
  headers: Headers;
};
export type usageAddUsageResponseError = (usageAddUsageResponse401) & {
  headers: Headers;
};

export type usageAddUsageResponse = (usageAddUsageResponseSuccess | usageAddUsageResponseError)

export const getUsageAddUsageUrl = () => {


  

  return `/api/v1/billing/usage`
}

export const usageAddUsage = async (usageAddUsageBody: UsageAddUsageBody, options?: RequestInit): Promise<usageAddUsageResponse> => {
  
  return customFetch<usageAddUsageResponse>(getUsageAddUsageUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      usageAddUsageBody,)
  }
);}


/**
 * @summary Retrieves all transactions for a given account. Transactions are tied to accounts and invoices.
BillingTransactionType: Invoice = 1, Payment = 2, Credit = 3, Refund = 4, Chargeback = 5.
 */
export type transactionsGetAllTransactionsByAccountIdResponse200 = {
  data: Transaction[]
  status: 200
}

export type transactionsGetAllTransactionsByAccountIdResponse400 = {
  data: void
  status: 400
}

export type transactionsGetAllTransactionsByAccountIdResponse401 = {
  data: void
  status: 401
}
    
export type transactionsGetAllTransactionsByAccountIdResponseSuccess = (transactionsGetAllTransactionsByAccountIdResponse200) & {
  headers: Headers;
};
export type transactionsGetAllTransactionsByAccountIdResponseError = (transactionsGetAllTransactionsByAccountIdResponse400 | transactionsGetAllTransactionsByAccountIdResponse401) & {
  headers: Headers;
};

export type transactionsGetAllTransactionsByAccountIdResponse = (transactionsGetAllTransactionsByAccountIdResponseSuccess | transactionsGetAllTransactionsByAccountIdResponseError)

export const getTransactionsGetAllTransactionsByAccountIdUrl = (accountUid: string | null,) => {


  

  return `/api/v1/billing/transactions/${accountUid}`
}

export const transactionsGetAllTransactionsByAccountId = async (accountUid: string | null, options?: RequestInit): Promise<transactionsGetAllTransactionsByAccountIdResponse> => {
  
  return customFetch<transactionsGetAllTransactionsByAccountIdResponse>(getTransactionsGetAllTransactionsByAccountIdUrl(accountUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Adds a payment to an invoice. If the amount matches the outstanding amount of the invoice,
the invoice will be marked as Paid.
 */
export type transactionsAddPaymentTransactionResponse200 = {
  data: Transaction
  status: 200
}

export type transactionsAddPaymentTransactionResponse401 = {
  data: void
  status: 401
}
    
export type transactionsAddPaymentTransactionResponseSuccess = (transactionsAddPaymentTransactionResponse200) & {
  headers: Headers;
};
export type transactionsAddPaymentTransactionResponseError = (transactionsAddPaymentTransactionResponse401) & {
  headers: Headers;
};

export type transactionsAddPaymentTransactionResponse = (transactionsAddPaymentTransactionResponseSuccess | transactionsAddPaymentTransactionResponseError)

export const getTransactionsAddPaymentTransactionUrl = () => {


  

  return `/api/v1/billing/transactions/payment`
}

export const transactionsAddPaymentTransaction = async (transactionsAddPaymentTransactionBody: TransactionsAddPaymentTransactionBody, options?: RequestInit): Promise<transactionsAddPaymentTransactionResponse> => {
  
  return customFetch<transactionsAddPaymentTransactionResponse>(getTransactionsAddPaymentTransactionUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      transactionsAddPaymentTransactionBody,)
  }
);}


/**
 * @summary Update payment information for an account.
 */
export type paymentInformationSavePaymentInformationResponse200 = {
  data: PaymentInformation
  status: 200
}

export type paymentInformationSavePaymentInformationResponse401 = {
  data: void
  status: 401
}
    
export type paymentInformationSavePaymentInformationResponseSuccess = (paymentInformationSavePaymentInformationResponse200) & {
  headers: Headers;
};
export type paymentInformationSavePaymentInformationResponseError = (paymentInformationSavePaymentInformationResponse401) & {
  headers: Headers;
};

export type paymentInformationSavePaymentInformationResponse = (paymentInformationSavePaymentInformationResponseSuccess | paymentInformationSavePaymentInformationResponseError)

export const getPaymentInformationSavePaymentInformationUrl = () => {


  

  return `/api/v1/billing/paymentinformation`
}

export const paymentInformationSavePaymentInformation = async (paymentInformationSavePaymentInformationBody: PaymentInformationSavePaymentInformationBody, options?: RequestInit): Promise<paymentInformationSavePaymentInformationResponse> => {
  
  return customFetch<paymentInformationSavePaymentInformationResponse>(getPaymentInformationSavePaymentInformationUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      paymentInformationSavePaymentInformationBody,)
  }
);}


/**
 * @summary Add an add-on to a subscription.
 */
export type subscriptionAddOnAddSubscriptionAddOnResponse200 = {
  data: Blob
  status: 200
}

export type subscriptionAddOnAddSubscriptionAddOnResponse401 = {
  data: void
  status: 401
}
    
export type subscriptionAddOnAddSubscriptionAddOnResponseSuccess = (subscriptionAddOnAddSubscriptionAddOnResponse200) & {
  headers: Headers;
};
export type subscriptionAddOnAddSubscriptionAddOnResponseError = (subscriptionAddOnAddSubscriptionAddOnResponse401) & {
  headers: Headers;
};

export type subscriptionAddOnAddSubscriptionAddOnResponse = (subscriptionAddOnAddSubscriptionAddOnResponseSuccess | subscriptionAddOnAddSubscriptionAddOnResponseError)

export const getSubscriptionAddOnAddSubscriptionAddOnUrl = () => {


  

  return `/api/v1/billing/subscriptionaddons`
}

export const subscriptionAddOnAddSubscriptionAddOn = async (subscriptionAddOnAddSubscriptionAddOnBody: SubscriptionAddOnAddSubscriptionAddOnBody, options?: RequestInit): Promise<subscriptionAddOnAddSubscriptionAddOnResponse> => {
  
  return customFetch<subscriptionAddOnAddSubscriptionAddOnResponse>(getSubscriptionAddOnAddSubscriptionAddOnUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionAddOnAddSubscriptionAddOnBody,)
  }
);}


/**
 * @summary Create an ad-hoc invoice for a given account.
 */
export type invoiceAddInvoiceResponse200 = {
  data: Invoice
  status: 200
}

export type invoiceAddInvoiceResponse401 = {
  data: void
  status: 401
}
    
export type invoiceAddInvoiceResponseSuccess = (invoiceAddInvoiceResponse200) & {
  headers: Headers;
};
export type invoiceAddInvoiceResponseError = (invoiceAddInvoiceResponse401) & {
  headers: Headers;
};

export type invoiceAddInvoiceResponse = (invoiceAddInvoiceResponseSuccess | invoiceAddInvoiceResponseError)

export const getInvoiceAddInvoiceUrl = () => {


  

  return `/api/v1/billing/invoices`
}

export const invoiceAddInvoice = async (invoiceAddInvoiceBody: InvoiceAddInvoiceBody, options?: RequestInit): Promise<invoiceAddInvoiceResponse> => {
  
  return customFetch<invoiceAddInvoiceResponse>(getInvoiceAddInvoiceUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      invoiceAddInvoiceBody,)
  }
);}


/**
 * @summary Retrieves a subscription.
 */
export type subscriptionGetSubscriptionResponse200 = {
  data: Subscription
  status: 200
}

export type subscriptionGetSubscriptionResponse400 = {
  data: void
  status: 400
}

export type subscriptionGetSubscriptionResponse401 = {
  data: void
  status: 401
}

export type subscriptionGetSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionGetSubscriptionResponseSuccess = (subscriptionGetSubscriptionResponse200) & {
  headers: Headers;
};
export type subscriptionGetSubscriptionResponseError = (subscriptionGetSubscriptionResponse400 | subscriptionGetSubscriptionResponse401 | subscriptionGetSubscriptionResponse404) & {
  headers: Headers;
};

export type subscriptionGetSubscriptionResponse = (subscriptionGetSubscriptionResponseSuccess | subscriptionGetSubscriptionResponseError)

export const getSubscriptionGetSubscriptionUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/subscriptions/${subscriptionUid}`
}

export const subscriptionGetSubscription = async (subscriptionUid: string | null, options?: RequestInit): Promise<subscriptionGetSubscriptionResponse> => {
  
  return customFetch<subscriptionGetSubscriptionResponse>(getSubscriptionGetSubscriptionUrl(subscriptionUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Add a discount to a subscription.
 */
export type subscriptionAddDiscountToSubscriptionResponse200 = {
  data: Blob
  status: 200
}

export type subscriptionAddDiscountToSubscriptionResponse400 = {
  data: void
  status: 400
}

export type subscriptionAddDiscountToSubscriptionResponse401 = {
  data: void
  status: 401
}

export type subscriptionAddDiscountToSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionAddDiscountToSubscriptionResponseSuccess = (subscriptionAddDiscountToSubscriptionResponse200) & {
  headers: Headers;
};
export type subscriptionAddDiscountToSubscriptionResponseError = (subscriptionAddDiscountToSubscriptionResponse400 | subscriptionAddDiscountToSubscriptionResponse401 | subscriptionAddDiscountToSubscriptionResponse404) & {
  headers: Headers;
};

export type subscriptionAddDiscountToSubscriptionResponse = (subscriptionAddDiscountToSubscriptionResponseSuccess | subscriptionAddDiscountToSubscriptionResponseError)

export const getSubscriptionAddDiscountToSubscriptionUrl = (subscriptionUid: string | null,
    discountUid: string | null,) => {


  

  return `/api/v1/billing/subscriptions/${subscriptionUid}/discounts/${discountUid}`
}

export const subscriptionAddDiscountToSubscription = async (subscriptionUid: string | null,
    discountUid: string | null, options?: RequestInit): Promise<subscriptionAddDiscountToSubscriptionResponse> => {
  
  return customFetch<subscriptionAddDiscountToSubscriptionResponse>(getSubscriptionAddDiscountToSubscriptionUrl(subscriptionUid,discountUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Indicate that an upgrade of plan is required. When a subscription is flagged, next time
the user authenticates the authentication widget will prompt the user to change plan.
 */
export type subscriptionSetSubscriptionUpgradeRequiredResponse200 = {
  data: Subscription
  status: 200
}

export type subscriptionSetSubscriptionUpgradeRequiredResponse400 = {
  data: void
  status: 400
}

export type subscriptionSetSubscriptionUpgradeRequiredResponse401 = {
  data: void
  status: 401
}

export type subscriptionSetSubscriptionUpgradeRequiredResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionSetSubscriptionUpgradeRequiredResponseSuccess = (subscriptionSetSubscriptionUpgradeRequiredResponse200) & {
  headers: Headers;
};
export type subscriptionSetSubscriptionUpgradeRequiredResponseError = (subscriptionSetSubscriptionUpgradeRequiredResponse400 | subscriptionSetSubscriptionUpgradeRequiredResponse401 | subscriptionSetSubscriptionUpgradeRequiredResponse404) & {
  headers: Headers;
};

export type subscriptionSetSubscriptionUpgradeRequiredResponse = (subscriptionSetSubscriptionUpgradeRequiredResponseSuccess | subscriptionSetSubscriptionUpgradeRequiredResponseError)

export const getSubscriptionSetSubscriptionUpgradeRequiredUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/subscriptions/${subscriptionUid}/setsubscriptionupgraderequired`
}

export const subscriptionSetSubscriptionUpgradeRequired = async (subscriptionUid: string | null,
    subscriptionSetSubscriptionUpgradeRequiredBody: SubscriptionSetSubscriptionUpgradeRequiredBody, options?: RequestInit): Promise<subscriptionSetSubscriptionUpgradeRequiredResponse> => {
  
  return customFetch<subscriptionSetSubscriptionUpgradeRequiredResponse>(getSubscriptionSetSubscriptionUpgradeRequiredUrl(subscriptionUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionSetSubscriptionUpgradeRequiredBody,)
  }
);}


/**
 * @summary Preview what the initial or renewal invoice would look like if an account were to register
with this subscription. Returns an invoice object with information about the amount outstanding.
BillingRenewalTerm values: 1 = Monthly, 2 = Yearly, 3 = Quarterly, 4 = OneTime.
Pass asOf=renewal to see the renewal invoice instead of the initial invoice.
 */
export type subscriptionFirstTimeSubscriptionPreviewResponse200 = {
  data: Invoice
  status: 200
}
    
export type subscriptionFirstTimeSubscriptionPreviewResponseSuccess = (subscriptionFirstTimeSubscriptionPreviewResponse200) & {
  headers: Headers;
};
;

export type subscriptionFirstTimeSubscriptionPreviewResponse = (subscriptionFirstTimeSubscriptionPreviewResponseSuccess)

export const getSubscriptionFirstTimeSubscriptionPreviewUrl = (params?: SubscriptionFirstTimeSubscriptionPreviewParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/subscriptions/compute-charge-summary?${stringifiedParams}` : `/api/v1/billing/subscriptions/compute-charge-summary`
}

export const subscriptionFirstTimeSubscriptionPreview = async (subscriptionFirstTimeSubscriptionPreviewBody: SubscriptionFirstTimeSubscriptionPreviewBody,
    params?: SubscriptionFirstTimeSubscriptionPreviewParams, options?: RequestInit): Promise<subscriptionFirstTimeSubscriptionPreviewResponse> => {
  
  return customFetch<subscriptionFirstTimeSubscriptionPreviewResponse>(getSubscriptionFirstTimeSubscriptionPreviewUrl(params),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionFirstTimeSubscriptionPreviewBody,)
  }
);}


/**
 * @summary Add a subscription to an account for the first time. Returns an invoice object
with information about the amount outstanding.
 */
export type subscriptionFirstTimeSubscriptionResponse200 = {
  data: Invoice
  status: 200
}

export type subscriptionFirstTimeSubscriptionResponse401 = {
  data: void
  status: 401
}
    
export type subscriptionFirstTimeSubscriptionResponseSuccess = (subscriptionFirstTimeSubscriptionResponse200) & {
  headers: Headers;
};
export type subscriptionFirstTimeSubscriptionResponseError = (subscriptionFirstTimeSubscriptionResponse401) & {
  headers: Headers;
};

export type subscriptionFirstTimeSubscriptionResponse = (subscriptionFirstTimeSubscriptionResponseSuccess | subscriptionFirstTimeSubscriptionResponseError)

export const getSubscriptionFirstTimeSubscriptionUrl = () => {


  

  return `/api/v1/billing/subscriptions/firsttimesubscription`
}

export const subscriptionFirstTimeSubscription = async (subscriptionFirstTimeSubscriptionBody: SubscriptionFirstTimeSubscriptionBody, options?: RequestInit): Promise<subscriptionFirstTimeSubscriptionResponse> => {
  
  return customFetch<subscriptionFirstTimeSubscriptionResponse>(getSubscriptionFirstTimeSubscriptionUrl(),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionFirstTimeSubscriptionBody,)
  }
);}


/**
 * @summary Preview what the invoice would look like when changing a subscription. Returns an invoice object
with information about the amount outstanding. This method does not commit the subscription change.
 */
export type subscriptionChangeSubscriptionPreviewResponse200 = {
  data: Invoice
  status: 200
}

export type subscriptionChangeSubscriptionPreviewResponse400 = {
  data: void
  status: 400
}

export type subscriptionChangeSubscriptionPreviewResponse401 = {
  data: void
  status: 401
}

export type subscriptionChangeSubscriptionPreviewResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionChangeSubscriptionPreviewResponseSuccess = (subscriptionChangeSubscriptionPreviewResponse200) & {
  headers: Headers;
};
export type subscriptionChangeSubscriptionPreviewResponseError = (subscriptionChangeSubscriptionPreviewResponse400 | subscriptionChangeSubscriptionPreviewResponse401 | subscriptionChangeSubscriptionPreviewResponse404) & {
  headers: Headers;
};

export type subscriptionChangeSubscriptionPreviewResponse = (subscriptionChangeSubscriptionPreviewResponseSuccess | subscriptionChangeSubscriptionPreviewResponseError)

export const getSubscriptionChangeSubscriptionPreviewUrl = (subscriptionUid: string | null,
    params?: SubscriptionChangeSubscriptionPreviewParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/subscriptions/${subscriptionUid}/changesubscriptionpreview?${stringifiedParams}` : `/api/v1/billing/subscriptions/${subscriptionUid}/changesubscriptionpreview`
}

export const subscriptionChangeSubscriptionPreview = async (subscriptionUid: string | null,
    subscriptionChangeSubscriptionPreviewBody: SubscriptionChangeSubscriptionPreviewBody,
    params?: SubscriptionChangeSubscriptionPreviewParams, options?: RequestInit): Promise<subscriptionChangeSubscriptionPreviewResponse> => {
  
  return customFetch<subscriptionChangeSubscriptionPreviewResponse>(getSubscriptionChangeSubscriptionPreviewUrl(subscriptionUid,params),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionChangeSubscriptionPreviewBody,)
  }
);}


/**
 * @summary Change a subscription on an account. Returns an invoice object with information about
the amount outstanding.
 */
export type subscriptionChangeSubscriptionResponse200 = {
  data: Subscription
  status: 200
}

export type subscriptionChangeSubscriptionResponse400 = {
  data: void
  status: 400
}

export type subscriptionChangeSubscriptionResponse401 = {
  data: void
  status: 401
}

export type subscriptionChangeSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionChangeSubscriptionResponseSuccess = (subscriptionChangeSubscriptionResponse200) & {
  headers: Headers;
};
export type subscriptionChangeSubscriptionResponseError = (subscriptionChangeSubscriptionResponse400 | subscriptionChangeSubscriptionResponse401 | subscriptionChangeSubscriptionResponse404) & {
  headers: Headers;
};

export type subscriptionChangeSubscriptionResponse = (subscriptionChangeSubscriptionResponseSuccess | subscriptionChangeSubscriptionResponseError)

export const getSubscriptionChangeSubscriptionUrl = (subscriptionUid: string | null,
    params?: SubscriptionChangeSubscriptionParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/subscriptions/${subscriptionUid}/changesubscription?${stringifiedParams}` : `/api/v1/billing/subscriptions/${subscriptionUid}/changesubscription`
}

export const subscriptionChangeSubscription = async (subscriptionUid: string | null,
    subscriptionChangeSubscriptionBody: SubscriptionChangeSubscriptionBody,
    params?: SubscriptionChangeSubscriptionParams, options?: RequestInit): Promise<subscriptionChangeSubscriptionResponse> => {
  
  return customFetch<subscriptionChangeSubscriptionResponse>(getSubscriptionChangeSubscriptionUrl(subscriptionUid,params),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionChangeSubscriptionBody,)
  }
);}


/**
 * @summary Retrieves all plans.
 */
export type planGetAllPlansResponse200 = {
  data: Plan[]
  status: 200
}
    
export type planGetAllPlansResponseSuccess = (planGetAllPlansResponse200) & {
  headers: Headers;
};
;

export type planGetAllPlansResponse = (planGetAllPlansResponseSuccess)

export const getPlanGetAllPlansUrl = () => {


  

  return `/api/v1/billing/plans`
}

export const planGetAllPlans = async ( options?: RequestInit): Promise<planGetAllPlansResponse> => {
  
  return customFetch<planGetAllPlansResponse>(getPlanGetAllPlansUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieves all plan families.
 */
export type planFamilyGetAllPlanFamiliesResponse200 = {
  data: PlanFamily[]
  status: 200
}
    
export type planFamilyGetAllPlanFamiliesResponseSuccess = (planFamilyGetAllPlanFamiliesResponse200) & {
  headers: Headers;
};
;

export type planFamilyGetAllPlanFamiliesResponse = (planFamilyGetAllPlanFamiliesResponseSuccess)

export const getPlanFamilyGetAllPlanFamiliesUrl = () => {


  

  return `/api/v1/billing/planfamilies`
}

export const planFamilyGetAllPlanFamilies = async ( options?: RequestInit): Promise<planFamilyGetAllPlanFamiliesResponse> => {
  
  return customFetch<planFamilyGetAllPlanFamiliesResponse>(getPlanFamilyGetAllPlanFamiliesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


