// @ts-nocheck
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadBillingAddress } from './accountSubscriptionPaymentDeclinedWebhookPayloadBillingAddress';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadMailingAddress } from './accountSubscriptionPaymentDeclinedWebhookPayloadMailingAddress';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadAccountStage } from './accountSubscriptionPaymentDeclinedWebhookPayloadAccountStage';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadPaymentInformation } from './accountSubscriptionPaymentDeclinedWebhookPayloadPaymentInformation';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadStripeInvoicesItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadStripeInvoicesItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadStripePaymentMethodsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadStripePaymentMethodsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadStripeSubscriptionsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadStripeSubscriptionsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadDealsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadDealsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadTaxIdsItem } from './accountSubscriptionPaymentDeclinedWebhookPayloadTaxIdsItem';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscription } from './accountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscription';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscription } from './accountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscription';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadPrimaryContact } from './accountSubscriptionPaymentDeclinedWebhookPayloadPrimaryContact';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadPrimarySubscription } from './accountSubscriptionPaymentDeclinedWebhookPayloadPrimarySubscription';
import type { AccountSubscriptionPaymentDeclinedWebhookPayloadPrimaryStripeSubscription } from './accountSubscriptionPaymentDeclinedWebhookPayloadPrimaryStripeSubscription';

export interface AccountSubscriptionPaymentDeclinedWebhookPayload {
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
  BillingAddress?: AccountSubscriptionPaymentDeclinedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountSubscriptionPaymentDeclinedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountSubscriptionPaymentDeclinedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountSubscriptionPaymentDeclinedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountSubscriptionPaymentDeclinedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountSubscriptionPaymentDeclinedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountSubscriptionPaymentDeclinedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountSubscriptionPaymentDeclinedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountSubscriptionPaymentDeclinedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountSubscriptionPaymentDeclinedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountSubscriptionPaymentDeclinedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountSubscriptionPaymentDeclinedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountSubscriptionPaymentDeclinedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountSubscriptionPaymentDeclinedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountSubscriptionPaymentDeclinedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountSubscriptionPaymentDeclinedWebhookPayloadPrimaryStripeSubscription;
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
