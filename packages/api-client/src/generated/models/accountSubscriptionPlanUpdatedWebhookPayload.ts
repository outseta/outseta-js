// @ts-nocheck
import type { AccountSubscriptionPlanUpdatedWebhookPayloadBillingAddress } from './accountSubscriptionPlanUpdatedWebhookPayloadBillingAddress';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadMailingAddress } from './accountSubscriptionPlanUpdatedWebhookPayloadMailingAddress';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadAccountStage } from './accountSubscriptionPlanUpdatedWebhookPayloadAccountStage';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadPaymentInformation } from './accountSubscriptionPlanUpdatedWebhookPayloadPaymentInformation';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItem } from './accountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadStripeInvoicesItem } from './accountSubscriptionPlanUpdatedWebhookPayloadStripeInvoicesItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadStripePaymentMethodsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadStripeSubscriptionsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadDealsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadDealsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadTaxIdsItem } from './accountSubscriptionPlanUpdatedWebhookPayloadTaxIdsItem';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadCurrentSubscription } from './accountSubscriptionPlanUpdatedWebhookPayloadCurrentSubscription';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscription } from './accountSubscriptionPlanUpdatedWebhookPayloadLatestSubscription';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadPrimaryContact } from './accountSubscriptionPlanUpdatedWebhookPayloadPrimaryContact';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadPrimarySubscription } from './accountSubscriptionPlanUpdatedWebhookPayloadPrimarySubscription';
import type { AccountSubscriptionPlanUpdatedWebhookPayloadPrimaryStripeSubscription } from './accountSubscriptionPlanUpdatedWebhookPayloadPrimaryStripeSubscription';
import type { AccountSubscriptionPlanUpdatedActivityData } from './accountSubscriptionPlanUpdatedActivityData';

export interface AccountSubscriptionPlanUpdatedWebhookPayload {
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
  BillingAddress?: AccountSubscriptionPlanUpdatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountSubscriptionPlanUpdatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountSubscriptionPlanUpdatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountSubscriptionPlanUpdatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountSubscriptionPlanUpdatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountSubscriptionPlanUpdatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountSubscriptionPlanUpdatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountSubscriptionPlanUpdatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountSubscriptionPlanUpdatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountSubscriptionPlanUpdatedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountSubscriptionPlanUpdatedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountSubscriptionPlanUpdatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountSubscriptionPlanUpdatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountSubscriptionPlanUpdatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountSubscriptionPlanUpdatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountSubscriptionPlanUpdatedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountSubscriptionPlanUpdatedActivityData;
}
