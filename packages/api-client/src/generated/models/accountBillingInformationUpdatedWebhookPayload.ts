// @ts-nocheck
import type { AccountBillingInformationUpdatedWebhookPayloadBillingAddress } from './accountBillingInformationUpdatedWebhookPayloadBillingAddress';
import type { AccountBillingInformationUpdatedWebhookPayloadMailingAddress } from './accountBillingInformationUpdatedWebhookPayloadMailingAddress';
import type { AccountBillingInformationUpdatedWebhookPayloadAccountStage } from './accountBillingInformationUpdatedWebhookPayloadAccountStage';
import type { AccountBillingInformationUpdatedWebhookPayloadPaymentInformation } from './accountBillingInformationUpdatedWebhookPayloadPaymentInformation';
import type { AccountBillingInformationUpdatedWebhookPayloadPersonAccountItem } from './accountBillingInformationUpdatedWebhookPayloadPersonAccountItem';
import type { AccountBillingInformationUpdatedWebhookPayloadStripeInvoicesItem } from './accountBillingInformationUpdatedWebhookPayloadStripeInvoicesItem';
import type { AccountBillingInformationUpdatedWebhookPayloadStripePaymentMethodsItem } from './accountBillingInformationUpdatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadStripeSubscriptionsItem } from './accountBillingInformationUpdatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItem } from './accountBillingInformationUpdatedWebhookPayloadSubscriptionsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadDealsItem } from './accountBillingInformationUpdatedWebhookPayloadDealsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadTaxIdsItem } from './accountBillingInformationUpdatedWebhookPayloadTaxIdsItem';
import type { AccountBillingInformationUpdatedWebhookPayloadCurrentSubscription } from './accountBillingInformationUpdatedWebhookPayloadCurrentSubscription';
import type { AccountBillingInformationUpdatedWebhookPayloadLatestSubscription } from './accountBillingInformationUpdatedWebhookPayloadLatestSubscription';
import type { AccountBillingInformationUpdatedWebhookPayloadPrimaryContact } from './accountBillingInformationUpdatedWebhookPayloadPrimaryContact';
import type { AccountBillingInformationUpdatedWebhookPayloadPrimarySubscription } from './accountBillingInformationUpdatedWebhookPayloadPrimarySubscription';
import type { AccountBillingInformationUpdatedWebhookPayloadPrimaryStripeSubscription } from './accountBillingInformationUpdatedWebhookPayloadPrimaryStripeSubscription';

export interface AccountBillingInformationUpdatedWebhookPayload {
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
  BillingAddress?: AccountBillingInformationUpdatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountBillingInformationUpdatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountBillingInformationUpdatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountBillingInformationUpdatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountBillingInformationUpdatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountBillingInformationUpdatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountBillingInformationUpdatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountBillingInformationUpdatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountBillingInformationUpdatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountBillingInformationUpdatedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountBillingInformationUpdatedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountBillingInformationUpdatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountBillingInformationUpdatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountBillingInformationUpdatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountBillingInformationUpdatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountBillingInformationUpdatedWebhookPayloadPrimaryStripeSubscription;
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
