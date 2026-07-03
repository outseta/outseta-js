// @ts-nocheck
import type { AccountSubscriptionCancellationRequestedWebhookPayloadBillingAddress } from './accountSubscriptionCancellationRequestedWebhookPayloadBillingAddress';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadMailingAddress } from './accountSubscriptionCancellationRequestedWebhookPayloadMailingAddress';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadAccountStage } from './accountSubscriptionCancellationRequestedWebhookPayloadAccountStage';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadPaymentInformation } from './accountSubscriptionCancellationRequestedWebhookPayloadPaymentInformation';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItem } from './accountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadStripeInvoicesItem } from './accountSubscriptionCancellationRequestedWebhookPayloadStripeInvoicesItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadStripePaymentMethodsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadStripePaymentMethodsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadStripeSubscriptionsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadStripeSubscriptionsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadDealsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadDealsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadTaxIdsItem } from './accountSubscriptionCancellationRequestedWebhookPayloadTaxIdsItem';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscription } from './accountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscription';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscription } from './accountSubscriptionCancellationRequestedWebhookPayloadLatestSubscription';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadPrimaryContact } from './accountSubscriptionCancellationRequestedWebhookPayloadPrimaryContact';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadPrimarySubscription } from './accountSubscriptionCancellationRequestedWebhookPayloadPrimarySubscription';
import type { AccountSubscriptionCancellationRequestedWebhookPayloadPrimaryStripeSubscription } from './accountSubscriptionCancellationRequestedWebhookPayloadPrimaryStripeSubscription';
import type { AccountSubscriptionCancellationRequestedActivityData } from './accountSubscriptionCancellationRequestedActivityData';

export interface AccountSubscriptionCancellationRequestedWebhookPayload {
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
  BillingAddress?: AccountSubscriptionCancellationRequestedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountSubscriptionCancellationRequestedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountSubscriptionCancellationRequestedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountSubscriptionCancellationRequestedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountSubscriptionCancellationRequestedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountSubscriptionCancellationRequestedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountSubscriptionCancellationRequestedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountSubscriptionCancellationRequestedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountSubscriptionCancellationRequestedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountSubscriptionCancellationRequestedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountSubscriptionCancellationRequestedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountSubscriptionCancellationRequestedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountSubscriptionCancellationRequestedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountSubscriptionCancellationRequestedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountSubscriptionCancellationRequestedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountSubscriptionCancellationRequestedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountSubscriptionCancellationRequestedActivityData;
}
