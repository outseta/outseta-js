// @ts-nocheck
import type { WebflowField } from './webflowField';

export interface WebflowCollection {
  /**
   * @deprecated
   * @nullable
   */
  _id?: string | null;
  /** @nullable */
  id?: string | null;
  createdOn?: string;
  /** @nullable */
  displayName?: string | null;
  lastUpdated?: string;
  /**
   * @deprecated
   * @nullable
   */
  name?: string | null;
  /** @nullable */
  singularName?: string | null;
  /** @nullable */
  slug?: string | null;
  /** @nullable */
  fields?: WebflowField[] | null;
}
