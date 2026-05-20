// @ts-nocheck
import type {
  BroadcastCampaign,
  CampaignAddBroadcastEmailBody,
  CampaignSendTestCampaignEmailBody,
  CampaignUpdateBroadcastEmailBody,
  EmailListAddSubscriptionBody,
  EmailListGetAllSubscriptionsParams,
  EmailListPerson
} from '.././models';

import { customFetch } from '../../client';

/**
 * @summary Retrieves all non-archived broadcast campaigns.
 */
export type campaignGetAllBroadcastEmailsResponse200 = {
  data: BroadcastCampaign[]
  status: 200
}

export type campaignGetAllBroadcastEmailsResponse401 = {
  data: void
  status: 401
}
    
export type campaignGetAllBroadcastEmailsResponseSuccess = (campaignGetAllBroadcastEmailsResponse200) & {
  headers: Headers;
};
export type campaignGetAllBroadcastEmailsResponseError = (campaignGetAllBroadcastEmailsResponse401) & {
  headers: Headers;
};

export type campaignGetAllBroadcastEmailsResponse = (campaignGetAllBroadcastEmailsResponseSuccess | campaignGetAllBroadcastEmailsResponseError)

export const getCampaignGetAllBroadcastEmailsUrl = () => {


  

  return `/api/v1/email/campaigns/broadcasts`
}

export const campaignGetAllBroadcastEmails = async ( options?: RequestInit): Promise<campaignGetAllBroadcastEmailsResponse> => {
  
  return customFetch<campaignGetAllBroadcastEmailsResponse>(getCampaignGetAllBroadcastEmailsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * To copy an existing broadcast, retrieve it and pass its data as the request body — the
Uid, SendDateTime, and message counts are automatically reset. Recipients can be
specified using EmailListUids and SegmentUids instead of populating RecipientData
directly. If both are provided, they are merged.
 * @summary Create a new broadcast campaign.
 */
export type campaignAddBroadcastEmailResponse200 = {
  data: BroadcastCampaign
  status: 200
}

export type campaignAddBroadcastEmailResponse401 = {
  data: void
  status: 401
}
    
export type campaignAddBroadcastEmailResponseSuccess = (campaignAddBroadcastEmailResponse200) & {
  headers: Headers;
};
export type campaignAddBroadcastEmailResponseError = (campaignAddBroadcastEmailResponse401) & {
  headers: Headers;
};

export type campaignAddBroadcastEmailResponse = (campaignAddBroadcastEmailResponseSuccess | campaignAddBroadcastEmailResponseError)

export const getCampaignAddBroadcastEmailUrl = () => {


  

  return `/api/v1/email/campaigns/broadcasts`
}

export const campaignAddBroadcastEmail = async (campaignAddBroadcastEmailBody: CampaignAddBroadcastEmailBody, options?: RequestInit): Promise<campaignAddBroadcastEmailResponse> => {
  
  return customFetch<campaignAddBroadcastEmailResponse>(getCampaignAddBroadcastEmailUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      campaignAddBroadcastEmailBody,)
  }
);}


/**
 * @summary Retrieves a single broadcast campaign by its Uid.
 */
export type campaignGetBroadcastEmailResponse200 = {
  data: BroadcastCampaign
  status: 200
}

export type campaignGetBroadcastEmailResponse400 = {
  data: void
  status: 400
}

export type campaignGetBroadcastEmailResponse401 = {
  data: void
  status: 401
}

export type campaignGetBroadcastEmailResponse404 = {
  data: void
  status: 404
}
    
export type campaignGetBroadcastEmailResponseSuccess = (campaignGetBroadcastEmailResponse200) & {
  headers: Headers;
};
export type campaignGetBroadcastEmailResponseError = (campaignGetBroadcastEmailResponse400 | campaignGetBroadcastEmailResponse401 | campaignGetBroadcastEmailResponse404) & {
  headers: Headers;
};

export type campaignGetBroadcastEmailResponse = (campaignGetBroadcastEmailResponseSuccess | campaignGetBroadcastEmailResponseError)

export const getCampaignGetBroadcastEmailUrl = (broadcastCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}`
}

export const campaignGetBroadcastEmail = async (broadcastCampaignUid: string | null, options?: RequestInit): Promise<campaignGetBroadcastEmailResponse> => {
  
  return customFetch<campaignGetBroadcastEmailResponse>(getCampaignGetBroadcastEmailUrl(broadcastCampaignUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Setting SendDateTime to a future date schedules the broadcast for sending and its status
changes to Pending. Clearing SendDateTime unschedules the broadcast. Recipients can be
specified using EmailListUids and SegmentUids instead of populating RecipientData
directly. If both are provided, they are merged.
 * @summary Update a broadcast campaign.
 */
export type campaignUpdateBroadcastEmailResponse200 = {
  data: BroadcastCampaign
  status: 200
}

export type campaignUpdateBroadcastEmailResponse400 = {
  data: void
  status: 400
}

export type campaignUpdateBroadcastEmailResponse401 = {
  data: void
  status: 401
}

export type campaignUpdateBroadcastEmailResponse404 = {
  data: void
  status: 404
}
    
export type campaignUpdateBroadcastEmailResponseSuccess = (campaignUpdateBroadcastEmailResponse200) & {
  headers: Headers;
};
export type campaignUpdateBroadcastEmailResponseError = (campaignUpdateBroadcastEmailResponse400 | campaignUpdateBroadcastEmailResponse401 | campaignUpdateBroadcastEmailResponse404) & {
  headers: Headers;
};

export type campaignUpdateBroadcastEmailResponse = (campaignUpdateBroadcastEmailResponseSuccess | campaignUpdateBroadcastEmailResponseError)

export const getCampaignUpdateBroadcastEmailUrl = (broadcastCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}`
}

export const campaignUpdateBroadcastEmail = async (broadcastCampaignUid: string | null,
    campaignUpdateBroadcastEmailBody: CampaignUpdateBroadcastEmailBody, options?: RequestInit): Promise<campaignUpdateBroadcastEmailResponse> => {
  
  return customFetch<campaignUpdateBroadcastEmailResponse>(getCampaignUpdateBroadcastEmailUrl(broadcastCampaignUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      campaignUpdateBroadcastEmailBody,)
  }
);}


/**
 * Only campaigns in Draft or Pending status can be deleted. Campaigns that have been
processed should be archived instead.
 * @summary Delete a broadcast campaign.
 */
export type campaignDeleteBroadcastCampaignResponse200 = {
  data: Blob
  status: 200
}

export type campaignDeleteBroadcastCampaignResponse400 = {
  data: void
  status: 400
}

export type campaignDeleteBroadcastCampaignResponse401 = {
  data: void
  status: 401
}

export type campaignDeleteBroadcastCampaignResponse404 = {
  data: void
  status: 404
}
    
export type campaignDeleteBroadcastCampaignResponseSuccess = (campaignDeleteBroadcastCampaignResponse200) & {
  headers: Headers;
};
export type campaignDeleteBroadcastCampaignResponseError = (campaignDeleteBroadcastCampaignResponse400 | campaignDeleteBroadcastCampaignResponse401 | campaignDeleteBroadcastCampaignResponse404) & {
  headers: Headers;
};

export type campaignDeleteBroadcastCampaignResponse = (campaignDeleteBroadcastCampaignResponseSuccess | campaignDeleteBroadcastCampaignResponseError)

export const getCampaignDeleteBroadcastCampaignUrl = (broadcastCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}`
}

export const campaignDeleteBroadcastCampaign = async (broadcastCampaignUid: string | null, options?: RequestInit): Promise<campaignDeleteBroadcastCampaignResponse> => {
  
  return customFetch<campaignDeleteBroadcastCampaignResponse>(getCampaignDeleteBroadcastCampaignUrl(broadcastCampaignUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * @summary Unschedules a pending broadcast campaign, reverting its status to Draft.
 */
export type campaignUnscheduleBroadcastEmailResponse200 = {
  data: BroadcastCampaign
  status: 200
}

export type campaignUnscheduleBroadcastEmailResponse400 = {
  data: void
  status: 400
}

export type campaignUnscheduleBroadcastEmailResponse401 = {
  data: void
  status: 401
}

export type campaignUnscheduleBroadcastEmailResponse404 = {
  data: void
  status: 404
}
    
export type campaignUnscheduleBroadcastEmailResponseSuccess = (campaignUnscheduleBroadcastEmailResponse200) & {
  headers: Headers;
};
export type campaignUnscheduleBroadcastEmailResponseError = (campaignUnscheduleBroadcastEmailResponse400 | campaignUnscheduleBroadcastEmailResponse401 | campaignUnscheduleBroadcastEmailResponse404) & {
  headers: Headers;
};

export type campaignUnscheduleBroadcastEmailResponse = (campaignUnscheduleBroadcastEmailResponseSuccess | campaignUnscheduleBroadcastEmailResponseError)

export const getCampaignUnscheduleBroadcastEmailUrl = (broadcastCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}/unschedule`
}

export const campaignUnscheduleBroadcastEmail = async (broadcastCampaignUid: string | null, options?: RequestInit): Promise<campaignUnscheduleBroadcastEmailResponse> => {
  
  return customFetch<campaignUnscheduleBroadcastEmailResponse>(getCampaignUnscheduleBroadcastEmailUrl(broadcastCampaignUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Archives a broadcast campaign. Archived campaigns are excluded from the default list results.
 */
export type campaignArchiveBroadcastCampaignResponse200 = {
  data: Blob
  status: 200
}

export type campaignArchiveBroadcastCampaignResponse400 = {
  data: void
  status: 400
}

export type campaignArchiveBroadcastCampaignResponse401 = {
  data: void
  status: 401
}

export type campaignArchiveBroadcastCampaignResponse404 = {
  data: void
  status: 404
}
    
export type campaignArchiveBroadcastCampaignResponseSuccess = (campaignArchiveBroadcastCampaignResponse200) & {
  headers: Headers;
};
export type campaignArchiveBroadcastCampaignResponseError = (campaignArchiveBroadcastCampaignResponse400 | campaignArchiveBroadcastCampaignResponse401 | campaignArchiveBroadcastCampaignResponse404) & {
  headers: Headers;
};

export type campaignArchiveBroadcastCampaignResponse = (campaignArchiveBroadcastCampaignResponseSuccess | campaignArchiveBroadcastCampaignResponseError)

export const getCampaignArchiveBroadcastCampaignUrl = (broadcastCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/broadcasts/${broadcastCampaignUid}/archive`
}

export const campaignArchiveBroadcastCampaign = async (broadcastCampaignUid: string | null, options?: RequestInit): Promise<campaignArchiveBroadcastCampaignResponse> => {
  
  return customFetch<campaignArchiveBroadcastCampaignResponse>(getCampaignArchiveBroadcastCampaignUrl(broadcastCampaignUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * Sends to the logged-in user and optionally to additional recipients. Additional
recipients are specified as a list of person Uids and must belong to the same account
as the logged-in user.
 * @summary Send a test email for a broadcast campaign.
 */
export type campaignSendTestCampaignEmailResponse200 = {
  data: Blob
  status: 200
}

export type campaignSendTestCampaignEmailResponse401 = {
  data: void
  status: 401
}
    
export type campaignSendTestCampaignEmailResponseSuccess = (campaignSendTestCampaignEmailResponse200) & {
  headers: Headers;
};
export type campaignSendTestCampaignEmailResponseError = (campaignSendTestCampaignEmailResponse401) & {
  headers: Headers;
};

export type campaignSendTestCampaignEmailResponse = (campaignSendTestCampaignEmailResponseSuccess | campaignSendTestCampaignEmailResponseError)

export const getCampaignSendTestCampaignEmailUrl = () => {


  

  return `/api/v1/email/campaigns/broadcasts/sendtestemail`
}

export const campaignSendTestCampaignEmail = async (campaignSendTestCampaignEmailBody: CampaignSendTestCampaignEmailBody, options?: RequestInit): Promise<campaignSendTestCampaignEmailResponse> => {
  
  return customFetch<campaignSendTestCampaignEmailResponse>(getCampaignSendTestCampaignEmailUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      campaignSendTestCampaignEmailBody,)
  }
);}


/**
 * @summary Retrieves all the people subscribing to an email list.
 */
export type emailListGetAllSubscriptionsResponse200 = {
  data: EmailListPerson[]
  status: 200
}

export type emailListGetAllSubscriptionsResponse400 = {
  data: void
  status: 400
}

export type emailListGetAllSubscriptionsResponse401 = {
  data: void
  status: 401
}
    
export type emailListGetAllSubscriptionsResponseSuccess = (emailListGetAllSubscriptionsResponse200) & {
  headers: Headers;
};
export type emailListGetAllSubscriptionsResponseError = (emailListGetAllSubscriptionsResponse400 | emailListGetAllSubscriptionsResponse401) & {
  headers: Headers;
};

export type emailListGetAllSubscriptionsResponse = (emailListGetAllSubscriptionsResponseSuccess | emailListGetAllSubscriptionsResponseError)

export const getEmailListGetAllSubscriptionsUrl = (emailListUid: string | null,
    params?: EmailListGetAllSubscriptionsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/email/lists/${emailListUid}/subscriptions?${stringifiedParams}` : `/api/v1/email/lists/${emailListUid}/subscriptions`
}

export const emailListGetAllSubscriptions = async (emailListUid: string | null,
    params?: EmailListGetAllSubscriptionsParams, options?: RequestInit): Promise<emailListGetAllSubscriptionsResponse> => {
  
  return customFetch<emailListGetAllSubscriptionsResponse>(getEmailListGetAllSubscriptionsUrl(emailListUid,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * To subscribe a new person, pass a Person object with an Email address. To subscribe an
existing person, pass a Person object with a Uid. The SendWelcomeEmail property
determines if the person is sent a welcome email and defaults to false.
 * @summary Subscribe a person to an email list.
 */
export type emailListAddSubscriptionResponse200 = {
  data: EmailListPerson
  status: 200
}

export type emailListAddSubscriptionResponse400 = {
  data: void
  status: 400
}

export type emailListAddSubscriptionResponse401 = {
  data: void
  status: 401
}

export type emailListAddSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type emailListAddSubscriptionResponseSuccess = (emailListAddSubscriptionResponse200) & {
  headers: Headers;
};
export type emailListAddSubscriptionResponseError = (emailListAddSubscriptionResponse400 | emailListAddSubscriptionResponse401 | emailListAddSubscriptionResponse404) & {
  headers: Headers;
};

export type emailListAddSubscriptionResponse = (emailListAddSubscriptionResponseSuccess | emailListAddSubscriptionResponseError)

export const getEmailListAddSubscriptionUrl = (emailListUid: string | null,) => {


  

  return `/api/v1/email/lists/${emailListUid}/subscriptions`
}

export const emailListAddSubscription = async (emailListUid: string | null,
    emailListAddSubscriptionBody: EmailListAddSubscriptionBody, options?: RequestInit): Promise<emailListAddSubscriptionResponse> => {
  
  return customFetch<emailListAddSubscriptionResponse>(getEmailListAddSubscriptionUrl(emailListUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      emailListAddSubscriptionBody,)
  }
);}


/**
 * @summary Remove a subscriber from an email list.
 */
export type emailListDeleteSubscriptionResponse200 = {
  data: Blob
  status: 200
}

export type emailListDeleteSubscriptionResponse400 = {
  data: void
  status: 400
}

export type emailListDeleteSubscriptionResponse401 = {
  data: void
  status: 401
}

export type emailListDeleteSubscriptionResponse404 = {
  data: void
  status: 404
}
    
export type emailListDeleteSubscriptionResponseSuccess = (emailListDeleteSubscriptionResponse200) & {
  headers: Headers;
};
export type emailListDeleteSubscriptionResponseError = (emailListDeleteSubscriptionResponse400 | emailListDeleteSubscriptionResponse401 | emailListDeleteSubscriptionResponse404) & {
  headers: Headers;
};

export type emailListDeleteSubscriptionResponse = (emailListDeleteSubscriptionResponseSuccess | emailListDeleteSubscriptionResponseError)

export const getEmailListDeleteSubscriptionUrl = (emailListUid: string | null,
    subscriptionUid: string | null,) => {


  

  return `/api/v1/email/lists/${emailListUid}/subscriptions/${subscriptionUid}`
}

export const emailListDeleteSubscription = async (emailListUid: string | null,
    subscriptionUid: string | null, options?: RequestInit): Promise<emailListDeleteSubscriptionResponse> => {
  
  return customFetch<emailListDeleteSubscriptionResponse>(getEmailListDeleteSubscriptionUrl(emailListUid,subscriptionUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


