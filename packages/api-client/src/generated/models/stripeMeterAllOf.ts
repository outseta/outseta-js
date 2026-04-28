// @ts-nocheck

export type StripeMeterAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  DisplayName: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  EventName: string;
  /**
   * @maxLength 10
   * @nullable
   */
  Status?: string | null;
  [key: string]: unknown | null;
};
