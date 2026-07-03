// @ts-nocheck
import type { AccountSubscriptionRenewalExtendedWebhookPayloadBillingAddress } from './accountSubscriptionRenewalExtendedWebhookPayloadBillingAddress';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadMailingAddress } from './accountSubscriptionRenewalExtendedWebhookPayloadMailingAddress';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadAccountStage } from './accountSubscriptionRenewalExtendedWebhookPayloadAccountStage';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPaymentInformation } from './accountSubscriptionRenewalExtendedWebhookPayloadPaymentInformation';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItem } from './accountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadStripeInvoicesItem } from './accountSubscriptionRenewalExtendedWebhookPayloadStripeInvoicesItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadStripePaymentMethodsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadStripePaymentMethodsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadStripeSubscriptionsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadStripeSubscriptionsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadDealsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadDealsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadTaxIdsItem } from './accountSubscriptionRenewalExtendedWebhookPayloadTaxIdsItem';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscription } from './accountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscription';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscription } from './accountSubscriptionRenewalExtendedWebhookPayloadLatestSubscription';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPrimaryContact } from './accountSubscriptionRenewalExtendedWebhookPayloadPrimaryContact';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPrimarySubscription } from './accountSubscriptionRenewalExtendedWebhookPayloadPrimarySubscription';
import type { AccountSubscriptionRenewalExtendedWebhookPayloadPrimaryStripeSubscription } from './accountSubscriptionRenewalExtendedWebhookPayloadPrimaryStripeSubscription';
import type { AccountSubscriptionRenewalExtendedActivityData } from './accountSubscriptionRenewalExtendedActivityData';

export interface AccountSubscriptionRenewalExtendedWebhookPayload {
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
  BillingAddress?: AccountSubscriptionRenewalExtendedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountSubscriptionRenewalExtendedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountSubscriptionRenewalExtendedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountSubscriptionRenewalExtendedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountSubscriptionRenewalExtendedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountSubscriptionRenewalExtendedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountSubscriptionRenewalExtendedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountSubscriptionRenewalExtendedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountSubscriptionRenewalExtendedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountSubscriptionRenewalExtendedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountSubscriptionRenewalExtendedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountSubscriptionRenewalExtendedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountSubscriptionRenewalExtendedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountSubscriptionRenewalExtendedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountSubscriptionRenewalExtendedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountSubscriptionRenewalExtendedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountSubscriptionRenewalExtendedActivityData;
}
