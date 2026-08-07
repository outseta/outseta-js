// @ts-nocheck
import type {
  DiscountCoupon,
  DiscountCouponAddDiscountCouponBody,
  DiscountCouponGetAllDiscountCoupons200,
  DiscountCouponGetAllDiscountCouponsParams,
  DiscountCouponGetDiscountCouponByCodeParams,
  DiscountCouponGetDiscountCouponRedemptions200,
  DiscountCouponGetDiscountCouponRedemptionsParams,
  DiscountCouponUpdateDiscountCouponBody,
  Invoice,
  InvoiceAddInvoiceBody,
  InvoiceGetAllInvoices200,
  InvoiceGetAllInvoicesParams,
  InvoiceUpdateInvoiceBody,
  PaymentInformation,
  PaymentInformationSavePaymentInformationBody,
  Plan,
  PlanAddPlanBody,
  PlanFamily,
  PlanFamilyAddPlanFamilyBody,
  PlanFamilyGetAllPlanFamilies200,
  PlanFamilyGetAllPlanFamiliesParams,
  PlanFamilyUpdatePlanFamilyBody,
  PlanGetAllPlans200,
  PlanGetAllPlansParams,
  PlanUpdatePlanBody,
  Subscription,
  SubscriptionAddOn,
  SubscriptionAddOnAddSubscriptionAddOnBody,
  SubscriptionAddOnAddSubscriptionAddOnPreviewBody,
  SubscriptionAddOnGetAllSubscriptionsAddOns200,
  SubscriptionAddOnGetAllSubscriptionsAddOnsParams,
  SubscriptionAddOnSetAddOnUpgradeRequiredBody,
  SubscriptionChangeSubscriptionBody,
  SubscriptionChangeSubscriptionParams,
  SubscriptionChangeSubscriptionPreviewBody,
  SubscriptionChangeSubscriptionPreviewParams,
  SubscriptionFirstTimeSubscriptionBody,
  SubscriptionFirstTimeSubscriptionPreviewBody,
  SubscriptionFirstTimeSubscriptionPreviewParams,
  SubscriptionGetAllSubscriptions200,
  SubscriptionGetAllSubscriptionsParams,
  SubscriptionSetSubscriptionUpgradeRequiredBody,
  Transaction,
  TransactionsAddPaymentTransactionBody,
  TransactionsGetAllTransactionsByAccountId200,
  TransactionsGetAllTransactionsByAccountIdParams,
  Usage,
  UsageAddUsageBody
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
 * Used during registration to confirm that a coupon code can still be applied to a plan.
Returns the coupon when valid, 404 when no coupon matches the code, or a validation
error when the coupon cannot be applied.
 * @summary Retrieve a discount coupon by code.
 */
export type discountCouponGetDiscountCouponByCodeResponse200 = {
  data: DiscountCoupon
  status: 200
}

export type discountCouponGetDiscountCouponByCodeResponse400 = {
  data: void
  status: 400
}

export type discountCouponGetDiscountCouponByCodeResponse404 = {
  data: void
  status: 404
}
    
export type discountCouponGetDiscountCouponByCodeResponseSuccess = (discountCouponGetDiscountCouponByCodeResponse200) & {
  headers: Headers;
};
export type discountCouponGetDiscountCouponByCodeResponseError = (discountCouponGetDiscountCouponByCodeResponse400 | discountCouponGetDiscountCouponByCodeResponse404) & {
  headers: Headers;
};

export type discountCouponGetDiscountCouponByCodeResponse = (discountCouponGetDiscountCouponByCodeResponseSuccess | discountCouponGetDiscountCouponByCodeResponseError)

export const getDiscountCouponGetDiscountCouponByCodeUrl = (code: string | null,
    params: DiscountCouponGetDiscountCouponByCodeParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/public/billing/discountcoupons/${code}?${stringifiedParams}` : `/api/v1/public/billing/discountcoupons/${code}`
}

export const discountCouponGetDiscountCouponByCode = async (code: string | null,
    params: DiscountCouponGetDiscountCouponByCodeParams, options?: RequestInit): Promise<discountCouponGetDiscountCouponByCodeResponse> => {
  
  return customFetch<discountCouponGetDiscountCouponByCodeResponse>(getDiscountCouponGetDiscountCouponByCodeUrl(code,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieve all discount coupons.
 */
export type discountCouponGetAllDiscountCouponsResponse200 = {
  data: DiscountCouponGetAllDiscountCoupons200
  status: 200
}

export type discountCouponGetAllDiscountCouponsResponse400 = {
  data: void
  status: 400
}

export type discountCouponGetAllDiscountCouponsResponse401 = {
  data: void
  status: 401
}
    
export type discountCouponGetAllDiscountCouponsResponseSuccess = (discountCouponGetAllDiscountCouponsResponse200) & {
  headers: Headers;
};
export type discountCouponGetAllDiscountCouponsResponseError = (discountCouponGetAllDiscountCouponsResponse400 | discountCouponGetAllDiscountCouponsResponse401) & {
  headers: Headers;
};

export type discountCouponGetAllDiscountCouponsResponse = (discountCouponGetAllDiscountCouponsResponseSuccess | discountCouponGetAllDiscountCouponsResponseError)

export const getDiscountCouponGetAllDiscountCouponsUrl = (params?: DiscountCouponGetAllDiscountCouponsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/discountcoupons?${stringifiedParams}` : `/api/v1/billing/discountcoupons`
}

export const discountCouponGetAllDiscountCoupons = async (params?: DiscountCouponGetAllDiscountCouponsParams, options?: RequestInit): Promise<discountCouponGetAllDiscountCouponsResponse> => {
  
  return customFetch<discountCouponGetAllDiscountCouponsResponse>(getDiscountCouponGetAllDiscountCouponsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


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

export const discountCouponAddDiscountCoupon = async (discountCouponAddDiscountCouponBody: NonReadonly<DiscountCouponAddDiscountCouponBody>, options?: RequestInit): Promise<discountCouponAddDiscountCouponResponse> => {
  
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
 * @summary Retrieve a discount coupon.
 */
export type discountCouponGetDiscountCouponResponse200 = {
  data: DiscountCoupon
  status: 200
}

export type discountCouponGetDiscountCouponResponse400 = {
  data: void
  status: 400
}

export type discountCouponGetDiscountCouponResponse401 = {
  data: void
  status: 401
}

export type discountCouponGetDiscountCouponResponse404 = {
  data: void
  status: 404
}
    
export type discountCouponGetDiscountCouponResponseSuccess = (discountCouponGetDiscountCouponResponse200) & {
  headers: Headers;
};
export type discountCouponGetDiscountCouponResponseError = (discountCouponGetDiscountCouponResponse400 | discountCouponGetDiscountCouponResponse401 | discountCouponGetDiscountCouponResponse404) & {
  headers: Headers;
};

export type discountCouponGetDiscountCouponResponse = (discountCouponGetDiscountCouponResponseSuccess | discountCouponGetDiscountCouponResponseError)

export const getDiscountCouponGetDiscountCouponUrl = (discountCouponUid: string | null,) => {


  

  return `/api/v1/billing/discountcoupons/${discountCouponUid}`
}

export const discountCouponGetDiscountCoupon = async (discountCouponUid: string | null, options?: RequestInit): Promise<discountCouponGetDiscountCouponResponse> => {
  
  return customFetch<discountCouponGetDiscountCouponResponse>(getDiscountCouponGetDiscountCouponUrl(discountCouponUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Update a discount coupon.
 */
export type discountCouponUpdateDiscountCouponResponse200 = {
  data: DiscountCoupon
  status: 200
}

export type discountCouponUpdateDiscountCouponResponse400 = {
  data: void
  status: 400
}

export type discountCouponUpdateDiscountCouponResponse401 = {
  data: void
  status: 401
}

export type discountCouponUpdateDiscountCouponResponse404 = {
  data: void
  status: 404
}
    
export type discountCouponUpdateDiscountCouponResponseSuccess = (discountCouponUpdateDiscountCouponResponse200) & {
  headers: Headers;
};
export type discountCouponUpdateDiscountCouponResponseError = (discountCouponUpdateDiscountCouponResponse400 | discountCouponUpdateDiscountCouponResponse401 | discountCouponUpdateDiscountCouponResponse404) & {
  headers: Headers;
};

export type discountCouponUpdateDiscountCouponResponse = (discountCouponUpdateDiscountCouponResponseSuccess | discountCouponUpdateDiscountCouponResponseError)

export const getDiscountCouponUpdateDiscountCouponUrl = (discountCouponUid: string | null,) => {


  

  return `/api/v1/billing/discountcoupons/${discountCouponUid}`
}

export const discountCouponUpdateDiscountCoupon = async (discountCouponUid: string | null,
    discountCouponUpdateDiscountCouponBody: NonReadonly<DiscountCouponUpdateDiscountCouponBody>, options?: RequestInit): Promise<discountCouponUpdateDiscountCouponResponse> => {
  
  return customFetch<discountCouponUpdateDiscountCouponResponse>(getDiscountCouponUpdateDiscountCouponUrl(discountCouponUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      discountCouponUpdateDiscountCouponBody,)
  }
);}


/**
 * @summary Delete a discount coupon.
 */
export type discountCouponDeleteDiscountCouponResponse200 = {
  data: Blob
  status: 200
}

export type discountCouponDeleteDiscountCouponResponse400 = {
  data: void
  status: 400
}

export type discountCouponDeleteDiscountCouponResponse401 = {
  data: void
  status: 401
}

export type discountCouponDeleteDiscountCouponResponse404 = {
  data: void
  status: 404
}
    
export type discountCouponDeleteDiscountCouponResponseSuccess = (discountCouponDeleteDiscountCouponResponse200) & {
  headers: Headers;
};
export type discountCouponDeleteDiscountCouponResponseError = (discountCouponDeleteDiscountCouponResponse400 | discountCouponDeleteDiscountCouponResponse401 | discountCouponDeleteDiscountCouponResponse404) & {
  headers: Headers;
};

export type discountCouponDeleteDiscountCouponResponse = (discountCouponDeleteDiscountCouponResponseSuccess | discountCouponDeleteDiscountCouponResponseError)

export const getDiscountCouponDeleteDiscountCouponUrl = (discountCouponUid: string | null,) => {


  

  return `/api/v1/billing/discountcoupons/${discountCouponUid}`
}

export const discountCouponDeleteDiscountCoupon = async (discountCouponUid: string | null, options?: RequestInit): Promise<discountCouponDeleteDiscountCouponResponse> => {
  
  return customFetch<discountCouponDeleteDiscountCouponResponse>(getDiscountCouponDeleteDiscountCouponUrl(discountCouponUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * @summary Retrieve the redemptions of a discount coupon.
 */
export type discountCouponGetDiscountCouponRedemptionsResponse200 = {
  data: DiscountCouponGetDiscountCouponRedemptions200
  status: 200
}

export type discountCouponGetDiscountCouponRedemptionsResponse400 = {
  data: void
  status: 400
}

export type discountCouponGetDiscountCouponRedemptionsResponse401 = {
  data: void
  status: 401
}
    
export type discountCouponGetDiscountCouponRedemptionsResponseSuccess = (discountCouponGetDiscountCouponRedemptionsResponse200) & {
  headers: Headers;
};
export type discountCouponGetDiscountCouponRedemptionsResponseError = (discountCouponGetDiscountCouponRedemptionsResponse400 | discountCouponGetDiscountCouponRedemptionsResponse401) & {
  headers: Headers;
};

export type discountCouponGetDiscountCouponRedemptionsResponse = (discountCouponGetDiscountCouponRedemptionsResponseSuccess | discountCouponGetDiscountCouponRedemptionsResponseError)

export const getDiscountCouponGetDiscountCouponRedemptionsUrl = (discountCouponUid: string | null,
    params?: DiscountCouponGetDiscountCouponRedemptionsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/discountcoupons/${discountCouponUid}/redemptions?${stringifiedParams}` : `/api/v1/billing/discountcoupons/${discountCouponUid}/redemptions`
}

export const discountCouponGetDiscountCouponRedemptions = async (discountCouponUid: string | null,
    params?: DiscountCouponGetDiscountCouponRedemptionsParams, options?: RequestInit): Promise<discountCouponGetDiscountCouponRedemptionsResponse> => {
  
  return customFetch<discountCouponGetDiscountCouponRedemptionsResponse>(getDiscountCouponGetDiscountCouponRedemptionsUrl(discountCouponUid,params),
  {      
    ...options,
    method: 'GET'
    
    
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

export const usageAddUsage = async (usageAddUsageBody: NonReadonly<UsageAddUsageBody>, options?: RequestInit): Promise<usageAddUsageResponse> => {
  
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
 * Transactions for a given account, tied to accounts and invoices.
BillingTransactionType: Invoice = 1, Payment = 2, Credit = 3, Refund = 4, Chargeback = 5.
 * @summary Retrieve all transactions.
 */
export type transactionsGetAllTransactionsByAccountIdResponse200 = {
  data: TransactionsGetAllTransactionsByAccountId200
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

export const getTransactionsGetAllTransactionsByAccountIdUrl = (accountUid: string | null,
    params?: TransactionsGetAllTransactionsByAccountIdParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/transactions/${accountUid}?${stringifiedParams}` : `/api/v1/billing/transactions/${accountUid}`
}

export const transactionsGetAllTransactionsByAccountId = async (accountUid: string | null,
    params?: TransactionsGetAllTransactionsByAccountIdParams, options?: RequestInit): Promise<transactionsGetAllTransactionsByAccountIdResponse> => {
  
  return customFetch<transactionsGetAllTransactionsByAccountIdResponse>(getTransactionsGetAllTransactionsByAccountIdUrl(accountUid,params),
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

export const transactionsAddPaymentTransaction = async (transactionsAddPaymentTransactionBody: NonReadonly<TransactionsAddPaymentTransactionBody>, options?: RequestInit): Promise<transactionsAddPaymentTransactionResponse> => {
  
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

export const paymentInformationSavePaymentInformation = async (paymentInformationSavePaymentInformationBody: NonReadonly<PaymentInformationSavePaymentInformationBody>, options?: RequestInit): Promise<paymentInformationSavePaymentInformationResponse> => {
  
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
 * @summary Retrieve all subscription add-ons.
 */
export type subscriptionAddOnGetAllSubscriptionsAddOnsResponse200 = {
  data: SubscriptionAddOnGetAllSubscriptionsAddOns200
  status: 200
}

export type subscriptionAddOnGetAllSubscriptionsAddOnsResponse401 = {
  data: void
  status: 401
}
    
export type subscriptionAddOnGetAllSubscriptionsAddOnsResponseSuccess = (subscriptionAddOnGetAllSubscriptionsAddOnsResponse200) & {
  headers: Headers;
};
export type subscriptionAddOnGetAllSubscriptionsAddOnsResponseError = (subscriptionAddOnGetAllSubscriptionsAddOnsResponse401) & {
  headers: Headers;
};

export type subscriptionAddOnGetAllSubscriptionsAddOnsResponse = (subscriptionAddOnGetAllSubscriptionsAddOnsResponseSuccess | subscriptionAddOnGetAllSubscriptionsAddOnsResponseError)

export const getSubscriptionAddOnGetAllSubscriptionsAddOnsUrl = (params?: SubscriptionAddOnGetAllSubscriptionsAddOnsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/subscriptionaddons?${stringifiedParams}` : `/api/v1/billing/subscriptionaddons`
}

export const subscriptionAddOnGetAllSubscriptionsAddOns = async (params?: SubscriptionAddOnGetAllSubscriptionsAddOnsParams, options?: RequestInit): Promise<subscriptionAddOnGetAllSubscriptionsAddOnsResponse> => {
  
  return customFetch<subscriptionAddOnGetAllSubscriptionsAddOnsResponse>(getSubscriptionAddOnGetAllSubscriptionsAddOnsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
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

export const subscriptionAddOnAddSubscriptionAddOn = async (subscriptionAddOnAddSubscriptionAddOnBody: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnBody>, options?: RequestInit): Promise<subscriptionAddOnAddSubscriptionAddOnResponse> => {
  
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
 * @summary Retrieve a subscription add-on.
 */
export type subscriptionAddOnGetSubscriptionAddOnResponse200 = {
  data: SubscriptionAddOn
  status: 200
}

export type subscriptionAddOnGetSubscriptionAddOnResponse400 = {
  data: void
  status: 400
}

export type subscriptionAddOnGetSubscriptionAddOnResponse401 = {
  data: void
  status: 401
}

export type subscriptionAddOnGetSubscriptionAddOnResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionAddOnGetSubscriptionAddOnResponseSuccess = (subscriptionAddOnGetSubscriptionAddOnResponse200) & {
  headers: Headers;
};
export type subscriptionAddOnGetSubscriptionAddOnResponseError = (subscriptionAddOnGetSubscriptionAddOnResponse400 | subscriptionAddOnGetSubscriptionAddOnResponse401 | subscriptionAddOnGetSubscriptionAddOnResponse404) & {
  headers: Headers;
};

export type subscriptionAddOnGetSubscriptionAddOnResponse = (subscriptionAddOnGetSubscriptionAddOnResponseSuccess | subscriptionAddOnGetSubscriptionAddOnResponseError)

export const getSubscriptionAddOnGetSubscriptionAddOnUrl = (subscriptionAddOnUid: string | null,) => {


  

  return `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}`
}

export const subscriptionAddOnGetSubscriptionAddOn = async (subscriptionAddOnUid: string | null, options?: RequestInit): Promise<subscriptionAddOnGetSubscriptionAddOnResponse> => {
  
  return customFetch<subscriptionAddOnGetSubscriptionAddOnResponse>(getSubscriptionAddOnGetSubscriptionAddOnUrl(subscriptionAddOnUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Returns an invoice object with information about the amount outstanding. This method
does not commit the change.
 * @summary Preview the invoice for adding an add-on to a subscription.
 */
export type subscriptionAddOnAddSubscriptionAddOnPreviewResponse200 = {
  data: Invoice
  status: 200
}

export type subscriptionAddOnAddSubscriptionAddOnPreviewResponse401 = {
  data: void
  status: 401
}
    
export type subscriptionAddOnAddSubscriptionAddOnPreviewResponseSuccess = (subscriptionAddOnAddSubscriptionAddOnPreviewResponse200) & {
  headers: Headers;
};
export type subscriptionAddOnAddSubscriptionAddOnPreviewResponseError = (subscriptionAddOnAddSubscriptionAddOnPreviewResponse401) & {
  headers: Headers;
};

export type subscriptionAddOnAddSubscriptionAddOnPreviewResponse = (subscriptionAddOnAddSubscriptionAddOnPreviewResponseSuccess | subscriptionAddOnAddSubscriptionAddOnPreviewResponseError)

export const getSubscriptionAddOnAddSubscriptionAddOnPreviewUrl = () => {


  

  return `/api/v1/billing/subscriptionaddons/addsubscriptionaddonpreview`
}

export const subscriptionAddOnAddSubscriptionAddOnPreview = async (subscriptionAddOnAddSubscriptionAddOnPreviewBody: NonReadonly<SubscriptionAddOnAddSubscriptionAddOnPreviewBody>, options?: RequestInit): Promise<subscriptionAddOnAddSubscriptionAddOnPreviewResponse> => {
  
  return customFetch<subscriptionAddOnAddSubscriptionAddOnPreviewResponse>(getSubscriptionAddOnAddSubscriptionAddOnPreviewUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionAddOnAddSubscriptionAddOnPreviewBody,)
  }
);}


/**
 * When a subscription add-on is flagged, the next time the user authenticates the
authentication widget will prompt the user to change their add-on.
 * @summary Indicate that an upgrade of an add-on is required.
 */
export type subscriptionAddOnSetAddOnUpgradeRequiredResponse200 = {
  data: SubscriptionAddOn
  status: 200
}

export type subscriptionAddOnSetAddOnUpgradeRequiredResponse400 = {
  data: void
  status: 400
}

export type subscriptionAddOnSetAddOnUpgradeRequiredResponse401 = {
  data: void
  status: 401
}

export type subscriptionAddOnSetAddOnUpgradeRequiredResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionAddOnSetAddOnUpgradeRequiredResponseSuccess = (subscriptionAddOnSetAddOnUpgradeRequiredResponse200) & {
  headers: Headers;
};
export type subscriptionAddOnSetAddOnUpgradeRequiredResponseError = (subscriptionAddOnSetAddOnUpgradeRequiredResponse400 | subscriptionAddOnSetAddOnUpgradeRequiredResponse401 | subscriptionAddOnSetAddOnUpgradeRequiredResponse404) & {
  headers: Headers;
};

export type subscriptionAddOnSetAddOnUpgradeRequiredResponse = (subscriptionAddOnSetAddOnUpgradeRequiredResponseSuccess | subscriptionAddOnSetAddOnUpgradeRequiredResponseError)

export const getSubscriptionAddOnSetAddOnUpgradeRequiredUrl = (subscriptionAddOnUid: string | null,) => {


  

  return `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}/setaddonupgraderequired`
}

export const subscriptionAddOnSetAddOnUpgradeRequired = async (subscriptionAddOnUid: string | null,
    subscriptionAddOnSetAddOnUpgradeRequiredBody: NonReadonly<SubscriptionAddOnSetAddOnUpgradeRequiredBody>, options?: RequestInit): Promise<subscriptionAddOnSetAddOnUpgradeRequiredResponse> => {
  
  return customFetch<subscriptionAddOnSetAddOnUpgradeRequiredResponse>(getSubscriptionAddOnSetAddOnUpgradeRequiredUrl(subscriptionAddOnUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      subscriptionAddOnSetAddOnUpgradeRequiredBody,)
  }
);}


/**
 * Removes the add-on from the subscription going forward and returns the updated
subscription.
 * @summary End an add-on on a subscription.
 */
export type subscriptionAddOnEndSubscriptionAddOnResponse200 = {
  data: Subscription
  status: 200
}

export type subscriptionAddOnEndSubscriptionAddOnResponse400 = {
  data: void
  status: 400
}

export type subscriptionAddOnEndSubscriptionAddOnResponse401 = {
  data: void
  status: 401
}

export type subscriptionAddOnEndSubscriptionAddOnResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionAddOnEndSubscriptionAddOnResponseSuccess = (subscriptionAddOnEndSubscriptionAddOnResponse200) & {
  headers: Headers;
};
export type subscriptionAddOnEndSubscriptionAddOnResponseError = (subscriptionAddOnEndSubscriptionAddOnResponse400 | subscriptionAddOnEndSubscriptionAddOnResponse401 | subscriptionAddOnEndSubscriptionAddOnResponse404) & {
  headers: Headers;
};

export type subscriptionAddOnEndSubscriptionAddOnResponse = (subscriptionAddOnEndSubscriptionAddOnResponseSuccess | subscriptionAddOnEndSubscriptionAddOnResponseError)

export const getSubscriptionAddOnEndSubscriptionAddOnUrl = (subscriptionAddOnUid: string | null,) => {


  

  return `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}/end`
}

export const subscriptionAddOnEndSubscriptionAddOn = async (subscriptionAddOnUid: string | null, options?: RequestInit): Promise<subscriptionAddOnEndSubscriptionAddOnResponse> => {
  
  return customFetch<subscriptionAddOnEndSubscriptionAddOnResponse>(getSubscriptionAddOnEndSubscriptionAddOnUrl(subscriptionAddOnUid),
  {      
    ...options,
    method: 'PUT'
    
    
  }
);}


/**
 * @summary Immediately ends an add-on.
 */
export type subscriptionAddOnExpireSubscriptionAddOnResponse200 = {
  data: Blob
  status: 200
}

export type subscriptionAddOnExpireSubscriptionAddOnResponse400 = {
  data: void
  status: 400
}

export type subscriptionAddOnExpireSubscriptionAddOnResponse401 = {
  data: void
  status: 401
}

export type subscriptionAddOnExpireSubscriptionAddOnResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionAddOnExpireSubscriptionAddOnResponseSuccess = (subscriptionAddOnExpireSubscriptionAddOnResponse200) & {
  headers: Headers;
};
export type subscriptionAddOnExpireSubscriptionAddOnResponseError = (subscriptionAddOnExpireSubscriptionAddOnResponse400 | subscriptionAddOnExpireSubscriptionAddOnResponse401 | subscriptionAddOnExpireSubscriptionAddOnResponse404) & {
  headers: Headers;
};

export type subscriptionAddOnExpireSubscriptionAddOnResponse = (subscriptionAddOnExpireSubscriptionAddOnResponseSuccess | subscriptionAddOnExpireSubscriptionAddOnResponseError)

export const getSubscriptionAddOnExpireSubscriptionAddOnUrl = (subscriptionAddOnUid: string | null,) => {


  

  return `/api/v1/billing/subscriptionaddons/${subscriptionAddOnUid}/expire`
}

export const subscriptionAddOnExpireSubscriptionAddOn = async (subscriptionAddOnUid: string | null, options?: RequestInit): Promise<subscriptionAddOnExpireSubscriptionAddOnResponse> => {
  
  return customFetch<subscriptionAddOnExpireSubscriptionAddOnResponse>(getSubscriptionAddOnExpireSubscriptionAddOnUrl(subscriptionAddOnUid),
  {      
    ...options,
    method: 'PUT'
    
    
  }
);}


/**
 * Admins and API key callers see every invoice. Non-admin users see only invoices
belonging to the account they are the primary contact of.
Pass excludeInvoiceUid as a query parameter to omit a specific invoice from the result set.
 * @summary Retrieve all invoices.
 */
export type invoiceGetAllInvoicesResponse200 = {
  data: InvoiceGetAllInvoices200
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

export const getInvoiceGetAllInvoicesUrl = (params?: InvoiceGetAllInvoicesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/invoices?${stringifiedParams}` : `/api/v1/billing/invoices`
}

export const invoiceGetAllInvoices = async (params?: InvoiceGetAllInvoicesParams, options?: RequestInit): Promise<invoiceGetAllInvoicesResponse> => {
  
  return customFetch<invoiceGetAllInvoicesResponse>(getInvoiceGetAllInvoicesUrl(params),
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

export const invoiceAddInvoice = async (invoiceAddInvoiceBody: NonReadonly<InvoiceAddInvoiceBody>, options?: RequestInit): Promise<invoiceAddInvoiceResponse> => {
  
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
 * @summary Retrieve an invoice.
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
    invoiceUpdateInvoiceBody: NonReadonly<InvoiceUpdateInvoiceBody>, options?: RequestInit): Promise<invoiceUpdateInvoiceResponse> => {
  
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
 * @summary Retrieve a rendered PDF copy of an invoice.
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
 * Admins and API key callers see every subscription; non-admin users see only
subscriptions on accounts they are related to. That scope is determined by the auth
token and cannot be widened by the caller. Optionally pass
Account.PersonAccount.Person.Uid as a query parameter to narrow the results to a
specific person.
 * @summary Retrieve all subscriptions.
 */
export type subscriptionGetAllSubscriptionsResponse200 = {
  data: SubscriptionGetAllSubscriptions200
  status: 200
}

export type subscriptionGetAllSubscriptionsResponse401 = {
  data: void
  status: 401
}
    
export type subscriptionGetAllSubscriptionsResponseSuccess = (subscriptionGetAllSubscriptionsResponse200) & {
  headers: Headers;
};
export type subscriptionGetAllSubscriptionsResponseError = (subscriptionGetAllSubscriptionsResponse401) & {
  headers: Headers;
};

export type subscriptionGetAllSubscriptionsResponse = (subscriptionGetAllSubscriptionsResponseSuccess | subscriptionGetAllSubscriptionsResponseError)

export const getSubscriptionGetAllSubscriptionsUrl = (params?: SubscriptionGetAllSubscriptionsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/subscriptions?${stringifiedParams}` : `/api/v1/billing/subscriptions`
}

export const subscriptionGetAllSubscriptions = async (params?: SubscriptionGetAllSubscriptionsParams, options?: RequestInit): Promise<subscriptionGetAllSubscriptionsResponse> => {
  
  return customFetch<subscriptionGetAllSubscriptionsResponse>(getSubscriptionGetAllSubscriptionsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieve a subscription.
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
 * Only a future-dated subscription can be deleted; the current subscription on an
account cannot be removed this way.
 * @summary Delete a subscription.
 */
export type subscriptionDeleteSubscriptionResponse200 = {
  data: Blob
  status: 200
}

export type subscriptionDeleteSubscriptionResponse400 = {
  data: void
  status: 400
}

export type subscriptionDeleteSubscriptionResponse401 = {
  data: void
  status: 401
}

export type subscriptionDeleteSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionDeleteSubscriptionResponseSuccess = (subscriptionDeleteSubscriptionResponse200) & {
  headers: Headers;
};
export type subscriptionDeleteSubscriptionResponseError = (subscriptionDeleteSubscriptionResponse400 | subscriptionDeleteSubscriptionResponse401 | subscriptionDeleteSubscriptionResponse404) & {
  headers: Headers;
};

export type subscriptionDeleteSubscriptionResponse = (subscriptionDeleteSubscriptionResponseSuccess | subscriptionDeleteSubscriptionResponseError)

export const getSubscriptionDeleteSubscriptionUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/subscriptions/${subscriptionUid}`
}

export const subscriptionDeleteSubscription = async (subscriptionUid: string | null, options?: RequestInit): Promise<subscriptionDeleteSubscriptionResponse> => {
  
  return customFetch<subscriptionDeleteSubscriptionResponse>(getSubscriptionDeleteSubscriptionUrl(subscriptionUid),
  {      
    ...options,
    method: 'DELETE'
    
    
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
 * Expires the active discount coupon on the subscription as of now.
 * @summary Remove a discount from a subscription.
 */
export type subscriptionExpireDiscountCouponSubscriptionResponse200 = {
  data: Blob
  status: 200
}

export type subscriptionExpireDiscountCouponSubscriptionResponse400 = {
  data: void
  status: 400
}

export type subscriptionExpireDiscountCouponSubscriptionResponse401 = {
  data: void
  status: 401
}

export type subscriptionExpireDiscountCouponSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type subscriptionExpireDiscountCouponSubscriptionResponseSuccess = (subscriptionExpireDiscountCouponSubscriptionResponse200) & {
  headers: Headers;
};
export type subscriptionExpireDiscountCouponSubscriptionResponseError = (subscriptionExpireDiscountCouponSubscriptionResponse400 | subscriptionExpireDiscountCouponSubscriptionResponse401 | subscriptionExpireDiscountCouponSubscriptionResponse404) & {
  headers: Headers;
};

export type subscriptionExpireDiscountCouponSubscriptionResponse = (subscriptionExpireDiscountCouponSubscriptionResponseSuccess | subscriptionExpireDiscountCouponSubscriptionResponseError)

export const getSubscriptionExpireDiscountCouponSubscriptionUrl = (subscriptionUid: string | null,
    discountUid: string | null,) => {


  

  return `/api/v1/billing/subscriptions/${subscriptionUid}/discounts/${discountUid}`
}

export const subscriptionExpireDiscountCouponSubscription = async (subscriptionUid: string | null,
    discountUid: string | null, options?: RequestInit): Promise<subscriptionExpireDiscountCouponSubscriptionResponse> => {
  
  return customFetch<subscriptionExpireDiscountCouponSubscriptionResponse>(getSubscriptionExpireDiscountCouponSubscriptionUrl(subscriptionUid,discountUid),
  {      
    ...options,
    method: 'DELETE'
    
    
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
    subscriptionSetSubscriptionUpgradeRequiredBody: NonReadonly<SubscriptionSetSubscriptionUpgradeRequiredBody>, options?: RequestInit): Promise<subscriptionSetSubscriptionUpgradeRequiredResponse> => {
  
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

export const subscriptionFirstTimeSubscriptionPreview = async (subscriptionFirstTimeSubscriptionPreviewBody: NonReadonly<SubscriptionFirstTimeSubscriptionPreviewBody>,
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

export const subscriptionFirstTimeSubscription = async (subscriptionFirstTimeSubscriptionBody: NonReadonly<SubscriptionFirstTimeSubscriptionBody>, options?: RequestInit): Promise<subscriptionFirstTimeSubscriptionResponse> => {
  
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
    subscriptionChangeSubscriptionPreviewBody: NonReadonly<SubscriptionChangeSubscriptionPreviewBody>,
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
    subscriptionChangeSubscriptionBody: NonReadonly<SubscriptionChangeSubscriptionBody>,
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
 * @summary Retrieve all plans.
 */
export type planGetAllPlansResponse200 = {
  data: PlanGetAllPlans200
  status: 200
}
    
export type planGetAllPlansResponseSuccess = (planGetAllPlansResponse200) & {
  headers: Headers;
};
;

export type planGetAllPlansResponse = (planGetAllPlansResponseSuccess)

export const getPlanGetAllPlansUrl = (params?: PlanGetAllPlansParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/plans?${stringifiedParams}` : `/api/v1/billing/plans`
}

export const planGetAllPlans = async (params?: PlanGetAllPlansParams, options?: RequestInit): Promise<planGetAllPlansResponse> => {
  
  return customFetch<planGetAllPlansResponse>(getPlanGetAllPlansUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Add a new plan.
 */
export type planAddPlanResponse200 = {
  data: Plan
  status: 200
}

export type planAddPlanResponse401 = {
  data: void
  status: 401
}
    
export type planAddPlanResponseSuccess = (planAddPlanResponse200) & {
  headers: Headers;
};
export type planAddPlanResponseError = (planAddPlanResponse401) & {
  headers: Headers;
};

export type planAddPlanResponse = (planAddPlanResponseSuccess | planAddPlanResponseError)

export const getPlanAddPlanUrl = () => {


  

  return `/api/v1/billing/plans`
}

export const planAddPlan = async (planAddPlanBody: NonReadonly<PlanAddPlanBody>, options?: RequestInit): Promise<planAddPlanResponse> => {
  
  return customFetch<planAddPlanResponse>(getPlanAddPlanUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      planAddPlanBody,)
  }
);}


/**
 * @summary Retrieve a plan.
 */
export type planGetPlanResponse200 = {
  data: Plan
  status: 200
}

export type planGetPlanResponse400 = {
  data: void
  status: 400
}

export type planGetPlanResponse404 = {
  data: void
  status: 404
}
    
export type planGetPlanResponseSuccess = (planGetPlanResponse200) & {
  headers: Headers;
};
export type planGetPlanResponseError = (planGetPlanResponse400 | planGetPlanResponse404) & {
  headers: Headers;
};

export type planGetPlanResponse = (planGetPlanResponseSuccess | planGetPlanResponseError)

export const getPlanGetPlanUrl = (planUid: string | null,) => {


  

  return `/api/v1/billing/plans/${planUid}`
}

export const planGetPlan = async (planUid: string | null, options?: RequestInit): Promise<planGetPlanResponse> => {
  
  return customFetch<planGetPlanResponse>(getPlanGetPlanUrl(planUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Update a plan.
 */
export type planUpdatePlanResponse200 = {
  data: Plan
  status: 200
}

export type planUpdatePlanResponse400 = {
  data: void
  status: 400
}

export type planUpdatePlanResponse401 = {
  data: void
  status: 401
}

export type planUpdatePlanResponse404 = {
  data: void
  status: 404
}
    
export type planUpdatePlanResponseSuccess = (planUpdatePlanResponse200) & {
  headers: Headers;
};
export type planUpdatePlanResponseError = (planUpdatePlanResponse400 | planUpdatePlanResponse401 | planUpdatePlanResponse404) & {
  headers: Headers;
};

export type planUpdatePlanResponse = (planUpdatePlanResponseSuccess | planUpdatePlanResponseError)

export const getPlanUpdatePlanUrl = (planUid: string | null,) => {


  

  return `/api/v1/billing/plans/${planUid}`
}

export const planUpdatePlan = async (planUid: string | null,
    planUpdatePlanBody: NonReadonly<PlanUpdatePlanBody>, options?: RequestInit): Promise<planUpdatePlanResponse> => {
  
  return customFetch<planUpdatePlanResponse>(getPlanUpdatePlanUrl(planUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      planUpdatePlanBody,)
  }
);}


/**
 * @summary Delete a plan.
 */
export type planDeletePlanResponse200 = {
  data: Blob
  status: 200
}

export type planDeletePlanResponse400 = {
  data: void
  status: 400
}

export type planDeletePlanResponse401 = {
  data: void
  status: 401
}

export type planDeletePlanResponse404 = {
  data: void
  status: 404
}
    
export type planDeletePlanResponseSuccess = (planDeletePlanResponse200) & {
  headers: Headers;
};
export type planDeletePlanResponseError = (planDeletePlanResponse400 | planDeletePlanResponse401 | planDeletePlanResponse404) & {
  headers: Headers;
};

export type planDeletePlanResponse = (planDeletePlanResponseSuccess | planDeletePlanResponseError)

export const getPlanDeletePlanUrl = (planUid: string | null,) => {


  

  return `/api/v1/billing/plans/${planUid}`
}

export const planDeletePlan = async (planUid: string | null, options?: RequestInit): Promise<planDeletePlanResponse> => {
  
  return customFetch<planDeletePlanResponse>(getPlanDeletePlanUrl(planUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * @summary Retrieve all plan families.
 */
export type planFamilyGetAllPlanFamiliesResponse200 = {
  data: PlanFamilyGetAllPlanFamilies200
  status: 200
}
    
export type planFamilyGetAllPlanFamiliesResponseSuccess = (planFamilyGetAllPlanFamiliesResponse200) & {
  headers: Headers;
};
;

export type planFamilyGetAllPlanFamiliesResponse = (planFamilyGetAllPlanFamiliesResponseSuccess)

export const getPlanFamilyGetAllPlanFamiliesUrl = (params?: PlanFamilyGetAllPlanFamiliesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/planfamilies?${stringifiedParams}` : `/api/v1/billing/planfamilies`
}

export const planFamilyGetAllPlanFamilies = async (params?: PlanFamilyGetAllPlanFamiliesParams, options?: RequestInit): Promise<planFamilyGetAllPlanFamiliesResponse> => {
  
  return customFetch<planFamilyGetAllPlanFamiliesResponse>(getPlanFamilyGetAllPlanFamiliesUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Add a new plan family.
 */
export type planFamilyAddPlanFamilyResponse200 = {
  data: PlanFamily
  status: 200
}

export type planFamilyAddPlanFamilyResponse401 = {
  data: void
  status: 401
}
    
export type planFamilyAddPlanFamilyResponseSuccess = (planFamilyAddPlanFamilyResponse200) & {
  headers: Headers;
};
export type planFamilyAddPlanFamilyResponseError = (planFamilyAddPlanFamilyResponse401) & {
  headers: Headers;
};

export type planFamilyAddPlanFamilyResponse = (planFamilyAddPlanFamilyResponseSuccess | planFamilyAddPlanFamilyResponseError)

export const getPlanFamilyAddPlanFamilyUrl = () => {


  

  return `/api/v1/billing/planfamilies`
}

export const planFamilyAddPlanFamily = async (planFamilyAddPlanFamilyBody: NonReadonly<PlanFamilyAddPlanFamilyBody>, options?: RequestInit): Promise<planFamilyAddPlanFamilyResponse> => {
  
  return customFetch<planFamilyAddPlanFamilyResponse>(getPlanFamilyAddPlanFamilyUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      planFamilyAddPlanFamilyBody,)
  }
);}


/**
 * @summary Retrieve a plan family.
 */
export type planFamilyGetPlanFamilyResponse200 = {
  data: PlanFamily
  status: 200
}

export type planFamilyGetPlanFamilyResponse400 = {
  data: void
  status: 400
}

export type planFamilyGetPlanFamilyResponse401 = {
  data: void
  status: 401
}

export type planFamilyGetPlanFamilyResponse404 = {
  data: void
  status: 404
}
    
export type planFamilyGetPlanFamilyResponseSuccess = (planFamilyGetPlanFamilyResponse200) & {
  headers: Headers;
};
export type planFamilyGetPlanFamilyResponseError = (planFamilyGetPlanFamilyResponse400 | planFamilyGetPlanFamilyResponse401 | planFamilyGetPlanFamilyResponse404) & {
  headers: Headers;
};

export type planFamilyGetPlanFamilyResponse = (planFamilyGetPlanFamilyResponseSuccess | planFamilyGetPlanFamilyResponseError)

export const getPlanFamilyGetPlanFamilyUrl = (planFamilyUid: string | null,) => {


  

  return `/api/v1/billing/planfamilies/${planFamilyUid}`
}

export const planFamilyGetPlanFamily = async (planFamilyUid: string | null, options?: RequestInit): Promise<planFamilyGetPlanFamilyResponse> => {
  
  return customFetch<planFamilyGetPlanFamilyResponse>(getPlanFamilyGetPlanFamilyUrl(planFamilyUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Update a plan family.
 */
export type planFamilyUpdatePlanFamilyResponse200 = {
  data: PlanFamily
  status: 200
}

export type planFamilyUpdatePlanFamilyResponse400 = {
  data: void
  status: 400
}

export type planFamilyUpdatePlanFamilyResponse401 = {
  data: void
  status: 401
}

export type planFamilyUpdatePlanFamilyResponse404 = {
  data: void
  status: 404
}
    
export type planFamilyUpdatePlanFamilyResponseSuccess = (planFamilyUpdatePlanFamilyResponse200) & {
  headers: Headers;
};
export type planFamilyUpdatePlanFamilyResponseError = (planFamilyUpdatePlanFamilyResponse400 | planFamilyUpdatePlanFamilyResponse401 | planFamilyUpdatePlanFamilyResponse404) & {
  headers: Headers;
};

export type planFamilyUpdatePlanFamilyResponse = (planFamilyUpdatePlanFamilyResponseSuccess | planFamilyUpdatePlanFamilyResponseError)

export const getPlanFamilyUpdatePlanFamilyUrl = (planFamilyUid: string | null,) => {


  

  return `/api/v1/billing/planfamilies/${planFamilyUid}`
}

export const planFamilyUpdatePlanFamily = async (planFamilyUid: string | null,
    planFamilyUpdatePlanFamilyBody: NonReadonly<PlanFamilyUpdatePlanFamilyBody>, options?: RequestInit): Promise<planFamilyUpdatePlanFamilyResponse> => {
  
  return customFetch<planFamilyUpdatePlanFamilyResponse>(getPlanFamilyUpdatePlanFamilyUrl(planFamilyUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      planFamilyUpdatePlanFamilyBody,)
  }
);}


/**
 * @summary Delete a plan family.
 */
export type planFamilyDeletePlanFamilyResponse200 = {
  data: Blob
  status: 200
}

export type planFamilyDeletePlanFamilyResponse400 = {
  data: void
  status: 400
}

export type planFamilyDeletePlanFamilyResponse401 = {
  data: void
  status: 401
}

export type planFamilyDeletePlanFamilyResponse404 = {
  data: void
  status: 404
}
    
export type planFamilyDeletePlanFamilyResponseSuccess = (planFamilyDeletePlanFamilyResponse200) & {
  headers: Headers;
};
export type planFamilyDeletePlanFamilyResponseError = (planFamilyDeletePlanFamilyResponse400 | planFamilyDeletePlanFamilyResponse401 | planFamilyDeletePlanFamilyResponse404) & {
  headers: Headers;
};

export type planFamilyDeletePlanFamilyResponse = (planFamilyDeletePlanFamilyResponseSuccess | planFamilyDeletePlanFamilyResponseError)

export const getPlanFamilyDeletePlanFamilyUrl = (planFamilyUid: string | null,) => {


  

  return `/api/v1/billing/planfamilies/${planFamilyUid}`
}

export const planFamilyDeletePlanFamily = async (planFamilyUid: string | null, options?: RequestInit): Promise<planFamilyDeletePlanFamilyResponse> => {
  
  return customFetch<planFamilyDeletePlanFamilyResponse>(getPlanFamilyDeletePlanFamilyUrl(planFamilyUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


