// @ts-nocheck
import type { AccountSubscriptionStartedWebhookPayloadBillingAddress } from './accountSubscriptionStartedWebhookPayloadBillingAddress';
import type { AccountSubscriptionStartedWebhookPayloadMailingAddress } from './accountSubscriptionStartedWebhookPayloadMailingAddress';
import type { AccountSubscriptionStartedWebhookPayloadAccountStage } from './accountSubscriptionStartedWebhookPayloadAccountStage';
import type { AccountSubscriptionStartedWebhookPayloadPaymentInformation } from './accountSubscriptionStartedWebhookPayloadPaymentInformation';
import type { AccountSubscriptionStartedWebhookPayloadPersonAccountItem } from './accountSubscriptionStartedWebhookPayloadPersonAccountItem';
import type { AccountSubscriptionStartedWebhookPayloadStripeInvoicesItem } from './accountSubscriptionStartedWebhookPayloadStripeInvoicesItem';
import type { AccountSubscriptionStartedWebhookPayloadStripePaymentMethodsItem } from './accountSubscriptionStartedWebhookPayloadStripePaymentMethodsItem';
import type { AccountSubscriptionStartedWebhookPayloadStripeSubscriptionsItem } from './accountSubscriptionStartedWebhookPayloadStripeSubscriptionsItem';
import type { AccountSubscriptionStartedWebhookPayloadSubscriptionsItem } from './accountSubscriptionStartedWebhookPayloadSubscriptionsItem';
import type { AccountSubscriptionStartedWebhookPayloadDealsItem } from './accountSubscriptionStartedWebhookPayloadDealsItem';
import type { AccountSubscriptionStartedWebhookPayloadTaxIdsItem } from './accountSubscriptionStartedWebhookPayloadTaxIdsItem';
import type { AccountSubscriptionStartedWebhookPayloadCurrentSubscription } from './accountSubscriptionStartedWebhookPayloadCurrentSubscription';
import type { AccountSubscriptionStartedWebhookPayloadLatestSubscription } from './accountSubscriptionStartedWebhookPayloadLatestSubscription';
import type { AccountSubscriptionStartedWebhookPayloadPrimaryContact } from './accountSubscriptionStartedWebhookPayloadPrimaryContact';
import type { AccountSubscriptionStartedWebhookPayloadPrimarySubscription } from './accountSubscriptionStartedWebhookPayloadPrimarySubscription';
import type { AccountSubscriptionStartedWebhookPayloadPrimaryStripeSubscription } from './accountSubscriptionStartedWebhookPayloadPrimaryStripeSubscription';
import type { AccountSubscriptionStartedActivityData } from './accountSubscriptionStartedActivityData';

export interface AccountSubscriptionStartedWebhookPayload {
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
  BillingAddress?: AccountSubscriptionStartedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountSubscriptionStartedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountSubscriptionStartedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountSubscriptionStartedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountSubscriptionStartedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountSubscriptionStartedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountSubscriptionStartedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountSubscriptionStartedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountSubscriptionStartedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountSubscriptionStartedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountSubscriptionStartedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountSubscriptionStartedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountSubscriptionStartedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountSubscriptionStartedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountSubscriptionStartedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountSubscriptionStartedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountSubscriptionStartedActivityData;
}
