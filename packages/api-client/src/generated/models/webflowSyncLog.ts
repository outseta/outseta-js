// @ts-nocheck
import type { WebflowSyncItem } from './webflowSyncItem';

export interface WebflowSyncLog {
  Count?: number;
  SyncDateTime?: string;
  /** @nullable */
  WebflowSyncItems?: WebflowSyncItem[] | null;
}
