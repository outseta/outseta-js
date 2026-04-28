// @ts-nocheck
import type { SessionFlowDataAfterCompletionOptionsHostedConfirmation } from './sessionFlowDataAfterCompletionOptionsHostedConfirmation';
import type { SessionFlowDataAfterCompletionOptionsRedirect } from './sessionFlowDataAfterCompletionOptionsRedirect';

export interface SessionFlowDataAfterCompletionOptions {
  /** @nullable */
  HostedConfirmation?: SessionFlowDataAfterCompletionOptionsHostedConfirmation;
  /** @nullable */
  Redirect?: SessionFlowDataAfterCompletionOptionsRedirect;
  /** @nullable */
  Type?: string | null;
}
