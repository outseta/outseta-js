// @ts-nocheck
import type { AccountAddPersonWebhookPayloadBillingAddress } from './accountAddPersonWebhookPayloadBillingAddress';
import type { AccountAddPersonWebhookPayloadMailingAddress } from './accountAddPersonWebhookPayloadMailingAddress';
import type { AccountAddPersonWebhookPayloadAccountStage } from './accountAddPersonWebhookPayloadAccountStage';
import type { AccountAddPersonWebhookPayloadPaymentInformation } from './accountAddPersonWebhookPayloadPaymentInformation';
import type { AccountAddPersonWebhookPayloadPersonAccountItem } from './accountAddPersonWebhookPayloadPersonAccountItem';
import type { AccountAddPersonWebhookPayloadStripeInvoicesItem } from './accountAddPersonWebhookPayloadStripeInvoicesItem';
import type { AccountAddPersonWebhookPayloadStripePaymentMethodsItem } from './accountAddPersonWebhookPayloadStripePaymentMethodsItem';
import type { AccountAddPersonWebhookPayloadStripeSubscriptionsItem } from './accountAddPersonWebhookPayloadStripeSubscriptionsItem';
import type { AccountAddPersonWebhookPayloadSubscriptionsItem } from './accountAddPersonWebhookPayloadSubscriptionsItem';
import type { AccountAddPersonWebhookPayloadDealsItem } from './accountAddPersonWebhookPayloadDealsItem';
import type { AccountAddPersonWebhookPayloadTaxIdsItem } from './accountAddPersonWebhookPayloadTaxIdsItem';
import type { AccountAddPersonWebhookPayloadCurrentSubscription } from './accountAddPersonWebhookPayloadCurrentSubscription';
import type { AccountAddPersonWebhookPayloadLatestSubscription } from './accountAddPersonWebhookPayloadLatestSubscription';
import type { AccountAddPersonWebhookPayloadPrimaryContact } from './accountAddPersonWebhookPayloadPrimaryContact';
import type { AccountAddPersonWebhookPayloadPrimarySubscription } from './accountAddPersonWebhookPayloadPrimarySubscription';
import type { AccountAddPersonWebhookPayloadPrimaryStripeSubscription } from './accountAddPersonWebhookPayloadPrimaryStripeSubscription';
import type { AccountAddPersonActivityData } from './accountAddPersonActivityData';

export interface AccountAddPersonWebhookPayload {
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
  BillingAddress?: AccountAddPersonWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountAddPersonWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountAddPersonWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountAddPersonWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountAddPersonWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountAddPersonWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountAddPersonWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountAddPersonWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountAddPersonWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountAddPersonWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountAddPersonWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountAddPersonWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountAddPersonWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountAddPersonWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountAddPersonWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountAddPersonWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountAddPersonActivityData;
}
