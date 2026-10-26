// @ts-nocheck

export interface ImportResult {
  CountImported?: number;
  CountError?: number;
  CountTotal?: number;
  /** @nullable */
  ErrorMessages?: string[] | null;
}
