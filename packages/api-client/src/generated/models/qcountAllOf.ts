// @ts-nocheck
import type { PaymentsGatewayActivationStatus } from './paymentsGatewayActivationStatus';
import type { PaymentsMode } from './paymentsMode';

export type QcountAllOf = {
  /**
   * @maxLength 100
   * @nullable
   */
  CompanyName?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  CompanyWebsite?: string | null;
  /**
   * @minLength 1
   * @maxLength 100
   */
  DomainName: string;
  /**
   * @maxLength 100
   * @nullable
   */
  DomainNameCustomForKnowledgeBase?: string | null;
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
  CompanyLogoS3Url?: string | null;
  /**
   * @maxLength 20
   * @nullable
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  CssBgColor?: string | null;
  /**
   * @maxLength 20
   * @nullable
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  CssColor?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  AuthenticationAudience?: string | null;
  /** @nullable */
  AuthenticationCallbackUrl?: string | null;
  AccessTokenLifetimeMinutes?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  AccountUid?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ForteJsAPILoginId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  StripeApplicationId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  StripePublishableKey?: string | null;
  /**
   * @maxLength 3
   * @nullable
   */
  StripeCurrencySymbol?: string | null;
  PaymentsGatewayActivationStatus?: PaymentsGatewayActivationStatus;
  /**
   * @maxLength 50
   * @nullable
   */
  RecaptchaSiteKey?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  RewardfulAPIKey?: string | null;
  /** @nullable */
  DomainPrefix?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  /** @nullable */
  ColorDark?: string | null;
  /** @nullable */
  ColorLight?: string | null;
  IsLivemode?: boolean;
  PaymentsMode?: PaymentsMode;
  TaxEnabled?: boolean;
};
