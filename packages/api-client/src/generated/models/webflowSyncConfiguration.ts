// @ts-nocheck
import type { WebflowSyncConfigurationSite } from './webflowSyncConfigurationSite';
import type { WebflowSyncConfigurationCollection } from './webflowSyncConfigurationCollection';
import type { WebflowFieldMapping } from './webflowFieldMapping';

export interface WebflowSyncConfiguration {
  IsActive?: boolean;
  /** @nullable */
  Site?: WebflowSyncConfigurationSite;
  /** @nullable */
  Collection?: WebflowSyncConfigurationCollection;
  /** @nullable */
  FieldMappings?: WebflowFieldMapping[] | null;
  SyncSlugToAccount?: boolean;
}
