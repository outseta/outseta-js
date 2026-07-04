// @ts-nocheck
import type { AccountBillingInvoiceDeletedWebhookPayloadBillingAddress } from './accountBillingInvoiceDeletedWebhookPayloadBillingAddress';
import type { AccountBillingInvoiceDeletedWebhookPayloadMailingAddress } from './accountBillingInvoiceDeletedWebhookPayloadMailingAddress';
import type { AccountBillingInvoiceDeletedWebhookPayloadAccountStage } from './accountBillingInvoiceDeletedWebhookPayloadAccountStage';
import type { AccountBillingInvoiceDeletedWebhookPayloadPaymentInformation } from './accountBillingInvoiceDeletedWebhookPayloadPaymentInformation';
import type { AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItem } from './accountBillingInvoiceDeletedWebhookPayloadPersonAccountItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadStripeInvoicesItem } from './accountBillingInvoiceDeletedWebhookPayloadStripeInvoicesItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadStripePaymentMethodsItem } from './accountBillingInvoiceDeletedWebhookPayloadStripePaymentMethodsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadStripeSubscriptionsItem } from './accountBillingInvoiceDeletedWebhookPayloadStripeSubscriptionsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItem } from './accountBillingInvoiceDeletedWebhookPayloadSubscriptionsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadDealsItem } from './accountBillingInvoiceDeletedWebhookPayloadDealsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadTaxIdsItem } from './accountBillingInvoiceDeletedWebhookPayloadTaxIdsItem';
import type { AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscription } from './accountBillingInvoiceDeletedWebhookPayloadCurrentSubscription';
import type { AccountBillingInvoiceDeletedWebhookPayloadLatestSubscription } from './accountBillingInvoiceDeletedWebhookPayloadLatestSubscription';
import type { AccountBillingInvoiceDeletedWebhookPayloadPrimaryContact } from './accountBillingInvoiceDeletedWebhookPayloadPrimaryContact';
import type { AccountBillingInvoiceDeletedWebhookPayloadPrimarySubscription } from './accountBillingInvoiceDeletedWebhookPayloadPrimarySubscription';
import type { AccountBillingInvoiceDeletedWebhookPayloadPrimaryStripeSubscription } from './accountBillingInvoiceDeletedWebhookPayloadPrimaryStripeSubscription';
import type { AccountBillingInvoiceDeletedActivityData } from './accountBillingInvoiceDeletedActivityData';

export interface AccountBillingInvoiceDeletedWebhookPayload {
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
  BillingAddress?: AccountBillingInvoiceDeletedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountBillingInvoiceDeletedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountBillingInvoiceDeletedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountBillingInvoiceDeletedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountBillingInvoiceDeletedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountBillingInvoiceDeletedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountBillingInvoiceDeletedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountBillingInvoiceDeletedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountBillingInvoiceDeletedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountBillingInvoiceDeletedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountBillingInvoiceDeletedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountBillingInvoiceDeletedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountBillingInvoiceDeletedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountBillingInvoiceDeletedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountBillingInvoiceDeletedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountBillingInvoiceDeletedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountBillingInvoiceDeletedActivityData;
}
