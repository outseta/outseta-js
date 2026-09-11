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
  Article,
  ArticleAddArticleBody,
  ArticleAddTagToEntityBody,
  ArticleGetAllArticles200,
  ArticleGetAllArticlesParams,
  ArticleGetTagsForEntity200,
  ArticleGetTagsForEntityParams,
  ArticleSetTagsForEntityBody,
  Case,
  CaseAddCaseBody,
  CaseAddCaseParams,
  CaseGetAllCases200,
  CaseGetAllCasesParams,
  CaseHistory,
  CaseUpdateCaseBody,
  CategoryGetAllCategories200,
  CategoryGetAllCategoriesParams
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';

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



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Optionally filtered by search string, tag, and/or assignment.
Assigned cases can be filtered by passing in the AssignedToPersonClientIdentifier,
which is the Uid of the person the case is assigned to.
 * @summary Retrieve all cases.
 */
export const caseGetAllCases = (
    params?: CaseGetAllCasesParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<CaseGetAllCases200>(
      {url: `/api/v1/support/cases`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getCaseGetAllCasesQueryKey = (params?: CaseGetAllCasesParams,) => {
    return [
    `/api/v1/support/cases`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getCaseGetAllCasesQueryOptions = <TData = Awaited<ReturnType<typeof caseGetAllCases>>, TError = void>(params?: CaseGetAllCasesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof caseGetAllCases>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCaseGetAllCasesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof caseGetAllCases>>> = ({ signal }) => caseGetAllCases(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof caseGetAllCases>>, TError, TData> & { queryKey: QueryKey }
}

export type CaseGetAllCasesQueryResult = NonNullable<Awaited<ReturnType<typeof caseGetAllCases>>>
export type CaseGetAllCasesQueryError = void


/**
 * @summary Retrieve all cases.
 */

export function useCaseGetAllCases<TData = Awaited<ReturnType<typeof caseGetAllCases>>, TError = void>(
 params?: CaseGetAllCasesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof caseGetAllCases>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCaseGetAllCasesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Adds a case into the support system.
 */
export const caseAddCase = (
    caseAddCaseBody: NonReadonly<CaseAddCaseBody>,
    params?: CaseAddCaseParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Case>(
      {url: `/api/v1/support/cases`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: caseAddCaseBody,
        params, signal
    },
      options);
    }
  


export const getCaseAddCaseMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddCase>>, TError,{data: NonReadonly<CaseAddCaseBody>;params?: CaseAddCaseParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof caseAddCase>>, TError,{data: NonReadonly<CaseAddCaseBody>;params?: CaseAddCaseParams}, TContext> => {

const mutationKey = ['caseAddCase'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof caseAddCase>>, {data: NonReadonly<CaseAddCaseBody>;params?: CaseAddCaseParams}> = (props) => {
          const {data,params} = props ?? {};

          return  caseAddCase(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CaseAddCaseMutationResult = NonNullable<Awaited<ReturnType<typeof caseAddCase>>>
    export type CaseAddCaseMutationBody = NonReadonly<CaseAddCaseBody>
    export type CaseAddCaseMutationError = void

    /**
 * @summary Adds a case into the support system.
 */
export const useCaseAddCase = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddCase>>, TError,{data: NonReadonly<CaseAddCaseBody>;params?: CaseAddCaseParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof caseAddCase>>,
        TError,
        {data: NonReadonly<CaseAddCaseBody>;params?: CaseAddCaseParams},
        TContext
      > => {

      const mutationOptions = getCaseAddCaseMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a case.
 */
export const caseGetCase = (
    caseUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Case>(
      {url: `/api/v1/support/cases/${caseUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getCaseGetCaseQueryKey = (caseUid?: string | null,) => {
    return [
    `/api/v1/support/cases/${caseUid}`
    ] as const;
    }

    
export const getCaseGetCaseQueryOptions = <TData = Awaited<ReturnType<typeof caseGetCase>>, TError = void>(caseUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof caseGetCase>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCaseGetCaseQueryKey(caseUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof caseGetCase>>> = ({ signal }) => caseGetCase(caseUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(caseUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof caseGetCase>>, TError, TData> & { queryKey: QueryKey }
}

export type CaseGetCaseQueryResult = NonNullable<Awaited<ReturnType<typeof caseGetCase>>>
export type CaseGetCaseQueryError = void


/**
 * @summary Retrieve a case.
 */

export function useCaseGetCase<TData = Awaited<ReturnType<typeof caseGetCase>>, TError = void>(
 caseUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof caseGetCase>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCaseGetCaseQueryOptions(caseUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * The Uid in the URL identifies the ticket, and a Uid in the request body is ignored.
Any property that the body does not contain keeps its current value, so a request
can send only the properties that change.
            
Tags are managed through the CaseTags collection. Send the full set of tags that
the ticket must end with:
            
- To keep a tag, include its entry with the CaseTag Uid that GET returned.
- To add a tag, include an entry that has no Uid and a Tag that holds the tag's Uid.
- To remove a tag, leave its entry out.
- To remove all tags, send an empty array.
            
If the body does not contain CaseTags, the current tags stay as they are. To read
the current tags, request them with the fields parameter, for example
fields=Uid,CaseTags.Uid,CaseTags.Tag.Uid,CaseTags.Tag.Name. To get the tags that are
available for tickets, use GET /attribute/tags?entityType=Case.
            
Case history is kept. Add replies and notes with their own endpoints.
 * @summary Update a support ticket.
 */
export const caseUpdateCase = (
    caseUid: string | null,
    caseUpdateCaseBody: NonReadonly<CaseUpdateCaseBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Case>(
      {url: `/api/v1/support/cases/${caseUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: caseUpdateCaseBody
    },
      options);
    }
  


export const getCaseUpdateCaseMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseUpdateCase>>, TError,{caseUid: string | null;data: NonReadonly<CaseUpdateCaseBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof caseUpdateCase>>, TError,{caseUid: string | null;data: NonReadonly<CaseUpdateCaseBody>}, TContext> => {

const mutationKey = ['caseUpdateCase'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof caseUpdateCase>>, {caseUid: string | null;data: NonReadonly<CaseUpdateCaseBody>}> = (props) => {
          const {caseUid,data} = props ?? {};

          return  caseUpdateCase(caseUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CaseUpdateCaseMutationResult = NonNullable<Awaited<ReturnType<typeof caseUpdateCase>>>
    export type CaseUpdateCaseMutationBody = NonReadonly<CaseUpdateCaseBody>
    export type CaseUpdateCaseMutationError = void

    /**
 * @summary Update a support ticket.
 */
export const useCaseUpdateCase = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseUpdateCase>>, TError,{caseUid: string | null;data: NonReadonly<CaseUpdateCaseBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof caseUpdateCase>>,
        TError,
        {caseUid: string | null;data: NonReadonly<CaseUpdateCaseBody>},
        TContext
      > => {

      const mutationOptions = getCaseUpdateCaseMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Adds a reply from an agent to a support case.
 */
export const caseAddReply = (
    caseUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/support/cases/${caseUid}/replies`, method: 'POST',
        responseType: 'blob', signal
    },
      options);
    }
  


export const getCaseAddReplyMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddReply>>, TError,{caseUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof caseAddReply>>, TError,{caseUid: string | null}, TContext> => {

const mutationKey = ['caseAddReply'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof caseAddReply>>, {caseUid: string | null}> = (props) => {
          const {caseUid} = props ?? {};

          return  caseAddReply(caseUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CaseAddReplyMutationResult = NonNullable<Awaited<ReturnType<typeof caseAddReply>>>
    
    export type CaseAddReplyMutationError = void

    /**
 * @summary Adds a reply from an agent to a support case.
 */
export const useCaseAddReply = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddReply>>, TError,{caseUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof caseAddReply>>,
        TError,
        {caseUid: string | null},
        TContext
      > => {

      const mutationOptions = getCaseAddReplyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Adds a response to the case from the person that opened the case.
 */
export const caseAddClientResponse = (
    caseUid: string | null,
    comment: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<CaseHistory>(
      {url: `/api/v1/support/cases/${caseUid}/clientresponse/${comment}`, method: 'POST', signal
    },
      options);
    }
  


export const getCaseAddClientResponseMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddClientResponse>>, TError,{caseUid: string | null;comment: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof caseAddClientResponse>>, TError,{caseUid: string | null;comment: string | null}, TContext> => {

const mutationKey = ['caseAddClientResponse'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof caseAddClientResponse>>, {caseUid: string | null;comment: string | null}> = (props) => {
          const {caseUid,comment} = props ?? {};

          return  caseAddClientResponse(caseUid,comment,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CaseAddClientResponseMutationResult = NonNullable<Awaited<ReturnType<typeof caseAddClientResponse>>>
    
    export type CaseAddClientResponseMutationError = void

    /**
 * @summary Adds a response to the case from the person that opened the case.
 */
export const useCaseAddClientResponse = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddClientResponse>>, TError,{caseUid: string | null;comment: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof caseAddClientResponse>>,
        TError,
        {caseUid: string | null;comment: string | null},
        TContext
      > => {

      const mutationOptions = getCaseAddClientResponseMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all knowledge base articles.
 */
export const articleGetAllArticles = (
    params?: ArticleGetAllArticlesParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<ArticleGetAllArticles200>(
      {url: `/api/v1/support/articles`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getArticleGetAllArticlesQueryKey = (params?: ArticleGetAllArticlesParams,) => {
    return [
    `/api/v1/support/articles`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getArticleGetAllArticlesQueryOptions = <TData = Awaited<ReturnType<typeof articleGetAllArticles>>, TError = unknown>(params?: ArticleGetAllArticlesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof articleGetAllArticles>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getArticleGetAllArticlesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof articleGetAllArticles>>> = ({ signal }) => articleGetAllArticles(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof articleGetAllArticles>>, TError, TData> & { queryKey: QueryKey }
}

export type ArticleGetAllArticlesQueryResult = NonNullable<Awaited<ReturnType<typeof articleGetAllArticles>>>
export type ArticleGetAllArticlesQueryError = unknown


/**
 * @summary Retrieve all knowledge base articles.
 */

export function useArticleGetAllArticles<TData = Awaited<ReturnType<typeof articleGetAllArticles>>, TError = unknown>(
 params?: ArticleGetAllArticlesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof articleGetAllArticles>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getArticleGetAllArticlesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Create a knowledge base article.
 */
export const articleAddArticle = (
    articleAddArticleBody: NonReadonly<ArticleAddArticleBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Article>(
      {url: `/api/v1/support/articles`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: articleAddArticleBody, signal
    },
      options);
    }
  


export const getArticleAddArticleMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleAddArticle>>, TError,{data: NonReadonly<ArticleAddArticleBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof articleAddArticle>>, TError,{data: NonReadonly<ArticleAddArticleBody>}, TContext> => {

const mutationKey = ['articleAddArticle'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof articleAddArticle>>, {data: NonReadonly<ArticleAddArticleBody>}> = (props) => {
          const {data} = props ?? {};

          return  articleAddArticle(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ArticleAddArticleMutationResult = NonNullable<Awaited<ReturnType<typeof articleAddArticle>>>
    export type ArticleAddArticleMutationBody = NonReadonly<ArticleAddArticleBody>
    export type ArticleAddArticleMutationError = void

    /**
 * @summary Create a knowledge base article.
 */
export const useArticleAddArticle = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleAddArticle>>, TError,{data: NonReadonly<ArticleAddArticleBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof articleAddArticle>>,
        TError,
        {data: NonReadonly<ArticleAddArticleBody>},
        TContext
      > => {

      const mutationOptions = getArticleAddArticleMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a knowledge base article.
 */
export const articleGetArticle = (
    articleUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Article>(
      {url: `/api/v1/support/articles/${articleUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getArticleGetArticleQueryKey = (articleUid?: string | null,) => {
    return [
    `/api/v1/support/articles/${articleUid}`
    ] as const;
    }

    
export const getArticleGetArticleQueryOptions = <TData = Awaited<ReturnType<typeof articleGetArticle>>, TError = void>(articleUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof articleGetArticle>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getArticleGetArticleQueryKey(articleUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof articleGetArticle>>> = ({ signal }) => articleGetArticle(articleUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(articleUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof articleGetArticle>>, TError, TData> & { queryKey: QueryKey }
}

export type ArticleGetArticleQueryResult = NonNullable<Awaited<ReturnType<typeof articleGetArticle>>>
export type ArticleGetArticleQueryError = void


/**
 * @summary Retrieve a knowledge base article.
 */

export function useArticleGetArticle<TData = Awaited<ReturnType<typeof articleGetArticle>>, TError = void>(
 articleUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof articleGetArticle>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getArticleGetArticleQueryOptions(articleUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Send the uids of the tags to add. Tags that the record already carries stay on it, and
naming one of them again changes nothing, so the same request is safe to repeat. To
replace the whole set instead, use PUT on this same path.
            
A tag belongs to one entity type, so use tags whose EntityType matches this record.
List them with GET /attribute/tags. A uid in the list that names no tag is skipped.
 * @summary Add tags to a record.
 */
export const articleAddTagToEntity = (
    entityUid: string | null,
    articleAddTagToEntityBody: ArticleAddTagToEntityBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/support/articles/${entityUid}/tags`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: articleAddTagToEntityBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getArticleAddTagToEntityMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleAddTagToEntity>>, TError,{entityUid: string | null;data: ArticleAddTagToEntityBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof articleAddTagToEntity>>, TError,{entityUid: string | null;data: ArticleAddTagToEntityBody}, TContext> => {

const mutationKey = ['articleAddTagToEntity'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof articleAddTagToEntity>>, {entityUid: string | null;data: ArticleAddTagToEntityBody}> = (props) => {
          const {entityUid,data} = props ?? {};

          return  articleAddTagToEntity(entityUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ArticleAddTagToEntityMutationResult = NonNullable<Awaited<ReturnType<typeof articleAddTagToEntity>>>
    export type ArticleAddTagToEntityMutationBody = ArticleAddTagToEntityBody
    export type ArticleAddTagToEntityMutationError = void

    /**
 * @summary Add tags to a record.
 */
export const useArticleAddTagToEntity = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleAddTagToEntity>>, TError,{entityUid: string | null;data: ArticleAddTagToEntityBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof articleAddTagToEntity>>,
        TError,
        {entityUid: string | null;data: ArticleAddTagToEntityBody},
        TContext
      > => {

      const mutationOptions = getArticleAddTagToEntityMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Returns the tags themselves, not the links that hold them. The same tags are also
available on the record: ask for them with the fields parameter, for example
fields=Uid,Tags.Uid,Tags.Name,Tags.TagColor. Tags cost an extra query, so the record
leaves them out unless fields names Tags or is a plain wildcard.
 * @summary Retrieve the tags on a record.
 */
export const articleGetTagsForEntity = (
    entityUid: string | null,
    params?: ArticleGetTagsForEntityParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<ArticleGetTagsForEntity200>(
      {url: `/api/v1/support/articles/${entityUid}/tags`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getArticleGetTagsForEntityQueryKey = (entityUid?: string | null,
    params?: ArticleGetTagsForEntityParams,) => {
    return [
    `/api/v1/support/articles/${entityUid}/tags`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getArticleGetTagsForEntityQueryOptions = <TData = Awaited<ReturnType<typeof articleGetTagsForEntity>>, TError = void>(entityUid: string | null,
    params?: ArticleGetTagsForEntityParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof articleGetTagsForEntity>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getArticleGetTagsForEntityQueryKey(entityUid,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof articleGetTagsForEntity>>> = ({ signal }) => articleGetTagsForEntity(entityUid,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(entityUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof articleGetTagsForEntity>>, TError, TData> & { queryKey: QueryKey }
}

export type ArticleGetTagsForEntityQueryResult = NonNullable<Awaited<ReturnType<typeof articleGetTagsForEntity>>>
export type ArticleGetTagsForEntityQueryError = void


/**
 * @summary Retrieve the tags on a record.
 */

export function useArticleGetTagsForEntity<TData = Awaited<ReturnType<typeof articleGetTagsForEntity>>, TError = void>(
 entityUid: string | null,
    params?: ArticleGetTagsForEntityParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof articleGetTagsForEntity>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getArticleGetTagsForEntityQueryOptions(entityUid,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Send the full set of tags the record must end with. A tag that the list leaves out is
taken off the record, and one that the list names is added. Send an empty list to take
every tag off. To add tags without disturbing the others, use POST on this same path.
            
A tag belongs to one entity type, so use tags whose EntityType matches this record.
List them with GET /attribute/tags. A uid in the list that names no tag is skipped.
 * @summary Replace the tags on a record.
 */
export const articleSetTagsForEntity = (
    entityUid: string | null,
    articleSetTagsForEntityBody: ArticleSetTagsForEntityBody,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/support/articles/${entityUid}/tags`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: articleSetTagsForEntityBody,
        responseType: 'blob'
    },
      options);
    }
  


export const getArticleSetTagsForEntityMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleSetTagsForEntity>>, TError,{entityUid: string | null;data: ArticleSetTagsForEntityBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof articleSetTagsForEntity>>, TError,{entityUid: string | null;data: ArticleSetTagsForEntityBody}, TContext> => {

const mutationKey = ['articleSetTagsForEntity'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof articleSetTagsForEntity>>, {entityUid: string | null;data: ArticleSetTagsForEntityBody}> = (props) => {
          const {entityUid,data} = props ?? {};

          return  articleSetTagsForEntity(entityUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ArticleSetTagsForEntityMutationResult = NonNullable<Awaited<ReturnType<typeof articleSetTagsForEntity>>>
    export type ArticleSetTagsForEntityMutationBody = ArticleSetTagsForEntityBody
    export type ArticleSetTagsForEntityMutationError = void

    /**
 * @summary Replace the tags on a record.
 */
export const useArticleSetTagsForEntity = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleSetTagsForEntity>>, TError,{entityUid: string | null;data: ArticleSetTagsForEntityBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof articleSetTagsForEntity>>,
        TError,
        {entityUid: string | null;data: ArticleSetTagsForEntityBody},
        TContext
      > => {

      const mutationOptions = getArticleSetTagsForEntityMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * The tag itself is kept and stays available for other records. If the record does not
carry the tag, nothing changes and the call still succeeds.
 * @summary Remove one tag from a record.
 */
export const articleRemoveTagFromEntity = (
    entityUid: string | null,
    tagUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/support/articles/${entityUid}/tags/${tagUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getArticleRemoveTagFromEntityMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleRemoveTagFromEntity>>, TError,{entityUid: string | null;tagUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof articleRemoveTagFromEntity>>, TError,{entityUid: string | null;tagUid: string | null}, TContext> => {

const mutationKey = ['articleRemoveTagFromEntity'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof articleRemoveTagFromEntity>>, {entityUid: string | null;tagUid: string | null}> = (props) => {
          const {entityUid,tagUid} = props ?? {};

          return  articleRemoveTagFromEntity(entityUid,tagUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ArticleRemoveTagFromEntityMutationResult = NonNullable<Awaited<ReturnType<typeof articleRemoveTagFromEntity>>>
    
    export type ArticleRemoveTagFromEntityMutationError = void

    /**
 * @summary Remove one tag from a record.
 */
export const useArticleRemoveTagFromEntity = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof articleRemoveTagFromEntity>>, TError,{entityUid: string | null;tagUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof articleRemoveTagFromEntity>>,
        TError,
        {entityUid: string | null;tagUid: string | null},
        TContext
      > => {

      const mutationOptions = getArticleRemoveTagFromEntityMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve all knowledge base categories.
 */
export const categoryGetAllCategories = (
    params?: CategoryGetAllCategoriesParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<CategoryGetAllCategories200>(
      {url: `/api/v1/support/categories`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getCategoryGetAllCategoriesQueryKey = (params?: CategoryGetAllCategoriesParams,) => {
    return [
    `/api/v1/support/categories`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getCategoryGetAllCategoriesQueryOptions = <TData = Awaited<ReturnType<typeof categoryGetAllCategories>>, TError = unknown>(params?: CategoryGetAllCategoriesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof categoryGetAllCategories>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCategoryGetAllCategoriesQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof categoryGetAllCategories>>> = ({ signal }) => categoryGetAllCategories(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof categoryGetAllCategories>>, TError, TData> & { queryKey: QueryKey }
}

export type CategoryGetAllCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof categoryGetAllCategories>>>
export type CategoryGetAllCategoriesQueryError = unknown


/**
 * @summary Retrieve all knowledge base categories.
 */

export function useCategoryGetAllCategories<TData = Awaited<ReturnType<typeof categoryGetAllCategories>>, TError = unknown>(
 params?: CategoryGetAllCategoriesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof categoryGetAllCategories>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCategoryGetAllCategoriesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




