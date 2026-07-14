// @ts-nocheck
import type { AccountPersonRoleUpdatedWebhookPayloadBillingAddress } from './accountPersonRoleUpdatedWebhookPayloadBillingAddress';
import type { AccountPersonRoleUpdatedWebhookPayloadMailingAddress } from './accountPersonRoleUpdatedWebhookPayloadMailingAddress';
import type { AccountPersonRoleUpdatedWebhookPayloadAccountStage } from './accountPersonRoleUpdatedWebhookPayloadAccountStage';
import type { AccountPersonRoleUpdatedWebhookPayloadPaymentInformation } from './accountPersonRoleUpdatedWebhookPayloadPaymentInformation';
import type { AccountPersonRoleUpdatedWebhookPayloadPersonAccountItem } from './accountPersonRoleUpdatedWebhookPayloadPersonAccountItem';
import type { AccountPersonRoleUpdatedWebhookPayloadStripeInvoicesItem } from './accountPersonRoleUpdatedWebhookPayloadStripeInvoicesItem';
import type { AccountPersonRoleUpdatedWebhookPayloadStripePaymentMethodsItem } from './accountPersonRoleUpdatedWebhookPayloadStripePaymentMethodsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadStripeSubscriptionsItem } from './accountPersonRoleUpdatedWebhookPayloadStripeSubscriptionsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItem } from './accountPersonRoleUpdatedWebhookPayloadSubscriptionsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadDealsItem } from './accountPersonRoleUpdatedWebhookPayloadDealsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadTaxIdsItem } from './accountPersonRoleUpdatedWebhookPayloadTaxIdsItem';
import type { AccountPersonRoleUpdatedWebhookPayloadCurrentSubscription } from './accountPersonRoleUpdatedWebhookPayloadCurrentSubscription';
import type { AccountPersonRoleUpdatedWebhookPayloadLatestSubscription } from './accountPersonRoleUpdatedWebhookPayloadLatestSubscription';
import type { AccountPersonRoleUpdatedWebhookPayloadPrimaryContact } from './accountPersonRoleUpdatedWebhookPayloadPrimaryContact';
import type { AccountPersonRoleUpdatedWebhookPayloadPrimarySubscription } from './accountPersonRoleUpdatedWebhookPayloadPrimarySubscription';
import type { AccountPersonRoleUpdatedWebhookPayloadPrimaryStripeSubscription } from './accountPersonRoleUpdatedWebhookPayloadPrimaryStripeSubscription';
import type { AccountPersonRoleUpdatedActivityData } from './accountPersonRoleUpdatedActivityData';

export interface AccountPersonRoleUpdatedWebhookPayload {
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
  BillingAddress?: AccountPersonRoleUpdatedWebhookPayloadBillingAddress;
  /** @nullable */
  MailingAddress?: AccountPersonRoleUpdatedWebhookPayloadMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountPersonRoleUpdatedWebhookPayloadAccountStage;
  /** @nullable */
  PaymentInformation?: AccountPersonRoleUpdatedWebhookPayloadPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountPersonRoleUpdatedWebhookPayloadPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountPersonRoleUpdatedWebhookPayloadStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountPersonRoleUpdatedWebhookPayloadStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountPersonRoleUpdatedWebhookPayloadStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountPersonRoleUpdatedWebhookPayloadSubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountPersonRoleUpdatedWebhookPayloadDealsItem[] | null;
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
  TaxIds?: AccountPersonRoleUpdatedWebhookPayloadTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountPersonRoleUpdatedWebhookPayloadCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountPersonRoleUpdatedWebhookPayloadLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountPersonRoleUpdatedWebhookPayloadPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountPersonRoleUpdatedWebhookPayloadPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountPersonRoleUpdatedWebhookPayloadPrimaryStripeSubscription;
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
  ActivityEventData?: AccountPersonRoleUpdatedActivityData;
}
