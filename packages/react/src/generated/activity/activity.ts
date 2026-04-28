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
  Activity,
  ActivityAddCustomActivityBody,
  ActivityGetAllParams
} from '../outsetaAPI.schemas';

import { customFetch } from '../../mutator';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * @summary Retrieves all the activities. One or multiple parameters can be defined to filter the results.
ActivityType=[100,101] where ActivityUpdated = 100 and AcccountUpdated = 101
Results will be limited to the last year unless ActivityDateTime is specified,
possibly with ActivityDateTime__gt/ActivityDateTime__gte and ActivityDateTime__lt/ActivityDateTime__lte
 */
export const activityGetAll = (
    params?: ActivityGetAllParams,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Activity[]>(
      {url: `/api/v1/activities`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getActivityGetAllQueryKey = (params?: ActivityGetAllParams,) => {
    return [
    `/api/v1/activities`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getActivityGetAllQueryOptions = <TData = Awaited<ReturnType<typeof activityGetAll>>, TError = void>(params?: ActivityGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof activityGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getActivityGetAllQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof activityGetAll>>> = ({ signal }) => activityGetAll(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof activityGetAll>>, TError, TData> & { queryKey: QueryKey }
}

export type ActivityGetAllQueryResult = NonNullable<Awaited<ReturnType<typeof activityGetAll>>>
export type ActivityGetAllQueryError = void


/**
 * @summary Retrieves all the activities. One or multiple parameters can be defined to filter the results.
ActivityType=[100,101] where ActivityUpdated = 100 and AcccountUpdated = 101
Results will be limited to the last year unless ActivityDateTime is specified,
possibly with ActivityDateTime__gt/ActivityDateTime__gte and ActivityDateTime__lt/ActivityDateTime__lte
 */

export function useActivityGetAll<TData = Awaited<ReturnType<typeof activityGetAll>>, TError = void>(
 params?: ActivityGetAllParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof activityGetAll>>, TError, TData>, request?: SecondParameter<typeof customFetch>}
  
 ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getActivityGetAllQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Record custom events associated to an account, person or deal. These activities show up
on the activity feed of the corresponding entity and can be leveraged to trigger drip
campaigns and other automation. For integration with drip campaigns make sure that what
you pass in the Title property matches the start / stop value specified for the campaign.
 */
export const activityAddCustomActivity = (
    activityAddCustomActivityBody: ActivityAddCustomActivityBody,
 options?: SecondParameter<typeof customFetch>,signal?: AbortSignal
) => {
      
      
      return customFetch<Blob>(
      {url: `/api/v1/activities/customactivity`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: activityAddCustomActivityBody,
        responseType: 'blob', signal
    },
      options);
    }
  


export const getActivityAddCustomActivityMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof activityAddCustomActivity>>, TError,{data: ActivityAddCustomActivityBody}, TContext>, request?: SecondParameter<typeof customFetch>}
): UseMutationOptions<Awaited<ReturnType<typeof activityAddCustomActivity>>, TError,{data: ActivityAddCustomActivityBody}, TContext> => {

const mutationKey = ['activityAddCustomActivity'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof activityAddCustomActivity>>, {data: ActivityAddCustomActivityBody}> = (props) => {
          const {data} = props ?? {};

          return  activityAddCustomActivity(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ActivityAddCustomActivityMutationResult = NonNullable<Awaited<ReturnType<typeof activityAddCustomActivity>>>
    export type ActivityAddCustomActivityMutationBody = ActivityAddCustomActivityBody
    export type ActivityAddCustomActivityMutationError = void

    /**
 * @summary Record custom events associated to an account, person or deal. These activities show up
on the activity feed of the corresponding entity and can be leveraged to trigger drip
campaigns and other automation. For integration with drip campaigns make sure that what
you pass in the Title property matches the start / stop value specified for the campaign.
 */
export const useActivityAddCustomActivity = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof activityAddCustomActivity>>, TError,{data: ActivityAddCustomActivityBody}, TContext>, request?: SecondParameter<typeof customFetch>}
 ): UseMutationResult<
        Awaited<ReturnType<typeof activityAddCustomActivity>>,
        TError,
        {data: ActivityAddCustomActivityBody},
        TContext
      > => {

      const mutationOptions = getActivityAddCustomActivityMutationOptions(options);

      return useMutation(mutationOptions);
    }
    