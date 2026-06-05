// @ts-nocheck

export interface AbstractBean {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  readonly Created: string;
  /** @minLength 1 */
  readonly Updated: string;
}
