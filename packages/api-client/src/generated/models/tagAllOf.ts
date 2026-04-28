// @ts-nocheck
import type { TagColor } from './tagColor';
import type { EntityType } from './entityType';

export type TagAllOf = {
  /**
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 50
   * @nullable
   */
  SystemName?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  SystemDescription?: string | null;
  TagColor?: TagColor;
  EntityType?: EntityType;
};
