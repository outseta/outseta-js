// @ts-nocheck
import type {
  Article,
  ArticleAddArticleBody,
  ArticleGetAllArticlesParams,
  Case,
  CaseAddCaseBody,
  CaseAddCaseParams,
  CaseGetAllCasesParams,
  CaseHistory,
  Category
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
 * Optionally filtered by search string, tag, and/or assignment.
Assigned cases can be filtered by passing in the AssignedToPersonClientIdentifier,
which is the Uid of the person the case is assigned to.
 * @summary Retrieve all cases.
 */
export type caseGetAllCasesResponse200 = {
  data: Case[]
  status: 200
}

export type caseGetAllCasesResponse400 = {
  data: void
  status: 400
}

export type caseGetAllCasesResponse401 = {
  data: void
  status: 401
}
    
export type caseGetAllCasesResponseSuccess = (caseGetAllCasesResponse200) & {
  headers: Headers;
};
export type caseGetAllCasesResponseError = (caseGetAllCasesResponse400 | caseGetAllCasesResponse401) & {
  headers: Headers;
};

export type caseGetAllCasesResponse = (caseGetAllCasesResponseSuccess | caseGetAllCasesResponseError)

export const getCaseGetAllCasesUrl = (params?: CaseGetAllCasesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/support/cases?${stringifiedParams}` : `/api/v1/support/cases`
}

export const caseGetAllCases = async (params?: CaseGetAllCasesParams, options?: RequestInit): Promise<caseGetAllCasesResponse> => {
  
  return customFetch<caseGetAllCasesResponse>(getCaseGetAllCasesUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Adds a case into the support system.
 */
export type caseAddCaseResponse200 = {
  data: Case
  status: 200
}

export type caseAddCaseResponse401 = {
  data: void
  status: 401
}
    
export type caseAddCaseResponseSuccess = (caseAddCaseResponse200) & {
  headers: Headers;
};
export type caseAddCaseResponseError = (caseAddCaseResponse401) & {
  headers: Headers;
};

export type caseAddCaseResponse = (caseAddCaseResponseSuccess | caseAddCaseResponseError)

export const getCaseAddCaseUrl = (params?: CaseAddCaseParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/support/cases?${stringifiedParams}` : `/api/v1/support/cases`
}

export const caseAddCase = async (caseAddCaseBody: NonReadonly<CaseAddCaseBody>,
    params?: CaseAddCaseParams, options?: RequestInit): Promise<caseAddCaseResponse> => {
  
  return customFetch<caseAddCaseResponse>(getCaseAddCaseUrl(params),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      caseAddCaseBody,)
  }
);}


/**
 * @summary Retrieve a case.
 */
export type caseGetCaseResponse200 = {
  data: Case
  status: 200
}

export type caseGetCaseResponse400 = {
  data: void
  status: 400
}

export type caseGetCaseResponse401 = {
  data: void
  status: 401
}

export type caseGetCaseResponse404 = {
  data: void
  status: 404
}
    
export type caseGetCaseResponseSuccess = (caseGetCaseResponse200) & {
  headers: Headers;
};
export type caseGetCaseResponseError = (caseGetCaseResponse400 | caseGetCaseResponse401 | caseGetCaseResponse404) & {
  headers: Headers;
};

export type caseGetCaseResponse = (caseGetCaseResponseSuccess | caseGetCaseResponseError)

export const getCaseGetCaseUrl = (caseUid: string | null,) => {


  

  return `/api/v1/support/cases/${caseUid}`
}

export const caseGetCase = async (caseUid: string | null, options?: RequestInit): Promise<caseGetCaseResponse> => {
  
  return customFetch<caseGetCaseResponse>(getCaseGetCaseUrl(caseUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Adds a reply from an agent to a support case.
 */
export type caseAddReplyResponse200 = {
  data: Blob
  status: 200
}

export type caseAddReplyResponse400 = {
  data: void
  status: 400
}

export type caseAddReplyResponse401 = {
  data: void
  status: 401
}

export type caseAddReplyResponse404 = {
  data: void
  status: 404
}
    
export type caseAddReplyResponseSuccess = (caseAddReplyResponse200) & {
  headers: Headers;
};
export type caseAddReplyResponseError = (caseAddReplyResponse400 | caseAddReplyResponse401 | caseAddReplyResponse404) & {
  headers: Headers;
};

export type caseAddReplyResponse = (caseAddReplyResponseSuccess | caseAddReplyResponseError)

export const getCaseAddReplyUrl = (caseUid: string | null,) => {


  

  return `/api/v1/support/cases/${caseUid}/replies`
}

export const caseAddReply = async (caseUid: string | null, options?: RequestInit): Promise<caseAddReplyResponse> => {
  
  return customFetch<caseAddReplyResponse>(getCaseAddReplyUrl(caseUid),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Adds a response to the case from the person that opened the case.
 */
export type caseAddClientResponseResponse200 = {
  data: CaseHistory
  status: 200
}

export type caseAddClientResponseResponse400 = {
  data: void
  status: 400
}

export type caseAddClientResponseResponse401 = {
  data: void
  status: 401
}

export type caseAddClientResponseResponse404 = {
  data: void
  status: 404
}
    
export type caseAddClientResponseResponseSuccess = (caseAddClientResponseResponse200) & {
  headers: Headers;
};
export type caseAddClientResponseResponseError = (caseAddClientResponseResponse400 | caseAddClientResponseResponse401 | caseAddClientResponseResponse404) & {
  headers: Headers;
};

export type caseAddClientResponseResponse = (caseAddClientResponseResponseSuccess | caseAddClientResponseResponseError)

export const getCaseAddClientResponseUrl = (caseUid: string | null,
    comment: string | null,) => {


  

  return `/api/v1/support/cases/${caseUid}/clientresponse/${comment}`
}

export const caseAddClientResponse = async (caseUid: string | null,
    comment: string | null, options?: RequestInit): Promise<caseAddClientResponseResponse> => {
  
  return customFetch<caseAddClientResponseResponse>(getCaseAddClientResponseUrl(caseUid,comment),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}


/**
 * @summary Retrieve all knowledge base articles.
 */
export type articleGetAllArticlesResponse200 = {
  data: Article[]
  status: 200
}
    
export type articleGetAllArticlesResponseSuccess = (articleGetAllArticlesResponse200) & {
  headers: Headers;
};
;

export type articleGetAllArticlesResponse = (articleGetAllArticlesResponseSuccess)

export const getArticleGetAllArticlesUrl = (params?: ArticleGetAllArticlesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/support/articles?${stringifiedParams}` : `/api/v1/support/articles`
}

export const articleGetAllArticles = async (params?: ArticleGetAllArticlesParams, options?: RequestInit): Promise<articleGetAllArticlesResponse> => {
  
  return customFetch<articleGetAllArticlesResponse>(getArticleGetAllArticlesUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Create a knowledge base article.
 */
export type articleAddArticleResponse200 = {
  data: Article
  status: 200
}

export type articleAddArticleResponse401 = {
  data: void
  status: 401
}
    
export type articleAddArticleResponseSuccess = (articleAddArticleResponse200) & {
  headers: Headers;
};
export type articleAddArticleResponseError = (articleAddArticleResponse401) & {
  headers: Headers;
};

export type articleAddArticleResponse = (articleAddArticleResponseSuccess | articleAddArticleResponseError)

export const getArticleAddArticleUrl = () => {


  

  return `/api/v1/support/articles`
}

export const articleAddArticle = async (articleAddArticleBody: NonReadonly<ArticleAddArticleBody>, options?: RequestInit): Promise<articleAddArticleResponse> => {
  
  return customFetch<articleAddArticleResponse>(getArticleAddArticleUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      articleAddArticleBody,)
  }
);}


/**
 * @summary Retrieve a knowledge base article.
 */
export type articleGetArticleResponse200 = {
  data: Article
  status: 200
}

export type articleGetArticleResponse400 = {
  data: void
  status: 400
}

export type articleGetArticleResponse404 = {
  data: void
  status: 404
}
    
export type articleGetArticleResponseSuccess = (articleGetArticleResponse200) & {
  headers: Headers;
};
export type articleGetArticleResponseError = (articleGetArticleResponse400 | articleGetArticleResponse404) & {
  headers: Headers;
};

export type articleGetArticleResponse = (articleGetArticleResponseSuccess | articleGetArticleResponseError)

export const getArticleGetArticleUrl = (articleUid: string | null,) => {


  

  return `/api/v1/support/articles/${articleUid}`
}

export const articleGetArticle = async (articleUid: string | null, options?: RequestInit): Promise<articleGetArticleResponse> => {
  
  return customFetch<articleGetArticleResponse>(getArticleGetArticleUrl(articleUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Retrieve all knowledge base categories.
 */
export type categoryGetAllCategoriesResponse200 = {
  data: Category[]
  status: 200
}
    
export type categoryGetAllCategoriesResponseSuccess = (categoryGetAllCategoriesResponse200) & {
  headers: Headers;
};
;

export type categoryGetAllCategoriesResponse = (categoryGetAllCategoriesResponseSuccess)

export const getCategoryGetAllCategoriesUrl = () => {


  

  return `/api/v1/support/categories`
}

export const categoryGetAllCategories = async ( options?: RequestInit): Promise<categoryGetAllCategoriesResponse> => {
  
  return customFetch<categoryGetAllCategoriesResponse>(getCategoryGetAllCategoriesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


