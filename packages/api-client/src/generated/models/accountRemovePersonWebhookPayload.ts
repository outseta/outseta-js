// @ts-nocheck
import type { AccountRemovePersonWebhookPayloadBillingAddress } from './accountRemovePersonWebhookPayloadBillingAddress';
import type { AccountRemovePersonWebhookPayloadMailingAddress } from './accountRemovePersonWebhookPayloadMailingAddress';
import type { AccountRemovePersonWebhookPayloadAccountStage } from './accountRemovePersonWebhookPayloadAccountStage';
import type { AccountRemovePersonWebhookPayloadPaymentInformation } from './accountRemovePersonWebhookPayloadPaymentInformation';
import type { AccountRemovePersonWebhookPayloadPersonAccountItem } from './accountRemovePersonWebhookPayloadPersonAccountItem';
import type { AccountRemovePersonWebhookPayloadStripeInvoicesItem } from './accountRemovePersonWebhookPayloadStripeInvoicesItem';
import type { AccountRemovePersonWebhookPayloadStripePaymentMethodsItem } from './accountRemovePersonWebhookPayloadStripePaymentMethodsItem';
import type { AccountRemovePersonWebhookPayloadStripeSubscriptionsItem } from './accountRemovePersonWebhookPayloadStripeSubscriptionsItem';
import type { AccountRemovePersonWebhookPayloadSubscriptionsItem } from './accountRemovePersonWebhookPayloadSubscriptionsItem';
import type { AccountRemovePersonWebhookPayloadDealsItem } from './accountRemovePersonWebhookPayloadDealsItem';
import type { AccountRemovePersonWebhookPayloadTaxIdsItem } from './accountRemovePersonWebhookPayloadTaxIdsItem';
import type { AccountRemovePersonWebhookPayloadCurrentSubscription } from './accountRemovePersonWebhookPayloadCurrentSubscription';
import type { AccountRemovePersonWebhookPayloadLatestSubscription } from './accountRemovePersonWebhookPayloadLatestSubscription';
import type { AccountRemovePersonWebhookPayloadPrimaryContact } from './accountRemovePersonWebhookPayloadPrimaryContact';
import type { AccountRemovePersonWebhookPayloadPrimarySubscription } from './accountRemovePersonWebhookPayloadPrimarySubscription';
import type { AccountRemovePersonWebhookPayloadPrimaryStripeSubscription } from './accountRemovePersonWebhookPayloadPrimaryStripeSubscription';
import type { AccountRemovePersonActivityData } from './accountRemovePersonActivityData';

export interface AccountRemovePersonWebhookPayload {
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
  BillingAddress?: AccountRemovePersonWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountRemovePersonWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountRemovePersonWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountRemovePersonWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountRemovePersonWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountRemovePersonWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountRemovePersonWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountRemovePersonWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountRemovePersonWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountRemovePersonWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountRemovePersonWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountRemovePersonWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountRemovePersonWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountRemovePersonWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountRemovePersonWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountRemovePersonWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountRemovePersonActivityData;
}
