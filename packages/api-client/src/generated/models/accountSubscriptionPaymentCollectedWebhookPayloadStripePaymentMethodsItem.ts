// @ts-nocheck

export type AccountSubscriptionPaymentCollectedWebhookPayloadStripePaymentMethodsItem = {
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
  /** @nullable */
  Card_Brand?: string | null;
  /** @nullable */
  Card_ExpMonth?: number | null;
  /** @nullable */
  Card_ExpYear?: number | null;
  /** @nullable */
  Card_Wallet_Type?: string | null;
  /** @nullable */
  BankName?: string | null;
  /** @nullable */
  Last4?: string | null;
  /** @nullable */
  Type?: string | null;
  /** @nullable */
  Label?: string | null;
};
