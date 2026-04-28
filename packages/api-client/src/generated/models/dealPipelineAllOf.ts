// @ts-nocheck
import type { DealPipelineStage } from './dealPipelineStage';

export type DealPipelineAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  DealPipelineStages?: DealPipelineStage[] | null;
};
