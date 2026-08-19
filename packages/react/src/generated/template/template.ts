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
  TemplateEmailInstance,
  TemplateGetAllTemplateEmails200,
  TemplateGetAllTemplateEmailsParams,
  TemplateGetTemplateEmails200,
  TemplateGetTemplateEmailsParams,
  TemplateSendTemplateEmailBody
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



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
    