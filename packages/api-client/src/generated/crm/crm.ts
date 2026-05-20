// @ts-nocheck
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
} from '.././models';

import { customFetch } from '../../client';

/**
 * @summary Retrieves all the deals associated with your account.
 */
export type dealGetAllDealsResponse200 = {
  data: Deal[]
  status: 200
}

export type dealGetAllDealsResponse400 = {
  data: void
  status: 400
}

export type dealGetAllDealsResponse401 = {
  data: void
  status: 401
}
    
export type dealGetAllDealsResponseSuccess = (dealGetAllDealsResponse200) & {
  headers: Headers;
};
export type dealGetAllDealsResponseError = (dealGetAllDealsResponse400 | dealGetAllDealsResponse401) & {
  headers: Headers;
};

export type dealGetAllDealsResponse = (dealGetAllDealsResponseSuccess | dealGetAllDealsResponseError)

export const getDealGetAllDealsUrl = (params?: DealGetAllDealsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/crm/deals?${stringifiedParams}` : `/api/v1/crm/deals`
}

export const dealGetAllDeals = async (params?: DealGetAllDealsParams, options?: RequestInit): Promise<dealGetAllDealsResponse> => {
  
  return customFetch<dealGetAllDealsResponse>(getDealGetAllDealsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Add a new deal.
 */
export type dealAddDealResponse200 = {
  data: Deal
  status: 200
}

export type dealAddDealResponse401 = {
  data: void
  status: 401
}
    
export type dealAddDealResponseSuccess = (dealAddDealResponse200) & {
  headers: Headers;
};
export type dealAddDealResponseError = (dealAddDealResponse401) & {
  headers: Headers;
};

export type dealAddDealResponse = (dealAddDealResponseSuccess | dealAddDealResponseError)

export const getDealAddDealUrl = () => {


  

  return `/api/v1/crm/deals`
}

export const dealAddDeal = async (dealAddDealBody: DealAddDealBody, options?: RequestInit): Promise<dealAddDealResponse> => {
  
  return customFetch<dealAddDealResponse>(getDealAddDealUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      dealAddDealBody,)
  }
);}


/**
 * @summary Retrieves one deal associated with your account.
 */
export type dealGetDealResponse200 = {
  data: Deal
  status: 200
}

export type dealGetDealResponse400 = {
  data: void
  status: 400
}

export type dealGetDealResponse401 = {
  data: void
  status: 401
}

export type dealGetDealResponse404 = {
  data: void
  status: 404
}
    
export type dealGetDealResponseSuccess = (dealGetDealResponse200) & {
  headers: Headers;
};
export type dealGetDealResponseError = (dealGetDealResponse400 | dealGetDealResponse401 | dealGetDealResponse404) & {
  headers: Headers;
};

export type dealGetDealResponse = (dealGetDealResponseSuccess | dealGetDealResponseError)

export const getDealGetDealUrl = (dealUid: string | null,) => {


  

  return `/api/v1/crm/deals/${dealUid}`
}

export const dealGetDeal = async (dealUid: string | null, options?: RequestInit): Promise<dealGetDealResponse> => {
  
  return customFetch<dealGetDealResponse>(getDealGetDealUrl(dealUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Update a deal.
 */
export type dealUpdateDealResponse200 = {
  data: Deal
  status: 200
}

export type dealUpdateDealResponse400 = {
  data: void
  status: 400
}

export type dealUpdateDealResponse401 = {
  data: void
  status: 401
}

export type dealUpdateDealResponse404 = {
  data: void
  status: 404
}
    
export type dealUpdateDealResponseSuccess = (dealUpdateDealResponse200) & {
  headers: Headers;
};
export type dealUpdateDealResponseError = (dealUpdateDealResponse400 | dealUpdateDealResponse401 | dealUpdateDealResponse404) & {
  headers: Headers;
};

export type dealUpdateDealResponse = (dealUpdateDealResponseSuccess | dealUpdateDealResponseError)

export const getDealUpdateDealUrl = (dealUid: string | null,) => {


  

  return `/api/v1/crm/deals/${dealUid}`
}

export const dealUpdateDeal = async (dealUid: string | null,
    dealUpdateDealBody: DealUpdateDealBody, options?: RequestInit): Promise<dealUpdateDealResponse> => {
  
  return customFetch<dealUpdateDealResponse>(getDealUpdateDealUrl(dealUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      dealUpdateDealBody,)
  }
);}


/**
 * @summary Delete a deal.
 */
export type dealDeleteDealResponse200 = {
  data: Blob
  status: 200
}

export type dealDeleteDealResponse400 = {
  data: void
  status: 400
}

export type dealDeleteDealResponse401 = {
  data: void
  status: 401
}

export type dealDeleteDealResponse404 = {
  data: void
  status: 404
}
    
export type dealDeleteDealResponseSuccess = (dealDeleteDealResponse200) & {
  headers: Headers;
};
export type dealDeleteDealResponseError = (dealDeleteDealResponse400 | dealDeleteDealResponse401 | dealDeleteDealResponse404) & {
  headers: Headers;
};

export type dealDeleteDealResponse = (dealDeleteDealResponseSuccess | dealDeleteDealResponseError)

export const getDealDeleteDealUrl = (dealUid: string | null,) => {


  

  return `/api/v1/crm/deals/${dealUid}`
}

export const dealDeleteDeal = async (dealUid: string | null, options?: RequestInit): Promise<dealDeleteDealResponse> => {
  
  return customFetch<dealDeleteDealResponse>(getDealDeleteDealUrl(dealUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * This is the same endpoint the sign up embed uses to create accounts. At a minimum you
must pass one Primary Contact with an Email address and one Subscription record with a
reference to a Plan. Other fields (e.g. Account Name, Billing Address, Payment
Information, etc.) can be passed as desired. A confirmation email will be sent to the
user unless you've specifically toggled this option off on the AUTH > SIGN UP AND LOGIN
page.
 * @summary Register a new account.
 */
export type registrationRegisterAccountResponse200 = {
  data: Account
  status: 200
}
    
export type registrationRegisterAccountResponseSuccess = (registrationRegisterAccountResponse200) & {
  headers: Headers;
};
;

export type registrationRegisterAccountResponse = (registrationRegisterAccountResponseSuccess)

export const getRegistrationRegisterAccountUrl = () => {


  

  return `/api/v1/crm/registrations`
}

export const registrationRegisterAccount = async ( options?: RequestInit): Promise<registrationRegisterAccountResponse> => {
  
  return customFetch<registrationRegisterAccountResponse>(getRegistrationRegisterAccountUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Returns all accounts, optionally filtered by segment or search query.
 */
export type accountGetAllAccountsResponse200 = {
  data: Account[]
  status: 200
}

export type accountGetAllAccountsResponse400 = {
  data: void
  status: 400
}

export type accountGetAllAccountsResponse401 = {
  data: void
  status: 401
}
    
export type accountGetAllAccountsResponseSuccess = (accountGetAllAccountsResponse200) & {
  headers: Headers;
};
export type accountGetAllAccountsResponseError = (accountGetAllAccountsResponse400 | accountGetAllAccountsResponse401) & {
  headers: Headers;
};

export type accountGetAllAccountsResponse = (accountGetAllAccountsResponseSuccess | accountGetAllAccountsResponseError)

export const getAccountGetAllAccountsUrl = (params?: AccountGetAllAccountsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/crm/accounts?${stringifiedParams}` : `/api/v1/crm/accounts`
}

export const accountGetAllAccounts = async (params?: AccountGetAllAccountsParams, options?: RequestInit): Promise<accountGetAllAccountsResponse> => {
  
  return customFetch<accountGetAllAccountsResponse>(getAccountGetAllAccountsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * To add an account with an existing person, the Account payload include something like this:
{ ... other Account properties ..., "PersonAccount": [ { "Person": { "Uid": [personUid] }, "IsPrimary": "true" } ] }
 * @summary Add a new account.
 */
export type accountAddAccountResponse200 = {
  data: Blob
  status: 200
}

export type accountAddAccountResponse401 = {
  data: void
  status: 401
}
    
export type accountAddAccountResponseSuccess = (accountAddAccountResponse200) & {
  headers: Headers;
};
export type accountAddAccountResponseError = (accountAddAccountResponse401) & {
  headers: Headers;
};

export type accountAddAccountResponse = (accountAddAccountResponseSuccess | accountAddAccountResponseError)

export const getAccountAddAccountUrl = (params?: AccountAddAccountParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/crm/accounts?${stringifiedParams}` : `/api/v1/crm/accounts`
}

export const accountAddAccount = async (accountAddAccountBody: AccountAddAccountBody,
    params?: AccountAddAccountParams, options?: RequestInit): Promise<accountAddAccountResponse> => {
  
  return customFetch<accountAddAccountResponse>(getAccountAddAccountUrl(params),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      accountAddAccountBody,)
  }
);}


/**
 * @summary Returns a single account by UID.
 */
export type accountGetAccountResponse200 = {
  data: Account
  status: 200
}

export type accountGetAccountResponse400 = {
  data: void
  status: 400
}

export type accountGetAccountResponse401 = {
  data: void
  status: 401
}

export type accountGetAccountResponse404 = {
  data: void
  status: 404
}
    
export type accountGetAccountResponseSuccess = (accountGetAccountResponse200) & {
  headers: Headers;
};
export type accountGetAccountResponseError = (accountGetAccountResponse400 | accountGetAccountResponse401 | accountGetAccountResponse404) & {
  headers: Headers;
};

export type accountGetAccountResponse = (accountGetAccountResponseSuccess | accountGetAccountResponseError)

export const getAccountGetAccountUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}`
}

export const accountGetAccount = async (accountUid: string | null, options?: RequestInit): Promise<accountGetAccountResponse> => {
  
  return customFetch<accountGetAccountResponse>(getAccountGetAccountUrl(accountUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Delete an account record.
 */
export type accountDeleteAccountResponse200 = {
  data: Blob
  status: 200
}

export type accountDeleteAccountResponse400 = {
  data: void
  status: 400
}

export type accountDeleteAccountResponse401 = {
  data: void
  status: 401
}

export type accountDeleteAccountResponse404 = {
  data: void
  status: 404
}
    
export type accountDeleteAccountResponseSuccess = (accountDeleteAccountResponse200) & {
  headers: Headers;
};
export type accountDeleteAccountResponseError = (accountDeleteAccountResponse400 | accountDeleteAccountResponse401 | accountDeleteAccountResponse404) & {
  headers: Headers;
};

export type accountDeleteAccountResponse = (accountDeleteAccountResponseSuccess | accountDeleteAccountResponseError)

export const getAccountDeleteAccountUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}`
}

export const accountDeleteAccount = async (accountUid: string | null, options?: RequestInit): Promise<accountDeleteAccountResponse> => {
  
  return customFetch<accountDeleteAccountResponse>(getAccountDeleteAccountUrl(accountUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * You can update one or multiple properties on the object. Any property that you
include in the json schema will be updated. To update custom properties just
include them in the same way that they are included when you do a get on the object.
 * @summary Update account information.
 */
export type accountUpdateAccountResponse200 = {
  data: Account
  status: 200
}

export type accountUpdateAccountResponse400 = {
  data: void
  status: 400
}

export type accountUpdateAccountResponse401 = {
  data: void
  status: 401
}

export type accountUpdateAccountResponse404 = {
  data: void
  status: 404
}
    
export type accountUpdateAccountResponseSuccess = (accountUpdateAccountResponse200) & {
  headers: Headers;
};
export type accountUpdateAccountResponseError = (accountUpdateAccountResponse400 | accountUpdateAccountResponse401 | accountUpdateAccountResponse404) & {
  headers: Headers;
};

export type accountUpdateAccountResponse = (accountUpdateAccountResponseSuccess | accountUpdateAccountResponseError)

export const getAccountUpdateAccountUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}`
}

export const accountUpdateAccount = async (accountUid: string | null,
    accountUpdateAccountBody: AccountUpdateAccountBody, options?: RequestInit): Promise<accountUpdateAccountResponse> => {
  
  return customFetch<accountUpdateAccountResponse>(getAccountUpdateAccountUrl(accountUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      accountUpdateAccountBody,)
  }
);}


/**
 * @summary Add a person to an existing account. Set sendWelcomeEmail=true to send a welcome email to the person added.
 */
export type accountAddPersonToAccountResponse200 = {
  data: PersonAccount
  status: 200
}

export type accountAddPersonToAccountResponse400 = {
  data: void
  status: 400
}

export type accountAddPersonToAccountResponse401 = {
  data: void
  status: 401
}

export type accountAddPersonToAccountResponse404 = {
  data: void
  status: 404
}
    
export type accountAddPersonToAccountResponseSuccess = (accountAddPersonToAccountResponse200) & {
  headers: Headers;
};
export type accountAddPersonToAccountResponseError = (accountAddPersonToAccountResponse400 | accountAddPersonToAccountResponse401 | accountAddPersonToAccountResponse404) & {
  headers: Headers;
};

export type accountAddPersonToAccountResponse = (accountAddPersonToAccountResponseSuccess | accountAddPersonToAccountResponseError)

export const getAccountAddPersonToAccountUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}/memberships`
}

export const accountAddPersonToAccount = async (accountUid: string | null,
    accountAddPersonToAccountBody: AccountAddPersonToAccountBody, options?: RequestInit): Promise<accountAddPersonToAccountResponse> => {
  
  return customFetch<accountAddPersonToAccountResponse>(getAccountAddPersonToAccountUrl(accountUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      accountAddPersonToAccountBody,)
  }
);}


/**
 * @summary Update an account membership. This is the method by which you can change the primary contact of an account.
 */
export type accountUpdateMembershipResponse200 = {
  data: Blob
  status: 200
}

export type accountUpdateMembershipResponse400 = {
  data: void
  status: 400
}

export type accountUpdateMembershipResponse401 = {
  data: void
  status: 401
}

export type accountUpdateMembershipResponse404 = {
  data: void
  status: 404
}
    
export type accountUpdateMembershipResponseSuccess = (accountUpdateMembershipResponse200) & {
  headers: Headers;
};
export type accountUpdateMembershipResponseError = (accountUpdateMembershipResponse400 | accountUpdateMembershipResponse401 | accountUpdateMembershipResponse404) & {
  headers: Headers;
};

export type accountUpdateMembershipResponse = (accountUpdateMembershipResponseSuccess | accountUpdateMembershipResponseError)

export const getAccountUpdateMembershipUrl = (accountUid: string | null,
    membershipUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}/memberships/${membershipUid}`
}

export const accountUpdateMembership = async (accountUid: string | null,
    membershipUid: string | null,
    accountUpdateMembershipBody: AccountUpdateMembershipBody, options?: RequestInit): Promise<accountUpdateMembershipResponse> => {
  
  return customFetch<accountUpdateMembershipResponse>(getAccountUpdateMembershipUrl(accountUid,membershipUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      accountUpdateMembershipBody,)
  }
);}


/**
 * @summary Remove a person from an account. Note that you cannot remove the primary contact of an account.
 */
export type accountDeleteMembershipResponse200 = {
  data: Blob
  status: 200
}

export type accountDeleteMembershipResponse400 = {
  data: void
  status: 400
}

export type accountDeleteMembershipResponse401 = {
  data: void
  status: 401
}

export type accountDeleteMembershipResponse404 = {
  data: void
  status: 404
}
    
export type accountDeleteMembershipResponseSuccess = (accountDeleteMembershipResponse200) & {
  headers: Headers;
};
export type accountDeleteMembershipResponseError = (accountDeleteMembershipResponse400 | accountDeleteMembershipResponse401 | accountDeleteMembershipResponse404) & {
  headers: Headers;
};

export type accountDeleteMembershipResponse = (accountDeleteMembershipResponseSuccess | accountDeleteMembershipResponseError)

export const getAccountDeleteMembershipUrl = (accountUid: string | null,
    membershipUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}/memberships/${membershipUid}`
}

export const accountDeleteMembership = async (accountUid: string | null,
    membershipUid: string | null, options?: RequestInit): Promise<accountDeleteMembershipResponse> => {
  
  return customFetch<accountDeleteMembershipResponse>(getAccountDeleteMembershipUrl(accountUid,membershipUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * The account needs to be in subscribing stage. The stage will automatically change over to
cancelling. If the account has a subscription attached to it then at the subscription
renewal the subscription will end and the account will be automatically set to expired.
 * @summary Add a cancellation request to an account.
 */
export type accountCancelAccountResponse200 = {
  data: Blob
  status: 200
}

export type accountCancelAccountResponse400 = {
  data: void
  status: 400
}

export type accountCancelAccountResponse401 = {
  data: void
  status: 401
}

export type accountCancelAccountResponse404 = {
  data: void
  status: 404
}
    
export type accountCancelAccountResponseSuccess = (accountCancelAccountResponse200) & {
  headers: Headers;
};
export type accountCancelAccountResponseError = (accountCancelAccountResponse400 | accountCancelAccountResponse401 | accountCancelAccountResponse404) & {
  headers: Headers;
};

export type accountCancelAccountResponse = (accountCancelAccountResponseSuccess | accountCancelAccountResponseError)

export const getAccountCancelAccountUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}/cancel`
}

export const accountCancelAccount = async (accountUid: string | null,
    accountCancelAccountBody: AccountCancelAccountBody, options?: RequestInit): Promise<accountCancelAccountResponse> => {
  
  return customFetch<accountCancelAccountResponse>(getAccountCancelAccountUrl(accountUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      accountCancelAccountBody,)
  }
);}


/**
 * @summary Remove a previous cancellation request from an account.
 */
export type accountRemoveCancellationResponse200 = {
  data: Blob
  status: 200
}

export type accountRemoveCancellationResponse400 = {
  data: void
  status: 400
}

export type accountRemoveCancellationResponse401 = {
  data: void
  status: 401
}

export type accountRemoveCancellationResponse404 = {
  data: void
  status: 404
}
    
export type accountRemoveCancellationResponseSuccess = (accountRemoveCancellationResponse200) & {
  headers: Headers;
};
export type accountRemoveCancellationResponseError = (accountRemoveCancellationResponse400 | accountRemoveCancellationResponse401 | accountRemoveCancellationResponse404) & {
  headers: Headers;
};

export type accountRemoveCancellationResponse = (accountRemoveCancellationResponseSuccess | accountRemoveCancellationResponseError)

export const getAccountRemoveCancellationUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}/remove-cancellation`
}

export const accountRemoveCancellation = async (accountUid: string | null, options?: RequestInit): Promise<accountRemoveCancellationResponse> => {
  
  return customFetch<accountRemoveCancellationResponse>(getAccountRemoveCancellationUrl(accountUid),
  {      
    ...options,
    method: 'PUT'
    
    
  }
);}


/**
 * @summary Extend the date that a trial subscription expires.
 */
export type accountExtendTrialResponse200 = {
  data: Blob
  status: 200
}

export type accountExtendTrialResponse400 = {
  data: void
  status: 400
}

export type accountExtendTrialResponse401 = {
  data: void
  status: 401
}

export type accountExtendTrialResponse404 = {
  data: void
  status: 404
}
    
export type accountExtendTrialResponseSuccess = (accountExtendTrialResponse200) & {
  headers: Headers;
};
export type accountExtendTrialResponseError = (accountExtendTrialResponse400 | accountExtendTrialResponse401 | accountExtendTrialResponse404) & {
  headers: Headers;
};

export type accountExtendTrialResponse = (accountExtendTrialResponseSuccess | accountExtendTrialResponseError)

export const getAccountExtendTrialUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}/extend-trial`
}

export const accountExtendTrial = async (accountUid: string | null,
    accountExtendTrialBody: AccountExtendTrialBody, options?: RequestInit): Promise<accountExtendTrialResponse> => {
  
  return customFetch<accountExtendTrialResponse>(getAccountExtendTrialUrl(accountUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      accountExtendTrialBody,)
  }
);}


/**
 * Pass personUid as a query parameter to send to a specific person, or personUid=* to send
to all people on the account. If no personUid is provided, the email is sent to the
primary contact.
 * @summary Send a confirmation email to people on an account.
 */
export type accountSendConfirmationEmailResponse200 = {
  data: Blob
  status: 200
}

export type accountSendConfirmationEmailResponse400 = {
  data: void
  status: 400
}

export type accountSendConfirmationEmailResponse401 = {
  data: void
  status: 401
}

export type accountSendConfirmationEmailResponse404 = {
  data: void
  status: 404
}
    
export type accountSendConfirmationEmailResponseSuccess = (accountSendConfirmationEmailResponse200) & {
  headers: Headers;
};
export type accountSendConfirmationEmailResponseError = (accountSendConfirmationEmailResponse400 | accountSendConfirmationEmailResponse401 | accountSendConfirmationEmailResponse404) & {
  headers: Headers;
};

export type accountSendConfirmationEmailResponse = (accountSendConfirmationEmailResponseSuccess | accountSendConfirmationEmailResponseError)

export const getAccountSendConfirmationEmailUrl = (accountUid: string | null,) => {


  

  return `/api/v1/crm/accounts/${accountUid}/send-confirmation-email`
}

export const accountSendConfirmationEmail = async (accountUid: string | null, options?: RequestInit): Promise<accountSendConfirmationEmailResponse> => {
  
  return customFetch<accountSendConfirmationEmailResponse>(getAccountSendConfirmationEmailUrl(accountUid),
  {      
    ...options,
    method: 'PUT'
    
    
  }
);}


/**
 * @summary Retrieves all the people associated with your account.
 */
export type personGetAllPeopleResponse200 = {
  data: Person[]
  status: 200
}

export type personGetAllPeopleResponse401 = {
  data: void
  status: 401
}
    
export type personGetAllPeopleResponseSuccess = (personGetAllPeopleResponse200) & {
  headers: Headers;
};
export type personGetAllPeopleResponseError = (personGetAllPeopleResponse401) & {
  headers: Headers;
};

export type personGetAllPeopleResponse = (personGetAllPeopleResponseSuccess | personGetAllPeopleResponseError)

export const getPersonGetAllPeopleUrl = (params?: PersonGetAllPeopleParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/crm/people?${stringifiedParams}` : `/api/v1/crm/people`
}

export const personGetAllPeople = async (params?: PersonGetAllPeopleParams, options?: RequestInit): Promise<personGetAllPeopleResponse> => {
  
  return customFetch<personGetAllPeopleResponse>(getPersonGetAllPeopleUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Add a new person.
 */
export type personAddPersonResponse200 = {
  data: Person
  status: 200
}

export type personAddPersonResponse401 = {
  data: void
  status: 401
}
    
export type personAddPersonResponseSuccess = (personAddPersonResponse200) & {
  headers: Headers;
};
export type personAddPersonResponseError = (personAddPersonResponse401) & {
  headers: Headers;
};

export type personAddPersonResponse = (personAddPersonResponseSuccess | personAddPersonResponseError)

export const getPersonAddPersonUrl = () => {


  

  return `/api/v1/crm/people`
}

export const personAddPerson = async (personAddPersonBody: PersonAddPersonBody, options?: RequestInit): Promise<personAddPersonResponse> => {
  
  return customFetch<personAddPersonResponse>(getPersonAddPersonUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      personAddPersonBody,)
  }
);}


/**
 * @summary Retrieves a person.
 */
export type personGetPersonResponse200 = {
  data: Person
  status: 200
}

export type personGetPersonResponse400 = {
  data: void
  status: 400
}

export type personGetPersonResponse401 = {
  data: void
  status: 401
}

export type personGetPersonResponse404 = {
  data: void
  status: 404
}
    
export type personGetPersonResponseSuccess = (personGetPersonResponse200) & {
  headers: Headers;
};
export type personGetPersonResponseError = (personGetPersonResponse400 | personGetPersonResponse401 | personGetPersonResponse404) & {
  headers: Headers;
};

export type personGetPersonResponse = (personGetPersonResponseSuccess | personGetPersonResponseError)

export const getPersonGetPersonUrl = (personUid: string | null,) => {


  

  return `/api/v1/crm/people/${personUid}`
}

export const personGetPerson = async (personUid: string | null, options?: RequestInit): Promise<personGetPersonResponse> => {
  
  return customFetch<personGetPersonResponse>(getPersonGetPersonUrl(personUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * You can update one or multiple properties on the object. Any property that you
include in the json schema will be updated. To update custom properties just
include them in the same way that they are included when you do a get on the object.
 * @summary Update a person record.
 */
export type personUpdatePersonResponse200 = {
  data: Person
  status: 200
}

export type personUpdatePersonResponse400 = {
  data: void
  status: 400
}

export type personUpdatePersonResponse401 = {
  data: void
  status: 401
}

export type personUpdatePersonResponse404 = {
  data: void
  status: 404
}
    
export type personUpdatePersonResponseSuccess = (personUpdatePersonResponse200) & {
  headers: Headers;
};
export type personUpdatePersonResponseError = (personUpdatePersonResponse400 | personUpdatePersonResponse401 | personUpdatePersonResponse404) & {
  headers: Headers;
};

export type personUpdatePersonResponse = (personUpdatePersonResponseSuccess | personUpdatePersonResponseError)

export const getPersonUpdatePersonUrl = (personUid: string | null,) => {


  

  return `/api/v1/crm/people/${personUid}`
}

export const personUpdatePerson = async (personUid: string | null,
    personUpdatePersonBody: PersonUpdatePersonBody, options?: RequestInit): Promise<personUpdatePersonResponse> => {
  
  return customFetch<personUpdatePersonResponse>(getPersonUpdatePersonUrl(personUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      personUpdatePersonBody,)
  }
);}


/**
 * @summary Delete a person record.
 */
export type personDeletePersonResponse200 = {
  data: Blob
  status: 200
}

export type personDeletePersonResponse400 = {
  data: void
  status: 400
}

export type personDeletePersonResponse401 = {
  data: void
  status: 401
}

export type personDeletePersonResponse404 = {
  data: void
  status: 404
}
    
export type personDeletePersonResponseSuccess = (personDeletePersonResponse200) & {
  headers: Headers;
};
export type personDeletePersonResponseError = (personDeletePersonResponse400 | personDeletePersonResponse401 | personDeletePersonResponse404) & {
  headers: Headers;
};

export type personDeletePersonResponse = (personDeletePersonResponseSuccess | personDeletePersonResponseError)

export const getPersonDeletePersonUrl = (personUid: string | null,) => {


  

  return `/api/v1/crm/people/${personUid}`
}

export const personDeletePerson = async (personUid: string | null, options?: RequestInit): Promise<personDeletePersonResponse> => {
  
  return customFetch<personDeletePersonResponse>(getPersonDeletePersonUrl(personUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * @summary Set a temporary password for a user. The user needs to update the password with the next login.
 */
export type personSetTemporaryPasswordResponse200 = {
  data: Blob
  status: 200
}

export type personSetTemporaryPasswordResponse400 = {
  data: void
  status: 400
}

export type personSetTemporaryPasswordResponse401 = {
  data: void
  status: 401
}

export type personSetTemporaryPasswordResponse404 = {
  data: void
  status: 404
}
    
export type personSetTemporaryPasswordResponseSuccess = (personSetTemporaryPasswordResponse200) & {
  headers: Headers;
};
export type personSetTemporaryPasswordResponseError = (personSetTemporaryPasswordResponse400 | personSetTemporaryPasswordResponse401 | personSetTemporaryPasswordResponse404) & {
  headers: Headers;
};

export type personSetTemporaryPasswordResponse = (personSetTemporaryPasswordResponseSuccess | personSetTemporaryPasswordResponseError)

export const getPersonSetTemporaryPasswordUrl = (personUid: string | null,) => {


  

  return `/api/v1/crm/people/${personUid}/setTemporaryPassword`
}

export const personSetTemporaryPassword = async (personUid: string | null,
    personSetTemporaryPasswordBody: PersonSetTemporaryPasswordBody, options?: RequestInit): Promise<personSetTemporaryPasswordResponse> => {
  
  return customFetch<personSetTemporaryPasswordResponse>(getPersonSetTemporaryPasswordUrl(personUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      personSetTemporaryPasswordBody,)
  }
);}


/**
 * All prior recovery codes are invalidated. Existing TOTP/Email mechanisms are intentionally
left in place — the admin returns the new codes to the user out of band, the user logs in
with one, then re-enrolls their device. Mirrors the temporary-password flow at
SetTemporaryPassword.
 * @summary Regenerate 2FA recovery codes for a user locked out of their authenticator.
 */
export type personRegenerateTwoFactorRecoveryCodesResponse200 = {
  data: Blob
  status: 200
}

export type personRegenerateTwoFactorRecoveryCodesResponse400 = {
  data: void
  status: 400
}

export type personRegenerateTwoFactorRecoveryCodesResponse401 = {
  data: void
  status: 401
}

export type personRegenerateTwoFactorRecoveryCodesResponse404 = {
  data: void
  status: 404
}
    
export type personRegenerateTwoFactorRecoveryCodesResponseSuccess = (personRegenerateTwoFactorRecoveryCodesResponse200) & {
  headers: Headers;
};
export type personRegenerateTwoFactorRecoveryCodesResponseError = (personRegenerateTwoFactorRecoveryCodesResponse400 | personRegenerateTwoFactorRecoveryCodesResponse401 | personRegenerateTwoFactorRecoveryCodesResponse404) & {
  headers: Headers;
};

export type personRegenerateTwoFactorRecoveryCodesResponse = (personRegenerateTwoFactorRecoveryCodesResponseSuccess | personRegenerateTwoFactorRecoveryCodesResponseError)

export const getPersonRegenerateTwoFactorRecoveryCodesUrl = (personUid: string | null,) => {


  

  return `/api/v1/crm/people/${personUid}/regenerateTwoFactorRecoveryCodes`
}

export const personRegenerateTwoFactorRecoveryCodes = async (personUid: string | null, options?: RequestInit): Promise<personRegenerateTwoFactorRecoveryCodesResponse> => {
  
  return customFetch<personRegenerateTwoFactorRecoveryCodesResponse>(getPersonRegenerateTwoFactorRecoveryCodesUrl(personUid),
  {      
    ...options,
    method: 'PUT'
    
    
  }
);}


/**
 * Sends an email to the user with a link to a page where they can reset their password.
The reset password token in the link is valid for 30 minutes.
 * @summary Initiate the forgot password flow.
 */
export type personForgotPasswordResponse200 = {
  data: Blob
  status: 200
}
    
export type personForgotPasswordResponseSuccess = (personForgotPasswordResponse200) & {
  headers: Headers;
};
;

export type personForgotPasswordResponse = (personForgotPasswordResponseSuccess)

export const getPersonForgotPasswordUrl = () => {


  

  return `/api/v1/crm/people/forgotPassword`
}

export const personForgotPassword = async (personForgotPasswordBody: PersonForgotPasswordBody, options?: RequestInit): Promise<personForgotPasswordResponse> => {
  
  return customFetch<personForgotPasswordResponse>(getPersonForgotPasswordUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      personForgotPasswordBody,)
  }
);}


