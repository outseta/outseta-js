// @ts-nocheck
import type { EntityValidationErrorEntity } from './entityValidationErrorEntity';
import type { FieldValidationError } from './fieldValidationError';

export interface EntityValidationError {
  /** @nullable */
  Entity?: EntityValidationErrorEntity;
  /** @nullable */
  TypeName?: string | null;
  /** @nullable */
  ValidationErrors?: FieldValidationError[] | null;
}
