// @ts-nocheck
import type { Article } from './article';

export type CategoryAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  Weight?: number;
  /** @nullable */
  Articles?: Article[] | null;
};
