// @ts-nocheck
import type { AccountBillingInvoiceEmailSentWebhookPayloadBillingAddress } from './accountBillingInvoiceEmailSentWebhookPayloadBillingAddress';
import type { AccountBillingInvoiceEmailSentWebhookPayloadMailingAddress } from './accountBillingInvoiceEmailSentWebhookPayloadMailingAddress';
import type { AccountBillingInvoiceEmailSentWebhookPayloadAccountStage } from './accountBillingInvoiceEmailSentWebhookPayloadAccountStage';
import type { AccountBillingInvoiceEmailSentWebhookPayloadPaymentInformation } from './accountBillingInvoiceEmailSentWebhookPayloadPaymentInformation';
import type { AccountBillingInvoiceEmailSentWebhookPayloadPersonAccountItem } from './accountBillingInvoiceEmailSentWebhookPayloadPersonAccountItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadStripeInvoicesItem } from './accountBillingInvoiceEmailSentWebhookPayloadStripeInvoicesItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadStripePaymentMethodsItem } from './accountBillingInvoiceEmailSentWebhookPayloadStripePaymentMethodsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadStripeSubscriptionsItem } from './accountBillingInvoiceEmailSentWebhookPayloadStripeSubscriptionsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItem } from './accountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadDealsItem } from './accountBillingInvoiceEmailSentWebhookPayloadDealsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadTaxIdsItem } from './accountBillingInvoiceEmailSentWebhookPayloadTaxIdsItem';
import type { AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscription } from './accountBillingInvoiceEmailSentWebhookPayloadCurrentSubscription';
import type { AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscription } from './accountBillingInvoiceEmailSentWebhookPayloadLatestSubscription';
import type { AccountBillingInvoiceEmailSentWebhookPayloadPrimaryContact } from './accountBillingInvoiceEmailSentWebhookPayloadPrimaryContact';
import type { AccountBillingInvoiceEmailSentWebhookPayloadPrimarySubscription } from './accountBillingInvoiceEmailSentWebhookPayloadPrimarySubscription';
import type { AccountBillingInvoiceEmailSentWebhookPayloadPrimaryStripeSubscription } from './accountBillingInvoiceEmailSentWebhookPayloadPrimaryStripeSubscription';

export interface AccountBillingInvoiceEmailSentWebhookPayload {
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
  BillingAddress?: AccountBillingInvoiceEmailSentWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountBillingInvoiceEmailSentWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountBillingInvoiceEmailSentWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountBillingInvoiceEmailSentWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountBillingInvoiceEmailSentWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountBillingInvoiceEmailSentWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountBillingInvoiceEmailSentWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountBillingInvoiceEmailSentWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountBillingInvoiceEmailSentWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountBillingInvoiceEmailSentWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountBillingInvoiceEmailSentWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountBillingInvoiceEmailSentWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountBillingInvoiceEmailSentWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountBillingInvoiceEmailSentWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountBillingInvoiceEmailSentWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountBillingInvoiceEmailSentWebhookPayloadPrimaryStripeSubscription;
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
