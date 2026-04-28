// @ts-nocheck
import type { Plan } from './plan';

export type PlanFamilyAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
  /** @nullable */
  Plans?: Plan[] | null;
  [key: string]: unknown | null;
};
