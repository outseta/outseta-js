// @ts-nocheck
import type { PersonLoginWebhookPayloadBillingAddress } from './personLoginWebhookPayloadBillingAddress';
import type { PersonLoginWebhookPayloadMailingAddress } from './personLoginWebhookPayloadMailingAddress';
import type { PersonLoginWebhookPayloadAccountStage } from './personLoginWebhookPayloadAccountStage';
import type { PersonLoginWebhookPayloadPaymentInformation } from './personLoginWebhookPayloadPaymentInformation';
import type { PersonLoginWebhookPayloadPersonAccountItem } from './personLoginWebhookPayloadPersonAccountItem';
import type { PersonLoginWebhookPayloadStripeInvoicesItem } from './personLoginWebhookPayloadStripeInvoicesItem';
import type { PersonLoginWebhookPayloadStripePaymentMethodsItem } from './personLoginWebhookPayloadStripePaymentMethodsItem';
import type { PersonLoginWebhookPayloadStripeSubscriptionsItem } from './personLoginWebhookPayloadStripeSubscriptionsItem';
import type { PersonLoginWebhookPayloadSubscriptionsItem } from './personLoginWebhookPayloadSubscriptionsItem';
import type { PersonLoginWebhookPayloadDealsItem } from './personLoginWebhookPayloadDealsItem';
import type { PersonLoginWebhookPayloadTaxIdsItem } from './personLoginWebhookPayloadTaxIdsItem';
import type { PersonLoginWebhookPayloadCurrentSubscription } from './personLoginWebhookPayloadCurrentSubscription';
import type { PersonLoginWebhookPayloadLatestSubscription } from './personLoginWebhookPayloadLatestSubscription';
import type { PersonLoginWebhookPayloadPrimaryContact } from './personLoginWebhookPayloadPrimaryContact';
import type { PersonLoginWebhookPayloadPrimarySubscription } from './personLoginWebhookPayloadPrimarySubscription';
import type { PersonLoginWebhookPayloadPrimaryStripeSubscription } from './personLoginWebhookPayloadPrimaryStripeSubscription';
import type { PersonLoginActivityData } from './personLoginActivityData';

export interface PersonLoginWebhookPayload {
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
  BillingAddress?: PersonLoginWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: PersonLoginWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: PersonLoginWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: PersonLoginWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: PersonLoginWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: PersonLoginWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: PersonLoginWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: PersonLoginWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: PersonLoginWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: PersonLoginWebhookPayloadDealsItem[] | null;
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
  TaxIds?: PersonLoginWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: PersonLoginWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: PersonLoginWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: PersonLoginWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: PersonLoginWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: PersonLoginWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: PersonLoginActivityData;
}
