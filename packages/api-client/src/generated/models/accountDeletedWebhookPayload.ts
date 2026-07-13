// @ts-nocheck
import type { AccountDeletedWebhookPayloadBillingAddress } from './accountDeletedWebhookPayloadBillingAddress';
import type { AccountDeletedWebhookPayloadMailingAddress } from './accountDeletedWebhookPayloadMailingAddress';
import type { AccountDeletedWebhookPayloadAccountStage } from './accountDeletedWebhookPayloadAccountStage';
import type { AccountDeletedWebhookPayloadPaymentInformation } from './accountDeletedWebhookPayloadPaymentInformation';
import type { AccountDeletedWebhookPayloadPersonAccountItem } from './accountDeletedWebhookPayloadPersonAccountItem';
import type { AccountDeletedWebhookPayloadStripeInvoicesItem } from './accountDeletedWebhookPayloadStripeInvoicesItem';
import type { AccountDeletedWebhookPayloadStripePaymentMethodsItem } from './accountDeletedWebhookPayloadStripePaymentMethodsItem';
import type { AccountDeletedWebhookPayloadStripeSubscriptionsItem } from './accountDeletedWebhookPayloadStripeSubscriptionsItem';
import type { AccountDeletedWebhookPayloadSubscriptionsItem } from './accountDeletedWebhookPayloadSubscriptionsItem';
import type { AccountDeletedWebhookPayloadDealsItem } from './accountDeletedWebhookPayloadDealsItem';
import type { AccountDeletedWebhookPayloadTaxIdsItem } from './accountDeletedWebhookPayloadTaxIdsItem';
import type { AccountDeletedWebhookPayloadCurrentSubscription } from './accountDeletedWebhookPayloadCurrentSubscription';
import type { AccountDeletedWebhookPayloadLatestSubscription } from './accountDeletedWebhookPayloadLatestSubscription';
import type { AccountDeletedWebhookPayloadPrimaryContact } from './accountDeletedWebhookPayloadPrimaryContact';
import type { AccountDeletedWebhookPayloadPrimarySubscription } from './accountDeletedWebhookPayloadPrimarySubscription';
import type { AccountDeletedWebhookPayloadPrimaryStripeSubscription } from './accountDeletedWebhookPayloadPrimaryStripeSubscription';

export interface AccountDeletedWebhookPayload {
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
  BillingAddress?: AccountDeletedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountDeletedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountDeletedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountDeletedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountDeletedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountDeletedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountDeletedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountDeletedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountDeletedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountDeletedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountDeletedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountDeletedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountDeletedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountDeletedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountDeletedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountDeletedWebhookPayloadPrimaryStripeSubscription;
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
