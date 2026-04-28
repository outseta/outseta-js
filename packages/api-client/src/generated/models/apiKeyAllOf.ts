// @ts-nocheck
import type { ApiKeyAllOfQcount } from './apiKeyAllOfQcount';
import type { ApiKeyType } from './apiKeyType';

export type ApiKeyAllOf = {
  /**
   * @maxLength 50
   * @nullable
   */
  Name?: string | null;
  /**
   * @maxLength 40
   * @nullable
   */
  Key?: string | null;
  /** @nullable */
  Qcount?: ApiKeyAllOfQcount;
  /** @nullable */
  InitialSecret?: string | null;
  ApiKeyType?: ApiKeyType;
};
