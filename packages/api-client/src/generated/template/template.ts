// @ts-nocheck
import type {
  TemplateEmailInstance,
  TemplateGetAllTemplateEmails200,
  TemplateGetAllTemplateEmailsParams,
  TemplateGetTemplateEmails200,
  TemplateGetTemplateEmailsParams,
  TemplateSendTemplateEmailBody
} from '.././models';

import { customFetch } from '../../client';

/**
 * Filter with personUid to see what one person was sent, or with templateUid to
restrict the results to a single template.
 * @summary The one-off emails that were sent from any email template.
 */
export type templateGetAllTemplateEmailsResponse200 = {
  data: TemplateGetAllTemplateEmails200
  status: 200
}

export type templateGetAllTemplateEmailsResponse401 = {
  data: void
  status: 401
}
    
export type templateGetAllTemplateEmailsResponseSuccess = (templateGetAllTemplateEmailsResponse200) & {
  headers: Headers;
};
export type templateGetAllTemplateEmailsResponseError = (templateGetAllTemplateEmailsResponse401) & {
  headers: Headers;
};

export type templateGetAllTemplateEmailsResponse = (templateGetAllTemplateEmailsResponseSuccess | templateGetAllTemplateEmailsResponseError)

export const getTemplateGetAllTemplateEmailsUrl = (params?: TemplateGetAllTemplateEmailsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/templates/emails?${stringifiedParams}` : `/api/v1/templates/emails`
}

export const templateGetAllTemplateEmails = async (params?: TemplateGetAllTemplateEmailsParams, options?: RequestInit): Promise<templateGetAllTemplateEmailsResponse> => {
  
  return customFetch<templateGetAllTemplateEmailsResponse>(getTemplateGetAllTemplateEmailsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Add personUid to the query string to see what one person was sent from this
template.
 * @summary The one-off emails that were sent from this email template.
 */
export type templateGetTemplateEmailsResponse200 = {
  data: TemplateGetTemplateEmails200
  status: 200
}

export type templateGetTemplateEmailsResponse400 = {
  data: void
  status: 400
}

export type templateGetTemplateEmailsResponse401 = {
  data: void
  status: 401
}

export type templateGetTemplateEmailsResponse404 = {
  data: void
  status: 404
}
    
export type templateGetTemplateEmailsResponseSuccess = (templateGetTemplateEmailsResponse200) & {
  headers: Headers;
};
export type templateGetTemplateEmailsResponseError = (templateGetTemplateEmailsResponse400 | templateGetTemplateEmailsResponse401 | templateGetTemplateEmailsResponse404) & {
  headers: Headers;
};

export type templateGetTemplateEmailsResponse = (templateGetTemplateEmailsResponseSuccess | templateGetTemplateEmailsResponseError)

export const getTemplateGetTemplateEmailsUrl = (templateUid: string | null,
    params?: TemplateGetTemplateEmailsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/templates/${templateUid}/emails?${stringifiedParams}` : `/api/v1/templates/${templateUid}/emails`
}

export const templateGetTemplateEmails = async (templateUid: string | null,
    params?: TemplateGetTemplateEmailsParams, options?: RequestInit): Promise<templateGetTemplateEmailsResponse> => {
  
  return customFetch<templateGetTemplateEmailsResponse>(getTemplateGetTemplateEmailsUrl(templateUid,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * The email is merge-rendered for the person and sent immediately. No broadcast
is created. People who have bounced, unsubscribed or reported spam are not sent
the email. Only templates from Email > Email templates can be sent.
            
The response holds the record of the send. Read the open and click analytics
for it later from the emails endpoint for the template. The template and the
recipient are left out of the response unless they are asked for, for example
fields=*,Template.Uid,Recipient.Uid.
 * @summary Send an email template to a single person as a one-off email.
 */
export type templateSendTemplateEmailResponse200 = {
  data: TemplateEmailInstance
  status: 200
}

export type templateSendTemplateEmailResponse400 = {
  data: void
  status: 400
}

export type templateSendTemplateEmailResponse401 = {
  data: void
  status: 401
}

export type templateSendTemplateEmailResponse404 = {
  data: void
  status: 404
}
    
export type templateSendTemplateEmailResponseSuccess = (templateSendTemplateEmailResponse200) & {
  headers: Headers;
};
export type templateSendTemplateEmailResponseError = (templateSendTemplateEmailResponse400 | templateSendTemplateEmailResponse401 | templateSendTemplateEmailResponse404) & {
  headers: Headers;
};

export type templateSendTemplateEmailResponse = (templateSendTemplateEmailResponseSuccess | templateSendTemplateEmailResponseError)

export const getTemplateSendTemplateEmailUrl = (templateUid: string | null,) => {


  

  return `/api/v1/templates/${templateUid}/send`
}

export const templateSendTemplateEmail = async (templateUid: string | null,
    templateSendTemplateEmailBody: TemplateSendTemplateEmailBody, options?: RequestInit): Promise<templateSendTemplateEmailResponse> => {
  
  return customFetch<templateSendTemplateEmailResponse>(getTemplateSendTemplateEmailUrl(templateUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      templateSendTemplateEmailBody,)
  }
);}


