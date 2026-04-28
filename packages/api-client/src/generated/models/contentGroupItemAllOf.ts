// @ts-nocheck
import type { ContentGroupItemMatchMode } from './contentGroupItemMatchMode';
import type { ContentGroup } from './contentGroup';

export type ContentGroupItemAllOf = {
  /** @minLength 1 */
  Pattern: string;
  MatchMode: ContentGroupItemMatchMode;
  ContentGroup: ContentGroup;
};
