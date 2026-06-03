// @ts-nocheck
import type {
  Activity,
  ActivityAddCustomActivityBody,
  ActivityGetAllParams
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
 * One or multiple parameters can be defined to filter the results.
ActivityType=[100,101] where ActivityUpdated = 100 and AcccountUpdated = 101.
Results will be limited to the last year unless ActivityDateTime is specified,
possibly with ActivityDateTime__gt/ActivityDateTime__gte and
ActivityDateTime__lt/ActivityDateTime__lte.
 * @summary Retrieve all activities, optionally filtered.
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
 * These activities show up on the activity feed of the corresponding entity and can be
leveraged to trigger drip campaigns and other automation. For integration with drip
campaigns make sure that what you pass in the Title property matches the start / stop
value specified for the campaign.
 * @summary Record a custom event associated to an account, person or deal.
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

export const activityAddCustomActivity = async (activityAddCustomActivityBody: NonReadonly<ActivityAddCustomActivityBody>, options?: RequestInit): Promise<activityAddCustomActivityResponse> => {
  
  return customFetch<activityAddCustomActivityResponse>(getActivityAddCustomActivityUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      activityAddCustomActivityBody,)
  }
);}


