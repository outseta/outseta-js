// @ts-nocheck
import type {
  Definition
} from '.././models';

import { customFetch } from '../../client';

/**
 * entityType is the name of an EntityType enum value, for example: Account, Person,
Deal. Definitions describe the labels, system names, and control types of
the custom attributes that have been added to that entity.
 * @summary Retrieve all custom attribute definitions.
 */
export type definitionGetAllDefinitionsResponse200 = {
  data: Definition[]
  status: 200
}
    
export type definitionGetAllDefinitionsResponseSuccess = (definitionGetAllDefinitionsResponse200) & {
  headers: Headers;
};
;

export type definitionGetAllDefinitionsResponse = (definitionGetAllDefinitionsResponseSuccess)

export const getDefinitionGetAllDefinitionsUrl = (entityType: string | null,) => {


  

  return `/api/v1/attributes/${entityType}/definitions`
}

export const definitionGetAllDefinitions = async (entityType: string | null, options?: RequestInit): Promise<definitionGetAllDefinitionsResponse> => {
  
  return customFetch<definitionGetAllDefinitionsResponse>(getDefinitionGetAllDefinitionsUrl(entityType),
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


