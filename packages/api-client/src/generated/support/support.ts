// @ts-nocheck
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
  data: CaseGetAllCases200
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
export type caseUpdateCaseResponse200 = {
  data: Case
  status: 200
}

export type caseUpdateCaseResponse400 = {
  data: void
  status: 400
}

export type caseUpdateCaseResponse401 = {
  data: void
  status: 401
}

export type caseUpdateCaseResponse404 = {
  data: void
  status: 404
}
    
export type caseUpdateCaseResponseSuccess = (caseUpdateCaseResponse200) & {
  headers: Headers;
};
export type caseUpdateCaseResponseError = (caseUpdateCaseResponse400 | caseUpdateCaseResponse401 | caseUpdateCaseResponse404) & {
  headers: Headers;
};

export type caseUpdateCaseResponse = (caseUpdateCaseResponseSuccess | caseUpdateCaseResponseError)

export const getCaseUpdateCaseUrl = (caseUid: string | null,) => {


  

  return `/api/v1/support/cases/${caseUid}`
}

export const caseUpdateCase = async (caseUid: string | null,
    caseUpdateCaseBody: NonReadonly<CaseUpdateCaseBody>, options?: RequestInit): Promise<caseUpdateCaseResponse> => {
  
  return customFetch<caseUpdateCaseResponse>(getCaseUpdateCaseUrl(caseUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      caseUpdateCaseBody,)
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
  data: ArticleGetAllArticles200
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
 * Send the uids of the tags to add. Tags that the record already carries stay on it, and
naming one of them again changes nothing, so the same request is safe to repeat. To
replace the whole set instead, use PUT on this same path.
            
A tag belongs to one entity type, so use tags whose EntityType matches this record.
List them with GET /attribute/tags. A uid in the list that names no tag is skipped.
 * @summary Add tags to a record.
 */
export type articleAddTagToEntityResponse200 = {
  data: Blob
  status: 200
}

export type articleAddTagToEntityResponse400 = {
  data: void
  status: 400
}

export type articleAddTagToEntityResponse401 = {
  data: void
  status: 401
}

export type articleAddTagToEntityResponse404 = {
  data: void
  status: 404
}
    
export type articleAddTagToEntityResponseSuccess = (articleAddTagToEntityResponse200) & {
  headers: Headers;
};
export type articleAddTagToEntityResponseError = (articleAddTagToEntityResponse400 | articleAddTagToEntityResponse401 | articleAddTagToEntityResponse404) & {
  headers: Headers;
};

export type articleAddTagToEntityResponse = (articleAddTagToEntityResponseSuccess | articleAddTagToEntityResponseError)

export const getArticleAddTagToEntityUrl = (entityUid: string | null,) => {


  

  return `/api/v1/support/articles/${entityUid}/tags`
}

export const articleAddTagToEntity = async (entityUid: string | null,
    articleAddTagToEntityBody: ArticleAddTagToEntityBody, options?: RequestInit): Promise<articleAddTagToEntityResponse> => {
  
  return customFetch<articleAddTagToEntityResponse>(getArticleAddTagToEntityUrl(entityUid),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      articleAddTagToEntityBody,)
  }
);}


/**
 * Returns the tags themselves, not the links that hold them. The same tags are also
available on the record: ask for them with the fields parameter, for example
fields=Uid,Tags.Uid,Tags.Name,Tags.TagColor. Tags cost an extra query, so the record
leaves them out unless fields names Tags or is a plain wildcard.
 * @summary Retrieve the tags on a record.
 */
export type articleGetTagsForEntityResponse200 = {
  data: ArticleGetTagsForEntity200
  status: 200
}

export type articleGetTagsForEntityResponse400 = {
  data: void
  status: 400
}

export type articleGetTagsForEntityResponse401 = {
  data: void
  status: 401
}
    
export type articleGetTagsForEntityResponseSuccess = (articleGetTagsForEntityResponse200) & {
  headers: Headers;
};
export type articleGetTagsForEntityResponseError = (articleGetTagsForEntityResponse400 | articleGetTagsForEntityResponse401) & {
  headers: Headers;
};

export type articleGetTagsForEntityResponse = (articleGetTagsForEntityResponseSuccess | articleGetTagsForEntityResponseError)

export const getArticleGetTagsForEntityUrl = (entityUid: string | null,
    params?: ArticleGetTagsForEntityParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/support/articles/${entityUid}/tags?${stringifiedParams}` : `/api/v1/support/articles/${entityUid}/tags`
}

export const articleGetTagsForEntity = async (entityUid: string | null,
    params?: ArticleGetTagsForEntityParams, options?: RequestInit): Promise<articleGetTagsForEntityResponse> => {
  
  return customFetch<articleGetTagsForEntityResponse>(getArticleGetTagsForEntityUrl(entityUid,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Send the full set of tags the record must end with. A tag that the list leaves out is
taken off the record, and one that the list names is added. Send an empty list to take
every tag off. To add tags without disturbing the others, use POST on this same path.
            
A tag belongs to one entity type, so use tags whose EntityType matches this record.
List them with GET /attribute/tags. A uid in the list that names no tag is skipped.
 * @summary Replace the tags on a record.
 */
export type articleSetTagsForEntityResponse200 = {
  data: Blob
  status: 200
}

export type articleSetTagsForEntityResponse400 = {
  data: void
  status: 400
}

export type articleSetTagsForEntityResponse401 = {
  data: void
  status: 401
}

export type articleSetTagsForEntityResponse404 = {
  data: void
  status: 404
}
    
export type articleSetTagsForEntityResponseSuccess = (articleSetTagsForEntityResponse200) & {
  headers: Headers;
};
export type articleSetTagsForEntityResponseError = (articleSetTagsForEntityResponse400 | articleSetTagsForEntityResponse401 | articleSetTagsForEntityResponse404) & {
  headers: Headers;
};

export type articleSetTagsForEntityResponse = (articleSetTagsForEntityResponseSuccess | articleSetTagsForEntityResponseError)

export const getArticleSetTagsForEntityUrl = (entityUid: string | null,) => {


  

  return `/api/v1/support/articles/${entityUid}/tags`
}

export const articleSetTagsForEntity = async (entityUid: string | null,
    articleSetTagsForEntityBody: ArticleSetTagsForEntityBody, options?: RequestInit): Promise<articleSetTagsForEntityResponse> => {
  
  return customFetch<articleSetTagsForEntityResponse>(getArticleSetTagsForEntityUrl(entityUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      articleSetTagsForEntityBody,)
  }
);}


/**
 * The tag itself is kept and stays available for other records. If the record does not
carry the tag, nothing changes and the call still succeeds.
 * @summary Remove one tag from a record.
 */
export type articleRemoveTagFromEntityResponse200 = {
  data: Blob
  status: 200
}

export type articleRemoveTagFromEntityResponse400 = {
  data: void
  status: 400
}

export type articleRemoveTagFromEntityResponse401 = {
  data: void
  status: 401
}

export type articleRemoveTagFromEntityResponse404 = {
  data: void
  status: 404
}
    
export type articleRemoveTagFromEntityResponseSuccess = (articleRemoveTagFromEntityResponse200) & {
  headers: Headers;
};
export type articleRemoveTagFromEntityResponseError = (articleRemoveTagFromEntityResponse400 | articleRemoveTagFromEntityResponse401 | articleRemoveTagFromEntityResponse404) & {
  headers: Headers;
};

export type articleRemoveTagFromEntityResponse = (articleRemoveTagFromEntityResponseSuccess | articleRemoveTagFromEntityResponseError)

export const getArticleRemoveTagFromEntityUrl = (entityUid: string | null,
    tagUid: string | null,) => {


  

  return `/api/v1/support/articles/${entityUid}/tags/${tagUid}`
}

export const articleRemoveTagFromEntity = async (entityUid: string | null,
    tagUid: string | null, options?: RequestInit): Promise<articleRemoveTagFromEntityResponse> => {
  
  return customFetch<articleRemoveTagFromEntityResponse>(getArticleRemoveTagFromEntityUrl(entityUid,tagUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * @summary Retrieve all knowledge base categories.
 */
export type categoryGetAllCategoriesResponse200 = {
  data: CategoryGetAllCategories200
  status: 200
}
    
export type categoryGetAllCategoriesResponseSuccess = (categoryGetAllCategoriesResponse200) & {
  headers: Headers;
};
;

export type categoryGetAllCategoriesResponse = (categoryGetAllCategoriesResponseSuccess)

export const getCategoryGetAllCategoriesUrl = (params?: CategoryGetAllCategoriesParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/support/categories?${stringifiedParams}` : `/api/v1/support/categories`
}

export const categoryGetAllCategories = async (params?: CategoryGetAllCategoriesParams, options?: RequestInit): Promise<categoryGetAllCategoriesResponse> => {
  
  return customFetch<categoryGetAllCategoriesResponse>(getCategoryGetAllCategoriesUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


