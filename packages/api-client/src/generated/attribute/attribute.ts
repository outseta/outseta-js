// @ts-nocheck
import type {
  Definition,
  DefinitionGetAllDefinitions200,
  DefinitionGetAllDefinitionsParams,
  Tag,
  TagAddTagBody,
  TagGetAllTags200,
  TagGetAllTagsParams,
  TagUpdateTagBody
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
 * Each tag applies to a single entity type. Pass entityType=Case to retrieve the tags
that can be put on support tickets.
            
How a tag goes onto a record depends on the entity type. A support ticket holds its
tags in its own CaseTags collection, so you add and remove ticket tags with
PUT /support/cases/{caseUid}. Other entity types store their tags differently. This
documentation covers ticket tags only.
            
Name is unique within an entity type. SystemName and SystemDescription identify a
built-in tag (for example Priority.Urgent) and are set by Outseta.
 * @summary Retrieve all tags.
 */
export type tagGetAllTagsResponse200 = {
  data: TagGetAllTags200
  status: 200
}

export type tagGetAllTagsResponse401 = {
  data: void
  status: 401
}
    
export type tagGetAllTagsResponseSuccess = (tagGetAllTagsResponse200) & {
  headers: Headers;
};
export type tagGetAllTagsResponseError = (tagGetAllTagsResponse401) & {
  headers: Headers;
};

export type tagGetAllTagsResponse = (tagGetAllTagsResponseSuccess | tagGetAllTagsResponseError)

export const getTagGetAllTagsUrl = (params?: TagGetAllTagsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/attribute/tags?${stringifiedParams}` : `/api/v1/attribute/tags`
}

export const tagGetAllTags = async (params?: TagGetAllTagsParams, options?: RequestInit): Promise<tagGetAllTagsResponse> => {
  
  return customFetch<tagGetAllTagsResponse>(getTagGetAllTagsUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Name and EntityType are required. Use EntityType 4 (Case) for a tag that goes on
support tickets. TagColor sets the color the tag shows in.
            
Name must be unique within an entity type. If the name already exists for that
entity type, the existing tag is returned instead of a duplicate, and its color is
updated when a different TagColor is supplied. SystemName and SystemDescription are
set by Outseta and are ignored here.
 * @summary Create a tag.
 */
export type tagAddTagResponse200 = {
  data: Tag
  status: 200
}

export type tagAddTagResponse401 = {
  data: void
  status: 401
}
    
export type tagAddTagResponseSuccess = (tagAddTagResponse200) & {
  headers: Headers;
};
export type tagAddTagResponseError = (tagAddTagResponse401) & {
  headers: Headers;
};

export type tagAddTagResponse = (tagAddTagResponseSuccess | tagAddTagResponseError)

export const getTagAddTagUrl = () => {


  

  return `/api/v1/attribute/tags`
}

export const tagAddTag = async (tagAddTagBody: NonReadonly<TagAddTagBody>, options?: RequestInit): Promise<tagAddTagResponse> => {
  
  return customFetch<tagAddTagResponse>(getTagAddTagUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      tagAddTagBody,)
  }
);}


/**
 * @summary Retrieve a tag.
 */
export type tagGetTagResponse200 = {
  data: Tag
  status: 200
}

export type tagGetTagResponse400 = {
  data: void
  status: 400
}

export type tagGetTagResponse401 = {
  data: void
  status: 401
}

export type tagGetTagResponse404 = {
  data: void
  status: 404
}
    
export type tagGetTagResponseSuccess = (tagGetTagResponse200) & {
  headers: Headers;
};
export type tagGetTagResponseError = (tagGetTagResponse400 | tagGetTagResponse401 | tagGetTagResponse404) & {
  headers: Headers;
};

export type tagGetTagResponse = (tagGetTagResponseSuccess | tagGetTagResponseError)

export const getTagGetTagUrl = (tagUid: string | null,) => {


  

  return `/api/v1/attribute/tags/${tagUid}`
}

export const tagGetTag = async (tagUid: string | null, options?: RequestInit): Promise<tagGetTagResponse> => {
  
  return customFetch<tagGetTagResponse>(getTagGetTagUrl(tagUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * Use this to rename a tag or to change its color. EntityType cannot be changed after
the tag is created. Name must stay unique within the entity type. SystemName and
SystemDescription are set by Outseta and cannot be changed.
 * @summary Update a tag.
 */
export type tagUpdateTagResponse200 = {
  data: Tag
  status: 200
}

export type tagUpdateTagResponse400 = {
  data: void
  status: 400
}

export type tagUpdateTagResponse401 = {
  data: void
  status: 401
}

export type tagUpdateTagResponse404 = {
  data: void
  status: 404
}
    
export type tagUpdateTagResponseSuccess = (tagUpdateTagResponse200) & {
  headers: Headers;
};
export type tagUpdateTagResponseError = (tagUpdateTagResponse400 | tagUpdateTagResponse401 | tagUpdateTagResponse404) & {
  headers: Headers;
};

export type tagUpdateTagResponse = (tagUpdateTagResponseSuccess | tagUpdateTagResponseError)

export const getTagUpdateTagUrl = (tagUid: string | null,) => {


  

  return `/api/v1/attribute/tags/${tagUid}`
}

export const tagUpdateTag = async (tagUid: string | null,
    tagUpdateTagBody: NonReadonly<TagUpdateTagBody>, options?: RequestInit): Promise<tagUpdateTagResponse> => {
  
  return customFetch<tagUpdateTagResponse>(getTagUpdateTagUrl(tagUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      tagUpdateTagBody,)
  }
);}


/**
 * The tag is also taken off every record that carries it. For a Case tag, it is
removed from all support tickets that have it.
 * @summary Delete a tag.
 */
export type tagDeleteTagResponse200 = {
  data: Blob
  status: 200
}

export type tagDeleteTagResponse400 = {
  data: void
  status: 400
}

export type tagDeleteTagResponse401 = {
  data: void
  status: 401
}

export type tagDeleteTagResponse404 = {
  data: void
  status: 404
}
    
export type tagDeleteTagResponseSuccess = (tagDeleteTagResponse200) & {
  headers: Headers;
};
export type tagDeleteTagResponseError = (tagDeleteTagResponse400 | tagDeleteTagResponse401 | tagDeleteTagResponse404) & {
  headers: Headers;
};

export type tagDeleteTagResponse = (tagDeleteTagResponseSuccess | tagDeleteTagResponseError)

export const getTagDeleteTagUrl = (tagUid: string | null,) => {


  

  return `/api/v1/attribute/tags/${tagUid}`
}

export const tagDeleteTag = async (tagUid: string | null, options?: RequestInit): Promise<tagDeleteTagResponse> => {
  
  return customFetch<tagDeleteTagResponse>(getTagDeleteTagUrl(tagUid),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
);}


/**
 * entityType is the name of an EntityType enum value, for example: Account, Person,
Deal. Definitions describe the labels, system names, and control types of
the custom attributes that have been added to that entity.
 * @summary Retrieve all custom attribute definitions.
 */
export type definitionGetAllDefinitionsResponse200 = {
  data: DefinitionGetAllDefinitions200
  status: 200
}
    
export type definitionGetAllDefinitionsResponseSuccess = (definitionGetAllDefinitionsResponse200) & {
  headers: Headers;
};
;

export type definitionGetAllDefinitionsResponse = (definitionGetAllDefinitionsResponseSuccess)

export const getDefinitionGetAllDefinitionsUrl = (entityType: string | null,
    params?: DefinitionGetAllDefinitionsParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/attributes/${entityType}/definitions?${stringifiedParams}` : `/api/v1/attributes/${entityType}/definitions`
}

export const definitionGetAllDefinitions = async (entityType: string | null,
    params?: DefinitionGetAllDefinitionsParams, options?: RequestInit): Promise<definitionGetAllDefinitionsResponse> => {
  
  return customFetch<definitionGetAllDefinitionsResponse>(getDefinitionGetAllDefinitionsUrl(entityType,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * The entityType segment of the URL must match the type the definition belongs to
(e.g. Account, Person, Deal).
 * @summary Retrieve a custom attribute definition.
 */
export type definitionGetDefinitionResponse200 = {
  data: Definition
  status: 200
}

export type definitionGetDefinitionResponse400 = {
  data: void
  status: 400
}

export type definitionGetDefinitionResponse404 = {
  data: void
  status: 404
}
    
export type definitionGetDefinitionResponseSuccess = (definitionGetDefinitionResponse200) & {
  headers: Headers;
};
export type definitionGetDefinitionResponseError = (definitionGetDefinitionResponse400 | definitionGetDefinitionResponse404) & {
  headers: Headers;
};

export type definitionGetDefinitionResponse = (definitionGetDefinitionResponseSuccess | definitionGetDefinitionResponseError)

export const getDefinitionGetDefinitionUrl = (definitionUid: string | null,) => {


  

  return `/api/v1/attributes/definitions/${definitionUid}`
}

export const definitionGetDefinition = async (definitionUid: string | null, options?: RequestInit): Promise<definitionGetDefinitionResponse> => {
  
  return customFetch<definitionGetDefinitionResponse>(getDefinitionGetDefinitionUrl(definitionUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


