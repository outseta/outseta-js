// @ts-nocheck
import type {
  Activity,
  ActivityAddCustomActivityBody,
  ActivityGetAllParams
} from '.././models';

import { customFetch } from '../../client';

/**
 * @summary Retrieves all the activities. One or multiple parameters can be defined to filter the results.
ActivityType=[100,101] where ActivityUpdated = 100 and AcccountUpdated = 101
Results will be limited to the last year unless ActivityDateTime is specified,
possibly with ActivityDateTime__gt/ActivityDateTime__gte and ActivityDateTime__lt/ActivityDateTime__lte
 */
export type activityGetAllResponse200 = {
  data: Activity[]
  status: 200
}

export type activityGetAllResponse401 = {
  data: void
  status: 401
}
    
export type activityGetAllResponseSuccess = (activityGetAllResponse200) & {
  headers: Headers;
};
export type activityGetAllResponseError = (activityGetAllResponse401) & {
  headers: Headers;
};

export type activityGetAllResponse = (activityGetAllResponseSuccess | activityGetAllResponseError)

export const getActivityGetAllUrl = (params?: ActivityGetAllParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ["criteria"];

    if (Array.isArray(value) && explodeParameters.includes(key)) {
      value.forEach((v) => {
        normalizedParams.append(key, v === null ? 'null' : v.toString());
      });
      return;
    }
      
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/api/v1/activities?${stringifiedParams}` : `/api/v1/activities`
}

export const activityGetAll = async (params?: ActivityGetAllParams, options?: RequestInit): Promise<activityGetAllResponse> => {
  
  return customFetch<activityGetAllResponse>(getActivityGetAllUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


/**
 * @summary Record custom events associated to an account, person or deal. These activities show up
on the activity feed of the corresponding entity and can be leveraged to trigger drip
campaigns and other automation. For integration with drip campaigns make sure that what
you pass in the Title property matches the start / stop value specified for the campaign.
 */
export type activityAddCustomActivityResponse200 = {
  data: Blob
  status: 200
}

export type activityAddCustomActivityResponse401 = {
  data: void
  status: 401
}
    
export type activityAddCustomActivityResponseSuccess = (activityAddCustomActivityResponse200) & {
  headers: Headers;
};
export type activityAddCustomActivityResponseError = (activityAddCustomActivityResponse401) & {
  headers: Headers;
};

export type activityAddCustomActivityResponse = (activityAddCustomActivityResponseSuccess | activityAddCustomActivityResponseError)

export const getActivityAddCustomActivityUrl = () => {


  

  return `/api/v1/activities/customactivity`
}

export const activityAddCustomActivity = async (activityAddCustomActivityBody: ActivityAddCustomActivityBody, options?: RequestInit): Promise<activityAddCustomActivityResponse> => {
  
  return customFetch<activityAddCustomActivityResponse>(getActivityAddCustomActivityUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      activityAddCustomActivityBody,)
  }
);}


