// @ts-nocheck
import {
  useQuery
} from '@tanstack/react-query';
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  Definition
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * entityType is the name of an EntityType enum value, for example: Account, Person,
Deal. Definitions describe the labels, system names, and control types of
the custom attributes that have been added to that entity.
 * @summary Retrieve all custom attribute definitions.
 */
export const definitionGetAllDefinitions = (
    entityType: string | null,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Definition[]>(
      {url: `/api/v1/attributes/${entityType}/definitions`, method: 'GET', signal
    },
      options);
    }
  



export const getDefinitionGetAllDefinitionsQueryKey = (entityType?: string | null,) => {
    return [
    `/api/v1/attributes/${entityType}/definitions`
    ] as const;
    }

    
export const getDefinitionGetAllDefinitionsQueryOptions = <TData = Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError = unknown>(entityType: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getDefinitionGetAllDefinitionsQueryKey(entityType);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof definitionGetAllDefinitions>>> = ({ signal }) => definitionGetAllDefinitions(entityType, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(entityType), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError, TData> & { queryKey: QueryKey }
}

export type DefinitionGetAllDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof definitionGetAllDefinitions>>>
export type DefinitionGetAllDefinitionsQueryError = unknown


/**
 * @summary Retrieve all custom attribute definitions.
 */

export function useDefinitionGetAllDefinitions<TData = Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError = unknown>(
 entityType: string | null, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof definitionGetAllDefinitions>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getDefinitionGetAllDefinitionsQueryOptions(entityType,options)

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




