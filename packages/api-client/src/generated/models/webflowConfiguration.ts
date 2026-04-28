// @ts-nocheck
import type { WebflowSyncError } from './webflowSyncError';
import type { WebflowConfigurationSyncConfiguration } from './webflowConfigurationSyncConfiguration';
import type { WebflowSyncLog } from './webflowSyncLog';

export interface WebflowConfiguration {
  IsAuthorized?: boolean;
  /** @nullable */
  LastSynced?: string | null;
  /** @nullable */
  LastSyncErrors?: WebflowSyncError[] | null;
  /** @nullable */
  SyncConfiguration?: WebflowConfigurationSyncConfiguration;
  /** @nullable */
  SyncLogs?: WebflowSyncLog[] | null;
}
