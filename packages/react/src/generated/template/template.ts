// @ts-nocheck
import {
  useMutation,
  useQuery
} from '../../query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '../../query';

import type {
  Template,
  TemplateEmailInstance,
  TemplateGetAllTemplateEmails200,
  TemplateGetAllTemplateEmailsParams,
  TemplateGetAllTemplates200,
  TemplateGetAllTemplatesParams,
  TemplateGetTemplateEmails200,
  TemplateGetTemplateEmailsParams,
  TemplateGetTransactionalEmailSettings200,
  TemplateGetTransactionalEmailSettingsParams,
  TemplateSendTemplateEmailBody,
  TemplateUpdateTransactionalEmailSettings200,
  TemplateUpdateTransactionalEmailSettingsBody,
  UpdateTemplateRequest
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



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
export const templateGetAllTemplates = (
    params?: TemplateGetAllTemplatesParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TemplateGetAllTemplates200>(
      {url: `/api/v1/templates`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getTemplateGetAllTemplatesQueryKey = (params?: TemplateGetAllTemplatesParams,) => {
    return [
    `/api/v1/templates`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getTemplateGetAllTemplatesQueryOptions = <TData = Awaited<ReturnType<typeof templateGetAllTemplates>>, TError = void>(params?: TemplateGetAllTemplatesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetAllTemplates>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTemplateGetAllTemplatesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof templateGetAllTemplates>>> = ({ signal }) => templateGetAllTemplates(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof templateGetAllTemplates>>, TError, TData> & { queryKey: QueryKey }
}

export type TemplateGetAllTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof templateGetAllTemplates>>>
export type TemplateGetAllTemplatesQueryError = void


/**
 * @summary The email templates, layouts and system emails of the account.
 */

export function useTemplateGetAllTemplates<TData = Awaited<ReturnType<typeof templateGetAllTemplates>>, TError = void>(
 params?: TemplateGetAllTemplatesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetAllTemplates>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTemplateGetAllTemplatesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Filter with personUid to see what one person was sent, or with templateUid to
restrict the results to a single template.
 * @summary The one-off emails that were sent from any email template.
 */
export const templateGetAllTemplateEmails = (
    params?: TemplateGetAllTemplateEmailsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TemplateGetAllTemplateEmails200>(
      {url: `/api/v1/templates/emails`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getTemplateGetAllTemplateEmailsQueryKey = (params?: TemplateGetAllTemplateEmailsParams,) => {
    return [
    `/api/v1/templates/emails`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getTemplateGetAllTemplateEmailsQueryOptions = <TData = Awaited<ReturnType<typeof templateGetAllTemplateEmails>>, TError = void>(params?: TemplateGetAllTemplateEmailsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetAllTemplateEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTemplateGetAllTemplateEmailsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof templateGetAllTemplateEmails>>> = ({ signal }) => templateGetAllTemplateEmails(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof templateGetAllTemplateEmails>>, TError, TData> & { queryKey: QueryKey }
}

export type TemplateGetAllTemplateEmailsQueryResult = NonNullable<Awaited<ReturnType<typeof templateGetAllTemplateEmails>>>
export type TemplateGetAllTemplateEmailsQueryError = void


/**
 * @summary The one-off emails that were sent from any email template.
 */

export function useTemplateGetAllTemplateEmails<TData = Awaited<ReturnType<typeof templateGetAllTemplateEmails>>, TError = void>(
 params?: TemplateGetAllTemplateEmailsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetAllTemplateEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTemplateGetAllTemplateEmailsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Each setting names the email templates it covers. A setting that is off stops the
automatic email only; an email sent by hand, such as the send invoice button, is
still sent.
 * @summary The on/off settings for the transactional emails that Outseta sends to your customers.
 */
export const templateGetTransactionalEmailSettings = (
    params?: TemplateGetTransactionalEmailSettingsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TemplateGetTransactionalEmailSettings200>(
      {url: `/api/v1/templates/transactional-email-settings`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getTemplateGetTransactionalEmailSettingsQueryKey = (params?: TemplateGetTransactionalEmailSettingsParams,) => {
    return [
    `/api/v1/templates/transactional-email-settings`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getTemplateGetTransactionalEmailSettingsQueryOptions = <TData = Awaited<ReturnType<typeof templateGetTransactionalEmailSettings>>, TError = void>(params?: TemplateGetTransactionalEmailSettingsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetTransactionalEmailSettings>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTemplateGetTransactionalEmailSettingsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof templateGetTransactionalEmailSettings>>> = ({ signal }) => templateGetTransactionalEmailSettings(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof templateGetTransactionalEmailSettings>>, TError, TData> & { queryKey: QueryKey }
}

export type TemplateGetTransactionalEmailSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof templateGetTransactionalEmailSettings>>>
export type TemplateGetTransactionalEmailSettingsQueryError = void


/**
 * @summary The on/off settings for the transactional emails that Outseta sends to your customers.
 */

export function useTemplateGetTransactionalEmailSettings<TData = Awaited<ReturnType<typeof templateGetTransactionalEmailSettings>>, TError = void>(
 params?: TemplateGetTransactionalEmailSettingsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetTransactionalEmailSettings>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTemplateGetTransactionalEmailSettingsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Send an object with a Settings list. Each item has Key and IsEnabled. A setting that
is not in the list keeps its state. Each change is recorded in the activity log.
Returns all settings.
 * @summary Turns transactional emails on or off.
 */
export const templateUpdateTransactionalEmailSettings = (
    templateUpdateTransactionalEmailSettingsBody: TemplateUpdateTransactionalEmailSettingsBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<TemplateUpdateTransactionalEmailSettings200>(
      {url: `/api/v1/templates/transactional-email-settings`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: templateUpdateTransactionalEmailSettingsBody
    },
      options);
    }
  


export const getTemplateUpdateTransactionalEmailSettingsMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof templateUpdateTransactionalEmailSettings>>, TError,{data: TemplateUpdateTransactionalEmailSettingsBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof templateUpdateTransactionalEmailSettings>>, TError,{data: TemplateUpdateTransactionalEmailSettingsBody}, TContext> => {

const mutationKey = ['templateUpdateTransactionalEmailSettings'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof templateUpdateTransactionalEmailSettings>>, {data: TemplateUpdateTransactionalEmailSettingsBody}> = (props) => {
          const {data} = props ?? {};

          return  templateUpdateTransactionalEmailSettings(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TemplateUpdateTransactionalEmailSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof templateUpdateTransactionalEmailSettings>>>
    export type TemplateUpdateTransactionalEmailSettingsMutationBody = TemplateUpdateTransactionalEmailSettingsBody
    export type TemplateUpdateTransactionalEmailSettingsMutationError = void

    /**
 * @summary Turns transactional emails on or off.
 */
export const useTemplateUpdateTransactionalEmailSettings = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof templateUpdateTransactionalEmailSettings>>, TError,{data: TemplateUpdateTransactionalEmailSettingsBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof templateUpdateTransactionalEmailSettings>>,
        TError,
        {data: TemplateUpdateTransactionalEmailSettingsBody},
        TContext
      > => {

      const mutationOptions = getTemplateUpdateTransactionalEmailSettingsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Add personUid to the query string to see what one person was sent from this
template.
 * @summary The one-off emails that were sent from this email template.
 */
export const templateGetTemplateEmails = (
    templateUid: string | null,
    params?: TemplateGetTemplateEmailsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TemplateGetTemplateEmails200>(
      {url: `/api/v1/templates/${templateUid}/emails`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getTemplateGetTemplateEmailsQueryKey = (templateUid?: string | null,
    params?: TemplateGetTemplateEmailsParams,) => {
    return [
    `/api/v1/templates/${templateUid}/emails`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getTemplateGetTemplateEmailsQueryOptions = <TData = Awaited<ReturnType<typeof templateGetTemplateEmails>>, TError = void>(templateUid: string | null,
    params?: TemplateGetTemplateEmailsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetTemplateEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTemplateGetTemplateEmailsQueryKey(templateUid,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof templateGetTemplateEmails>>> = ({ signal }) => templateGetTemplateEmails(templateUid,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(templateUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof templateGetTemplateEmails>>, TError, TData> & { queryKey: QueryKey }
}

export type TemplateGetTemplateEmailsQueryResult = NonNullable<Awaited<ReturnType<typeof templateGetTemplateEmails>>>
export type TemplateGetTemplateEmailsQueryError = void


/**
 * @summary The one-off emails that were sent from this email template.
 */

export function useTemplateGetTemplateEmails<TData = Awaited<ReturnType<typeof templateGetTemplateEmails>>, TError = void>(
 templateUid: string | null,
    params?: TemplateGetTemplateEmailsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetTemplateEmails>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTemplateGetTemplateEmailsQueryOptions(templateUid,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




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
export const templateGetTemplate = (
    templateUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Template>(
      {url: `/api/v1/templates/${templateUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getTemplateGetTemplateQueryKey = (templateUid?: string | null,) => {
    return [
    `/api/v1/templates/${templateUid}`
    ] as const;
    }

    
export const getTemplateGetTemplateQueryOptions = <TData = Awaited<ReturnType<typeof templateGetTemplate>>, TError = void>(templateUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetTemplate>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTemplateGetTemplateQueryKey(templateUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof templateGetTemplate>>> = ({ signal }) => templateGetTemplate(templateUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(templateUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof templateGetTemplate>>, TError, TData> & { queryKey: QueryKey }
}

export type TemplateGetTemplateQueryResult = NonNullable<Awaited<ReturnType<typeof templateGetTemplate>>>
export type TemplateGetTemplateQueryError = void


/**
 * @summary Get an email template, layout or system email, with its Body and Design.
 */

export function useTemplateGetTemplate<TData = Awaited<ReturnType<typeof templateGetTemplate>>, TError = void>(
 templateUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof templateGetTemplate>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTemplateGetTemplateQueryOptions(templateUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




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
export const templateUpdateTemplate = (
    templateUid: string | null,
    updateTemplateRequest: UpdateTemplateRequest,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Template>(
      {url: `/api/v1/templates/${templateUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateTemplateRequest
    },
      options);
    }
  


export const getTemplateUpdateTemplateMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof templateUpdateTemplate>>, TError,{templateUid: string | null;data: UpdateTemplateRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof templateUpdateTemplate>>, TError,{templateUid: string | null;data: UpdateTemplateRequest}, TContext> => {

const mutationKey = ['templateUpdateTemplate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof templateUpdateTemplate>>, {templateUid: string | null;data: UpdateTemplateRequest}> = (props) => {
          const {templateUid,data} = props ?? {};

          return  templateUpdateTemplate(templateUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TemplateUpdateTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof templateUpdateTemplate>>>
    export type TemplateUpdateTemplateMutationBody = UpdateTemplateRequest
    export type TemplateUpdateTemplateMutationError = void

    /**
 * @summary Update an email template, layout or system email.
 */
export const useTemplateUpdateTemplate = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof templateUpdateTemplate>>, TError,{templateUid: string | null;data: UpdateTemplateRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof templateUpdateTemplate>>,
        TError,
        {templateUid: string | null;data: UpdateTemplateRequest},
        TContext
      > => {

      const mutationOptions = getTemplateUpdateTemplateMutationOptions(options);

      return useMutation(mutationOptions);
    }
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
export const templateSendTemplateEmail = (
    templateUid: string | null,
    templateSendTemplateEmailBody: TemplateSendTemplateEmailBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TemplateEmailInstance>(
      {url: `/api/v1/templates/${templateUid}/send`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: templateSendTemplateEmailBody, signal
    },
      options);
    }
  


export const getTemplateSendTemplateEmailMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof templateSendTemplateEmail>>, TError,{templateUid: string | null;data: TemplateSendTemplateEmailBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof templateSendTemplateEmail>>, TError,{templateUid: string | null;data: TemplateSendTemplateEmailBody}, TContext> => {

const mutationKey = ['templateSendTemplateEmail'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof templateSendTemplateEmail>>, {templateUid: string | null;data: TemplateSendTemplateEmailBody}> = (props) => {
          const {templateUid,data} = props ?? {};

          return  templateSendTemplateEmail(templateUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TemplateSendTemplateEmailMutationResult = NonNullable<Awaited<ReturnType<typeof templateSendTemplateEmail>>>
    export type TemplateSendTemplateEmailMutationBody = TemplateSendTemplateEmailBody
    export type TemplateSendTemplateEmailMutationError = void

    /**
 * @summary Send an email template to a single person as a one-off email.
 */
export const useTemplateSendTemplateEmail = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof templateSendTemplateEmail>>, TError,{templateUid: string | null;data: TemplateSendTemplateEmailBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof templateSendTemplateEmail>>,
        TError,
        {templateUid: string | null;data: TemplateSendTemplateEmailBody},
        TContext
      > => {

      const mutationOptions = getTemplateSendTemplateEmailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    