// @ts-nocheck
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
} from '.././models';

import { customFetch } from '../../client';

/**
 * Only one of AmountOff or PercentOff should be set.
Duration values: 1 = Forever, 2 = Once, 3 = Repeating (DurationInMonths must be set).
 * @summary Add a new discount coupon.
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
 * Transactions are tied to accounts and invoices.
BillingTransactionType: Invoice = 1, Payment = 2, Credit = 3, Refund = 4, Chargeback = 5.
 * @summary Retrieve all transactions for a given account.
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
 * If the amount matches the outstanding amount of the invoice, the invoice will be marked
as Paid.
 * @summary Add a payment to an invoice.
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
 * Admins and API key callers see every invoice. Non-admin users see only invoices
belonging to the account they are the primary contact of.
Pass excludeInvoiceUid as a query parameter to omit a specific invoice from the result set.
 * @summary Returns all invoices, optionally restricted to the requester's account.
 */
export type invoiceGetAllInvoicesResponse200 = {
  data: Invoice[]
  status: 200
}

export type invoiceGetAllInvoicesResponse401 = {
  data: void
  status: 401
}
    
export type invoiceGetAllInvoicesResponseSuccess = (invoiceGetAllInvoicesResponse200) & {
  headers: Headers;
};
export type invoiceGetAllInvoicesResponseError = (invoiceGetAllInvoicesResponse401) & {
  headers: Headers;
};

export type invoiceGetAllInvoicesResponse = (invoiceGetAllInvoicesResponseSuccess | invoiceGetAllInvoicesResponseError)

export const getInvoiceGetAllInvoicesUrl = () => {


  

  return `/api/v1/billing/invoices`
}

export const invoiceGetAllInvoices = async ( options?: RequestInit): Promise<invoiceGetAllInvoicesResponse> => {
  
  return customFetch<invoiceGetAllInvoicesResponse>(getInvoiceGetAllInvoicesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
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
 * @summary Returns a single invoice by UID.
 */
export type invoiceGetInvoiceResponse200 = {
  data: Invoice
  status: 200
}

export type invoiceGetInvoiceResponse400 = {
  data: void
  status: 400
}

export type invoiceGetInvoiceResponse401 = {
  data: void
  status: 401
}

export type invoiceGetInvoiceResponse404 = {
  data: void
  status: 404
}
    
export type invoiceGetInvoiceResponseSuccess = (invoiceGetInvoiceResponse200) & {
  headers: Headers;
};
export type invoiceGetInvoiceResponseError = (invoiceGetInvoiceResponse400 | invoiceGetInvoiceResponse401 | invoiceGetInvoiceResponse404) & {
  headers: Headers;
};

export type invoiceGetInvoiceResponse = (invoiceGetInvoiceResponseSuccess | invoiceGetInvoiceResponseError)

export const getInvoiceGetInvoiceUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/invoices/${invoiceUid}`
}

export const invoiceGetInvoice = async (invoiceUid: string | null, options?: RequestInit): Promise<invoiceGetInvoiceResponse> => {
  
  return customFetch<invoiceGetInvoiceResponse>(getInvoiceGetInvoiceUrl(invoiceUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Only invoices created manually via the API or admin UI can be updated; invoices
generated by a subscription's billing cycle are immutable and will return a
validation error.
 * @summary Update an ad-hoc (manually created) invoice.
 */
export type invoiceUpdateInvoiceResponse200 = {
  data: Invoice
  status: 200
}

export type invoiceUpdateInvoiceResponse400 = {
  data: void
  status: 400
}

export type invoiceUpdateInvoiceResponse401 = {
  data: void
  status: 401
}

export type invoiceUpdateInvoiceResponse404 = {
  data: void
  status: 404
}
    
export type invoiceUpdateInvoiceResponseSuccess = (invoiceUpdateInvoiceResponse200) & {
  headers: Headers;
};
export type invoiceUpdateInvoiceResponseError = (invoiceUpdateInvoiceResponse400 | invoiceUpdateInvoiceResponse401 | invoiceUpdateInvoiceResponse404) & {
  headers: Headers;
};

export type invoiceUpdateInvoiceResponse = (invoiceUpdateInvoiceResponseSuccess | invoiceUpdateInvoiceResponseError)

export const getInvoiceUpdateInvoiceUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/invoices/${invoiceUid}`
}

export const invoiceUpdateInvoice = async (invoiceUid: string | null,
    invoiceUpdateInvoiceBody: InvoiceUpdateInvoiceBody, options?: RequestInit): Promise<invoiceUpdateInvoiceResponse> => {
  
  return customFetch<invoiceUpdateInvoiceResponse>(getInvoiceUpdateInvoiceUrl(invoiceUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      invoiceUpdateInvoiceBody,)
  }
);}


/**
 * @summary Delete an invoice.
 */
export type invoiceDeleteInvoiceResponse200 = {
  data: Blob
  status: 200
}

export type invoiceDeleteInvoiceResponse400 = {
  data: void
  status: 400
}

export type invoiceDeleteInvoiceResponse401 = {
  data: void
  status: 401
}

export type invoiceDeleteInvoiceResponse404 = {
  data: void
  status: 404
}
    
export type invoiceDeleteInvoiceResponseSuccess = (invoiceDeleteInvoiceResponse200) & {
  headers: Headers;
};
export type invoiceDeleteInvoiceResponseError = (invoiceDeleteInvoiceResponse400 | invoiceDeleteInvoiceResponse401 | invoiceDeleteInvoiceResponse404) & {
  headers: Headers;
};

export type invoiceDeleteInvoiceResponse = (invoiceDeleteInvoiceResponseSuccess | invoiceDeleteInvoiceResponseError)

export const getInvoiceDeleteInvoiceUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/invoices/${invoiceUid}`
}

export const invoiceDeleteInvoice = async (invoiceUid: string | null, options?: RequestInit): Promise<invoiceDeleteInvoiceResponse> => {
  
  return customFetch<invoiceDeleteInvoiceResponse>(getInvoiceDeleteInvoiceUrl(invoiceUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * Response body is a binary PDF (Content-Type: application/pdf) served as an
attachment named invoice-{Number}-{InvoiceDate}-{AccountName}.pdf.
 * @summary Returns a rendered PDF copy of an invoice.
 */
export type invoiceGetInvoiceAsPdfResponse200 = {
  data: Blob
  status: 200
}

export type invoiceGetInvoiceAsPdfResponse400 = {
  data: void
  status: 400
}

export type invoiceGetInvoiceAsPdfResponse401 = {
  data: void
  status: 401
}

export type invoiceGetInvoiceAsPdfResponse404 = {
  data: void
  status: 404
}
    
export type invoiceGetInvoiceAsPdfResponseSuccess = (invoiceGetInvoiceAsPdfResponse200) & {
  headers: Headers;
};
export type invoiceGetInvoiceAsPdfResponseError = (invoiceGetInvoiceAsPdfResponse400 | invoiceGetInvoiceAsPdfResponse401 | invoiceGetInvoiceAsPdfResponse404) & {
  headers: Headers;
};

export type invoiceGetInvoiceAsPdfResponse = (invoiceGetInvoiceAsPdfResponseSuccess | invoiceGetInvoiceAsPdfResponseError)

export const getInvoiceGetInvoiceAsPdfUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/invoices/${invoiceUid}/pdf`
}

export const invoiceGetInvoiceAsPdf = async (invoiceUid: string | null, options?: RequestInit): Promise<invoiceGetInvoiceAsPdfResponse> => {
  
  return customFetch<invoiceGetInvoiceAsPdfResponse>(getInvoiceGetInvoiceAsPdfUrl(invoiceUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Optional query parameters:
  note - free-text note to include in the email body.
  bcc  - comma-separated list of email addresses to BCC.
 * @summary Email an invoice to the account's billing contact.
 */
export type invoiceSendInvoiceEmailResponse200 = {
  data: Blob
  status: 200
}

export type invoiceSendInvoiceEmailResponse400 = {
  data: void
  status: 400
}

export type invoiceSendInvoiceEmailResponse401 = {
  data: void
  status: 401
}

export type invoiceSendInvoiceEmailResponse404 = {
  data: void
  status: 404
}
    
export type invoiceSendInvoiceEmailResponseSuccess = (invoiceSendInvoiceEmailResponse200) & {
  headers: Headers;
};
export type invoiceSendInvoiceEmailResponseError = (invoiceSendInvoiceEmailResponse400 | invoiceSendInvoiceEmailResponse401 | invoiceSendInvoiceEmailResponse404) & {
  headers: Headers;
};

export type invoiceSendInvoiceEmailResponse = (invoiceSendInvoiceEmailResponseSuccess | invoiceSendInvoiceEmailResponseError)

export const getInvoiceSendInvoiceEmailUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/invoices/${invoiceUid}/sendinvoiceemail`
}

export const invoiceSendInvoiceEmail = async (invoiceUid: string | null, options?: RequestInit): Promise<invoiceSendInvoiceEmailResponse> => {
  
  return customFetch<invoiceSendInvoiceEmailResponse>(getInvoiceSendInvoiceEmailUrl(invoiceUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Returns 400 Bad Request if the invoice is not in the Paid status.
 * @summary Send the "invoice paid" receipt email to the account's billing contact.
 */
export type invoiceSendInvoicePaidEmailResponse200 = {
  data: Blob
  status: 200
}

export type invoiceSendInvoicePaidEmailResponse400 = {
  data: void
  status: 400
}

export type invoiceSendInvoicePaidEmailResponse401 = {
  data: void
  status: 401
}

export type invoiceSendInvoicePaidEmailResponse404 = {
  data: void
  status: 404
}
    
export type invoiceSendInvoicePaidEmailResponseSuccess = (invoiceSendInvoicePaidEmailResponse200) & {
  headers: Headers;
};
export type invoiceSendInvoicePaidEmailResponseError = (invoiceSendInvoicePaidEmailResponse400 | invoiceSendInvoicePaidEmailResponse401 | invoiceSendInvoicePaidEmailResponse404) & {
  headers: Headers;
};

export type invoiceSendInvoicePaidEmailResponse = (invoiceSendInvoicePaidEmailResponseSuccess | invoiceSendInvoicePaidEmailResponseError)

export const getInvoiceSendInvoicePaidEmailUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/invoices/${invoiceUid}/sendinvoicepaidemail`
}

export const invoiceSendInvoicePaidEmail = async (invoiceUid: string | null, options?: RequestInit): Promise<invoiceSendInvoicePaidEmailResponse> => {
  
  return customFetch<invoiceSendInvoicePaidEmailResponse>(getInvoiceSendInvoicePaidEmailUrl(invoiceUid),
  {      
    ...options,
    method: 'POST'
    
    
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
 * When a subscription is flagged, next time the user authenticates the authentication
widget will prompt the user to change plan.
 * @summary Indicate that an upgrade of plan is required.
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
 * Returns an invoice object with information about the amount outstanding if an account
were to register with this subscription. BillingRenewalTerm values: 1 = Monthly,
2 = Yearly, 3 = Quarterly, 4 = OneTime. Pass asOf=renewal to see the renewal invoice
instead of the initial invoice.
 * @summary Preview the initial or renewal invoice for a hypothetical subscription.
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
 * Returns an invoice object with information about the amount outstanding.
 * @summary Add a subscription to an account for the first time.
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
 * Returns an invoice object with information about the amount outstanding. This method
does not commit the subscription change.
 * @summary Preview the invoice for a subscription change.
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
 * Returns an invoice object with information about the amount outstanding.
 * @summary Change a subscription on an account.
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


