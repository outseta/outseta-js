// @ts-nocheck
import type { SessionFlowDataOptionsAfterCompletion } from './sessionFlowDataOptionsAfterCompletion';
import type { SessionFlowDataOptionsSubscriptionCancel } from './sessionFlowDataOptionsSubscriptionCancel';
import type { SessionFlowDataOptionsSubscriptionUpdate } from './sessionFlowDataOptionsSubscriptionUpdate';
import type { SessionFlowDataOptionsSubscriptionUpdateConfirm } from './sessionFlowDataOptionsSubscriptionUpdateConfirm';

export interface SessionFlowDataOptions {
  /** @nullable */
  AfterCompletion?: SessionFlowDataOptionsAfterCompletion;
  /** @nullable */
  SubscriptionCancel?: SessionFlowDataOptionsSubscriptionCancel;
  /** @nullable */
  SubscriptionUpdate?: SessionFlowDataOptionsSubscriptionUpdate;
  /** @nullable */
  SubscriptionUpdateConfirm?: SessionFlowDataOptionsSubscriptionUpdateConfirm;
  /** @nullable */
  Type?: string | null;
}
