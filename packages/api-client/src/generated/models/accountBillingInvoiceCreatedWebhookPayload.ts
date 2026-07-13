// @ts-nocheck
import type { AccountBillingInvoiceCreatedWebhookPayloadBillingAddress } from './accountBillingInvoiceCreatedWebhookPayloadBillingAddress';
import type { AccountBillingInvoiceCreatedWebhookPayloadMailingAddress } from './accountBillingInvoiceCreatedWebhookPayloadMailingAddress';
import type { AccountBillingInvoiceCreatedWebhookPayloadAccountStage } from './accountBillingInvoiceCreatedWebhookPayloadAccountStage';
import type { AccountBillingInvoiceCreatedWebhookPayloadPaymentInformation } from './accountBillingInvoiceCreatedWebhookPayloadPaymentInformation';
import type { AccountBillingInvoiceCreatedWebhookPayloadPersonAccountItem } from './accountBillingInvoiceCreatedWebhookPayloadPersonAccountItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadStripeInvoicesItem } from './accountBillingInvoiceCreatedWebhookPayloadStripeInvoicesItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadStripePaymentMethodsItem } from './accountBillingInvoiceCreatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadStripeSubscriptionsItem } from './accountBillingInvoiceCreatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItem } from './accountBillingInvoiceCreatedWebhookPayloadSubscriptionsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadDealsItem } from './accountBillingInvoiceCreatedWebhookPayloadDealsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadTaxIdsItem } from './accountBillingInvoiceCreatedWebhookPayloadTaxIdsItem';
import type { AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscription } from './accountBillingInvoiceCreatedWebhookPayloadCurrentSubscription';
import type { AccountBillingInvoiceCreatedWebhookPayloadLatestSubscription } from './accountBillingInvoiceCreatedWebhookPayloadLatestSubscription';
import type { AccountBillingInvoiceCreatedWebhookPayloadPrimaryContact } from './accountBillingInvoiceCreatedWebhookPayloadPrimaryContact';
import type { AccountBillingInvoiceCreatedWebhookPayloadPrimarySubscription } from './accountBillingInvoiceCreatedWebhookPayloadPrimarySubscription';
import type { AccountBillingInvoiceCreatedWebhookPayloadPrimaryStripeSubscription } from './accountBillingInvoiceCreatedWebhookPayloadPrimaryStripeSubscription';

export interface AccountBillingInvoiceCreatedWebhookPayload {
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
  BillingAddress?: AccountBillingInvoiceCreatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountBillingInvoiceCreatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountBillingInvoiceCreatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountBillingInvoiceCreatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountBillingInvoiceCreatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountBillingInvoiceCreatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountBillingInvoiceCreatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountBillingInvoiceCreatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountBillingInvoiceCreatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountBillingInvoiceCreatedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountBillingInvoiceCreatedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountBillingInvoiceCreatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountBillingInvoiceCreatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountBillingInvoiceCreatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountBillingInvoiceCreatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountBillingInvoiceCreatedWebhookPayloadPrimaryStripeSubscription;
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
