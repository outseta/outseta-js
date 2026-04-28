// @ts-nocheck
import type { DatabaseType } from './databaseType';

export type DatabaseAllOf = {
  /**
   * @maxLength 500
   * @nullable
   */
  ConnectionString?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  ProxyConnectionString?: string | null;
  IsLive?: boolean;
  DatabaseType?: DatabaseType;
};
