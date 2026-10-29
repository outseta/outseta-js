// @ts-nocheck
import type {
  Template,
  TemplateEmailInstance,
  TemplateGetAllTemplateEmails200,
  TemplateGetAllTemplateEmailsParams,
  TemplateGetAllTemplates200,
  TemplateGetAllTemplatesParams,
  TemplateGetTemplateEmails200,
  TemplateGetTemplateEmailsParams,
  TemplateSendTemplateEmailBody,
  UpdateTemplateRequest
} from '.././models';

import { customFetch } from '../../client';

/**
 * The list holds the templates from Email > Email templates (Tag template), the email
layouts (Tag layout), the broadcast wrapper (Tag wrapper), the saved support replies
(Tag savedReply) and the system emails Outseta sends, such as the registration
confirmation (Tag email). A system email has a SystemName, which never changes. Filter
with Tag=email or SystemName to find one.
            
Body and Design are left out to keep the list small, except that a system email the
account never edited carries its default Body. Read a template with the get endpoint to
see its Body and Design.
            
A system email the account never edited is not stored yet. It is listed with a Uid
that starts with int_, which can be used like any other Uid. Saving the system email
stores the account's own copy, which has a regular Uid from then on. An int_ Uid can
change when Outseta adds system emails, so keep the SystemName rather than the int_ Uid.
            
Internal system emails that accounts cannot change are not listed.
 * @summary The email templates, layouts and system emails of the account.
 */
export type templateGetAllTemplatesResponse200 = {
  data: TemplateGetAllTemplates200
  status: 200
}

export type templateGetAllTemplatesResponse401 = {
  data: void
  status: 401
}
    
export type templateGetAllTemplatesResponseSuccess = (templateGetAllTemplatesResponse200) & {
  headers: Headers;
};
export type templateGetAllTemplatesResponseError = (templateGetAllTemplatesResponse401) & {
  headers: Headers;
};

export type templateGetAllTemplatesResponse = (templateGetAllTemplatesResponseSuccess | templateGetAllTemplatesResponseError)

export const getTemplateGetAllTemplatesUrl = (params?: TemplateGetAllTemplatesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/templates?${stringifiedParams}` : `/api/v1/templates`
}

export const templateGetAllTemplates = async (params?: TemplateGetAllTemplatesParams, options?: RequestInit): Promise<templateGetAllTemplatesResponse> => {
  
  return customFetch<templateGetAllTemplatesResponse>(getTemplateGetAllTemplatesUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


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
 * Body is the HTML of the email; Subject and Body may use Liquid tokens such as
{{ Person.FirstName }}. AvailableTokens lists the tokens Outseta fills in for a system
email, and RequiredTokens the ones its Body must keep (for example ConfirmationUrl in the
registration confirmation).
            
Design is the drag-and-drop editor's design of the template as JSON, or null for a
template that is plain HTML. System emails have no Design.
            
A system email the account never edited returns its default content under its int_ Uid
from the list endpoint.
 * @summary Get an email template, layout or system email, with its Body and Design.
 */
export type templateGetTemplateResponse200 = {
  data: Template
  status: 200
}

export type templateGetTemplateResponse400 = {
  data: void
  status: 400
}

export type templateGetTemplateResponse401 = {
  data: void
  status: 401
}

export type templateGetTemplateResponse404 = {
  data: void
  status: 404
}
    
export type templateGetTemplateResponseSuccess = (templateGetTemplateResponse200) & {
  headers: Headers;
};
export type templateGetTemplateResponseError = (templateGetTemplateResponse400 | templateGetTemplateResponse401 | templateGetTemplateResponse404) & {
  headers: Headers;
};

export type templateGetTemplateResponse = (templateGetTemplateResponseSuccess | templateGetTemplateResponseError)

export const getTemplateGetTemplateUrl = (templateUid: string | null,) => {


  

  return `/api/v1/templates/${templateUid}`
}

export const templateGetTemplate = async (templateUid: string | null, options?: RequestInit): Promise<templateGetTemplateResponse> => {
  
  return customFetch<templateGetTemplateResponse>(getTemplateGetTemplateUrl(templateUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Send only the fields to change, usually Subject and Body. Fields left out of the request
keep their current values; a field sent as null is cleared. The Uid in the request body
is ignored.
            
Subject and Body must be valid Liquid, and Body must keep every token in RequiredTokens
(for example ConfirmationUrl in the registration confirmation); otherwise the update is
rejected with a validation error. The Name, Description and SystemName of a system email
cannot be changed.
            
A template with a Design (made in the drag-and-drop editor of Email > Email templates)
opens in the editor from its Design, not its Body. To change the Body of such a
template, send Design as null as well: the editor then opens the new Body as HTML.
Otherwise the editor keeps showing the old design, and saving the template there
replaces the new Body. System emails have no Design.
            
A system email the account never edited has a Uid that starts with int_. Updating it
stores the account's own copy, with the default content for the fields left out, and
returns it with its new Uid. From then on Outseta sends the copy; the int_ Uid
returns 404.
            
On an Outseta account that is not verified yet, updating a system email pauses all email
sending of the account, as it does in the Outseta app.
 * @summary Update an email template, layout or system email.
 */
export type templateUpdateTemplateResponse200 = {
  data: Template
  status: 200
}

export type templateUpdateTemplateResponse400 = {
  data: void
  status: 400
}

export type templateUpdateTemplateResponse401 = {
  data: void
  status: 401
}

export type templateUpdateTemplateResponse404 = {
  data: void
  status: 404
}
    
export type templateUpdateTemplateResponseSuccess = (templateUpdateTemplateResponse200) & {
  headers: Headers;
};
export type templateUpdateTemplateResponseError = (templateUpdateTemplateResponse400 | templateUpdateTemplateResponse401 | templateUpdateTemplateResponse404) & {
  headers: Headers;
};

export type templateUpdateTemplateResponse = (templateUpdateTemplateResponseSuccess | templateUpdateTemplateResponseError)

export const getTemplateUpdateTemplateUrl = (templateUid: string | null,) => {


  

  return `/api/v1/templates/${templateUid}`
}

export const templateUpdateTemplate = async (templateUid: string | null,
    updateTemplateRequest: UpdateTemplateRequest, options?: RequestInit): Promise<templateUpdateTemplateResponse> => {
  
  return customFetch<templateUpdateTemplateResponse>(getTemplateUpdateTemplateUrl(templateUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      updateTemplateRequest,)
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


