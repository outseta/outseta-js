// @ts-nocheck
import {
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  Article,
  ArticleGetAllArticlesParams,
  Case,
  CaseAddCaseBody,
  CaseAddCaseParams,
  CaseGetAllCasesParams,
  CaseHistory,
  Category
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * @summary Returns all cases, optionally filtered by search string, tag, and/or assignment.
Assigned cases can be filtered by passing in the AssignedToPersonClientIdentifier,
which is the Uid of the person the case is assigned to.
 */
export const caseGetAllCases = (
    params?: CaseGetAllCasesParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Case[]>(
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
 * @summary Returns all cases, optionally filtered by search string, tag, and/or assignment.
Assigned cases can be filtered by passing in the AssignedToPersonClientIdentifier,
which is the Uid of the person the case is assigned to.
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
    caseAddCaseBody: CaseAddCaseBody,
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
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddCase>>, TError,{data: CaseAddCaseBody;params?: CaseAddCaseParams}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof caseAddCase>>, TError,{data: CaseAddCaseBody;params?: CaseAddCaseParams}, TContext> => {

const mutationKey = ['caseAddCase'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof caseAddCase>>, {data: CaseAddCaseBody;params?: CaseAddCaseParams}> = (props) => {
          const {data,params} = props ?? {};

          return  caseAddCase(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CaseAddCaseMutationResult = NonNullable<Awaited<ReturnType<typeof caseAddCase>>>
    export type CaseAddCaseMutationBody = CaseAddCaseBody
    export type CaseAddCaseMutationError = void

    /**
 * @summary Adds a case into the support system.
 */
export const useCaseAddCase = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof caseAddCase>>, TError,{data: CaseAddCaseBody;params?: CaseAddCaseParams}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof caseAddCase>>,
        TError,
        {data: CaseAddCaseBody;params?: CaseAddCaseParams},
        TContext
      > => {

      const mutationOptions = getCaseAddCaseMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a specific case
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
 * @summary Retrieve a specific case
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
 * @summary Retrieves all knowledge base articles.
Matches on title or body of the article"
 */
export const articleGetAllArticles = (
    params?: ArticleGetAllArticlesParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Article[]>(
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
 * @summary Retrieves all knowledge base articles.
Matches on title or body of the article"
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
 * @summary Retrieves a knowledge base article.
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
 * @summary Retrieves a knowledge base article.
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
 * @summary Retrieves all knowledge base categories.
 */
export const categoryGetAllCategories = (
    
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Category[]>(
      {url: `/api/v1/support/categories`, method: 'GET', signal
    },
      options);
    }
  



export const getCategoryGetAllCategoriesQueryKey = () => {
    return [
    `/api/v1/support/categories`
    ] as const;
    }

    
export const getCategoryGetAllCategoriesQueryOptions = <TData = Awaited<ReturnType<typeof categoryGetAllCategories>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof categoryGetAllCategories>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCategoryGetAllCategoriesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof categoryGetAllCategories>>> = ({ signal }) => categoryGetAllCategories(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof categoryGetAllCategories>>, TError, TData> & { queryKey: QueryKey }
}

export type CategoryGetAllCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof categoryGetAllCategories>>>
export type CategoryGetAllCategoriesQueryError = unknown


/**
 * @summary Retrieves all knowledge base categories.
 */

export function useCategoryGetAllCategories<TData = Awaited<ReturnType<typeof categoryGetAllCategories>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof categoryGetAllCategories>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCategoryGetAllCategoriesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




