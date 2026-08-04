// @ts-nocheck
import type { AccountWebhookEntityBillingAddress } from './accountWebhookEntityBillingAddress';
import type { AccountWebhookEntityMailingAddress } from './accountWebhookEntityMailingAddress';
import type { AccountWebhookEntityAccountStage } from './accountWebhookEntityAccountStage';
import type { AccountWebhookEntityPaymentInformation } from './accountWebhookEntityPaymentInformation';
import type { AccountWebhookEntityPersonAccountItem } from './accountWebhookEntityPersonAccountItem';
import type { AccountWebhookEntityStripeInvoicesItem } from './accountWebhookEntityStripeInvoicesItem';
import type { AccountWebhookEntityStripePaymentMethodsItem } from './accountWebhookEntityStripePaymentMethodsItem';
import type { AccountWebhookEntityStripeSubscriptionsItem } from './accountWebhookEntityStripeSubscriptionsItem';
import type { AccountWebhookEntitySubscriptionsItem } from './accountWebhookEntitySubscriptionsItem';
import type { AccountWebhookEntityDealsItem } from './accountWebhookEntityDealsItem';
import type { AccountWebhookEntityTaxIdsItem } from './accountWebhookEntityTaxIdsItem';
import type { AccountWebhookEntityCurrentSubscription } from './accountWebhookEntityCurrentSubscription';
import type { AccountWebhookEntityLatestSubscription } from './accountWebhookEntityLatestSubscription';
import type { AccountWebhookEntityPrimaryContact } from './accountWebhookEntityPrimaryContact';
import type { AccountWebhookEntityPrimarySubscription } from './accountWebhookEntityPrimarySubscription';
import type { AccountWebhookEntityPrimaryStripeSubscription } from './accountWebhookEntityPrimaryStripeSubscription';

export interface AccountWebhookEntity {
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
  BillingAddress?: AccountWebhookEntityBillingAddress;
  /** @nullable */
  MailingAddress?: AccountWebhookEntityMailingAddress;
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: AccountWebhookEntityAccountStage;
  /** @nullable */
  PaymentInformation?: AccountWebhookEntityPaymentInformation;
  /** @nullable */
  PersonAccount?: AccountWebhookEntityPersonAccountItem[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: AccountWebhookEntityStripeInvoicesItem[] | null;
  /** @nullable */
  StripePaymentMethods?: AccountWebhookEntityStripePaymentMethodsItem[] | null;
  /** @nullable */
  StripeSubscriptions?: AccountWebhookEntityStripeSubscriptionsItem[] | null;
  /** @nullable */
  Subscriptions?: AccountWebhookEntitySubscriptionsItem[] | null;
  /** @nullable */
  Deals?: AccountWebhookEntityDealsItem[] | null;
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
  TaxIds?: AccountWebhookEntityTaxIdsItem[] | null;
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
  CurrentSubscription?: AccountWebhookEntityCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountWebhookEntityLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountWebhookEntityPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountWebhookEntityPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountWebhookEntityPrimaryStripeSubscription;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  StripeNextInvoiceSequence?: number | null;
  /** @nullable */
  StripePrice?: string[] | null;
  /** @nullable */
  StripePriceIds?: string | null;
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
