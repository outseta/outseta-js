// @ts-nocheck
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
 * Name and EntityType are required. EntityType fixes what the tag can go on: 4 (Case) for
support tickets, 13 (Article) for knowledge base articles, 12 (Broadcast) for broadcast
emails, 11 (Segment) for segments. TagColor sets the color the tag shows in.
            
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
            
An Article tag that the knowledge base version filter names cannot be deleted. Take it
out of the version filter first, then delete it.
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
export type definitionAddDefinitionResponse200 = {
  data: Definition
  status: 200
}

export type definitionAddDefinitionResponse400 = {
  data: ValidationError
  status: 400
}

export type definitionAddDefinitionResponse401 = {
  data: void
  status: 401
}

export type definitionAddDefinitionResponse404 = {
  data: void
  status: 404
}
    
export type definitionAddDefinitionResponseSuccess = (definitionAddDefinitionResponse200) & {
  headers: Headers;
};
export type definitionAddDefinitionResponseError = (definitionAddDefinitionResponse400 | definitionAddDefinitionResponse401 | definitionAddDefinitionResponse404) & {
  headers: Headers;
};

export type definitionAddDefinitionResponse = (definitionAddDefinitionResponseSuccess | definitionAddDefinitionResponseError)

export const getDefinitionAddDefinitionUrl = (entityType: string | null,) => {


  

  return `/api/v1/attributes/${entityType}/definitions`
}

export const definitionAddDefinition = async (entityType: string | null,
    addDefinitionRequest: AddDefinitionRequest, options?: RequestInit): Promise<definitionAddDefinitionResponse> => {
  
  return customFetch<definitionAddDefinitionResponse>(getDefinitionAddDefinitionUrl(entityType),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      addDefinitionRequest,)
  }
);}


/**
 * Use the entity type the definition belongs to (Account, Person or Deal) in the URL.
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

export const getDefinitionGetDefinitionUrl = (entityType: string | null,
    definitionUid: string | null,) => {


  

  return `/api/v1/attributes/${entityType}/definitions/${definitionUid}`
}

export const definitionGetDefinition = async (entityType: string | null,
    definitionUid: string | null, options?: RequestInit): Promise<definitionGetDefinitionResponse> => {
  
  return customFetch<definitionGetDefinitionResponse>(getDefinitionGetDefinitionUrl(entityType,definitionUid),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}


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
export type definitionUpdateDefinitionResponse200 = {
  data: Definition
  status: 200
}

export type definitionUpdateDefinitionResponse400 = {
  data: ValidationError
  status: 400
}

export type definitionUpdateDefinitionResponse401 = {
  data: void
  status: 401
}

export type definitionUpdateDefinitionResponse404 = {
  data: void
  status: 404
}
    
export type definitionUpdateDefinitionResponseSuccess = (definitionUpdateDefinitionResponse200) & {
  headers: Headers;
};
export type definitionUpdateDefinitionResponseError = (definitionUpdateDefinitionResponse400 | definitionUpdateDefinitionResponse401 | definitionUpdateDefinitionResponse404) & {
  headers: Headers;
};

export type definitionUpdateDefinitionResponse = (definitionUpdateDefinitionResponseSuccess | definitionUpdateDefinitionResponseError)

export const getDefinitionUpdateDefinitionUrl = (entityType: string | null,
    definitionUid: string | null,) => {


  

  return `/api/v1/attributes/${entityType}/definitions/${definitionUid}`
}

export const definitionUpdateDefinition = async (entityType: string | null,
    definitionUid: string | null,
    updateDefinitionRequest: UpdateDefinitionRequest, options?: RequestInit): Promise<definitionUpdateDefinitionResponse> => {
  
  return customFetch<definitionUpdateDefinitionResponse>(getDefinitionUpdateDefinitionUrl(entityType,definitionUid),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      updateDefinitionRequest,)
  }
);}


