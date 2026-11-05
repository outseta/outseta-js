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
  AddDefinitionRequest,
  Definition,
  DefinitionGetAllDefinitions200,
  DefinitionGetAllDefinitionsParams,
  Tag,
  TagAddTagBody,
  TagGetAllTags200,
  TagGetAllTagsParams,
  TagUpdateTagBody,
  UpdateDefinitionRequest,
  ValidationError
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
 * Adds the definition of a custom property: its label, its system name and the control
used to fill it in. Only Account, Person and Deal have custom properties; any other
entityType returns 404. Once added, the property's values are read and written under
its SystemName on the accounts, people or deals themselves.
            
- **Label** (required): the name shown in Outseta. It must be unique among the entity
  type's custom properties and must not be the label of a standard property (for
  example Email on a person).
- **SystemName**: the property's name in the API, webhooks and forms. It must start
  with a letter, contain only letters, numbers and _, be unique for the entity type and
  not be the name of a standard property. When left out it is derived from Label the way
  the Outseta app does: Label "Favorite color" gives FavoriteColor.
- **ControlType**: one of Text, TextArea, Number, Date, Checkbox, Select, RadioList,
  CheckboxList. Defaults to Text. Select is a dropdown with one choice, RadioList shows
  the same choice as radio buttons, CheckboxList allows several choices, and Checkbox is
  a single yes/no whose value is True or False.
- **ControlParams**: the control's settings as a JSON object serialized into a string,
  not a nested object. Select, RadioList and CheckboxList need at least one option:
  "{\"Options\":[\"Small\",\"Medium\",\"Large\"]}". Number may set a Step
  ("{\"Step\":0.01}"); Text may set HintText and a Pattern (a regular expression the value
  must match). Other controls need no ControlParams.
            
EntityType comes from the URL; a Uid or EntityType in the request body is ignored.
 * @summary Add a custom property to accounts, people or deals.
 */
export const definitionAddDefinition = (
    entityType: string | null,
    addDefinitionRequest: AddDefinitionRequest,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Definition>(
      {url: `/api/v1/attributes/${entityType}/definitions`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: addDefinitionRequest, signal
    },
      options);
    }
  


export const getDefinitionAddDefinitionMutationOptions = <TError = ValidationError | void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof definitionAddDefinition>>, TError,{entityType: string | null;data: AddDefinitionRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof definitionAddDefinition>>, TError,{entityType: string | null;data: AddDefinitionRequest}, TContext> => {

const mutationKey = ['definitionAddDefinition'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof definitionAddDefinition>>, {entityType: string | null;data: AddDefinitionRequest}> = (props) => {
          const {entityType,data} = props ?? {};

          return  definitionAddDefinition(entityType,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DefinitionAddDefinitionMutationResult = NonNullable<Awaited<ReturnType<typeof definitionAddDefinition>>>
    export type DefinitionAddDefinitionMutationBody = AddDefinitionRequest
    export type DefinitionAddDefinitionMutationError = ValidationError | void

    /**
 * @summary Add a custom property to accounts, people or deals.
 */
export const useDefinitionAddDefinition = <TError = ValidationError | void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof definitionAddDefinition>>, TError,{entityType: string | null;data: AddDefinitionRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof definitionAddDefinition>>,
        TError,
        {entityType: string | null;data: AddDefinitionRequest},
        TContext
      > => {

      const mutationOptions = getDefinitionAddDefinitionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Use the entity type the definition belongs to (Account, Person or Deal) in the URL.
 * @summary Retrieve a custom attribute definition.
 */
export const definitionGetDefinition = (
    entityType: string | null,
    definitionUid: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Definition>(
      {url: `/api/v1/attributes/${entityType}/definitions/${definitionUid}`, method: 'GET', signal
    },
      options);
    }
  



export const getDefinitionGetDefinitionQueryKey = (entityType?: string | null,
    definitionUid?: string | null,) => {
    return [
    `/api/v1/attributes/${entityType}/definitions/${definitionUid}`
    ] as const;
    }

    
export const getDefinitionGetDefinitionQueryOptions = <TData = Awaited<ReturnType<typeof definitionGetDefinition>>, TError = void>(entityType: string | null,
    definitionUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetDefinition>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDefinitionGetDefinitionQueryKey(entityType,definitionUid);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof definitionGetDefinition>>> = ({ signal }) => definitionGetDefinition(entityType,definitionUid, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(entityType && definitionUid), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof definitionGetDefinition>>, TError, TData> & { queryKey: QueryKey }
}

export type DefinitionGetDefinitionQueryResult = NonNullable<Awaited<ReturnType<typeof definitionGetDefinition>>>
export type DefinitionGetDefinitionQueryError = void


/**
 * @summary Retrieve a custom attribute definition.
 */

export function useDefinitionGetDefinition<TData = Awaited<ReturnType<typeof definitionGetDefinition>>, TError = void>(
 entityType: string | null,
    definitionUid: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetDefinition>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDefinitionGetDefinitionQueryOptions(entityType,definitionUid,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Send only the fields to change: fields left out keep their current values. The rules
for Label, SystemName, ControlType and ControlParams are those of adding a definition.
The Uid and EntityType in the request body are ignored; the definition must belong to
the entityType in the URL, otherwise 404.
            
ControlParams is replaced as a whole. To add an option to a Select, RadioList or
CheckboxList, read the definition, add the option to its Options and send the full
list: "{\"Options\":[\"Small\",\"Medium\",\"Large\",\"X-Large\"]}". Values already
stored on accounts, people or deals are not changed when an option is renamed or
removed.
            
Changing SystemName keeps the stored values, which are returned under the new name
from then on. Anything that uses the old name (API clients, sign-up and profile forms,
segments, Zapier or other integrations) has to be updated to the new name.
 * @summary Update a custom property of accounts, people or deals.
 */
export const definitionUpdateDefinition = (
    entityType: string | null,
    definitionUid: string | null,
    updateDefinitionRequest: UpdateDefinitionRequest,
 options?: SecondParameter<typeof customFetch>,) => {
      
      
      return customFetch<Definition>(
      {url: `/api/v1/attributes/${entityType}/definitions/${definitionUid}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateDefinitionRequest
    },
      options);
    }
  


export const getDefinitionUpdateDefinitionMutationOptions = <TError = ValidationError | void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof definitionUpdateDefinition>>, TError,{entityType: string | null;definitionUid: string | null;data: UpdateDefinitionRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof definitionUpdateDefinition>>, TError,{entityType: string | null;definitionUid: string | null;data: UpdateDefinitionRequest}, TContext> => {

const mutationKey = ['definitionUpdateDefinition'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof definitionUpdateDefinition>>, {entityType: string | null;definitionUid: string | null;data: UpdateDefinitionRequest}> = (props) => {
          const {entityType,definitionUid,data} = props ?? {};

          return  definitionUpdateDefinition(entityType,definitionUid,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DefinitionUpdateDefinitionMutationResult = NonNullable<Awaited<ReturnType<typeof definitionUpdateDefinition>>>
    export type DefinitionUpdateDefinitionMutationBody = UpdateDefinitionRequest
    export type DefinitionUpdateDefinitionMutationError = ValidationError | void

    /**
 * @summary Update a custom property of accounts, people or deals.
 */
export const useDefinitionUpdateDefinition = <TError = ValidationError | void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof definitionUpdateDefinition>>, TError,{entityType: string | null;definitionUid: string | null;data: UpdateDefinitionRequest}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof definitionUpdateDefinition>>,
        TError,
        {entityType: string | null;definitionUid: string | null;data: UpdateDefinitionRequest},
        TContext
      > => {

      const mutationOptions = getDefinitionUpdateDefinitionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    