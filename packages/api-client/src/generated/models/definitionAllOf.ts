// @ts-nocheck
import type { EntityType } from './entityType';
import type { DefinitionUserAccess } from './definitionUserAccess';

export type DefinitionAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  ControlType?: string | null;
  /** @nullable */
  ControlParams?: string | null;
  /** @nullable */
  Label?: string | null;
  /** @nullable */
  SystemName?: string | null;
  EntityType?: EntityType;
  UserAccess?: DefinitionUserAccess;
  /** @nullable */
  Position?: number | null;
  Hidden?: boolean;
};
