// @ts-nocheck
import type { LeadFormAllOfDealPipelineStage } from './leadFormAllOfDealPipelineStage';

export type LeadFormAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  FieldConfigurationDataJSON?: string | null;
  /**
   * @deprecated
   * @maxLength 1000
   * @nullable
   */
  ThankYouRedirectUrl?: string | null;
  SubmissionCount?: number;
  /** @nullable */
  PipelineStageUid?: string | null;
  /** @nullable */
  DealPipelineStage?: LeadFormAllOfDealPipelineStage;
};
