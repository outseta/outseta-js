// @ts-nocheck

export type AccountUpdatedWebhookPayloadTaxIdsItem = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created: string;
  /** @minLength 1 */
  Updated: string;
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  TaxId?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  TaxIdType?: string | null;
  IsInvalid?: boolean;
};
