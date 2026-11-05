// @ts-nocheck
import type { EntityValidationError } from './entityValidationError';

export interface ValidationError {
  /** @nullable */
  ErrorMessage?: string | null;
  /** @nullable */
  EntityValidationErrors?: EntityValidationError[] | null;
}
