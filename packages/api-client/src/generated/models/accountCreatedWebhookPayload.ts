// @ts-nocheck
import type { AccountCreatedWebhookPayloadBillingAddress } from './accountCreatedWebhookPayloadBillingAddress';
import type { AccountCreatedWebhookPayloadMailingAddress } from './accountCreatedWebhookPayloadMailingAddress';
import type { AccountCreatedWebhookPayloadAccountStage } from './accountCreatedWebhookPayloadAccountStage';
import type { AccountCreatedWebhookPayloadPaymentInformation } from './accountCreatedWebhookPayloadPaymentInformation';
import type { AccountCreatedWebhookPayloadPersonAccountItem } from './accountCreatedWebhookPayloadPersonAccountItem';
import type { AccountCreatedWebhookPayloadStripeInvoicesItem } from './accountCreatedWebhookPayloadStripeInvoicesItem';
import type { AccountCreatedWebhookPayloadStripePaymentMethodsItem } from './accountCreatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountCreatedWebhookPayloadStripeSubscriptionsItem } from './accountCreatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountCreatedWebhookPayloadSubscriptionsItem } from './accountCreatedWebhookPayloadSubscriptionsItem';
import type { AccountCreatedWebhookPayloadDealsItem } from './accountCreatedWebhookPayloadDealsItem';
import type { AccountCreatedWebhookPayloadTaxIdsItem } from './accountCreatedWebhookPayloadTaxIdsItem';
import type { AccountCreatedWebhookPayloadCurrentSubscription } from './accountCreatedWebhookPayloadCurrentSubscription';
import type { AccountCreatedWebhookPayloadLatestSubscription } from './accountCreatedWebhookPayloadLatestSubscription';
import type { AccountCreatedWebhookPayloadPrimaryContact } from './accountCreatedWebhookPayloadPrimaryContact';
import type { AccountCreatedWebhookPayloadPrimarySubscription } from './accountCreatedWebhookPayloadPrimarySubscription';
import type { AccountCreatedWebhookPayloadPrimaryStripeSubscription } from './accountCreatedWebhookPayloadPrimaryStripeSubscription';

export interface AccountCreatedWebhookPayload {
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
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 250
   * @nullable
   */
  ClientIdentifier?: string | null;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  InvoiceNotes?: string | null;
  IsDemo?: boolean;
  /** @nullable */
  BillingAddress?: AccountCreatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountCreatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountCreatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountCreatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountCreatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountCreatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountCreatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountCreatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountCreatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountCreatedWebhookPayloadDealsItem[] | null;
  /** @nullable */
  LastLoginDateTime?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl1?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl2?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl3?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl4?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl5?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl6?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl7?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl8?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl9?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountSpecificPageUrl10?: string | null;
  /** @nullable */
  RewardFulReferralId?: string | null;
  /**
   * @maxLength 36
   * @nullable
   */
  ToltReferralId?: string | null;
  /** @nullable */
  TaxIds?: AccountCreatedWebhookPayloadTaxIdsItem[] | null;
  /**
   * @maxLength 20
   * @nullable
   */
  TaxStatus?: string | null;
  /** @nullable */
  AccountStageLabel?: string | null;
  /** @nullable */
  CurrentStripeProducts?: string | null;
  /** @nullable */
  CurrentSubscription?: AccountCreatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountCreatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountCreatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountCreatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountCreatedWebhookPayloadPrimaryStripeSubscription;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  StripeNextInvoiceSequence?: number | null;
  /** @nullable */
  StripePrice?: string[] | null;
  /** @nullable */
  StripePromotionCode?: string | null;
  /** @nullable */
  TaxId?: string | null;
  TaxIdIsInvalid?: boolean;
  /** @nullable */
  TaxIdType?: string | null;
  /** @nullable */
  WebflowSlug?: string | null;
}
