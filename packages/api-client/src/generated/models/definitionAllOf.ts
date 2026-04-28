// @ts-nocheck
import type { EntityType } from './entityType';

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
  /** @nullable */
  Position?: number | null;
  Hidden?: boolean;
};
