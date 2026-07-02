// @ts-nocheck

/**
 * @nullable
 */
export type PersonListConfirmedWebhookPayloadMailingAddress = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine1?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine2?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine3?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  City?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostalCode?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  GeoLocation?: string | null;
} | null;
