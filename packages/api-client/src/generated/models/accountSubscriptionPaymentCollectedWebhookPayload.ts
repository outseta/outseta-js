// @ts-nocheck
import type { AccountSubscriptionPaymentCollectedWebhookPayloadBillingAddress } from './accountSubscriptionPaymentCollectedWebhookPayloadBillingAddress';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadMailingAddress } from './accountSubscriptionPaymentCollectedWebhookPayloadMailingAddress';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadAccountStage } from './accountSubscriptionPaymentCollectedWebhookPayloadAccountStage';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadPaymentInformation } from './accountSubscriptionPaymentCollectedWebhookPayloadPaymentInformation';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItem } from './accountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadStripeInvoicesItem } from './accountSubscriptionPaymentCollectedWebhookPayloadStripeInvoicesItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadStripePaymentMethodsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadStripePaymentMethodsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadStripeSubscriptionsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadStripeSubscriptionsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadDealsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadDealsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadTaxIdsItem } from './accountSubscriptionPaymentCollectedWebhookPayloadTaxIdsItem';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscription } from './accountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscription';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadLatestSubscription } from './accountSubscriptionPaymentCollectedWebhookPayloadLatestSubscription';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadPrimaryContact } from './accountSubscriptionPaymentCollectedWebhookPayloadPrimaryContact';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadPrimarySubscription } from './accountSubscriptionPaymentCollectedWebhookPayloadPrimarySubscription';
import type { AccountSubscriptionPaymentCollectedWebhookPayloadPrimaryStripeSubscription } from './accountSubscriptionPaymentCollectedWebhookPayloadPrimaryStripeSubscription';
import type { AccountSubscriptionPaymentCollectedActivityData } from './accountSubscriptionPaymentCollectedActivityData';

export interface AccountSubscriptionPaymentCollectedWebhookPayload {
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
  BillingAddress?: AccountSubscriptionPaymentCollectedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountSubscriptionPaymentCollectedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountSubscriptionPaymentCollectedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountSubscriptionPaymentCollectedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountSubscriptionPaymentCollectedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountSubscriptionPaymentCollectedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountSubscriptionPaymentCollectedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountSubscriptionPaymentCollectedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountSubscriptionPaymentCollectedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountSubscriptionPaymentCollectedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountSubscriptionPaymentCollectedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountSubscriptionPaymentCollectedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountSubscriptionPaymentCollectedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountSubscriptionPaymentCollectedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountSubscriptionPaymentCollectedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountSubscriptionPaymentCollectedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountSubscriptionPaymentCollectedActivityData;
}
