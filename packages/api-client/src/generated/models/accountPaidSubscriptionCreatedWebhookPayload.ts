// @ts-nocheck
import type { AccountPaidSubscriptionCreatedWebhookPayloadBillingAddress } from './accountPaidSubscriptionCreatedWebhookPayloadBillingAddress';
import type { AccountPaidSubscriptionCreatedWebhookPayloadMailingAddress } from './accountPaidSubscriptionCreatedWebhookPayloadMailingAddress';
import type { AccountPaidSubscriptionCreatedWebhookPayloadAccountStage } from './accountPaidSubscriptionCreatedWebhookPayloadAccountStage';
import type { AccountPaidSubscriptionCreatedWebhookPayloadPaymentInformation } from './accountPaidSubscriptionCreatedWebhookPayloadPaymentInformation';
import type { AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItem } from './accountPaidSubscriptionCreatedWebhookPayloadPersonAccountItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadStripeInvoicesItem } from './accountPaidSubscriptionCreatedWebhookPayloadStripeInvoicesItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadStripePaymentMethodsItem } from './accountPaidSubscriptionCreatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadStripeSubscriptionsItem } from './accountPaidSubscriptionCreatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItem } from './accountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadDealsItem } from './accountPaidSubscriptionCreatedWebhookPayloadDealsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadTaxIdsItem } from './accountPaidSubscriptionCreatedWebhookPayloadTaxIdsItem';
import type { AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscription } from './accountPaidSubscriptionCreatedWebhookPayloadCurrentSubscription';
import type { AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscription } from './accountPaidSubscriptionCreatedWebhookPayloadLatestSubscription';
import type { AccountPaidSubscriptionCreatedWebhookPayloadPrimaryContact } from './accountPaidSubscriptionCreatedWebhookPayloadPrimaryContact';
import type { AccountPaidSubscriptionCreatedWebhookPayloadPrimarySubscription } from './accountPaidSubscriptionCreatedWebhookPayloadPrimarySubscription';
import type { AccountPaidSubscriptionCreatedWebhookPayloadPrimaryStripeSubscription } from './accountPaidSubscriptionCreatedWebhookPayloadPrimaryStripeSubscription';
import type { AccountPaidSubscriptionCreatedActivityData } from './accountPaidSubscriptionCreatedActivityData';

export interface AccountPaidSubscriptionCreatedWebhookPayload {
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
  BillingAddress?: AccountPaidSubscriptionCreatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountPaidSubscriptionCreatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountPaidSubscriptionCreatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountPaidSubscriptionCreatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountPaidSubscriptionCreatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountPaidSubscriptionCreatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountPaidSubscriptionCreatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountPaidSubscriptionCreatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountPaidSubscriptionCreatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountPaidSubscriptionCreatedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountPaidSubscriptionCreatedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountPaidSubscriptionCreatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountPaidSubscriptionCreatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountPaidSubscriptionCreatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountPaidSubscriptionCreatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountPaidSubscriptionCreatedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountPaidSubscriptionCreatedActivityData;
}
