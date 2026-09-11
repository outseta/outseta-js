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
  Definition,
  DefinitionGetAllDefinitions200,
  DefinitionGetAllDefinitionsParams,
  Tag,
  TagAddTagBody,
  TagGetAllTags200,
  TagGetAllTagsParams,
  TagUpdateTagBody
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
 * Each tag applies to a single entity type. Pass entityType to retrieve the tags for one
of them, for example entityType=Article for knowledge base article tags.
            
How a tag goes onto a record depends on the entity type. Articles, broadcasts and
segments each take tags on a tags sub-resource of the record:
            
- POST /support/articles/{entityUid}/tags and PUT, GET, DELETE on the same path
- POST /email/campaigns/broadcasts/{entityUid}/tags and the same for the rest
- POST /crm/segments/{entityUid}/tags and the same for the rest
            
A support ticket is the exception. It holds its tags in its own CaseTags collection, so
you add and remove ticket tags with PUT /support/cases/{caseUid}.
            
Name is unique within an entity type. SystemName and SystemDescription identify a
built-in tag (for example Priority.Urgent) and are set by Outseta.
 * @summary Retrieve all tags.
 */
export const tagGetAllTags = (
    params?: TagGetAllTagsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<TagGetAllTags200>(
      {url: `/api/v1/attribute/tags`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getTagGetAllTagsQueryKey = (params?: TagGetAllTagsParams,) => {
    return [
    `/api/v1/attribute/tags`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getTagGetAllTagsQueryOptions = <TData = Awaited<ReturnType<typeof tagGetAllTags>>, TError = void>(params?: TagGetAllTagsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof tagGetAllTags>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTagGetAllTagsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof tagGetAllTags>>> = ({ signal }) => tagGetAllTags(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof tagGetAllTags>>, TError, TData> & { queryKey: QueryKey }
}

export type TagGetAllTagsQueryResult = NonNullable<Awaited<ReturnType<typeof tagGetAllTags>>>
export type TagGetAllTagsQueryError = void


/**
 * @summary Retrieve all tags.
 */

export function useTagGetAllTags<TData = Awaited<ReturnType<typeof tagGetAllTags>>, TError = void>(
 params?: TagGetAllTagsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof tagGetAllTags>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTagGetAllTagsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Name and EntityType are required. EntityType fixes what the tag can go on: 4 (Case) for
support tickets, 13 (Article) for knowledge base articles, 12 (Broadcast) for broadcast
emails, 11 (Segment) for segments. TagColor sets the color the tag shows in.
            
Name must be unique within an entity type. If the name already exists for that
entity type, the existing tag is returned instead of a duplicate, and its color is
updated when a different TagColor is supplied. SystemName and SystemDescription are
set by Outseta and are ignored here.
 * @summary Create a tag.
 */
export const tagAddTag = (
    tagAddTagBody: NonReadonly<TagAddTagBody>,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Tag>(
      {url: `/api/v1/attribute/tags`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: tagAddTagBody, signal
    },
      options);
    }
  


export const getTagAddTagMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tagAddTag>>, TError,{data: NonReadonly<TagAddTagBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof tagAddTag>>, TError,{data: NonReadonly<TagAddTagBody>}, TContext> => {

const mutationKey = ['tagAddTag'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tagAddTag>>, {data: NonReadonly<TagAddTagBody>}> = (props) => {
          const {data} = props ?? {};

          return  tagAddTag(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TagAddTagMutationResult = NonNullable<Awaited<ReturnType<typeof tagAddTag>>>
    export type TagAddTagMutationBody = NonReadonly<TagAddTagBody>
    export type TagAddTagMutationError = void

    /**
 * @summary Create a tag.
 */
export const useTagAddTag = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tagAddTag>>, TError,{data: NonReadonly<TagAddTagBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof tagAddTag>>,
        TError,
        {data: NonReadonly<TagAddTagBody>},
        TContext
      > => {

      const mutationOptions = getTagAddTagMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Retrieve a tag.
 */
export const tagGetTag = (
    tagUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Tag>(
      {url: `/api/v1/attribute/tags/${tagUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getTagGetTagQueryKey = (tagUid?: string | null,) => {
    return [
    `/api/v1/attribute/tags/${tagUid}`
    ] as const;
    }

    
export const getTagGetTagQueryOptions = <TData = Awaited<ReturnType<typeof tagGetTag>>, TError = void>(tagUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof tagGetTag>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTagGetTagQueryKey(tagUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof tagGetTag>>> = ({ signal }) => tagGetTag(tagUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(tagUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof tagGetTag>>, TError, TData> & { queryKey: QueryKey }
}

export type TagGetTagQueryResult = NonNullable<Awaited<ReturnType<typeof tagGetTag>>>
export type TagGetTagQueryError = void


/**
 * @summary Retrieve a tag.
 */

export function useTagGetTag<TData = Awaited<ReturnType<typeof tagGetTag>>, TError = void>(
 tagUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof tagGetTag>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTagGetTagQueryOptions(tagUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Use this to rename a tag or to change its color. EntityType cannot be changed after
the tag is created. Name must stay unique within the entity type. SystemName and
SystemDescription are set by Outseta and cannot be changed.
 * @summary Update a tag.
 */
export const tagUpdateTag = (
    tagUid: string | null,
    tagUpdateTagBody: NonReadonly<TagUpdateTagBody>,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Tag>(
      {url: `/api/v1/attribute/tags/${tagUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: tagUpdateTagBody
    },
      options);
    }
  


export const getTagUpdateTagMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tagUpdateTag>>, TError,{tagUid: string | null;data: NonReadonly<TagUpdateTagBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof tagUpdateTag>>, TError,{tagUid: string | null;data: NonReadonly<TagUpdateTagBody>}, TContext> => {

const mutationKey = ['tagUpdateTag'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tagUpdateTag>>, {tagUid: string | null;data: NonReadonly<TagUpdateTagBody>}> = (props) => {
          const {tagUid,data} = props ?? {};

          return  tagUpdateTag(tagUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TagUpdateTagMutationResult = NonNullable<Awaited<ReturnType<typeof tagUpdateTag>>>
    export type TagUpdateTagMutationBody = NonReadonly<TagUpdateTagBody>
    export type TagUpdateTagMutationError = void

    /**
 * @summary Update a tag.
 */
export const useTagUpdateTag = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tagUpdateTag>>, TError,{tagUid: string | null;data: NonReadonly<TagUpdateTagBody>}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof tagUpdateTag>>,
        TError,
        {tagUid: string | null;data: NonReadonly<TagUpdateTagBody>},
        TContext
      > => {

      const mutationOptions = getTagUpdateTagMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * The tag is also taken off every record that carries it. For a Case tag, it is
removed from all support tickets that have it.
            
An Article tag that the knowledge base version filter names cannot be deleted. Take it
out of the version filter first, then delete it.
 * @summary Delete a tag.
 */
export const tagDeleteTag = (
    tagUid: string | null,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/attribute/tags/${tagUid}`, method: 'DELETE',
        responseType: 'blob'
    },
      options);
    }
  


export const getTagDeleteTagMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tagDeleteTag>>, TError,{tagUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof tagDeleteTag>>, TError,{tagUid: string | null}, TContext> => {

const mutationKey = ['tagDeleteTag'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tagDeleteTag>>, {tagUid: string | null}> = (props) => {
          const {tagUid} = props ?? {};

          return  tagDeleteTag(tagUid,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type TagDeleteTagMutationResult = NonNullable<Awaited<ReturnType<typeof tagDeleteTag>>>
    
    export type TagDeleteTagMutationError = void

    /**
 * @summary Delete a tag.
 */
export const useTagDeleteTag = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tagDeleteTag>>, TError,{tagUid: string | null}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof tagDeleteTag>>,
        TError,
        {tagUid: string | null},
        TContext
      > => {

      const mutationOptions = getTagDeleteTagMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * entityType is the name of an EntityType enum value, for example: Account, Person,
Deal. Definitions describe the labels, system names, and control types of
the custom attributes that have been added to that entity.
 * @summary Retrieve all custom attribute definitions.
 */
export const definitionGetAllDefinitions = (
    entityType: string | null,
    params?: DefinitionGetAllDefinitionsParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<DefinitionGetAllDefinitions200>(
      {url: `/api/v1/attributes/${entityType}/definitions`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getDefinitionGetAllDefinitionsQueryKey = (entityType?: string | null,
    params?: DefinitionGetAllDefinitionsParams,) => {
    return [
    `/api/v1/attributes/${entityType}/definitions`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getDefinitionGetAllDefinitionsQueryOptions = <TData = Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError = unknown>(entityType: string | null,
    params?: DefinitionGetAllDefinitionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDefinitionGetAllDefinitionsQueryKey(entityType,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof definitionGetAllDefinitions>>> = ({ signal }) => definitionGetAllDefinitions(entityType,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(entityType), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError, TData> & { queryKey: QueryKey }
}

export type DefinitionGetAllDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof definitionGetAllDefinitions>>>
export type DefinitionGetAllDefinitionsQueryError = unknown


/**
 * @summary Retrieve all custom attribute definitions.
 */

export function useDefinitionGetAllDefinitions<TData = Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError = unknown>(
 entityType: string | null,
    params?: DefinitionGetAllDefinitionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDefinitionGetAllDefinitionsQueryOptions(entityType,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * The entityType segment of the URL must match the type the definition belongs to
(e.g. Account, Person, Deal).
 * @summary Retrieve a custom attribute definition.
 */
export const definitionGetDefinition = (
    definitionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Definition>(
      {url: `/api/v1/attributes/definitions/${definitionUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getDefinitionGetDefinitionQueryKey = (definitionUid?: string | null,) => {
    return [
    `/api/v1/attributes/definitions/${definitionUid}`
    ] as const;
    }

    
export const getDefinitionGetDefinitionQueryOptions = <TData = Awaited<ReturnType<typeof definitionGetDefinition>>, TError = void>(definitionUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetDefinition>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDefinitionGetDefinitionQueryKey(definitionUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof definitionGetDefinition>>> = ({ signal }) => definitionGetDefinition(definitionUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(definitionUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof definitionGetDefinition>>, TError, TData> & { queryKey: QueryKey }
}

export type DefinitionGetDefinitionQueryResult = NonNullable<Awaited<ReturnType<typeof definitionGetDefinition>>>
export type DefinitionGetDefinitionQueryError = void


/**
 * @summary Retrieve a custom attribute definition.
 */

export function useDefinitionGetDefinition<TData = Awaited<ReturnType<typeof definitionGetDefinition>>, TError = void>(
 definitionUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetDefinition>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDefinitionGetDefinitionQueryOptions(definitionUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




