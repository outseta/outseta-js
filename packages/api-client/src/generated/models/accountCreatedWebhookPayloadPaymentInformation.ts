// @ts-nocheck

/**
 * @nullable
 */
export type AccountCreatedWebhookPayloadPaymentInformation = {
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
  CustomerToken?: string | null;
  /** @nullable */
  LastFourDigits?: string | null;
  /** @nullable */
  LatestFailureDateTime?: string | null;
  /** @nullable */
  LatestFailureDescription?: string | null;
  /** @nullable */
  LatestSuccessDateTime?: string | null;
  NumberOfFailures?: number;
  /** @nullable */
  PaymentClientSecret?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  PaymentMethodType?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PaymentToken?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  BankName?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  BankAccountType?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  BankAccountHolderType?: string | null;
  /** @nullable */
  NameOnCard?: string | null;
  /** @nullable */
  CardType?: string | null;
  /** @nullable */
  ExpirationMonth?: string | null;
  /** @nullable */
  ExpirationYear?: string | null;
  /** @nullable */
  Mode?: string | null;
  /** @nullable */
  OneTimeToken?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  SetupIntent?: string | null;
} | null;
