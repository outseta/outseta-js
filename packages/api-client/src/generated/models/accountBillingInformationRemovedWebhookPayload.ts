// @ts-nocheck
import type { AccountBillingInformationRemovedWebhookPayloadBillingAddress } from './accountBillingInformationRemovedWebhookPayloadBillingAddress';
import type { AccountBillingInformationRemovedWebhookPayloadMailingAddress } from './accountBillingInformationRemovedWebhookPayloadMailingAddress';
import type { AccountBillingInformationRemovedWebhookPayloadAccountStage } from './accountBillingInformationRemovedWebhookPayloadAccountStage';
import type { AccountBillingInformationRemovedWebhookPayloadPaymentInformation } from './accountBillingInformationRemovedWebhookPayloadPaymentInformation';
import type { AccountBillingInformationRemovedWebhookPayloadPersonAccountItem } from './accountBillingInformationRemovedWebhookPayloadPersonAccountItem';
import type { AccountBillingInformationRemovedWebhookPayloadStripeInvoicesItem } from './accountBillingInformationRemovedWebhookPayloadStripeInvoicesItem';
import type { AccountBillingInformationRemovedWebhookPayloadStripePaymentMethodsItem } from './accountBillingInformationRemovedWebhookPayloadStripePaymentMethodsItem';
import type { AccountBillingInformationRemovedWebhookPayloadStripeSubscriptionsItem } from './accountBillingInformationRemovedWebhookPayloadStripeSubscriptionsItem';
import type { AccountBillingInformationRemovedWebhookPayloadSubscriptionsItem } from './accountBillingInformationRemovedWebhookPayloadSubscriptionsItem';
import type { AccountBillingInformationRemovedWebhookPayloadDealsItem } from './accountBillingInformationRemovedWebhookPayloadDealsItem';
import type { AccountBillingInformationRemovedWebhookPayloadTaxIdsItem } from './accountBillingInformationRemovedWebhookPayloadTaxIdsItem';
import type { AccountBillingInformationRemovedWebhookPayloadCurrentSubscription } from './accountBillingInformationRemovedWebhookPayloadCurrentSubscription';
import type { AccountBillingInformationRemovedWebhookPayloadLatestSubscription } from './accountBillingInformationRemovedWebhookPayloadLatestSubscription';
import type { AccountBillingInformationRemovedWebhookPayloadPrimaryContact } from './accountBillingInformationRemovedWebhookPayloadPrimaryContact';
import type { AccountBillingInformationRemovedWebhookPayloadPrimarySubscription } from './accountBillingInformationRemovedWebhookPayloadPrimarySubscription';
import type { AccountBillingInformationRemovedWebhookPayloadPrimaryStripeSubscription } from './accountBillingInformationRemovedWebhookPayloadPrimaryStripeSubscription';

export interface AccountBillingInformationRemovedWebhookPayload {
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
  BillingAddress?: AccountBillingInformationRemovedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountBillingInformationRemovedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountBillingInformationRemovedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountBillingInformationRemovedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountBillingInformationRemovedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountBillingInformationRemovedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountBillingInformationRemovedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountBillingInformationRemovedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountBillingInformationRemovedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountBillingInformationRemovedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountBillingInformationRemovedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountBillingInformationRemovedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountBillingInformationRemovedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountBillingInformationRemovedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountBillingInformationRemovedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountBillingInformationRemovedWebhookPayloadPrimaryStripeSubscription;
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
