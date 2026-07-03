// @ts-nocheck
import type { AccountSubscriptionAddOnsChangedWebhookPayloadBillingAddress } from './accountSubscriptionAddOnsChangedWebhookPayloadBillingAddress';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadMailingAddress } from './accountSubscriptionAddOnsChangedWebhookPayloadMailingAddress';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadAccountStage } from './accountSubscriptionAddOnsChangedWebhookPayloadAccountStage';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadPaymentInformation } from './accountSubscriptionAddOnsChangedWebhookPayloadPaymentInformation';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItem } from './accountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadStripeInvoicesItem } from './accountSubscriptionAddOnsChangedWebhookPayloadStripeInvoicesItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadStripePaymentMethodsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadStripePaymentMethodsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadStripeSubscriptionsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadStripeSubscriptionsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadDealsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadDealsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadTaxIdsItem } from './accountSubscriptionAddOnsChangedWebhookPayloadTaxIdsItem';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadCurrentSubscription } from './accountSubscriptionAddOnsChangedWebhookPayloadCurrentSubscription';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscription } from './accountSubscriptionAddOnsChangedWebhookPayloadLatestSubscription';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadPrimaryContact } from './accountSubscriptionAddOnsChangedWebhookPayloadPrimaryContact';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadPrimarySubscription } from './accountSubscriptionAddOnsChangedWebhookPayloadPrimarySubscription';
import type { AccountSubscriptionAddOnsChangedWebhookPayloadPrimaryStripeSubscription } from './accountSubscriptionAddOnsChangedWebhookPayloadPrimaryStripeSubscription';
import type { AccountSubscriptionAddOnChange } from './accountSubscriptionAddOnChange';

export interface AccountSubscriptionAddOnsChangedWebhookPayload {
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
  BillingAddress?: AccountSubscriptionAddOnsChangedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountSubscriptionAddOnsChangedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountSubscriptionAddOnsChangedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountSubscriptionAddOnsChangedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountSubscriptionAddOnsChangedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountSubscriptionAddOnsChangedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountSubscriptionAddOnsChangedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountSubscriptionAddOnsChangedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountSubscriptionAddOnsChangedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountSubscriptionAddOnsChangedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountSubscriptionAddOnsChangedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountSubscriptionAddOnsChangedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountSubscriptionAddOnsChangedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountSubscriptionAddOnsChangedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountSubscriptionAddOnsChangedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountSubscriptionAddOnsChangedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountSubscriptionAddOnChange[];
}
