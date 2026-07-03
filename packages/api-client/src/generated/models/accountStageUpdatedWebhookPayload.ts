// @ts-nocheck
import type { AccountStageUpdatedWebhookPayloadBillingAddress } from './accountStageUpdatedWebhookPayloadBillingAddress';
import type { AccountStageUpdatedWebhookPayloadMailingAddress } from './accountStageUpdatedWebhookPayloadMailingAddress';
import type { AccountStageUpdatedWebhookPayloadAccountStage } from './accountStageUpdatedWebhookPayloadAccountStage';
import type { AccountStageUpdatedWebhookPayloadPaymentInformation } from './accountStageUpdatedWebhookPayloadPaymentInformation';
import type { AccountStageUpdatedWebhookPayloadPersonAccountItem } from './accountStageUpdatedWebhookPayloadPersonAccountItem';
import type { AccountStageUpdatedWebhookPayloadStripeInvoicesItem } from './accountStageUpdatedWebhookPayloadStripeInvoicesItem';
import type { AccountStageUpdatedWebhookPayloadStripePaymentMethodsItem } from './accountStageUpdatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountStageUpdatedWebhookPayloadStripeSubscriptionsItem } from './accountStageUpdatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountStageUpdatedWebhookPayloadSubscriptionsItem } from './accountStageUpdatedWebhookPayloadSubscriptionsItem';
import type { AccountStageUpdatedWebhookPayloadDealsItem } from './accountStageUpdatedWebhookPayloadDealsItem';
import type { AccountStageUpdatedWebhookPayloadTaxIdsItem } from './accountStageUpdatedWebhookPayloadTaxIdsItem';
import type { AccountStageUpdatedWebhookPayloadCurrentSubscription } from './accountStageUpdatedWebhookPayloadCurrentSubscription';
import type { AccountStageUpdatedWebhookPayloadLatestSubscription } from './accountStageUpdatedWebhookPayloadLatestSubscription';
import type { AccountStageUpdatedWebhookPayloadPrimaryContact } from './accountStageUpdatedWebhookPayloadPrimaryContact';
import type { AccountStageUpdatedWebhookPayloadPrimarySubscription } from './accountStageUpdatedWebhookPayloadPrimarySubscription';
import type { AccountStageUpdatedWebhookPayloadPrimaryStripeSubscription } from './accountStageUpdatedWebhookPayloadPrimaryStripeSubscription';
import type { AccountStageUpdatedActivityData } from './accountStageUpdatedActivityData';

export interface AccountStageUpdatedWebhookPayload {
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
  BillingAddress?: AccountStageUpdatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountStageUpdatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountStageUpdatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountStageUpdatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountStageUpdatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountStageUpdatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountStageUpdatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountStageUpdatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountStageUpdatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountStageUpdatedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountStageUpdatedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountStageUpdatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountStageUpdatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountStageUpdatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountStageUpdatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountStageUpdatedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountStageUpdatedActivityData;
}
