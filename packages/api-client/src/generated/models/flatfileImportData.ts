// @ts-nocheck
import type { FlatfileImportDataSchemalessData } from './flatfileImportDataSchemalessData';
import type { BackGroundTaskType } from './backGroundTaskType';

export interface FlatfileImportData {
  /** @nullable */
  SchemalessData?: FlatfileImportDataSchemalessData;
  JobId?: number;
  /** @nullable */
  SheetId?: string | null;
  TaskType?: BackGroundTaskType;
  [key: string]: unknown | null;
}
