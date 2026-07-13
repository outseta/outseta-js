// @ts-nocheck
import type { AccountBillingInformationRequestedWebhookPayloadBillingAddress } from './accountBillingInformationRequestedWebhookPayloadBillingAddress';
import type { AccountBillingInformationRequestedWebhookPayloadMailingAddress } from './accountBillingInformationRequestedWebhookPayloadMailingAddress';
import type { AccountBillingInformationRequestedWebhookPayloadAccountStage } from './accountBillingInformationRequestedWebhookPayloadAccountStage';
import type { AccountBillingInformationRequestedWebhookPayloadPaymentInformation } from './accountBillingInformationRequestedWebhookPayloadPaymentInformation';
import type { AccountBillingInformationRequestedWebhookPayloadPersonAccountItem } from './accountBillingInformationRequestedWebhookPayloadPersonAccountItem';
import type { AccountBillingInformationRequestedWebhookPayloadStripeInvoicesItem } from './accountBillingInformationRequestedWebhookPayloadStripeInvoicesItem';
import type { AccountBillingInformationRequestedWebhookPayloadStripePaymentMethodsItem } from './accountBillingInformationRequestedWebhookPayloadStripePaymentMethodsItem';
import type { AccountBillingInformationRequestedWebhookPayloadStripeSubscriptionsItem } from './accountBillingInformationRequestedWebhookPayloadStripeSubscriptionsItem';
import type { AccountBillingInformationRequestedWebhookPayloadSubscriptionsItem } from './accountBillingInformationRequestedWebhookPayloadSubscriptionsItem';
import type { AccountBillingInformationRequestedWebhookPayloadDealsItem } from './accountBillingInformationRequestedWebhookPayloadDealsItem';
import type { AccountBillingInformationRequestedWebhookPayloadTaxIdsItem } from './accountBillingInformationRequestedWebhookPayloadTaxIdsItem';
import type { AccountBillingInformationRequestedWebhookPayloadCurrentSubscription } from './accountBillingInformationRequestedWebhookPayloadCurrentSubscription';
import type { AccountBillingInformationRequestedWebhookPayloadLatestSubscription } from './accountBillingInformationRequestedWebhookPayloadLatestSubscription';
import type { AccountBillingInformationRequestedWebhookPayloadPrimaryContact } from './accountBillingInformationRequestedWebhookPayloadPrimaryContact';
import type { AccountBillingInformationRequestedWebhookPayloadPrimarySubscription } from './accountBillingInformationRequestedWebhookPayloadPrimarySubscription';
import type { AccountBillingInformationRequestedWebhookPayloadPrimaryStripeSubscription } from './accountBillingInformationRequestedWebhookPayloadPrimaryStripeSubscription';

export interface AccountBillingInformationRequestedWebhookPayload {
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
  BillingAddress?: AccountBillingInformationRequestedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountBillingInformationRequestedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountBillingInformationRequestedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountBillingInformationRequestedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountBillingInformationRequestedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountBillingInformationRequestedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountBillingInformationRequestedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountBillingInformationRequestedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountBillingInformationRequestedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountBillingInformationRequestedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountBillingInformationRequestedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountBillingInformationRequestedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountBillingInformationRequestedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountBillingInformationRequestedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountBillingInformationRequestedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountBillingInformationRequestedWebhookPayloadPrimaryStripeSubscription;
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
