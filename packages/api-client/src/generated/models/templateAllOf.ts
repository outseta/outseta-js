// @ts-nocheck

export type TemplateAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 1000
   * @nullable
   */
  Subject?: string | null;
  /** @minLength 1 */
  Body: string;
  /** @nullable */
  Design?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  Description?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  SystemName?: string | null;
  IsInternal?: boolean;
  /** @nullable */
  AvailableTokens?: string | null;
  /** @nullable */
  RequiredTokens?: string | null;
  /** @nullable */
  Tag?: string | null;
};
