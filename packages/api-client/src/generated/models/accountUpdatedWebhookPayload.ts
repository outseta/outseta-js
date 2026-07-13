// @ts-nocheck
import type { AccountUpdatedWebhookPayloadBillingAddress } from './accountUpdatedWebhookPayloadBillingAddress';
import type { AccountUpdatedWebhookPayloadMailingAddress } from './accountUpdatedWebhookPayloadMailingAddress';
import type { AccountUpdatedWebhookPayloadAccountStage } from './accountUpdatedWebhookPayloadAccountStage';
import type { AccountUpdatedWebhookPayloadPaymentInformation } from './accountUpdatedWebhookPayloadPaymentInformation';
import type { AccountUpdatedWebhookPayloadPersonAccountItem } from './accountUpdatedWebhookPayloadPersonAccountItem';
import type { AccountUpdatedWebhookPayloadStripeInvoicesItem } from './accountUpdatedWebhookPayloadStripeInvoicesItem';
import type { AccountUpdatedWebhookPayloadStripePaymentMethodsItem } from './accountUpdatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountUpdatedWebhookPayloadStripeSubscriptionsItem } from './accountUpdatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountUpdatedWebhookPayloadSubscriptionsItem } from './accountUpdatedWebhookPayloadSubscriptionsItem';
import type { AccountUpdatedWebhookPayloadDealsItem } from './accountUpdatedWebhookPayloadDealsItem';
import type { AccountUpdatedWebhookPayloadTaxIdsItem } from './accountUpdatedWebhookPayloadTaxIdsItem';
import type { AccountUpdatedWebhookPayloadCurrentSubscription } from './accountUpdatedWebhookPayloadCurrentSubscription';
import type { AccountUpdatedWebhookPayloadLatestSubscription } from './accountUpdatedWebhookPayloadLatestSubscription';
import type { AccountUpdatedWebhookPayloadPrimaryContact } from './accountUpdatedWebhookPayloadPrimaryContact';
import type { AccountUpdatedWebhookPayloadPrimarySubscription } from './accountUpdatedWebhookPayloadPrimarySubscription';
import type { AccountUpdatedWebhookPayloadPrimaryStripeSubscription } from './accountUpdatedWebhookPayloadPrimaryStripeSubscription';

export interface AccountUpdatedWebhookPayload {
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
  BillingAddress?: AccountUpdatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountUpdatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountUpdatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountUpdatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountUpdatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountUpdatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountUpdatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountUpdatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountUpdatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountUpdatedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountUpdatedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountUpdatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountUpdatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountUpdatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountUpdatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountUpdatedWebhookPayloadPrimaryStripeSubscription;
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
