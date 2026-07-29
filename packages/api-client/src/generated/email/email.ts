// @ts-nocheck
import type {
  BroadcastCampaign,
  CampaignAddBroadcastEmailBody,
  CampaignSendTestCampaignEmailBody,
  CampaignUpdateBroadcastEmailBody,
  DripCampaign,
  DripCampaignAddDripCampaignBody,
  DripCampaignAddDripCampaignMessageBody,
  DripCampaignMessage,
  DripCampaignSendTestCampaignEmailBody,
  DripCampaignUpdateDripCampaignBody,
  DripCampaignUpdateDripCampaignMessageBody,
  EmailListAddSubscriptionBody,
  EmailListGetAllSubscriptionsParams,
  EmailListPerson
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
 * @summary Retrieve all drip campaigns.
 */
export type dripCampaignGetAllDripCampaignsResponse200 = {
  data: DripCampaign[]
  status: 200
}

export type dripCampaignGetAllDripCampaignsResponse401 = {
  data: void
  status: 401
}
    
export type dripCampaignGetAllDripCampaignsResponseSuccess = (dripCampaignGetAllDripCampaignsResponse200) & {
  headers: Headers;
};
export type dripCampaignGetAllDripCampaignsResponseError = (dripCampaignGetAllDripCampaignsResponse401) & {
  headers: Headers;
};

export type dripCampaignGetAllDripCampaignsResponse = (dripCampaignGetAllDripCampaignsResponseSuccess | dripCampaignGetAllDripCampaignsResponseError)

export const getDripCampaignGetAllDripCampaignsUrl = () => {


  

  return `/api/v1/email/campaigns/drips`
}

export const dripCampaignGetAllDripCampaigns = async ( options?: RequestInit): Promise<dripCampaignGetAllDripCampaignsResponse> => {
  
  return customFetch<dripCampaignGetAllDripCampaignsResponse>(getDripCampaignGetAllDripCampaignsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * To copy an existing drip campaign, retrieve it and pass its data as the request body — the
Uid and per-message counts are automatically reset. Messages can be supplied inline via
DripCampaignMessages, or added later with the messages endpoint. Each inline message's Name
defaults to its position (e.g. "Message 1") when omitted.
 * @summary Create a new drip campaign.
 */
export type dripCampaignAddDripCampaignResponse200 = {
  data: DripCampaign
  status: 200
}

export type dripCampaignAddDripCampaignResponse401 = {
  data: void
  status: 401
}
    
export type dripCampaignAddDripCampaignResponseSuccess = (dripCampaignAddDripCampaignResponse200) & {
  headers: Headers;
};
export type dripCampaignAddDripCampaignResponseError = (dripCampaignAddDripCampaignResponse401) & {
  headers: Headers;
};

export type dripCampaignAddDripCampaignResponse = (dripCampaignAddDripCampaignResponseSuccess | dripCampaignAddDripCampaignResponseError)

export const getDripCampaignAddDripCampaignUrl = () => {


  

  return `/api/v1/email/campaigns/drips`
}

export const dripCampaignAddDripCampaign = async (dripCampaignAddDripCampaignBody: NonReadonly<DripCampaignAddDripCampaignBody>, options?: RequestInit): Promise<dripCampaignAddDripCampaignResponse> => {
  
  return customFetch<dripCampaignAddDripCampaignResponse>(getDripCampaignAddDripCampaignUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      dripCampaignAddDripCampaignBody,)
  }
);}


/**
 * @summary Retrieve a drip campaign.
 */
export type dripCampaignGetDripCampaignResponse200 = {
  data: DripCampaign
  status: 200
}

export type dripCampaignGetDripCampaignResponse400 = {
  data: void
  status: 400
}

export type dripCampaignGetDripCampaignResponse401 = {
  data: void
  status: 401
}

export type dripCampaignGetDripCampaignResponse404 = {
  data: void
  status: 404
}
    
export type dripCampaignGetDripCampaignResponseSuccess = (dripCampaignGetDripCampaignResponse200) & {
  headers: Headers;
};
export type dripCampaignGetDripCampaignResponseError = (dripCampaignGetDripCampaignResponse400 | dripCampaignGetDripCampaignResponse401 | dripCampaignGetDripCampaignResponse404) & {
  headers: Headers;
};

export type dripCampaignGetDripCampaignResponse = (dripCampaignGetDripCampaignResponseSuccess | dripCampaignGetDripCampaignResponseError)

export const getDripCampaignGetDripCampaignUrl = (dripCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/drips/${dripCampaignUid}`
}

export const dripCampaignGetDripCampaign = async (dripCampaignUid: string | null, options?: RequestInit): Promise<dripCampaignGetDripCampaignResponse> => {
  
  return customFetch<dripCampaignGetDripCampaignResponse>(getDripCampaignGetDripCampaignUrl(dripCampaignUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Activating a drip campaign (setting IsActive) begins sending its messages to members.
StartDripToExistingMembers controls whether members already in the campaign receive the
messages or only members added going forward.
 * @summary Update a drip campaign.
 */
export type dripCampaignUpdateDripCampaignResponse200 = {
  data: DripCampaign
  status: 200
}

export type dripCampaignUpdateDripCampaignResponse400 = {
  data: void
  status: 400
}

export type dripCampaignUpdateDripCampaignResponse401 = {
  data: void
  status: 401
}

export type dripCampaignUpdateDripCampaignResponse404 = {
  data: void
  status: 404
}
    
export type dripCampaignUpdateDripCampaignResponseSuccess = (dripCampaignUpdateDripCampaignResponse200) & {
  headers: Headers;
};
export type dripCampaignUpdateDripCampaignResponseError = (dripCampaignUpdateDripCampaignResponse400 | dripCampaignUpdateDripCampaignResponse401 | dripCampaignUpdateDripCampaignResponse404) & {
  headers: Headers;
};

export type dripCampaignUpdateDripCampaignResponse = (dripCampaignUpdateDripCampaignResponseSuccess | dripCampaignUpdateDripCampaignResponseError)

export const getDripCampaignUpdateDripCampaignUrl = (dripCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/drips/${dripCampaignUid}`
}

export const dripCampaignUpdateDripCampaign = async (dripCampaignUid: string | null,
    dripCampaignUpdateDripCampaignBody: NonReadonly<DripCampaignUpdateDripCampaignBody>, options?: RequestInit): Promise<dripCampaignUpdateDripCampaignResponse> => {
  
  return customFetch<dripCampaignUpdateDripCampaignResponse>(getDripCampaignUpdateDripCampaignUrl(dripCampaignUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      dripCampaignUpdateDripCampaignBody,)
  }
);}


/**
 * @summary Delete a drip campaign.
 */
export type dripCampaignDeleteDripCampaignResponse200 = {
  data: Blob
  status: 200
}

export type dripCampaignDeleteDripCampaignResponse400 = {
  data: void
  status: 400
}

export type dripCampaignDeleteDripCampaignResponse401 = {
  data: void
  status: 401
}

export type dripCampaignDeleteDripCampaignResponse404 = {
  data: void
  status: 404
}
    
export type dripCampaignDeleteDripCampaignResponseSuccess = (dripCampaignDeleteDripCampaignResponse200) & {
  headers: Headers;
};
export type dripCampaignDeleteDripCampaignResponseError = (dripCampaignDeleteDripCampaignResponse400 | dripCampaignDeleteDripCampaignResponse401 | dripCampaignDeleteDripCampaignResponse404) & {
  headers: Headers;
};

export type dripCampaignDeleteDripCampaignResponse = (dripCampaignDeleteDripCampaignResponseSuccess | dripCampaignDeleteDripCampaignResponseError)

export const getDripCampaignDeleteDripCampaignUrl = (dripCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/drips/${dripCampaignUid}`
}

export const dripCampaignDeleteDripCampaign = async (dripCampaignUid: string | null, options?: RequestInit): Promise<dripCampaignDeleteDripCampaignResponse> => {
  
  return customFetch<dripCampaignDeleteDripCampaignResponse>(getDripCampaignDeleteDripCampaignUrl(dripCampaignUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * Adding a message deactivates the drip campaign so its schedule can be reviewed before it
resumes sending. Use DelayInHours to control how long after the trigger the message is sent.
 * @summary Add a message to a drip campaign.
 */
export type dripCampaignAddDripCampaignMessageResponse200 = {
  data: DripCampaignMessage
  status: 200
}

export type dripCampaignAddDripCampaignMessageResponse400 = {
  data: void
  status: 400
}

export type dripCampaignAddDripCampaignMessageResponse401 = {
  data: void
  status: 401
}

export type dripCampaignAddDripCampaignMessageResponse404 = {
  data: void
  status: 404
}
    
export type dripCampaignAddDripCampaignMessageResponseSuccess = (dripCampaignAddDripCampaignMessageResponse200) & {
  headers: Headers;
};
export type dripCampaignAddDripCampaignMessageResponseError = (dripCampaignAddDripCampaignMessageResponse400 | dripCampaignAddDripCampaignMessageResponse401 | dripCampaignAddDripCampaignMessageResponse404) & {
  headers: Headers;
};

export type dripCampaignAddDripCampaignMessageResponse = (dripCampaignAddDripCampaignMessageResponseSuccess | dripCampaignAddDripCampaignMessageResponseError)

export const getDripCampaignAddDripCampaignMessageUrl = (dripCampaignUid: string | null,) => {


  

  return `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages`
}

export const dripCampaignAddDripCampaignMessage = async (dripCampaignUid: string | null,
    dripCampaignAddDripCampaignMessageBody: NonReadonly<DripCampaignAddDripCampaignMessageBody>, options?: RequestInit): Promise<dripCampaignAddDripCampaignMessageResponse> => {
  
  return customFetch<dripCampaignAddDripCampaignMessageResponse>(getDripCampaignAddDripCampaignMessageUrl(dripCampaignUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      dripCampaignAddDripCampaignMessageBody,)
  }
);}


/**
 * @summary Retrieve a message from a drip campaign.
 */
export type dripCampaignGetDripCampaignMessageResponse200 = {
  data: DripCampaignMessage
  status: 200
}

export type dripCampaignGetDripCampaignMessageResponse400 = {
  data: void
  status: 400
}

export type dripCampaignGetDripCampaignMessageResponse401 = {
  data: void
  status: 401
}

export type dripCampaignGetDripCampaignMessageResponse404 = {
  data: void
  status: 404
}
    
export type dripCampaignGetDripCampaignMessageResponseSuccess = (dripCampaignGetDripCampaignMessageResponse200) & {
  headers: Headers;
};
export type dripCampaignGetDripCampaignMessageResponseError = (dripCampaignGetDripCampaignMessageResponse400 | dripCampaignGetDripCampaignMessageResponse401 | dripCampaignGetDripCampaignMessageResponse404) & {
  headers: Headers;
};

export type dripCampaignGetDripCampaignMessageResponse = (dripCampaignGetDripCampaignMessageResponseSuccess | dripCampaignGetDripCampaignMessageResponseError)

export const getDripCampaignGetDripCampaignMessageUrl = (dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null,) => {


  

  return `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages/${dripCampaignMessageUid}`
}

export const dripCampaignGetDripCampaignMessage = async (dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null, options?: RequestInit): Promise<dripCampaignGetDripCampaignMessageResponse> => {
  
  return customFetch<dripCampaignGetDripCampaignMessageResponse>(getDripCampaignGetDripCampaignMessageUrl(dripCampaignUid,dripCampaignMessageUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Changing DelayInHours on an active drip campaign reschedules the drip for its existing
members. The DripCampaign Uid on the body, if supplied, must match the dripCampaignUid in
the URL, and the message Uid on the body must match the dripCampaignMessageUid in the URL.
 * @summary Update a message in a drip campaign.
 */
export type dripCampaignUpdateDripCampaignMessageResponse200 = {
  data: DripCampaignMessage
  status: 200
}

export type dripCampaignUpdateDripCampaignMessageResponse400 = {
  data: void
  status: 400
}

export type dripCampaignUpdateDripCampaignMessageResponse401 = {
  data: void
  status: 401
}

export type dripCampaignUpdateDripCampaignMessageResponse404 = {
  data: void
  status: 404
}
    
export type dripCampaignUpdateDripCampaignMessageResponseSuccess = (dripCampaignUpdateDripCampaignMessageResponse200) & {
  headers: Headers;
};
export type dripCampaignUpdateDripCampaignMessageResponseError = (dripCampaignUpdateDripCampaignMessageResponse400 | dripCampaignUpdateDripCampaignMessageResponse401 | dripCampaignUpdateDripCampaignMessageResponse404) & {
  headers: Headers;
};

export type dripCampaignUpdateDripCampaignMessageResponse = (dripCampaignUpdateDripCampaignMessageResponseSuccess | dripCampaignUpdateDripCampaignMessageResponseError)

export const getDripCampaignUpdateDripCampaignMessageUrl = (dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null,) => {


  

  return `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages/${dripCampaignMessageUid}`
}

export const dripCampaignUpdateDripCampaignMessage = async (dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null,
    dripCampaignUpdateDripCampaignMessageBody: NonReadonly<DripCampaignUpdateDripCampaignMessageBody>, options?: RequestInit): Promise<dripCampaignUpdateDripCampaignMessageResponse> => {
  
  return customFetch<dripCampaignUpdateDripCampaignMessageResponse>(getDripCampaignUpdateDripCampaignMessageUrl(dripCampaignUid,dripCampaignMessageUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      dripCampaignUpdateDripCampaignMessageBody,)
  }
);}


/**
 * Deleting a message deactivates the drip campaign (like adding a message) so its schedule can be
reviewed before it resumes. Reactivate the campaign to resume sending.
 * @summary Delete a message from a drip campaign.
 */
export type dripCampaignDeleteDripCampaignMessageResponse200 = {
  data: Blob
  status: 200
}

export type dripCampaignDeleteDripCampaignMessageResponse400 = {
  data: void
  status: 400
}

export type dripCampaignDeleteDripCampaignMessageResponse401 = {
  data: void
  status: 401
}

export type dripCampaignDeleteDripCampaignMessageResponse404 = {
  data: void
  status: 404
}
    
export type dripCampaignDeleteDripCampaignMessageResponseSuccess = (dripCampaignDeleteDripCampaignMessageResponse200) & {
  headers: Headers;
};
export type dripCampaignDeleteDripCampaignMessageResponseError = (dripCampaignDeleteDripCampaignMessageResponse400 | dripCampaignDeleteDripCampaignMessageResponse401 | dripCampaignDeleteDripCampaignMessageResponse404) & {
  headers: Headers;
};

export type dripCampaignDeleteDripCampaignMessageResponse = (dripCampaignDeleteDripCampaignMessageResponseSuccess | dripCampaignDeleteDripCampaignMessageResponseError)

export const getDripCampaignDeleteDripCampaignMessageUrl = (dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null,) => {


  

  return `/api/v1/email/campaigns/drips/${dripCampaignUid}/messages/${dripCampaignMessageUid}`
}

export const dripCampaignDeleteDripCampaignMessage = async (dripCampaignUid: string | null,
    dripCampaignMessageUid: string | null, options?: RequestInit): Promise<dripCampaignDeleteDripCampaignMessageResponse> => {
  
  return customFetch<dripCampaignDeleteDripCampaignMessageResponse>(getDripCampaignDeleteDripCampaignMessageUrl(dripCampaignUid,dripCampaignMessageUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * Sends the drip campaign to the logged-in user and optionally to additional recipients.
Additional recipients are specified as a list of person Uids and must belong to the same
account as the logged-in user. Sending is skipped when the account is restricted due to
unpaid invoices.
 * @summary Send a test email for a drip campaign.
 */
export type dripCampaignSendTestCampaignEmailResponse200 = {
  data: Blob
  status: 200
}

export type dripCampaignSendTestCampaignEmailResponse401 = {
  data: void
  status: 401
}
    
export type dripCampaignSendTestCampaignEmailResponseSuccess = (dripCampaignSendTestCampaignEmailResponse200) & {
  headers: Headers;
};
export type dripCampaignSendTestCampaignEmailResponseError = (dripCampaignSendTestCampaignEmailResponse401) & {
  headers: Headers;
};

export type dripCampaignSendTestCampaignEmailResponse = (dripCampaignSendTestCampaignEmailResponseSuccess | dripCampaignSendTestCampaignEmailResponseError)

export const getDripCampaignSendTestCampaignEmailUrl = () => {


  

  return `/api/v1/email/campaigns/drips/sendtestemail`
}

export const dripCampaignSendTestCampaignEmail = async (dripCampaignSendTestCampaignEmailBody: DripCampaignSendTestCampaignEmailBody, options?: RequestInit): Promise<dripCampaignSendTestCampaignEmailResponse> => {
  
  return customFetch<dripCampaignSendTestCampaignEmailResponse>(getDripCampaignSendTestCampaignEmailUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      dripCampaignSendTestCampaignEmailBody,)
  }
);}


/**
 * Archived broadcasts are excluded.
 * @summary Retrieve all broadcasts.
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
Uid, SendDateTime, and message counts are automatically reset. A new broadcast is always
created as a Draft; schedule it by updating it with a SendDateTime (see the update endpoint).
            
Specify who the broadcast is sent to with EmailListUids and/or SegmentUids: EmailListUids is
an array of email list Uids (from GET /api/v1/email/lists) and SegmentUids is an array of
segment Uids (from GET /api/v1/crm/segments). These are the recommended way to set recipients
— they are merged into the underlying RecipientData for you, so callers (including LLM tools)
do not need to build that structure by hand; unknown Uids are rejected. RecipientData may
still be supplied directly (a JSON string of the form
{"BroadcastRecipientsEmailLists":[{"Uid":"..."}],"BroadcastRecipientsSegments":[{"Uid":"..."}]});
when both are present they are merged.
            
Message.Body is rendered as a Liquid template, so it may include merge tags such as
{{ Person.FirstName }}; unknown {{ }} tokens render as empty text. An inline-styled HTML
fragment is recommended. Message.Design (the drag-and-drop editor state) is optional — when
omitted it is derived automatically, so callers (including LLM tools) do not need to
understand it. Use Message.PreviewText for inbox preview text rather than an in-body
preheader.
            
When Body is a content fragment with no Design, it is composed into the account's API
email layout — a branded header and footer that includes the unsubscribe and
manage-subscriptions links — and the composed result is what is sent and opened in the
editor. Do not add your own unsubscribe link in this case; the layout provides one. The
layout is editable in the app; TemplateUid selects a specific layout template when the
account has more than one.
            
The layout is NOT applied when a Design is supplied or when the body is a complex full
HTML document (Outlook conditional comments, stylesheet links) — in those cases the body
is sent exactly as supplied, and you must include a visible unsubscribe link in it
yourself: add {{ UnsubscribeLink }} (a ready-made anchor) or {{ UnsubscribeUrl }} (the raw
URL) where you want it. Its presence is not validated. A one-click List-Unsubscribe header
is always added, but most anti-spam laws (e.g. CAN-SPAM) also require a visible
unsubscribe link in the body.
 * @summary Create a new broadcast.
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

export const campaignAddBroadcastEmail = async (campaignAddBroadcastEmailBody: NonReadonly<CampaignAddBroadcastEmailBody>, options?: RequestInit): Promise<campaignAddBroadcastEmailResponse> => {
  
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
 * @summary Retrieve a broadcast.
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
 * Setting SendDateTime to a future UTC date schedules the broadcast for sending and its status
changes to Pending. An account may only have 5 broadcasts scheduled or sending at one time;
scheduling beyond that is rejected until one finishes sending or is unscheduled. There is no
limit on the number of drafts. Clearing SendDateTime unschedules the broadcast. Recipients can be added
with EmailListUids and SegmentUids (see the create endpoint): on update these are merged onto
the broadcast's existing recipients and only ever add — to remove recipients or replace the
set, send RecipientData directly.
            
When changing Message.Body, omit Message.Design: it is regenerated from the new Body so the
drag-and-drop editor stays in sync. Sending a Design that was captured from an earlier
response alongside an edited Body would otherwise keep the stale design. A body that was
composed into the API email layout keeps the layout on such updates without duplicating
it — its content is re-composed into the layout — and a bare fragment is composed like on
create. See the create endpoint for how Body is rendered (Liquid), when the layout
applies, and the unsubscribe-token expectation when it does not.
 * @summary Update a broadcast.
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
    campaignUpdateBroadcastEmailBody: NonReadonly<CampaignUpdateBroadcastEmailBody>, options?: RequestInit): Promise<campaignUpdateBroadcastEmailResponse> => {
  
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
 * Only broadcasts in Draft or Pending status can be deleted. Broadcasts that have been
processed should be archived instead.
 * @summary Delete a broadcast.
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
 * Unschedules a pending broadcast, reverting its status to Draft.
 * @summary Unschedule a broadcast.
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
 * Archived broadcasts are excluded from the default list results.
 * @summary Archive a broadcast.
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
 * @summary Send a test email for a broadcast.
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
 * @summary Retrieve all subscribers to an email list.
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
    emailListAddSubscriptionBody: NonReadonly<EmailListAddSubscriptionBody>, options?: RequestInit): Promise<emailListAddSubscriptionResponse> => {
  
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


