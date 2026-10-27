// @ts-nocheck
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
 * Pass accountUid in the query string to return only the line items on that account's
invoices.
 * @summary Retrieve all invoice line items.
 */
export type stripeInvoiceLineItemsGetAllResponse200 = {
  data: StripeInvoiceLineItemsGetAll200
  status: 200
}

export type stripeInvoiceLineItemsGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripeInvoiceLineItemsGetAllResponseSuccess = (stripeInvoiceLineItemsGetAllResponse200) & {
  headers: Headers;
};
export type stripeInvoiceLineItemsGetAllResponseError = (stripeInvoiceLineItemsGetAllResponse401) & {
  headers: Headers;
};

export type stripeInvoiceLineItemsGetAllResponse = (stripeInvoiceLineItemsGetAllResponseSuccess | stripeInvoiceLineItemsGetAllResponseError)

export const getStripeInvoiceLineItemsGetAllUrl = (params?: StripeInvoiceLineItemsGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/invoice-line-items?${stringifiedParams}` : `/api/v1/billing/stripe/invoice-line-items`
}

export const stripeInvoiceLineItemsGetAll = async (params?: StripeInvoiceLineItemsGetAllParams, options?: RequestInit): Promise<stripeInvoiceLineItemsGetAllResponse> => {
  
  return customFetch<stripeInvoiceLineItemsGetAllResponse>(getStripeInvoiceLineItemsGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
Access ends now. This sets the line item's EndDate and updates the account's products
and stage. The invoice is not changed.
 * @summary End the product access that a line item gives.
 */
export type stripeInvoiceLineItemsCancelAccessResponse200 = {
  data: StripeInvoiceLineItem
  status: 200
}

export type stripeInvoiceLineItemsCancelAccessResponse400 = {
  data: void
  status: 400
}

export type stripeInvoiceLineItemsCancelAccessResponse401 = {
  data: void
  status: 401
}

export type stripeInvoiceLineItemsCancelAccessResponse404 = {
  data: void
  status: 404
}
    
export type stripeInvoiceLineItemsCancelAccessResponseSuccess = (stripeInvoiceLineItemsCancelAccessResponse200) & {
  headers: Headers;
};
export type stripeInvoiceLineItemsCancelAccessResponseError = (stripeInvoiceLineItemsCancelAccessResponse400 | stripeInvoiceLineItemsCancelAccessResponse401 | stripeInvoiceLineItemsCancelAccessResponse404) & {
  headers: Headers;
};

export type stripeInvoiceLineItemsCancelAccessResponse = (stripeInvoiceLineItemsCancelAccessResponseSuccess | stripeInvoiceLineItemsCancelAccessResponseError)

export const getStripeInvoiceLineItemsCancelAccessUrl = (lineItemUid: string | null,) => {


  

  return `/api/v1/billing/stripe/invoice-line-items/${lineItemUid}/cancel`
}

export const stripeInvoiceLineItemsCancelAccess = async (lineItemUid: string | null, options?: RequestInit): Promise<stripeInvoiceLineItemsCancelAccessResponse> => {
  
  return customFetch<stripeInvoiceLineItemsCancelAccessResponse>(getStripeInvoiceLineItemsCancelAccessUrl(lineItemUid),
  {      
    ...options,
    method: 'PUT'
    
    
  }
);}


/**
 * These are the payment methods saved in the connected Stripe account for each account.
Only display details are stored, such as the type, card brand, last 4 digits and
expiry. Full card and bank numbers are never stored.
 * @summary Retrieve all payment methods.
 */
export type stripePaymentMethodsGetAllResponse200 = {
  data: StripePaymentMethodsGetAll200
  status: 200
}

export type stripePaymentMethodsGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripePaymentMethodsGetAllResponseSuccess = (stripePaymentMethodsGetAllResponse200) & {
  headers: Headers;
};
export type stripePaymentMethodsGetAllResponseError = (stripePaymentMethodsGetAllResponse401) & {
  headers: Headers;
};

export type stripePaymentMethodsGetAllResponse = (stripePaymentMethodsGetAllResponseSuccess | stripePaymentMethodsGetAllResponseError)

export const getStripePaymentMethodsGetAllUrl = (params?: StripePaymentMethodsGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/payment-methods?${stringifiedParams}` : `/api/v1/billing/stripe/payment-methods`
}

export const stripePaymentMethodsGetAll = async (params?: StripePaymentMethodsGetAllParams, options?: RequestInit): Promise<stripePaymentMethodsGetAllResponse> => {
  
  return customFetch<stripePaymentMethodsGetAllResponse>(getStripePaymentMethodsGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieve a payment method.
 */
export type stripePaymentMethodsGetResponse200 = {
  data: StripePaymentMethod
  status: 200
}

export type stripePaymentMethodsGetResponse401 = {
  data: void
  status: 401
}
    
export type stripePaymentMethodsGetResponseSuccess = (stripePaymentMethodsGetResponse200) & {
  headers: Headers;
};
export type stripePaymentMethodsGetResponseError = (stripePaymentMethodsGetResponse401) & {
  headers: Headers;
};

export type stripePaymentMethodsGetResponse = (stripePaymentMethodsGetResponseSuccess | stripePaymentMethodsGetResponseError)

export const getStripePaymentMethodsGetUrl = (uid: string | null,) => {


  

  return `/api/v1/billing/stripe/payment-methods/${uid}`
}

export const stripePaymentMethodsGet = async (uid: string | null, options?: RequestInit): Promise<stripePaymentMethodsGetResponse> => {
  
  return customFetch<stripePaymentMethodsGetResponse>(getStripePaymentMethodsGetUrl(uid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Prices are created and updated through their product.
 * @summary Retrieve all prices.
 */
export type stripePricesGetAllResponse200 = {
  data: StripePricesGetAll200
  status: 200
}

export type stripePricesGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripePricesGetAllResponseSuccess = (stripePricesGetAllResponse200) & {
  headers: Headers;
};
export type stripePricesGetAllResponseError = (stripePricesGetAllResponse401) & {
  headers: Headers;
};

export type stripePricesGetAllResponse = (stripePricesGetAllResponseSuccess | stripePricesGetAllResponseError)

export const getStripePricesGetAllUrl = (params?: StripePricesGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/prices?${stringifiedParams}` : `/api/v1/billing/stripe/prices`
}

export const stripePricesGetAll = async (params?: StripePricesGetAllParams, options?: RequestInit): Promise<stripePricesGetAllResponse> => {
  
  return customFetch<stripePricesGetAllResponse>(getStripePricesGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieve a price.
 */
export type stripePricesGetResponse200 = {
  data: StripePrice
  status: 200
}

export type stripePricesGetResponse401 = {
  data: void
  status: 401
}
    
export type stripePricesGetResponseSuccess = (stripePricesGetResponse200) & {
  headers: Headers;
};
export type stripePricesGetResponseError = (stripePricesGetResponse401) & {
  headers: Headers;
};

export type stripePricesGetResponse = (stripePricesGetResponseSuccess | stripePricesGetResponseError)

export const getStripePricesGetUrl = (uid: string | null,) => {


  

  return `/api/v1/billing/stripe/prices/${uid}`
}

export const stripePricesGet = async (uid: string | null, options?: RequestInit): Promise<stripePricesGetResponse> => {
  
  return customFetch<stripePricesGetResponse>(getStripePricesGetUrl(uid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieve all promotion codes.
 */
export type stripePromotionCodesGetAllResponse200 = {
  data: StripePromotionCodesGetAll200
  status: 200
}

export type stripePromotionCodesGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripePromotionCodesGetAllResponseSuccess = (stripePromotionCodesGetAllResponse200) & {
  headers: Headers;
};
export type stripePromotionCodesGetAllResponseError = (stripePromotionCodesGetAllResponse401) & {
  headers: Headers;
};

export type stripePromotionCodesGetAllResponse = (stripePromotionCodesGetAllResponseSuccess | stripePromotionCodesGetAllResponseError)

export const getStripePromotionCodesGetAllUrl = (params?: StripePromotionCodesGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/promotion-codes?${stringifiedParams}` : `/api/v1/billing/stripe/promotion-codes`
}

export const stripePromotionCodesGetAll = async (params?: StripePromotionCodesGetAllParams, options?: RequestInit): Promise<stripePromotionCodesGetAllResponse> => {
  
  return customFetch<stripePromotionCodesGetAllResponse>(getStripePromotionCodesGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/discountcoupons instead.
            
A promotion code belongs to a coupon. The code is also created in the connected Stripe
account.
 * @summary Add a new promotion code.
 */
export type stripePromotionCodesCreateResponse200 = {
  data: StripePromotionCode
  status: 200
}

export type stripePromotionCodesCreateResponse401 = {
  data: void
  status: 401
}
    
export type stripePromotionCodesCreateResponseSuccess = (stripePromotionCodesCreateResponse200) & {
  headers: Headers;
};
export type stripePromotionCodesCreateResponseError = (stripePromotionCodesCreateResponse401) & {
  headers: Headers;
};

export type stripePromotionCodesCreateResponse = (stripePromotionCodesCreateResponseSuccess | stripePromotionCodesCreateResponseError)

export const getStripePromotionCodesCreateUrl = () => {


  

  return `/api/v1/billing/stripe/promotion-codes`
}

export const stripePromotionCodesCreate = async (stripePromotionCodesCreateBody: NonReadonly<StripePromotionCodesCreateBody>, options?: RequestInit): Promise<stripePromotionCodesCreateResponse> => {
  
  return customFetch<stripePromotionCodesCreateResponse>(getStripePromotionCodesCreateUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripePromotionCodesCreateBody,)
  }
);}


/**
 * @summary Retrieve a promotion code.
 */
export type stripePromotionCodesGetResponse200 = {
  data: StripePromotionCode
  status: 200
}

export type stripePromotionCodesGetResponse400 = {
  data: void
  status: 400
}

export type stripePromotionCodesGetResponse401 = {
  data: void
  status: 401
}

export type stripePromotionCodesGetResponse404 = {
  data: void
  status: 404
}
    
export type stripePromotionCodesGetResponseSuccess = (stripePromotionCodesGetResponse200) & {
  headers: Headers;
};
export type stripePromotionCodesGetResponseError = (stripePromotionCodesGetResponse400 | stripePromotionCodesGetResponse401 | stripePromotionCodesGetResponse404) & {
  headers: Headers;
};

export type stripePromotionCodesGetResponse = (stripePromotionCodesGetResponseSuccess | stripePromotionCodesGetResponseError)

export const getStripePromotionCodesGetUrl = (promotionCodeUid: string | null,) => {


  

  return `/api/v1/billing/stripe/promotion-codes/${promotionCodeUid}`
}

export const stripePromotionCodesGet = async (promotionCodeUid: string | null, options?: RequestInit): Promise<stripePromotionCodesGetResponse> => {
  
  return customFetch<stripePromotionCodesGetResponse>(getStripePromotionCodesGetUrl(promotionCodeUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
The code can no longer be redeemed. It is also ended in the connected Stripe account.
No other change is made. The promotion code to end is identified by the Uid in the
request body.
 * @summary End a promotion code.
 */
export type stripePromotionCodesUpdateResponse200 = {
  data: StripePromotionCode
  status: 200
}

export type stripePromotionCodesUpdateResponse400 = {
  data: void
  status: 400
}

export type stripePromotionCodesUpdateResponse401 = {
  data: void
  status: 401
}

export type stripePromotionCodesUpdateResponse404 = {
  data: void
  status: 404
}
    
export type stripePromotionCodesUpdateResponseSuccess = (stripePromotionCodesUpdateResponse200) & {
  headers: Headers;
};
export type stripePromotionCodesUpdateResponseError = (stripePromotionCodesUpdateResponse400 | stripePromotionCodesUpdateResponse401 | stripePromotionCodesUpdateResponse404) & {
  headers: Headers;
};

export type stripePromotionCodesUpdateResponse = (stripePromotionCodesUpdateResponseSuccess | stripePromotionCodesUpdateResponseError)

export const getStripePromotionCodesUpdateUrl = (promotionCodeUid: string | null,) => {


  

  return `/api/v1/billing/stripe/promotion-codes/${promotionCodeUid}`
}

export const stripePromotionCodesUpdate = async (promotionCodeUid: string | null,
    stripePromotionCodesUpdateBody: NonReadonly<StripePromotionCodesUpdateBody>, options?: RequestInit): Promise<stripePromotionCodesUpdateResponse> => {
  
  return customFetch<stripePromotionCodesUpdateResponse>(getStripePromotionCodesUpdateUrl(promotionCodeUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripePromotionCodesUpdateBody,)
  }
);}


/**
 * Only an active promotion code that can still be redeemed is found. The match is
case-sensitive. Returns only the Code and StripeCoupon.Uid, and 404 if no code matches.
No authentication is required.
 * @summary Find a promotion code by its code.
 */
export type stripePromotionCodesSearchByCodeResponse200 = {
  data: Blob
  status: 200
}
    
export type stripePromotionCodesSearchByCodeResponseSuccess = (stripePromotionCodesSearchByCodeResponse200) & {
  headers: Headers;
};
;

export type stripePromotionCodesSearchByCodeResponse = (stripePromotionCodesSearchByCodeResponseSuccess)

export const getStripePromotionCodesSearchByCodeUrl = (promotionCode: string | null,) => {


  

  return `/api/v1/billing/stripe/promotion-codes/search/${promotionCode}`
}

export const stripePromotionCodesSearchByCode = async (promotionCode: string | null, options?: RequestInit): Promise<stripePromotionCodesSearchByCodeResponse> => {
  
  return customFetch<stripePromotionCodesSearchByCodeResponse>(getStripePromotionCodesSearchByCodeUrl(promotionCode),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieve all product families.
 */
export type stripeProductFamiliesGetAllResponse200 = {
  data: StripeProductFamiliesGetAll200
  status: 200
}
    
export type stripeProductFamiliesGetAllResponseSuccess = (stripeProductFamiliesGetAllResponse200) & {
  headers: Headers;
};
;

export type stripeProductFamiliesGetAllResponse = (stripeProductFamiliesGetAllResponseSuccess)

export const getStripeProductFamiliesGetAllUrl = (params?: StripeProductFamiliesGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/product-families?${stringifiedParams}` : `/api/v1/billing/stripe/product-families`
}

export const stripeProductFamiliesGetAll = async (params?: StripeProductFamiliesGetAllParams, options?: RequestInit): Promise<stripeProductFamiliesGetAllResponse> => {
  
  return customFetch<stripeProductFamiliesGetAllResponse>(getStripeProductFamiliesGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/planfamilies instead.
            
A product added to this family is removed from any other family.
 * @summary Add a new product family.
 */
export type stripeProductFamiliesPostResponse200 = {
  data: StripeProductFamily
  status: 200
}

export type stripeProductFamiliesPostResponse401 = {
  data: void
  status: 401
}
    
export type stripeProductFamiliesPostResponseSuccess = (stripeProductFamiliesPostResponse200) & {
  headers: Headers;
};
export type stripeProductFamiliesPostResponseError = (stripeProductFamiliesPostResponse401) & {
  headers: Headers;
};

export type stripeProductFamiliesPostResponse = (stripeProductFamiliesPostResponseSuccess | stripeProductFamiliesPostResponseError)

export const getStripeProductFamiliesPostUrl = () => {


  

  return `/api/v1/billing/stripe/product-families`
}

export const stripeProductFamiliesPost = async (stripeProductFamiliesPostBody: NonReadonly<StripeProductFamiliesPostBody>, options?: RequestInit): Promise<stripeProductFamiliesPostResponse> => {
  
  return customFetch<stripeProductFamiliesPostResponse>(getStripeProductFamiliesPostUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeProductFamiliesPostBody,)
  }
);}


/**
 * @summary Retrieve a product family.
 */
export type stripeProductFamiliesGetResponse200 = {
  data: StripeProductFamily
  status: 200
}
    
export type stripeProductFamiliesGetResponseSuccess = (stripeProductFamiliesGetResponse200) & {
  headers: Headers;
};
;

export type stripeProductFamiliesGetResponse = (stripeProductFamiliesGetResponseSuccess)

export const getStripeProductFamiliesGetUrl = (uid: string | null,) => {


  

  return `/api/v1/billing/stripe/product-families/${uid}`
}

export const stripeProductFamiliesGet = async (uid: string | null, options?: RequestInit): Promise<stripeProductFamiliesGetResponse> => {
  
  return customFetch<stripeProductFamiliesGetResponse>(getStripeProductFamiliesGetUrl(uid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/planfamilies/{planFamilyUid} instead.
            
A product added to this family is removed from any other family.
 * @summary Update a product family.
 */
export type stripeProductFamiliesPutResponse200 = {
  data: StripeProductFamily
  status: 200
}

export type stripeProductFamiliesPutResponse400 = {
  data: void
  status: 400
}

export type stripeProductFamiliesPutResponse401 = {
  data: void
  status: 401
}

export type stripeProductFamiliesPutResponse404 = {
  data: void
  status: 404
}
    
export type stripeProductFamiliesPutResponseSuccess = (stripeProductFamiliesPutResponse200) & {
  headers: Headers;
};
export type stripeProductFamiliesPutResponseError = (stripeProductFamiliesPutResponse400 | stripeProductFamiliesPutResponse401 | stripeProductFamiliesPutResponse404) & {
  headers: Headers;
};

export type stripeProductFamiliesPutResponse = (stripeProductFamiliesPutResponseSuccess | stripeProductFamiliesPutResponseError)

export const getStripeProductFamiliesPutUrl = (productFamilyUid: string | null,) => {


  

  return `/api/v1/billing/stripe/product-families/${productFamilyUid}`
}

export const stripeProductFamiliesPut = async (productFamilyUid: string | null,
    stripeProductFamiliesPutBody: NonReadonly<StripeProductFamiliesPutBody>, options?: RequestInit): Promise<stripeProductFamiliesPutResponse> => {
  
  return customFetch<stripeProductFamiliesPutResponse>(getStripeProductFamiliesPutUrl(productFamilyUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeProductFamiliesPutBody,)
  }
);}


/**
 * @summary Delete a product family.
 */
export type stripeProductFamiliesDeleteResponse200 = {
  data: Blob
  status: 200
}

export type stripeProductFamiliesDeleteResponse400 = {
  data: void
  status: 400
}

export type stripeProductFamiliesDeleteResponse401 = {
  data: void
  status: 401
}

export type stripeProductFamiliesDeleteResponse404 = {
  data: void
  status: 404
}
    
export type stripeProductFamiliesDeleteResponseSuccess = (stripeProductFamiliesDeleteResponse200) & {
  headers: Headers;
};
export type stripeProductFamiliesDeleteResponseError = (stripeProductFamiliesDeleteResponse400 | stripeProductFamiliesDeleteResponse401 | stripeProductFamiliesDeleteResponse404) & {
  headers: Headers;
};

export type stripeProductFamiliesDeleteResponse = (stripeProductFamiliesDeleteResponseSuccess | stripeProductFamiliesDeleteResponseError)

export const getStripeProductFamiliesDeleteUrl = (productFamilyUid: string | null,) => {


  

  return `/api/v1/billing/stripe/product-families/${productFamilyUid}`
}

export const stripeProductFamiliesDelete = async (productFamilyUid: string | null, options?: RequestInit): Promise<stripeProductFamiliesDeleteResponse> => {
  
  return customFetch<stripeProductFamiliesDeleteResponse>(getStripeProductFamiliesDeleteUrl(productFamilyUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * @summary Retrieve all coupons.
 */
export type stripeCouponsGetAllResponse200 = {
  data: StripeCouponsGetAll200
  status: 200
}

export type stripeCouponsGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripeCouponsGetAllResponseSuccess = (stripeCouponsGetAllResponse200) & {
  headers: Headers;
};
export type stripeCouponsGetAllResponseError = (stripeCouponsGetAllResponse401) & {
  headers: Headers;
};

export type stripeCouponsGetAllResponse = (stripeCouponsGetAllResponseSuccess | stripeCouponsGetAllResponseError)

export const getStripeCouponsGetAllUrl = (params?: StripeCouponsGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/coupons?${stringifiedParams}` : `/api/v1/billing/stripe/coupons`
}

export const stripeCouponsGetAll = async (params?: StripeCouponsGetAllParams, options?: RequestInit): Promise<stripeCouponsGetAllResponse> => {
  
  return customFetch<stripeCouponsGetAllResponse>(getStripeCouponsGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/discountcoupons instead.
            
Set exactly one of PercentOff or CurrencyAmountOff. The coupon is also created in the
connected Stripe account.
 * @summary Add a new coupon.
 */
export type stripeCouponsCreateResponse200 = {
  data: StripeCoupon
  status: 200
}

export type stripeCouponsCreateResponse401 = {
  data: void
  status: 401
}
    
export type stripeCouponsCreateResponseSuccess = (stripeCouponsCreateResponse200) & {
  headers: Headers;
};
export type stripeCouponsCreateResponseError = (stripeCouponsCreateResponse401) & {
  headers: Headers;
};

export type stripeCouponsCreateResponse = (stripeCouponsCreateResponseSuccess | stripeCouponsCreateResponseError)

export const getStripeCouponsCreateUrl = () => {


  

  return `/api/v1/billing/stripe/coupons`
}

export const stripeCouponsCreate = async (stripeCouponsCreateBody: NonReadonly<StripeCouponsCreateBody>, options?: RequestInit): Promise<stripeCouponsCreateResponse> => {
  
  return customFetch<stripeCouponsCreateResponse>(getStripeCouponsCreateUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeCouponsCreateBody,)
  }
);}


/**
 * @summary Retrieve a coupon.
 */
export type stripeCouponsGetResponse200 = {
  data: StripeCoupon
  status: 200
}

export type stripeCouponsGetResponse400 = {
  data: void
  status: 400
}

export type stripeCouponsGetResponse401 = {
  data: void
  status: 401
}

export type stripeCouponsGetResponse404 = {
  data: void
  status: 404
}
    
export type stripeCouponsGetResponseSuccess = (stripeCouponsGetResponse200) & {
  headers: Headers;
};
export type stripeCouponsGetResponseError = (stripeCouponsGetResponse400 | stripeCouponsGetResponse401 | stripeCouponsGetResponse404) & {
  headers: Headers;
};

export type stripeCouponsGetResponse = (stripeCouponsGetResponseSuccess | stripeCouponsGetResponseError)

export const getStripeCouponsGetUrl = (couponUid: string | null,) => {


  

  return `/api/v1/billing/stripe/coupons/${couponUid}`
}

export const stripeCouponsGet = async (couponUid: string | null, options?: RequestInit): Promise<stripeCouponsGetResponse> => {
  
  return customFetch<stripeCouponsGetResponse>(getStripeCouponsGetUrl(couponUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * The coupon is also deleted in the connected Stripe account. A coupon that was ever
applied to a subscription or invoice cannot be deleted.
 * @summary Delete a coupon.
 */
export type stripeCouponsDeleteResponse200 = {
  data: Blob
  status: 200
}

export type stripeCouponsDeleteResponse400 = {
  data: void
  status: 400
}

export type stripeCouponsDeleteResponse401 = {
  data: void
  status: 401
}

export type stripeCouponsDeleteResponse404 = {
  data: void
  status: 404
}
    
export type stripeCouponsDeleteResponseSuccess = (stripeCouponsDeleteResponse200) & {
  headers: Headers;
};
export type stripeCouponsDeleteResponseError = (stripeCouponsDeleteResponse400 | stripeCouponsDeleteResponse401 | stripeCouponsDeleteResponse404) & {
  headers: Headers;
};

export type stripeCouponsDeleteResponse = (stripeCouponsDeleteResponseSuccess | stripeCouponsDeleteResponseError)

export const getStripeCouponsDeleteUrl = (couponUid: string | null,) => {


  

  return `/api/v1/billing/stripe/coupons/${couponUid}`
}

export const stripeCouponsDelete = async (couponUid: string | null, options?: RequestInit): Promise<stripeCouponsDeleteResponse> => {
  
  return customFetch<stripeCouponsDeleteResponse>(getStripeCouponsDeleteUrl(couponUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * A redemption is the discount created when one of the coupon's promotion codes was
applied.
 * @summary Retrieve the redemptions of a coupon.
 */
export type stripeCouponsGetRedemptionsResponse200 = {
  data: StripeCouponsGetRedemptions200
  status: 200
}

export type stripeCouponsGetRedemptionsResponse400 = {
  data: void
  status: 400
}

export type stripeCouponsGetRedemptionsResponse401 = {
  data: void
  status: 401
}
    
export type stripeCouponsGetRedemptionsResponseSuccess = (stripeCouponsGetRedemptionsResponse200) & {
  headers: Headers;
};
export type stripeCouponsGetRedemptionsResponseError = (stripeCouponsGetRedemptionsResponse400 | stripeCouponsGetRedemptionsResponse401) & {
  headers: Headers;
};

export type stripeCouponsGetRedemptionsResponse = (stripeCouponsGetRedemptionsResponseSuccess | stripeCouponsGetRedemptionsResponseError)

export const getStripeCouponsGetRedemptionsUrl = (couponUid: string | null,
    params?: StripeCouponsGetRedemptionsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/coupons/${couponUid}/redemptions?${stringifiedParams}` : `/api/v1/billing/stripe/coupons/${couponUid}/redemptions`
}

export const stripeCouponsGetRedemptions = async (couponUid: string | null,
    params?: StripeCouponsGetRedemptionsParams, options?: RequestInit): Promise<stripeCouponsGetRedemptionsResponse> => {
  
  return customFetch<stripeCouponsGetRedemptionsResponse>(getStripeCouponsGetRedemptionsUrl(couponUid,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import all coupons and promotion codes from the connected Stripe account.
 */
export type stripeCouponsSyncCouponsFromStripeResponse200 = {
  data: ImportResult
  status: 200
}

export type stripeCouponsSyncCouponsFromStripeResponse401 = {
  data: void
  status: 401
}
    
export type stripeCouponsSyncCouponsFromStripeResponseSuccess = (stripeCouponsSyncCouponsFromStripeResponse200) & {
  headers: Headers;
};
export type stripeCouponsSyncCouponsFromStripeResponseError = (stripeCouponsSyncCouponsFromStripeResponse401) & {
  headers: Headers;
};

export type stripeCouponsSyncCouponsFromStripeResponse = (stripeCouponsSyncCouponsFromStripeResponseSuccess | stripeCouponsSyncCouponsFromStripeResponseError)

export const getStripeCouponsSyncCouponsFromStripeUrl = () => {


  

  return `/api/v1/billing/stripe/coupons/sync`
}

export const stripeCouponsSyncCouponsFromStripe = async ( options?: RequestInit): Promise<stripeCouponsSyncCouponsFromStripeResponse> => {
  
  return customFetch<stripeCouponsSyncCouponsFromStripeResponse>(getStripeCouponsSyncCouponsFromStripeUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import a coupon from the connected Stripe account.
 */
export type stripeCouponsSyncCouponFromStripeResponse200 = {
  data: Blob
  status: 200
}

export type stripeCouponsSyncCouponFromStripeResponse401 = {
  data: void
  status: 401
}
    
export type stripeCouponsSyncCouponFromStripeResponseSuccess = (stripeCouponsSyncCouponFromStripeResponse200) & {
  headers: Headers;
};
export type stripeCouponsSyncCouponFromStripeResponseError = (stripeCouponsSyncCouponFromStripeResponse401) & {
  headers: Headers;
};

export type stripeCouponsSyncCouponFromStripeResponse = (stripeCouponsSyncCouponFromStripeResponseSuccess | stripeCouponsSyncCouponFromStripeResponseError)

export const getStripeCouponsSyncCouponFromStripeUrl = (uid: string | null,) => {


  

  return `/api/v1/billing/stripe/coupons/${uid}/sync`
}

export const stripeCouponsSyncCouponFromStripe = async (uid: string | null, options?: RequestInit): Promise<stripeCouponsSyncCouponFromStripeResponse> => {
  
  return customFetch<stripeCouponsSyncCouponFromStripeResponse>(getStripeCouponsSyncCouponFromStripeUrl(uid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Invoices imported from another billing system are left out, unless IsImported=true is
passed in the query string, which returns only imported invoices. Pass
excludeInvoiceUid in the query string to leave out one invoice.
 * @summary Retrieve all invoices.
 */
export type stripeInvoicesGetAllResponse200 = {
  data: StripeInvoicesGetAll200
  status: 200
}

export type stripeInvoicesGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripeInvoicesGetAllResponseSuccess = (stripeInvoicesGetAllResponse200) & {
  headers: Headers;
};
export type stripeInvoicesGetAllResponseError = (stripeInvoicesGetAllResponse401) & {
  headers: Headers;
};

export type stripeInvoicesGetAllResponse = (stripeInvoicesGetAllResponseSuccess | stripeInvoicesGetAllResponseError)

export const getStripeInvoicesGetAllUrl = (params?: StripeInvoicesGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/invoices?${stringifiedParams}` : `/api/v1/billing/stripe/invoices`
}

export const stripeInvoicesGetAll = async (params?: StripeInvoicesGetAllParams, options?: RequestInit): Promise<stripeInvoicesGetAllResponse> => {
  
  return customFetch<stripeInvoicesGetAllResponse>(getStripeInvoicesGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/invoices instead.
            
The invoice is created for an account, and also in the connected Stripe account.
 * @summary Add a new invoice.
 */
export type stripeInvoicesPostResponse200 = {
  data: StripeInvoice
  status: 200
}

export type stripeInvoicesPostResponse401 = {
  data: void
  status: 401
}
    
export type stripeInvoicesPostResponseSuccess = (stripeInvoicesPostResponse200) & {
  headers: Headers;
};
export type stripeInvoicesPostResponseError = (stripeInvoicesPostResponse401) & {
  headers: Headers;
};

export type stripeInvoicesPostResponse = (stripeInvoicesPostResponseSuccess | stripeInvoicesPostResponseError)

export const getStripeInvoicesPostUrl = () => {


  

  return `/api/v1/billing/stripe/invoices`
}

export const stripeInvoicesPost = async (stripeInvoicesPostBody: NonReadonly<StripeInvoicesPostBody>, options?: RequestInit): Promise<stripeInvoicesPostResponse> => {
  
  return customFetch<stripeInvoicesPostResponse>(getStripeInvoicesPostUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeInvoicesPostBody,)
  }
);}


/**
 * @summary Retrieve an invoice.
 */
export type stripeInvoicesGetResponse200 = {
  data: StripeInvoice
  status: 200
}

export type stripeInvoicesGetResponse400 = {
  data: void
  status: 400
}

export type stripeInvoicesGetResponse401 = {
  data: void
  status: 401
}

export type stripeInvoicesGetResponse404 = {
  data: void
  status: 404
}
    
export type stripeInvoicesGetResponseSuccess = (stripeInvoicesGetResponse200) & {
  headers: Headers;
};
export type stripeInvoicesGetResponseError = (stripeInvoicesGetResponse400 | stripeInvoicesGetResponse401 | stripeInvoicesGetResponse404) & {
  headers: Headers;
};

export type stripeInvoicesGetResponse = (stripeInvoicesGetResponseSuccess | stripeInvoicesGetResponseError)

export const getStripeInvoicesGetUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/stripe/invoices/${invoiceUid}`
}

export const stripeInvoicesGet = async (invoiceUid: string | null, options?: RequestInit): Promise<stripeInvoicesGetResponse> => {
  
  return customFetch<stripeInvoicesGetResponse>(getStripeInvoicesGetUrl(invoiceUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * The response is a 302 redirect to the PDF. A user token can only download invoices on
its own account, and only as the account's primary contact.
 * @summary Download an invoice as a PDF.
 */
export type stripeInvoicesGetInvoiceAsPdfResponse200 = {
  data: Blob
  status: 200
}

export type stripeInvoicesGetInvoiceAsPdfResponse400 = {
  data: void
  status: 400
}

export type stripeInvoicesGetInvoiceAsPdfResponse401 = {
  data: void
  status: 401
}

export type stripeInvoicesGetInvoiceAsPdfResponse404 = {
  data: void
  status: 404
}
    
export type stripeInvoicesGetInvoiceAsPdfResponseSuccess = (stripeInvoicesGetInvoiceAsPdfResponse200) & {
  headers: Headers;
};
export type stripeInvoicesGetInvoiceAsPdfResponseError = (stripeInvoicesGetInvoiceAsPdfResponse400 | stripeInvoicesGetInvoiceAsPdfResponse401 | stripeInvoicesGetInvoiceAsPdfResponse404) & {
  headers: Headers;
};

export type stripeInvoicesGetInvoiceAsPdfResponse = (stripeInvoicesGetInvoiceAsPdfResponseSuccess | stripeInvoicesGetInvoiceAsPdfResponseError)

export const getStripeInvoicesGetInvoiceAsPdfUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/stripe/invoices/${invoiceUid}/pdf`
}

export const stripeInvoicesGetInvoiceAsPdf = async (invoiceUid: string | null, options?: RequestInit): Promise<stripeInvoicesGetInvoiceAsPdfResponse> => {
  
  return customFetch<stripeInvoicesGetInvoiceAsPdfResponse>(getStripeInvoicesGetInvoiceAsPdfUrl(invoiceUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
NewStatus is one of paid (paid outside Stripe), uncollectible or void. The change is
also made in the connected Stripe account.
 * @summary Change the status of an invoice.
 */
export type stripeInvoicesChangeInvoiceStatusResponse200 = {
  data: Blob
  status: 200
}

export type stripeInvoicesChangeInvoiceStatusResponse400 = {
  data: void
  status: 400
}

export type stripeInvoicesChangeInvoiceStatusResponse401 = {
  data: void
  status: 401
}

export type stripeInvoicesChangeInvoiceStatusResponse404 = {
  data: void
  status: 404
}
    
export type stripeInvoicesChangeInvoiceStatusResponseSuccess = (stripeInvoicesChangeInvoiceStatusResponse200) & {
  headers: Headers;
};
export type stripeInvoicesChangeInvoiceStatusResponseError = (stripeInvoicesChangeInvoiceStatusResponse400 | stripeInvoicesChangeInvoiceStatusResponse401 | stripeInvoicesChangeInvoiceStatusResponse404) & {
  headers: Headers;
};

export type stripeInvoicesChangeInvoiceStatusResponse = (stripeInvoicesChangeInvoiceStatusResponseSuccess | stripeInvoicesChangeInvoiceStatusResponseError)

export const getStripeInvoicesChangeInvoiceStatusUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/stripe/invoices/${invoiceUid}/change-status`
}

export const stripeInvoicesChangeInvoiceStatus = async (invoiceUid: string | null,
    stripeInvoicesChangeInvoiceStatusBody: StripeInvoicesChangeInvoiceStatusBody, options?: RequestInit): Promise<stripeInvoicesChangeInvoiceStatusResponse> => {
  
  return customFetch<stripeInvoicesChangeInvoiceStatusResponse>(getStripeInvoicesChangeInvoiceStatusUrl(invoiceUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeInvoicesChangeInvoiceStatusBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
CreditType is one of account_balance, payment_method (refund to the payment method) or
out_of_band. The credit note is created in the connected Stripe account.
 * @summary Issue a credit note against an invoice.
 */
export type stripeInvoicesIssueInvoiceCreditResponse200 = {
  data: Blob
  status: 200
}

export type stripeInvoicesIssueInvoiceCreditResponse400 = {
  data: void
  status: 400
}

export type stripeInvoicesIssueInvoiceCreditResponse401 = {
  data: void
  status: 401
}

export type stripeInvoicesIssueInvoiceCreditResponse404 = {
  data: void
  status: 404
}
    
export type stripeInvoicesIssueInvoiceCreditResponseSuccess = (stripeInvoicesIssueInvoiceCreditResponse200) & {
  headers: Headers;
};
export type stripeInvoicesIssueInvoiceCreditResponseError = (stripeInvoicesIssueInvoiceCreditResponse400 | stripeInvoicesIssueInvoiceCreditResponse401 | stripeInvoicesIssueInvoiceCreditResponse404) & {
  headers: Headers;
};

export type stripeInvoicesIssueInvoiceCreditResponse = (stripeInvoicesIssueInvoiceCreditResponseSuccess | stripeInvoicesIssueInvoiceCreditResponseError)

export const getStripeInvoicesIssueInvoiceCreditUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/stripe/invoices/${invoiceUid}/issue-credit`
}

export const stripeInvoicesIssueInvoiceCredit = async (invoiceUid: string | null,
    stripeInvoicesIssueInvoiceCreditBody: StripeInvoicesIssueInvoiceCreditBody, options?: RequestInit): Promise<stripeInvoicesIssueInvoiceCreditResponse> => {
  
  return customFetch<stripeInvoicesIssueInvoiceCreditResponse>(getStripeInvoicesIssueInvoiceCreditUrl(invoiceUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeInvoicesIssueInvoiceCreditBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Email an invoice to the account.
 */
export type stripeInvoicesSendInvoiceEmailResponse200 = {
  data: Blob
  status: 200
}

export type stripeInvoicesSendInvoiceEmailResponse400 = {
  data: void
  status: 400
}

export type stripeInvoicesSendInvoiceEmailResponse401 = {
  data: void
  status: 401
}

export type stripeInvoicesSendInvoiceEmailResponse404 = {
  data: void
  status: 404
}
    
export type stripeInvoicesSendInvoiceEmailResponseSuccess = (stripeInvoicesSendInvoiceEmailResponse200) & {
  headers: Headers;
};
export type stripeInvoicesSendInvoiceEmailResponseError = (stripeInvoicesSendInvoiceEmailResponse400 | stripeInvoicesSendInvoiceEmailResponse401 | stripeInvoicesSendInvoiceEmailResponse404) & {
  headers: Headers;
};

export type stripeInvoicesSendInvoiceEmailResponse = (stripeInvoicesSendInvoiceEmailResponseSuccess | stripeInvoicesSendInvoiceEmailResponseError)

export const getStripeInvoicesSendInvoiceEmailUrl = (invoiceUid: string | null,) => {


  

  return `/api/v1/billing/stripe/invoices/${invoiceUid}/send`
}

export const stripeInvoicesSendInvoiceEmail = async (invoiceUid: string | null, options?: RequestInit): Promise<stripeInvoicesSendInvoiceEmailResponse> => {
  
  return customFetch<stripeInvoicesSendInvoiceEmailResponse>(getStripeInvoicesSendInvoiceEmailUrl(invoiceUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import all invoices from the connected Stripe account.
 */
export type stripeInvoicesSyncInvoicesFromStripeResponse200 = {
  data: ImportResult
  status: 200
}

export type stripeInvoicesSyncInvoicesFromStripeResponse401 = {
  data: void
  status: 401
}
    
export type stripeInvoicesSyncInvoicesFromStripeResponseSuccess = (stripeInvoicesSyncInvoicesFromStripeResponse200) & {
  headers: Headers;
};
export type stripeInvoicesSyncInvoicesFromStripeResponseError = (stripeInvoicesSyncInvoicesFromStripeResponse401) & {
  headers: Headers;
};

export type stripeInvoicesSyncInvoicesFromStripeResponse = (stripeInvoicesSyncInvoicesFromStripeResponseSuccess | stripeInvoicesSyncInvoicesFromStripeResponseError)

export const getStripeInvoicesSyncInvoicesFromStripeUrl = () => {


  

  return `/api/v1/billing/stripe/invoices/sync`
}

export const stripeInvoicesSyncInvoicesFromStripe = async ( options?: RequestInit): Promise<stripeInvoicesSyncInvoicesFromStripeResponse> => {
  
  return customFetch<stripeInvoicesSyncInvoicesFromStripeResponse>(getStripeInvoicesSyncInvoicesFromStripeUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Retrieve all subscriptions.
 */
export type stripeSubscriptionsGetAllResponse200 = {
  data: StripeSubscriptionsGetAll200
  status: 200
}

export type stripeSubscriptionsGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripeSubscriptionsGetAllResponseSuccess = (stripeSubscriptionsGetAllResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsGetAllResponseError = (stripeSubscriptionsGetAllResponse401) & {
  headers: Headers;
};

export type stripeSubscriptionsGetAllResponse = (stripeSubscriptionsGetAllResponseSuccess | stripeSubscriptionsGetAllResponseError)

export const getStripeSubscriptionsGetAllUrl = (params?: StripeSubscriptionsGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/subscriptions?${stringifiedParams}` : `/api/v1/billing/stripe/subscriptions`
}

export const stripeSubscriptionsGetAll = async (params?: StripeSubscriptionsGetAllParams, options?: RequestInit): Promise<stripeSubscriptionsGetAllResponse> => {
  
  return customFetch<stripeSubscriptionsGetAllResponse>(getStripeSubscriptionsGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/subscriptions/firsttimesubscription instead.
            
The subscription is created for an account, and also in the connected Stripe account.
Identify each item's StripePrice by Uid or StripeId. A discount can name a
StripePromotionCode, or a StripeCoupon, in which case the first promotion code of
that coupon that the account can redeem is used.
 * @summary Add a new subscription.
 */
export type stripeSubscriptionsCreateResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsCreateResponse401 = {
  data: void
  status: 401
}
    
export type stripeSubscriptionsCreateResponseSuccess = (stripeSubscriptionsCreateResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsCreateResponseError = (stripeSubscriptionsCreateResponse401) & {
  headers: Headers;
};

export type stripeSubscriptionsCreateResponse = (stripeSubscriptionsCreateResponseSuccess | stripeSubscriptionsCreateResponseError)

export const getStripeSubscriptionsCreateUrl = () => {


  

  return `/api/v1/billing/stripe/subscriptions`
}

export const stripeSubscriptionsCreate = async (stripeSubscriptionsCreateBody: NonReadonly<StripeSubscriptionsCreateBody>, options?: RequestInit): Promise<stripeSubscriptionsCreateResponse> => {
  
  return customFetch<stripeSubscriptionsCreateResponse>(getStripeSubscriptionsCreateUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeSubscriptionsCreateBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
By default the subscription ends at the end of the current billing period. Pass
cancelImmediately=true in the query string to end it now.
 * @summary Cancel a subscription.
 */
export type stripeSubscriptionsCancelResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsCancelResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsCancelResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsCancelResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsCancelResponseSuccess = (stripeSubscriptionsCancelResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsCancelResponseError = (stripeSubscriptionsCancelResponse400 | stripeSubscriptionsCancelResponse401 | stripeSubscriptionsCancelResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsCancelResponse = (stripeSubscriptionsCancelResponseSuccess | stripeSubscriptionsCancelResponseError)

export const getStripeSubscriptionsCancelUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/cancel`
}

export const stripeSubscriptionsCancel = async (subscriptionUid: string | null, options?: RequestInit): Promise<stripeSubscriptionsCancelResponse> => {
  
  return customFetch<stripeSubscriptionsCancelResponse>(getStripeSubscriptionsCancelUrl(subscriptionUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
Behavior is one of Stripe's pause_collection behaviors: keep_as_draft,
mark_uncollectible or void. ResumesAt is optional; without it, collection stays paused
until resumed.
 * @summary Pause payment collection on a subscription.
 */
export type stripeSubscriptionsPauseCollectionResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsPauseCollectionResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsPauseCollectionResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsPauseCollectionResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsPauseCollectionResponseSuccess = (stripeSubscriptionsPauseCollectionResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsPauseCollectionResponseError = (stripeSubscriptionsPauseCollectionResponse400 | stripeSubscriptionsPauseCollectionResponse401 | stripeSubscriptionsPauseCollectionResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsPauseCollectionResponse = (stripeSubscriptionsPauseCollectionResponseSuccess | stripeSubscriptionsPauseCollectionResponseError)

export const getStripeSubscriptionsPauseCollectionUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/pause`
}

export const stripeSubscriptionsPauseCollection = async (subscriptionUid: string | null,
    stripeSubscriptionsPauseCollectionBody: StripeSubscriptionsPauseCollectionBody, options?: RequestInit): Promise<stripeSubscriptionsPauseCollectionResponse> => {
  
  return customFetch<stripeSubscriptionsPauseCollectionResponse>(getStripeSubscriptionsPauseCollectionUrl(subscriptionUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeSubscriptionsPauseCollectionBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/subscriptions/{subscriptionUid}/changesubscription instead.
            
Use this, for example, to move a subscription to another price. Identify each item's
StripePrice by Uid or StripeId. A user token can only change a subscription on its own
account, and only as the account's primary contact.
 * @summary Change the items of a subscription.
 */
export type stripeSubscriptionsChangeResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsChangeResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsChangeResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsChangeResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsChangeResponseSuccess = (stripeSubscriptionsChangeResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsChangeResponseError = (stripeSubscriptionsChangeResponse400 | stripeSubscriptionsChangeResponse401 | stripeSubscriptionsChangeResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsChangeResponse = (stripeSubscriptionsChangeResponseSuccess | stripeSubscriptionsChangeResponseError)

export const getStripeSubscriptionsChangeUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/change`
}

export const stripeSubscriptionsChange = async (subscriptionUid: string | null,
    stripeSubscriptionsChangeBody: NonReadonly<StripeSubscriptionsChangeBody>, options?: RequestInit): Promise<stripeSubscriptionsChangeResponse> => {
  
  return customFetch<stripeSubscriptionsChangeResponse>(getStripeSubscriptionsChangeUrl(subscriptionUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeSubscriptionsChangeBody,)
  }
);}


/**
 * Returns the invoice that the change would create, without making the change. The
request body is the same as for the change. Pass asOf in the query string to preview
the change at a later date (default: now). A user token can only preview a change on
its own account, and only as the account's primary contact.
 * @summary Preview a subscription change.
 */
export type stripeSubscriptionsPreviewChangeResponse200 = {
  data: StripeInvoice
  status: 200
}

export type stripeSubscriptionsPreviewChangeResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsPreviewChangeResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsPreviewChangeResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsPreviewChangeResponseSuccess = (stripeSubscriptionsPreviewChangeResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsPreviewChangeResponseError = (stripeSubscriptionsPreviewChangeResponse400 | stripeSubscriptionsPreviewChangeResponse401 | stripeSubscriptionsPreviewChangeResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsPreviewChangeResponse = (stripeSubscriptionsPreviewChangeResponseSuccess | stripeSubscriptionsPreviewChangeResponseError)

export const getStripeSubscriptionsPreviewChangeUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/change-preview`
}

export const stripeSubscriptionsPreviewChange = async (subscriptionUid: string | null,
    stripeSubscriptionsPreviewChangeBody: NonReadonly<StripeSubscriptionsPreviewChangeBody>, options?: RequestInit): Promise<stripeSubscriptionsPreviewChangeResponse> => {
  
  return customFetch<stripeSubscriptionsPreviewChangeResponse>(getStripeSubscriptionsPreviewChangeUrl(subscriptionUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeSubscriptionsPreviewChangeBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
This sets the subscription's trial end to ToDate, without proration.
 * @summary Extend the date of a subscription's next invoice.
 */
export type stripeSubscriptionsExtendTrialResponse200 = {
  data: Blob
  status: 200
}

export type stripeSubscriptionsExtendTrialResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsExtendTrialResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsExtendTrialResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsExtendTrialResponseSuccess = (stripeSubscriptionsExtendTrialResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsExtendTrialResponseError = (stripeSubscriptionsExtendTrialResponse400 | stripeSubscriptionsExtendTrialResponse401 | stripeSubscriptionsExtendTrialResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsExtendTrialResponse = (stripeSubscriptionsExtendTrialResponseSuccess | stripeSubscriptionsExtendTrialResponseError)

export const getStripeSubscriptionsExtendTrialUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/extend`
}

export const stripeSubscriptionsExtendTrial = async (subscriptionUid: string | null,
    stripeSubscriptionsExtendTrialBody: StripeSubscriptionsExtendTrialBody, options?: RequestInit): Promise<stripeSubscriptionsExtendTrialResponse> => {
  
  return customFetch<stripeSubscriptionsExtendTrialResponse>(getStripeSubscriptionsExtendTrialUrl(subscriptionUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeSubscriptionsExtendTrialBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
The scheduled changes no longer happen, and the subscription keeps its current items.
Nothing happens when there is no active schedule.
 * @summary Release a subscription's active schedule.
 */
export type stripeSubscriptionsReleaseScheduleResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsReleaseScheduleResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsReleaseScheduleResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsReleaseScheduleResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsReleaseScheduleResponseSuccess = (stripeSubscriptionsReleaseScheduleResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsReleaseScheduleResponseError = (stripeSubscriptionsReleaseScheduleResponse400 | stripeSubscriptionsReleaseScheduleResponse401 | stripeSubscriptionsReleaseScheduleResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsReleaseScheduleResponse = (stripeSubscriptionsReleaseScheduleResponseSuccess | stripeSubscriptionsReleaseScheduleResponseError)

export const getStripeSubscriptionsReleaseScheduleUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/release-schedule`
}

export const stripeSubscriptionsReleaseSchedule = async (subscriptionUid: string | null, options?: RequestInit): Promise<stripeSubscriptionsReleaseScheduleResponse> => {
  
  return customFetch<stripeSubscriptionsReleaseScheduleResponse>(getStripeSubscriptionsReleaseScheduleUrl(subscriptionUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Resume payment collection on a paused subscription.
 */
export type stripeSubscriptionsResumeCollectionResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsResumeCollectionResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsResumeCollectionResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsResumeCollectionResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsResumeCollectionResponseSuccess = (stripeSubscriptionsResumeCollectionResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsResumeCollectionResponseError = (stripeSubscriptionsResumeCollectionResponse400 | stripeSubscriptionsResumeCollectionResponse401 | stripeSubscriptionsResumeCollectionResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsResumeCollectionResponse = (stripeSubscriptionsResumeCollectionResponseSuccess | stripeSubscriptionsResumeCollectionResponseError)

export const getStripeSubscriptionsResumeCollectionUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/resume`
}

export const stripeSubscriptionsResumeCollection = async (subscriptionUid: string | null, options?: RequestInit): Promise<stripeSubscriptionsResumeCollectionResponse> => {
  
  return customFetch<stripeSubscriptionsResumeCollectionResponse>(getStripeSubscriptionsResumeCollectionUrl(subscriptionUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
The trial ends now, so that the subscription starts and is invoiced.
 * @summary Start a trialing subscription.
 */
export type stripeSubscriptionsStartResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsStartResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsStartResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsStartResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsStartResponseSuccess = (stripeSubscriptionsStartResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsStartResponseError = (stripeSubscriptionsStartResponse400 | stripeSubscriptionsStartResponse401 | stripeSubscriptionsStartResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsStartResponse = (stripeSubscriptionsStartResponseSuccess | stripeSubscriptionsStartResponseError)

export const getStripeSubscriptionsStartUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/start`
}

export const stripeSubscriptionsStart = async (subscriptionUid: string | null, options?: RequestInit): Promise<stripeSubscriptionsStartResponse> => {
  
  return customFetch<stripeSubscriptionsStartResponse>(getStripeSubscriptionsStartUrl(subscriptionUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
Pass productUid in the query string to import only the subscriptions to that
product's prices. The response is an import result wrapped in a Count property.
 * @summary Import subscriptions from the connected Stripe account.
 */
export type stripeSubscriptionsSyncSubscriptionsFromStripeResponse200 = {
  data: Blob
  status: 200
}

export type stripeSubscriptionsSyncSubscriptionsFromStripeResponse401 = {
  data: void
  status: 401
}
    
export type stripeSubscriptionsSyncSubscriptionsFromStripeResponseSuccess = (stripeSubscriptionsSyncSubscriptionsFromStripeResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsSyncSubscriptionsFromStripeResponseError = (stripeSubscriptionsSyncSubscriptionsFromStripeResponse401) & {
  headers: Headers;
};

export type stripeSubscriptionsSyncSubscriptionsFromStripeResponse = (stripeSubscriptionsSyncSubscriptionsFromStripeResponseSuccess | stripeSubscriptionsSyncSubscriptionsFromStripeResponseError)

export const getStripeSubscriptionsSyncSubscriptionsFromStripeUrl = () => {


  

  return `/api/v1/billing/stripe/subscriptions/sync`
}

export const stripeSubscriptionsSyncSubscriptionsFromStripe = async ( options?: RequestInit): Promise<stripeSubscriptionsSyncSubscriptionsFromStripeResponse> => {
  
  return customFetch<stripeSubscriptionsSyncSubscriptionsFromStripeResponse>(getStripeSubscriptionsSyncSubscriptionsFromStripeUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
            
A subscription set to end at the end of its billing period renews instead.
 * @summary Remove a subscription's pending cancellation.
 */
export type stripeSubscriptionsUncancelResponse200 = {
  data: StripeSubscription
  status: 200
}

export type stripeSubscriptionsUncancelResponse400 = {
  data: void
  status: 400
}

export type stripeSubscriptionsUncancelResponse401 = {
  data: void
  status: 401
}

export type stripeSubscriptionsUncancelResponse404 = {
  data: void
  status: 404
}
    
export type stripeSubscriptionsUncancelResponseSuccess = (stripeSubscriptionsUncancelResponse200) & {
  headers: Headers;
};
export type stripeSubscriptionsUncancelResponseError = (stripeSubscriptionsUncancelResponse400 | stripeSubscriptionsUncancelResponse401 | stripeSubscriptionsUncancelResponse404) & {
  headers: Headers;
};

export type stripeSubscriptionsUncancelResponse = (stripeSubscriptionsUncancelResponseSuccess | stripeSubscriptionsUncancelResponseError)

export const getStripeSubscriptionsUncancelUrl = (subscriptionUid: string | null,) => {


  

  return `/api/v1/billing/stripe/subscriptions/${subscriptionUid}/uncancel`
}

export const stripeSubscriptionsUncancel = async (subscriptionUid: string | null, options?: RequestInit): Promise<stripeSubscriptionsUncancelResponse> => {
  
  return customFetch<stripeSubscriptionsUncancelResponse>(getStripeSubscriptionsUncancelUrl(subscriptionUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Retrieve all products.
 */
export type stripeProductsGetAllResponse200 = {
  data: StripeProductsGetAll200
  status: 200
}

export type stripeProductsGetAllResponse401 = {
  data: void
  status: 401
}
    
export type stripeProductsGetAllResponseSuccess = (stripeProductsGetAllResponse200) & {
  headers: Headers;
};
export type stripeProductsGetAllResponseError = (stripeProductsGetAllResponse401) & {
  headers: Headers;
};

export type stripeProductsGetAllResponse = (stripeProductsGetAllResponseSuccess | stripeProductsGetAllResponseError)

export const getStripeProductsGetAllUrl = (params?: StripeProductsGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/billing/stripe/products?${stringifiedParams}` : `/api/v1/billing/stripe/products`
}

export const stripeProductsGetAll = async (params?: StripeProductsGetAllParams, options?: RequestInit): Promise<stripeProductsGetAllResponse> => {
  
  return customFetch<stripeProductsGetAllResponse>(getStripeProductsGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use POST /billing/plans or POST /billing/addons instead.
            
The product is also created in the connected Stripe account.
 * @summary Add a new product.
 */
export type stripeProductsPostResponse200 = {
  data: StripeProduct
  status: 200
}

export type stripeProductsPostResponse401 = {
  data: void
  status: 401
}
    
export type stripeProductsPostResponseSuccess = (stripeProductsPostResponse200) & {
  headers: Headers;
};
export type stripeProductsPostResponseError = (stripeProductsPostResponse401) & {
  headers: Headers;
};

export type stripeProductsPostResponse = (stripeProductsPostResponseSuccess | stripeProductsPostResponseError)

export const getStripeProductsPostUrl = () => {


  

  return `/api/v1/billing/stripe/products`
}

export const stripeProductsPost = async (stripeProductsPostBody: NonReadonly<StripeProductsPostBody>, options?: RequestInit): Promise<stripeProductsPostResponse> => {
  
  return customFetch<stripeProductsPostResponse>(getStripeProductsPostUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeProductsPostBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import all products and their prices from the connected Stripe account.
 */
export type stripeProductsSyncProductsFromStripeResponse200 = {
  data: ImportResult
  status: 200
}

export type stripeProductsSyncProductsFromStripeResponse401 = {
  data: void
  status: 401
}
    
export type stripeProductsSyncProductsFromStripeResponseSuccess = (stripeProductsSyncProductsFromStripeResponse200) & {
  headers: Headers;
};
export type stripeProductsSyncProductsFromStripeResponseError = (stripeProductsSyncProductsFromStripeResponse401) & {
  headers: Headers;
};

export type stripeProductsSyncProductsFromStripeResponse = (stripeProductsSyncProductsFromStripeResponseSuccess | stripeProductsSyncProductsFromStripeResponseError)

export const getStripeProductsSyncProductsFromStripeUrl = () => {


  

  return `/api/v1/billing/stripe/products/sync`
}

export const stripeProductsSyncProductsFromStripe = async ( options?: RequestInit): Promise<stripeProductsSyncProductsFromStripeResponse> => {
  
  return customFetch<stripeProductsSyncProductsFromStripeResponse>(getStripeProductsSyncProductsFromStripeUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Retrieve a product.
 */
export type stripeProductsGetResponse200 = {
  data: StripeProduct
  status: 200
}

export type stripeProductsGetResponse401 = {
  data: void
  status: 401
}
    
export type stripeProductsGetResponseSuccess = (stripeProductsGetResponse200) & {
  headers: Headers;
};
export type stripeProductsGetResponseError = (stripeProductsGetResponse401) & {
  headers: Headers;
};

export type stripeProductsGetResponse = (stripeProductsGetResponseSuccess | stripeProductsGetResponseError)

export const getStripeProductsGetUrl = (uid: string | null,) => {


  

  return `/api/v1/billing/stripe/products/${uid}`
}

export const stripeProductsGet = async (uid: string | null, options?: RequestInit): Promise<stripeProductsGetResponse> => {
  
  return customFetch<stripeProductsGetResponse>(getStripeProductsGetUrl(uid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected;
use PUT /billing/plans/{planUid} or PUT /billing/addons/{addOnUid} instead.
            
The changes are also sent to the connected Stripe account.
 * @summary Update a product.
 */
export type stripeProductsPutResponse200 = {
  data: StripeProduct
  status: 200
}

export type stripeProductsPutResponse401 = {
  data: void
  status: 401
}
    
export type stripeProductsPutResponseSuccess = (stripeProductsPutResponse200) & {
  headers: Headers;
};
export type stripeProductsPutResponseError = (stripeProductsPutResponse401) & {
  headers: Headers;
};

export type stripeProductsPutResponse = (stripeProductsPutResponseSuccess | stripeProductsPutResponseError)

export const getStripeProductsPutUrl = (uid: string | null,) => {


  

  return `/api/v1/billing/stripe/products/${uid}`
}

export const stripeProductsPut = async (uid: string | null,
    stripeProductsPutBody: NonReadonly<StripeProductsPutBody>, options?: RequestInit): Promise<stripeProductsPutResponse> => {
  
  return customFetch<stripeProductsPutResponse>(getStripeProductsPutUrl(uid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      stripeProductsPutBody,)
  }
);}


/**
 * Applies to Stripe Billing (v3) only. With Outseta billing (v2) the request is rejected.
 * @summary Import a product and its prices from the connected Stripe account.
 */
export type stripeProductsSyncProductFromStripeResponse200 = {
  data: Blob
  status: 200
}

export type stripeProductsSyncProductFromStripeResponse401 = {
  data: void
  status: 401
}
    
export type stripeProductsSyncProductFromStripeResponseSuccess = (stripeProductsSyncProductFromStripeResponse200) & {
  headers: Headers;
};
export type stripeProductsSyncProductFromStripeResponseError = (stripeProductsSyncProductFromStripeResponse401) & {
  headers: Headers;
};

export type stripeProductsSyncProductFromStripeResponse = (stripeProductsSyncProductFromStripeResponseSuccess | stripeProductsSyncProductFromStripeResponseError)

export const getStripeProductsSyncProductFromStripeUrl = (uid: string | null,) => {


  

  return `/api/v1/billing/stripe/products/${uid}/sync`
}

export const stripeProductsSyncProductFromStripe = async (uid: string | null, options?: RequestInit): Promise<stripeProductsSyncProductFromStripeResponse> => {
  
  return customFetch<stripeProductsSyncProductFromStripeResponse>(getStripeProductsSyncProductFromStripeUrl(uid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


