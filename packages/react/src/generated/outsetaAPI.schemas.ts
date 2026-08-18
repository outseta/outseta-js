// @ts-nocheck
export type TranslationAllOf = {
  /**
   * @minLength 1
   * @maxLength 255
   */
  Key: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  Value: string;
  /**
   * @minLength 1
   * @maxLength 42
   */
  LanguageCode: string;
};

export type Translation = AbstractQcountBean & TranslationAllOf;

/**
 * @nullable
 */
export type AbstractQcountBeanAllOfActivityEventData = unknown | null;

export type AbstractQcountBeanAllOf = {
  /** @nullable */
  ActivityEventData?: AbstractQcountBeanAllOfActivityEventData;
};

export type AbstractQcountBean = AbstractBean & AbstractQcountBeanAllOf & Required<Pick<AbstractBean & AbstractQcountBeanAllOf, 'Qcount_Id'>>;

export interface AbstractBean {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  readonly Created: string;
  /** @minLength 1 */
  readonly Updated: string;
}

/**
 * `0` - NotSet, `1` - Deserialized, `2` - DeserializedNull
 */
export type DeserializationStatus = typeof DeserializationStatus[keyof typeof DeserializationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeserializationStatus = {
  NotSet: 0,
  Deserialized: 1,
  DeserializedNull: 2,
} as const;

export type TagAllOf = {
  /**
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 50
   * @nullable
   */
  SystemName?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  SystemDescription?: string | null;
  TagColor?: TagColor;
  EntityType?: EntityType;
};

export type Tag = AbstractQcountBean & TagAllOf;

/**
 * `1` - Red, `2` - Orange, `3` - Amber, `4` - Green, `5` - Teal, `6` - Blue, `7` - Indigo, `8` - Purple, `9` - Pink, `10` - Gray
 */
export type TagColor = typeof TagColor[keyof typeof TagColor];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TagColor = {
  Red: 1,
  Orange: 2,
  Amber: 3,
  Green: 4,
  Teal: 5,
  Blue: 6,
  Indigo: 7,
  Purple: 8,
  Pink: 9,
  Gray: 10,
} as const;

/**
 * `0` - None, `1` - Account, `2` - Person, `3` - Deal, `4` - Case, `5` - Invoice, `6` - EmailLog, `7` - Plan, `8` - DiscountCoupon, `9` - AddOn, `10` - Task, `11` - Segment, `12` - Broadcast
 */
export type EntityType = typeof EntityType[keyof typeof EntityType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EntityType = {
  None: 0,
  Account: 1,
  Person: 2,
  Deal: 3,
  Case: 4,
  Invoice: 5,
  EmailLog: 6,
  Plan: 7,
  DiscountCoupon: 8,
  AddOn: 9,
  Task: 10,
  Segment: 11,
  Broadcast: 12,
} as const;

export type DefinitionAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  ControlType?: string | null;
  /** @nullable */
  ControlParams?: string | null;
  /** @nullable */
  Label?: string | null;
  /** @nullable */
  SystemName?: string | null;
  EntityType?: EntityType;
  /** @nullable */
  Position?: number | null;
  Hidden?: boolean;
};

export type Definition = AbstractQcountBean & DefinitionAllOf;

export interface EmailSubscriptionsPayload {
  /** @nullable */
  ActiveSubscriptions?: EmailListPerson[] | null;
  /** @nullable */
  RecaptchaToken?: string | null;
}

/**
 * @nullable
 */
export type EmailListPersonAllOfEmailList = EmailList | null;

/**
 * @nullable
 */
export type EmailListPersonAllOfPerson = Person | null;

export type EmailListPersonAllOf = {
  /** @nullable */
  EmailList?: EmailListPersonAllOfEmailList;
  /** @nullable */
  Person?: EmailListPersonAllOfPerson;
  /**
   * @minimum 1
   * @maximum 4
   */
  EmailListSubscriberStatus?: EmailListSubscriberStatus;
  SubscribedDate?: string;
  /** @nullable */
  ConfirmedDate?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  ConfirmationNotes?: string | null;
  /** @nullable */
  UnsubscribedDate?: string | null;
  /** @nullable */
  CleanedDate?: string | null;
  /** @nullable */
  WelcomeEmailDeliverDateTime?: string | null;
  /** @nullable */
  WelcomeEmailOpenDateTime?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  UnsubscribeReason?: string | null;
  /** @nullable */
  UnsubscribeReasonOther?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
  SendWelcomeEmail?: boolean;
  /** @nullable */
  Source?: string | null;
};

export type EmailListPerson = AbstractQcountBean & EmailListPersonAllOf;

export type EmailListAllOf = {
  /**
   * @minLength 1
   * @maxLength 100
   */
  Name: string;
  /**
   * @maxLength 255
   * @nullable
   */
  Description?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  WelcomeSubject?: string | null;
  /** @nullable */
  WelcomeBody?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  WelcomeFromName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  WelcomeFromEmail?: string | null;
  RequiresDoubleOptIn?: boolean;
  IsInternal?: boolean;
  /** @nullable */
  EmailListPerson?: EmailListPerson[] | null;
  /** @nullable */
  FieldConfigurationDataJSON?: string | null;
  CountSubscriptionsActive?: number;
  CountSubscriptionsBounce?: number;
  CountSubscriptionsNotConfirmed?: number;
  CountSubscriptionsSpam?: number;
  CountSubscriptionsUnsubscribed?: number;
};

export type EmailList = AbstractQcountBean & EmailListAllOf;

/**
 * @nullable
 */
export type PersonAllOfMailingAddress = Address | null;

/**
 * @nullable
 */
export type PersonAllOfAccount = Account | null;

/**
 * @nullable
 */
export type PersonAllOfDiscordUser = DiscordUser | null;

export type PersonAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Email?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FirstName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  LastName?: string | null;
  /** @nullable */
  MailingAddress?: PersonAllOfMailingAddress;
  /** @nullable */
  PasswordLastUpdated?: string | null;
  PasswordMustChange?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneMobile?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneWork?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ProfileImageS3Url?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  Timezone?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Language?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  IPAddress?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Referer?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  UserAgent?: string | null;
  /** @nullable */
  LastLoginDateTime?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  OAuthGoogleProfileId?: string | null;
  /** @nullable */
  PersonAccount?: PersonAccount[] | null;
  /** @nullable */
  DealPeople?: DealPerson[] | null;
  /** @nullable */
  LeadFormSubmissions?: LeadFormSubmission[] | null;
  /** @nullable */
  Account?: PersonAllOfAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: EmailListPerson[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  OAuthIntegrationStatus?: OAuthService;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonAllOfDiscordUser;
  IsConnectedToDiscord?: boolean;
  [key: string]: unknown | null;
};

export type Person = AbstractSchemaLessBean & PersonAllOf;

export type AddressAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine1?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine2?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine3?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  City?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostalCode?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  GeoLocation?: string | null;
};

export type Address = AbstractQcountBean & AddressAllOf;

/**
 * @nullable
 */
export type PersonAccountAllOfPerson = Person | null;

/**
 * @nullable
 */
export type PersonAccountAllOfAccount = Account | null;

/**
 * @nullable
 */
export type PersonAccountAllOfRole = TeamRole | null;

export type PersonAccountAllOf = {
  /** @nullable */
  Person?: PersonAccountAllOfPerson;
  /** @nullable */
  Account?: PersonAccountAllOfAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /** @nullable */
  Role?: PersonAccountAllOfRole;
};

export type PersonAccount = AbstractQcountBean & PersonAccountAllOf;

/**
 * @nullable
 */
export type AccountAllOfBillingAddress = Address | null;

/**
 * @nullable
 */
export type AccountAllOfMailingAddress = Address | null;

/**
 * @nullable
 */
export type AccountAllOfPaymentInformation = PaymentInformation | null;

/**
 * @nullable
 */
export type AccountAllOfCurrentSubscription = Subscription | null;

/**
 * @nullable
 */
export type AccountAllOfLatestSubscription = Subscription | null;

/**
 * @nullable
 */
export type AccountAllOfPrimaryContact = Person | null;

/**
 * @nullable
 */
export type AccountAllOfPrimarySubscription = Subscription | null;

/**
 * @nullable
 */
export type AccountAllOfPrimaryStripeSubscription = StripeSubscription | null;

export type AccountAllOf = {
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
  BillingAddress?: AccountAllOfBillingAddress;
  /** @nullable */
  MailingAddress?: AccountAllOfMailingAddress;
  AccountStage?: AccountStage;
  /** @nullable */
  PaymentInformation?: AccountAllOfPaymentInformation;
  /** @nullable */
  PersonAccount?: PersonAccount[] | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
  /** @nullable */
  StripeInvoices?: StripeInvoice[] | null;
  /** @nullable */
  StripePaymentMethods?: StripePaymentMethod[] | null;
  /** @nullable */
  StripeSubscriptions?: StripeSubscription[] | null;
  /** @nullable */
  Subscriptions?: Subscription[] | null;
  /** @nullable */
  Deals?: Deal[] | null;
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
  TaxIds?: AccountTaxId[] | null;
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
  CurrentSubscription?: AccountAllOfCurrentSubscription;
  /** @nullable */
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  /** @nullable */
  LatestSubscription?: AccountAllOfLatestSubscription;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
  /** @nullable */
  PrimaryContact?: AccountAllOfPrimaryContact;
  /** @nullable */
  PrimarySubscription?: AccountAllOfPrimarySubscription;
  /** @nullable */
  PrimaryStripeSubscription?: AccountAllOfPrimaryStripeSubscription;
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
  [key: string]: unknown | null;
};

export type Account = AbstractStripeBeanOfCustomer & AccountAllOf;

/**
 * `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created
 */
export type AccountStage = typeof AccountStage[keyof typeof AccountStage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountStage = {
  Trialing: 2,
  Subscribing: 3,
  Cancelling: 4,
  Expired: 5,
  /** Trial Expired */
  TrialExpired: 6,
  /** Past Due */
  PastDue: 7,
  /** Cancelling Trial */
  CancellingTrial: 8,
  Paused: 9,
  Created: 10,
} as const;

export type PaymentInformationAllOf = {
  Account: Account;
  /**
   * @maxLength 250
   * @nullable
   */
  CustomerToken?: string | null;
  /** @nullable */
  LastFourDigits?: string | null;
  /** @nullable */
  LatestFailureDateTime?: string | null;
  /** @nullable */
  LatestFailureDescription?: string | null;
  /** @nullable */
  LatestSuccessDateTime?: string | null;
  NumberOfFailures: number;
  /** @nullable */
  PaymentClientSecret?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  PaymentMethodType?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PaymentToken?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  BankName?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  BankAccountType?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  BankAccountHolderType?: string | null;
  /** @nullable */
  NameOnCard?: string | null;
  /** @nullable */
  CardType?: string | null;
  /** @nullable */
  ExpirationMonth?: string | null;
  /** @nullable */
  ExpirationYear?: string | null;
  /** @nullable */
  Mode?: string | null;
  /** @nullable */
  OneTimeToken?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  SetupIntent?: string | null;
};

export type PaymentInformation = AbstractQcountBean & PaymentInformationAllOf;

/**
 * @nullable
 */
export type StripeInvoiceAllOfAccount = Account | null;

export type StripeInvoiceAllOf = {
  AmountDue?: number;
  AmountPaid?: number;
  AmountShipping?: number;
  AttemptCount?: number;
  Attempted?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  FinalizedAt?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  HostedInvoiceUrl?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  InvoicePdf?: string | null;
  /** @nullable */
  NextPaymentAttempt?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Number?: string | null;
  PeriodEnd?: string;
  PeriodStart?: string;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  StripeDiscounts?: StripeDiscount[] | null;
  /** @nullable */
  StripeInvoiceDiscountAmounts?: StripeInvoiceDiscountAmount[] | null;
  /** @nullable */
  StripeInvoiceLineItems?: StripeInvoiceLineItem[] | null;
  /** @nullable */
  StripeInvoicePayments?: StripeInvoicePayment[] | null;
  SubTotal?: number;
  /** @nullable */
  SubTotalExcludingTax?: number | null;
  /**
   * @maxLength 255
   * @nullable
   */
  SubscriptionId?: string | null;
  /** @nullable */
  Tax?: number | null;
  Total?: number;
  /** @nullable */
  TotalExcludingTax?: number | null;
  /** @nullable */
  Account?: StripeInvoiceAllOfAccount;
  IsRefunded?: boolean;
  CurrencyAmountCreditedPostPayment?: number;
  CurrencyAmountCreditedPrePayment?: number;
  CurrencyAmountDue?: number;
  CurrencyAmountPaid?: number;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyTotal?: number;
  CurrencyTotalExcludingTax?: number;
  CurrencySubTotal?: number;
  CurrencySubTotalExcludingTax?: number;
  CurrencyTax?: number;
  /** @nullable */
  DaysUntilDue?: number | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  PaymentStatus?: string | null;
  /** @nullable */
  StripeCreditNotes?: StripeCreditNote[] | null;
  /** @nullable */
  StripePaymentMethodId?: string | null;
  [key: string]: unknown | null;
};

export type StripeInvoice = AbstractStripeBeanOfInvoice & StripeInvoiceAllOf;

/**
 * @nullable
 */
export type StripeDiscountAllOfAccount = Account | null;

/**
 * @nullable
 */
export type StripeDiscountAllOfStripeCoupon = StripeCoupon | null;

/**
 * @nullable
 */
export type StripeDiscountAllOfStripePromotionCode = StripePromotionCode | null;

/**
 * @nullable
 */
export type StripeDiscountAllOfStripeInvoice = StripeInvoice | null;

/**
 * @nullable
 */
export type StripeDiscountAllOfStripeSubscription = StripeSubscription | null;

export type StripeDiscountAllOf = {
  /** @nullable */
  Account?: StripeDiscountAllOfAccount;
  /**
   * @maxLength 255
   * @nullable
   */
  CheckoutSessionId?: string | null;
  /** @nullable */
  End?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  InvoiceId?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  InvoiceItemId?: string | null;
  IsDeleted?: boolean;
  Start?: string;
  /** @nullable */
  StripeCoupon?: StripeDiscountAllOfStripeCoupon;
  /** @nullable */
  StripePromotionCode?: StripeDiscountAllOfStripePromotionCode;
  /**
   * @maxLength 255
   * @nullable
   */
  SubscriptionId?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  SubscriptionItemId?: string | null;
  /** @nullable */
  CouponId?: string | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  StripeInvoice?: StripeDiscountAllOfStripeInvoice;
  /** @nullable */
  StripeSubscription?: StripeDiscountAllOfStripeSubscription;
  /** @nullable */
  PromotionCodeId?: string | null;
  [key: string]: unknown | null;
};

export type StripeDiscount = AbstractStripeBeanOfDiscount & StripeDiscountAllOf;

export type StripeCouponAllOf = {
  /** @nullable */
  AmountOff?: number | null;
  /** @nullable */
  AppliesToProducts?: StripeProduct[] | null;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Duration?: string | null;
  /** @nullable */
  DurationInMonths?: number | null;
  /** @nullable */
  MaxRedemptions?: number | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  PercentOff?: number | null;
  /** @nullable */
  RedeemBy?: string | null;
  TimesRedeemed?: number;
  Valid?: boolean;
  /** @nullable */
  AppliesToProductIds?: string[] | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  /** @nullable */
  CurrencyAmountOff?: number | null;
  [key: string]: unknown | null;
};

export type StripeCoupon = AbstractStripeBeanOfCoupon & StripeCouponAllOf;

/**
 * @nullable
 */
export type StripeProductAllOfStripeProductFamily = StripeProductFamily | null;

export type StripeProductAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /**
   * @maxLength 255
   * @nullable
   */
  DefaultPriceId?: string | null;
  /** @nullable */
  Description?: string | null;
  IsActive?: boolean;
  /**
   * @maxLength 36
   * @nullable
   */
  TaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitLabel?: string | null;
  /** @nullable */
  ContentGroups?: ContentGroup[] | null;
  /** @nullable */
  StripePrices?: StripePrice[] | null;
  AccountRegistrationMode?: AccountRegistrationMode;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  IsPerUser?: boolean;
  IsQuantityEditable?: boolean;
  /** @nullable */
  MaximumPeople?: number | null;
  /**
   * @maxLength 8
   * @nullable
   */
  MigratedAddOnUid?: string | null;
  /**
   * @maxLength 8
   * @nullable
   */
  MigratedPlanUid?: string | null;
  /** @nullable */
  MinimumQuantity?: number | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  PostPurchaseUrl?: string | null;
  RequirePaymentInformation?: boolean;
  /** @nullable */
  StripeProductCrossSells?: StripeProductCrossSell[] | null;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  NumberOfPurchases?: number;
  NumberOfSubscriptions?: number;
  /** @nullable */
  StripeProductFamily?: StripeProductAllOfStripeProductFamily;
  [key: string]: unknown | null;
};

export type StripeProduct = AbstractStripeBeanOfProduct & StripeProductAllOf;

export type ContentGroupAllOf = {
  /**
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
  /** @nullable */
  ContentGroupItems?: ContentGroupItem[] | null;
  /** @nullable */
  AllowedPlans?: Plan[] | null;
  /** @nullable */
  AllowedProducts?: StripeProduct[] | null;
  /** @nullable */
  AllowedAddOns?: AddOn[] | null;
};

export type ContentGroup = AbstractQcountBean & ContentGroupAllOf;

export type ContentGroupItemAllOf = {
  /** @minLength 1 */
  Pattern: string;
  MatchMode: ContentGroupItemMatchMode;
  ContentGroup: ContentGroup;
};

export type ContentGroupItem = AbstractQcountBean & ContentGroupItemAllOf;

/**
 * `1` - Equals, `2` - StartsWith
 */
export type ContentGroupItemMatchMode = typeof ContentGroupItemMatchMode[keyof typeof ContentGroupItemMatchMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ContentGroupItemMatchMode = {
  Equals: 1,
  StartsWith: 2,
} as const;

/**
 * @nullable
 */
export type PlanAllOfPlanFamily = PlanFamily | null;

export type PlanAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  PlanFamily?: PlanAllOfPlanFamily;
  AccountRegistrationMode?: AccountRegistrationMode;
  IsQuantityEditable: boolean;
  MinimumQuantity?: number;
  /** @nullable */
  MaximumPeople?: number | null;
  MonthlyRate?: number;
  AnnualRate?: number;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SetupFee?: number;
  SkipSetupFeeOnPlanChange?: boolean;
  IsTaxable: boolean;
  IsActive?: boolean;
  IsPerUser?: boolean;
  RequirePaymentInformation?: boolean;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  PlanAddOns?: PlanAddOn[] | null;
  /** @nullable */
  ContentGroups?: ContentGroup[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
};

export type Plan = AbstractQcountBean & PlanAllOf;

export type PlanFamilyAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
  /** @nullable */
  Plans?: Plan[] | null;
  [key: string]: unknown | null;
};

export type PlanFamily = AbstractSchemaLessBean & PlanFamilyAllOf;

/**
 * @nullable
 */
export type AbstractSchemaLessBeanAllOfSchemaLessData = {[key: string]: unknown} | null;

export type AbstractSchemaLessBeanAllOf = {
  /** @nullable */
  SchemaLessData?: AbstractSchemaLessBeanAllOfSchemaLessData;
  [key: string]: unknown | null;
};

export type AbstractSchemaLessBean = AbstractQcountBean & AbstractSchemaLessBeanAllOf;

/**
 * `1` - Individual, `2` - Team
 */
export type AccountRegistrationMode = typeof AccountRegistrationMode[keyof typeof AccountRegistrationMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountRegistrationMode = {
  Individual: 1,
  Team: 2,
} as const;

/**
 * @nullable
 */
export type PlanAddOnAllOfPlan = Plan | null;

/**
 * @nullable
 */
export type PlanAddOnAllOfAddOn = AddOn | null;

export type PlanAddOnAllOf = {
  /** @nullable */
  Plan?: PlanAddOnAllOfPlan;
  /** @nullable */
  AddOn?: PlanAddOnAllOfAddOn;
  IsUserSelectable: boolean;
};

export type PlanAddOn = AbstractQcountBean & PlanAddOnAllOf;

export type AddOnAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /**
   * @minimum 1
   * @maximum 3
   */
  BillingAddOnType?: BillingAddOnType;
  IsQuantityEditable: boolean;
  MinimumQuantity?: number;
  MonthlyRate?: number;
  AnnualRate?: number;
  SetupFee?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  IsTaxable: boolean;
  IsBilledDuringTrial: boolean;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /** @nullable */
  PlanAddOns?: PlanAddOn[] | null;
  /** @nullable */
  ContentGroups?: ContentGroup[] | null;
  IsPerUser?: boolean;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SubscriptionCount?: number;
  Quantity?: number;
};

export type AddOn = AbstractQcountBean & AddOnAllOf;

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type BillingAddOnType = typeof BillingAddOnType[keyof typeof BillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;

/**
 * @nullable
 */
export type StripePriceAllOfRecurringStripeMeter = StripeMeter | null;

/**
 * @nullable
 */
export type StripePriceAllOfStripeProduct = StripeProduct | null;

export type StripePriceAllOf = {
  /**
   * @maxLength 36
   * @nullable
   */
  BillingScheme?: string | null;
  /**
   * @maxLength 36
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  CustomUnitAmount_Maximum?: number | null;
  /** @nullable */
  CustomUnitAmount_Minimum?: number | null;
  /** @nullable */
  CustomUnitAmount_Preset?: number | null;
  IsActive?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  Nickname?: string | null;
  /**
   * @maxLength 36
   * @nullable
   */
  Recurring_Interval?: string | null;
  /** @nullable */
  Recurring_IntervalCount?: number | null;
  /** @nullable */
  Recurring_StripeMeter?: StripePriceAllOfRecurringStripeMeter;
  /**
   * @maxLength 36
   * @nullable
   */
  Recurring_UsageType?: string | null;
  /** @nullable */
  StripeProduct?: StripePriceAllOfStripeProduct;
  /**
   * @maxLength 36
   * @nullable
   */
  TaxBehavior?: string | null;
  /**
   * @maxLength 36
   * @nullable
   */
  TiersMode?: string | null;
  /** @nullable */
  TransformQuantity_DivideBy?: number | null;
  /**
   * @maxLength 36
   * @nullable
   */
  Type?: string | null;
  /** @nullable */
  UnitAmount?: number | null;
  /** @nullable */
  UnitAmountDecimal?: number | null;
  ShowInSignUpForm?: boolean;
  /** @nullable */
  CurrencySymbol?: string | null;
  /** @nullable */
  CurrencyUnitAmount?: number | null;
  /** @nullable */
  CurrencyUnitAmountDecimal?: number | null;
  /** @nullable */
  Recurring_IntervalDays?: number | null;
  /** @nullable */
  Recurring_Description?: string | null;
  /** @nullable */
  StripeMeterId?: string | null;
  /** @nullable */
  StripeProductId?: string | null;
  [key: string]: unknown | null;
};

export type StripePrice = AbstractStripeBeanOfPrice & StripePriceAllOf;

export type StripeMeterAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  DisplayName: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  EventName: string;
  /**
   * @maxLength 10
   * @nullable
   */
  Status?: string | null;
  [key: string]: unknown | null;
};

export type StripeMeter = AbstractStripeBeanOfMeter & StripeMeterAllOf;

export type AbstractStripeBeanOfMeterAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfMeter = AbstractSchemaLessBean & AbstractStripeBeanOfMeterAllOf;

export type AbstractStripeBeanOfPriceAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfPrice = AbstractSchemaLessBean & AbstractStripeBeanOfPriceAllOf;

/**
 * @nullable
 */
export type StripeProductCrossSellAllOfStripeProduct = StripeProduct | null;

/**
 * @nullable
 */
export type StripeProductCrossSellAllOfCrossSellProduct = StripeProduct | null;

export type StripeProductCrossSellAllOf = {
  /** @nullable */
  StripeProduct?: StripeProductCrossSellAllOfStripeProduct;
  /** @nullable */
  CrossSellProduct?: StripeProductCrossSellAllOfCrossSellProduct;
  IsUserSelectable?: boolean;
};

export type StripeProductCrossSell = AbstractQcountBean & StripeProductCrossSellAllOf;

export type StripeProductFamilyAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
  /** @nullable */
  StripeProducts?: StripeProduct[] | null;
  [key: string]: unknown | null;
};

export type StripeProductFamily = AbstractSchemaLessBean & StripeProductFamilyAllOf;

export type AbstractStripeBeanOfProductAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfProduct = AbstractSchemaLessBean & AbstractStripeBeanOfProductAllOf;

export type AbstractStripeBeanOfCouponAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfCoupon = AbstractSchemaLessBean & AbstractStripeBeanOfCouponAllOf;

/**
 * @nullable
 */
export type StripePromotionCodeAllOfAccount = Account | null;

/**
 * @nullable
 */
export type StripePromotionCodeAllOfStripeCoupon = StripeCoupon | null;

export type StripePromotionCodeAllOf = {
  /** @nullable */
  Account?: StripePromotionCodeAllOfAccount;
  Active?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  Code?: string | null;
  /** @nullable */
  ExpiresAt?: string | null;
  /** @nullable */
  MaxRedemptions?: number | null;
  Restrictions_FirstTimeTransaction?: boolean;
  /** @nullable */
  StripeCoupon?: StripePromotionCodeAllOfStripeCoupon;
  TimesRedeemed?: number;
  Valid?: boolean;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  CouponId?: string | null;
  [key: string]: unknown | null;
};

export type StripePromotionCode = AbstractStripeBeanOfPromotionCode & StripePromotionCodeAllOf;

export type AbstractStripeBeanOfPromotionCodeAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfPromotionCode = AbstractSchemaLessBean & AbstractStripeBeanOfPromotionCodeAllOf;

/**
 * @nullable
 */
export type StripeSubscriptionAllOfStripeSubscriptionCancellation = StripeSubscriptionCancellation | null;

/**
 * @nullable
 */
export type StripeSubscriptionAllOfAccount = Account | null;

/**
 * @nullable
 */
export type StripeSubscriptionAllOfCurrentStripeSubscriptionSchedule = StripeSubscriptionSchedule | null;

export type StripeSubscriptionAllOf = {
  /** @nullable */
  ApplicationFeePercent?: number | null;
  /** @nullable */
  CancelAt?: string | null;
  CancelAtPeriodEnd?: boolean;
  /** @nullable */
  StripeSubscriptionCancellation?: StripeSubscriptionAllOfStripeSubscriptionCancellation;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  EndedAt?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  PauseCollection_Behavior?: string | null;
  /** @nullable */
  PauseCollection_ResumesAt?: string | null;
  StartDate?: string;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  TrialEnd?: string | null;
  /** @nullable */
  StripeDiscounts?: StripeDiscount[] | null;
  /** @nullable */
  StripeSubscriptionItems?: StripeSubscriptionItem[] | null;
  /** @nullable */
  StripeSubscriptionSchedules?: StripeSubscriptionSchedule[] | null;
  /** @nullable */
  Account?: StripeSubscriptionAllOfAccount;
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  BillingCycleAnchor?: string | null;
  /** @nullable */
  CollectionMethod?: string | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  DaysUntilDue?: number | null;
  /** @nullable */
  ScheduleId?: string | null;
  /** @nullable */
  StripeDiscountIds?: string[] | null;
  /** @nullable */
  StripePriceIds?: string | null;
  TrialPeriodDays?: number;
  /** @nullable */
  CurrentStripeSubscriptionSchedule?: StripeSubscriptionAllOfCurrentStripeSubscriptionSchedule;
  [key: string]: unknown | null;
};

export type StripeSubscription = AbstractStripeBeanOfSubscription & StripeSubscriptionAllOf;

/**
 * @nullable
 */
export type StripeSubscriptionCancellationAllOfAccount = Account | null;

/**
 * @nullable
 */
export type StripeSubscriptionCancellationAllOfLastProduct = StripeProduct | null;

export type StripeSubscriptionCancellationAllOf = {
  /**
   * @maxLength 1024
   * @nullable
   */
  Comment?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Feedback?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Reason?: string | null;
  /** @nullable */
  Account?: StripeSubscriptionCancellationAllOfAccount;
  /** @nullable */
  CancelationReason?: string | null;
  /** @nullable */
  LastProduct?: StripeSubscriptionCancellationAllOfLastProduct;
  SubmittedDateTime?: string;
  SubscribingStartDate?: string;
};

export type StripeSubscriptionCancellation = AbstractQcountBean & StripeSubscriptionCancellationAllOf;

/**
 * @nullable
 */
export type StripeSubscriptionItemAllOfStripeSubscription = StripeSubscription | null;

/**
 * @nullable
 */
export type StripeSubscriptionItemAllOfStripePrice = StripePrice | null;

export type StripeSubscriptionItemAllOf = {
  CurrentPeriodStart?: string;
  CurrentPeriodEnd?: string;
  /** @nullable */
  StripeSubscription?: StripeSubscriptionItemAllOfStripeSubscription;
  /** @nullable */
  StripeDiscounts?: StripeDiscount[] | null;
  /** @nullable */
  StripePrice?: StripeSubscriptionItemAllOfStripePrice;
  Quantity?: number;
  /** @nullable */
  PriceId?: string | null;
  [key: string]: unknown | null;
};

export type StripeSubscriptionItem = AbstractStripeBeanOfSubscriptionItem & StripeSubscriptionItemAllOf;

export type AbstractStripeBeanOfSubscriptionItemAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfSubscriptionItem = AbstractSchemaLessBean & AbstractStripeBeanOfSubscriptionItemAllOf;

/**
 * @nullable
 */
export type StripeSubscriptionScheduleAllOfStripeSubscription = StripeSubscription | null;

export type StripeSubscriptionScheduleAllOf = {
  /** @nullable */
  CompletedAt?: string | null;
  /** @nullable */
  CurrentPhase_EndDate?: string | null;
  /** @nullable */
  CurrentPhase_StartDate?: string | null;
  /** @nullable */
  EndBehavior?: string | null;
  /** @nullable */
  StripeSubscriptionSchedulePhases?: StripeSubscriptionSchedulePhase[] | null;
  /** @nullable */
  ReleasedAt?: string | null;
  /** @nullable */
  Status?: string | null;
  /** @nullable */
  StripeSubscription?: StripeSubscriptionScheduleAllOfStripeSubscription;
  /** @nullable */
  SubscriptionId?: string | null;
  /** @nullable */
  ReleasedSubscriptionId?: string | null;
  [key: string]: unknown | null;
};

export type StripeSubscriptionSchedule = AbstractStripeBeanOfSubscriptionSchedule & StripeSubscriptionScheduleAllOf;

/**
 * @nullable
 */
export type StripeSubscriptionSchedulePhaseAllOfStripeSubscriptionSchedule = StripeSubscriptionSchedule | null;

export type StripeSubscriptionSchedulePhaseAllOf = {
  EndDate?: string;
  IsLivemode?: boolean;
  StartDate?: string;
  /** @nullable */
  StripeSubscriptionSchedulePhaseItems?: StripeSubscriptionSchedulePhaseItem[] | null;
  /** @nullable */
  StripeSubscriptionSchedule?: StripeSubscriptionSchedulePhaseAllOfStripeSubscriptionSchedule;
  /** @nullable */
  TrialEnd?: string | null;
  [key: string]: unknown | null;
};

export type StripeSubscriptionSchedulePhase = AbstractStripeBeanOfSubscriptionSchedulePhase & StripeSubscriptionSchedulePhaseAllOf;

/**
 * @nullable
 */
export type StripeSubscriptionSchedulePhaseItemAllOfStripePrice = StripePrice | null;

export type StripeSubscriptionSchedulePhaseItemAllOf = {
  /** @nullable */
  StripePrice?: StripeSubscriptionSchedulePhaseItemAllOfStripePrice;
  Quantity?: number;
  /** @nullable */
  PriceId?: string | null;
  [key: string]: unknown | null;
};

export type StripeSubscriptionSchedulePhaseItem = AbstractStripeBeanOfSubscriptionSchedulePhaseItem & StripeSubscriptionSchedulePhaseItemAllOf;

export type AbstractStripeBeanOfSubscriptionSchedulePhaseItemAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfSubscriptionSchedulePhaseItem = AbstractSchemaLessBean & AbstractStripeBeanOfSubscriptionSchedulePhaseItemAllOf;

export type AbstractStripeBeanOfSubscriptionSchedulePhaseAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfSubscriptionSchedulePhase = AbstractSchemaLessBean & AbstractStripeBeanOfSubscriptionSchedulePhaseAllOf;

export type AbstractStripeBeanOfSubscriptionScheduleAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfSubscriptionSchedule = AbstractSchemaLessBean & AbstractStripeBeanOfSubscriptionScheduleAllOf;

export type AbstractStripeBeanOfSubscriptionAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfSubscription = AbstractSchemaLessBean & AbstractStripeBeanOfSubscriptionAllOf;

export type AbstractStripeBeanOfDiscountAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfDiscount = AbstractSchemaLessBean & AbstractStripeBeanOfDiscountAllOf;

/**
 * @nullable
 */
export type StripeInvoiceDiscountAmountAllOfStripeInvoice = StripeInvoice | null;

/**
 * @nullable
 */
export type StripeInvoiceDiscountAmountAllOfStripeDiscount = StripeDiscount | null;

export type StripeInvoiceDiscountAmountAllOf = {
  Amount?: number;
  /**
   * @maxLength 36
   * @nullable
   */
  DiscountId?: string | null;
  /** @nullable */
  StripeInvoice?: StripeInvoiceDiscountAmountAllOfStripeInvoice;
  CurrencyAmount?: number;
  /** @nullable */
  StripeDiscount?: StripeInvoiceDiscountAmountAllOfStripeDiscount;
};

export type StripeInvoiceDiscountAmount = AbstractQcountBean & StripeInvoiceDiscountAmountAllOf;

/**
 * @nullable
 */
export type StripeInvoiceLineItemAllOfStripeInvoice = StripeInvoice | null;

/**
 * @nullable
 */
export type StripeInvoiceLineItemAllOfStripePrice = StripePrice | null;

export type StripeInvoiceLineItemAllOf = {
  /** @nullable */
  StripeInvoice?: StripeInvoiceLineItemAllOfStripeInvoice;
  Amount?: number;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  PeriodStart?: string;
  PeriodEnd?: string;
  /** @nullable */
  Quantity?: number | null;
  /** @nullable */
  StripeDiscounts?: StripeDiscount[] | null;
  /** @nullable */
  StripePrice?: StripeInvoiceLineItemAllOfStripePrice;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  CurrencyAmount?: number | null;
  /** @nullable */
  PriceId?: string | null;
  Proration?: boolean;
  [key: string]: unknown | null;
};

export type StripeInvoiceLineItem = AbstractStripeBeanOfInvoiceLineItem & StripeInvoiceLineItemAllOf;

export type AbstractStripeBeanOfInvoiceLineItemAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfInvoiceLineItem = AbstractSchemaLessBean & AbstractStripeBeanOfInvoiceLineItemAllOf;

/**
 * @nullable
 */
export type StripeInvoicePaymentAllOfStripeInvoice = StripeInvoice | null;

export type StripeInvoicePaymentAllOf = {
  /** @nullable */
  AmountPaid?: number | null;
  AmountRequested?: number;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Payment_ChargeId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Payment_PaymentIntentId?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  Payment_Type?: string | null;
  /** @nullable */
  StripeInvoice?: StripeInvoicePaymentAllOfStripeInvoice;
  /** @nullable */
  Status?: string | null;
  /** @nullable */
  InvoiceId?: string | null;
  /** @nullable */
  StripeCharges?: StripeCharge[] | null;
  [key: string]: unknown | null;
};

export type StripeInvoicePayment = AbstractStripeBeanOfInvoicePayment & StripeInvoicePaymentAllOf;

/**
 * @nullable
 */
export type StripeChargeAllOfStripePaymentMethod = StripePaymentMethod | null;

/**
 * @nullable
 */
export type StripeChargeAllOfAccount = Account | null;

export type StripeChargeAllOf = {
  Amount?: number;
  AmountCaptured?: number;
  AmountRefunded?: number;
  /** @nullable */
  ApplicationFeeAmount?: number | null;
  /**
   * @maxLength 255
   * @nullable
   */
  ApplicationFeeId?: string | null;
  Captured?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  Paid?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  PaymentIntentId?: string | null;
  Refunded?: boolean;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  StripePaymentMethod?: StripeChargeAllOfStripePaymentMethod;
  /** @nullable */
  Account?: StripeChargeAllOfAccount;
  /**
   * @maxLength 256
   * @nullable
   */
  ExtraData?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyAmount?: number;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  PaymentMethodId?: string | null;
  /** @nullable */
  StripeRefunds?: StripeRefund[] | null;
  [key: string]: unknown | null;
};

export type StripeCharge = AbstractStripeBeanOfCharge & StripeChargeAllOf;

/**
 * @nullable
 */
export type StripePaymentMethodAllOfAccount = Account | null;

export type StripePaymentMethodAllOf = {
  /** @nullable */
  Account?: StripePaymentMethodAllOfAccount;
  /** @nullable */
  Card_Brand?: string | null;
  /** @nullable */
  Card_ExpMonth?: number | null;
  /** @nullable */
  Card_ExpYear?: number | null;
  /** @nullable */
  Card_Wallet_Type?: string | null;
  /** @nullable */
  BankName?: string | null;
  /** @nullable */
  Last4?: string | null;
  /** @nullable */
  Type?: string | null;
  /** @nullable */
  Label?: string | null;
  [key: string]: unknown | null;
};

export type StripePaymentMethod = AbstractStripeBeanOfPaymentMethod & StripePaymentMethodAllOf;

export type AbstractStripeBeanOfPaymentMethodAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfPaymentMethod = AbstractSchemaLessBean & AbstractStripeBeanOfPaymentMethodAllOf;

/**
 * @nullable
 */
export type StripeRefundAllOfStripeCharge = StripeCharge | null;

export type StripeRefundAllOf = {
  Amount?: number;
  /**
   * @maxLength 50
   * @nullable
   */
  ChargeId?: string | null;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  PaymentIntentId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Reason?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyAmount?: number;
  /** @nullable */
  StripeCharge?: StripeRefundAllOfStripeCharge;
  [key: string]: unknown | null;
};

export type StripeRefund = AbstractStripeBeanOfRefund & StripeRefundAllOf;

export type AbstractStripeBeanOfRefundAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfRefund = AbstractSchemaLessBean & AbstractStripeBeanOfRefundAllOf;

export type AbstractStripeBeanOfChargeAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfCharge = AbstractSchemaLessBean & AbstractStripeBeanOfChargeAllOf;

export type AbstractStripeBeanOfInvoicePaymentAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfInvoicePayment = AbstractSchemaLessBean & AbstractStripeBeanOfInvoicePaymentAllOf;

export type StripeCreditNoteAllOf = {
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  CustomerId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  InvoiceId?: string | null;
  /** @nullable */
  OutOfBandAmount?: number | null;
  PostPaymentAmount?: number;
  PrePaymentAmount?: number;
  /**
   * @maxLength 30
   * @nullable
   */
  Reason?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  Total?: number;
  /**
   * @maxLength 30
   * @nullable
   */
  Type?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyTotal?: number;
  [key: string]: unknown | null;
};

export type StripeCreditNote = AbstractStripeBeanOfCreditNote & StripeCreditNoteAllOf;

export type AbstractStripeBeanOfCreditNoteAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfCreditNote = AbstractSchemaLessBean & AbstractStripeBeanOfCreditNoteAllOf;

export type AbstractStripeBeanOfInvoiceAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfInvoice = AbstractSchemaLessBean & AbstractStripeBeanOfInvoiceAllOf;

/**
 * @nullable
 */
export type SubscriptionAllOfAccount = Account | null;

/**
 * @nullable
 */
export type SubscriptionAllOfPlan = Plan | null;

/**
 * @nullable
 */
export type SubscriptionAllOfLatestInvoice = Invoice | null;

export type SubscriptionAllOf = {
  /**
   * @minimum 1
   * @maximum 4
   */
  BillingRenewalTerm?: BillingRenewalTerm;
  /** @nullable */
  Account?: SubscriptionAllOfAccount;
  /** @nullable */
  Plan?: SubscriptionAllOfPlan;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  IsPlanUpgradeRequired?: boolean;
  /** @nullable */
  PlanUpgradeRequiredMessage?: string | null;
  /** @nullable */
  SubscriptionAddOns?: SubscriptionAddOn[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: DiscountCouponSubscription[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: SubscriptionAllOfLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};

export type Subscription = AbstractQcountBean & SubscriptionAllOf;

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type BillingRenewalTerm = typeof BillingRenewalTerm[keyof typeof BillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  /** One Time */
  OneTime: 4,
} as const;

/**
 * @nullable
 */
export type SubscriptionAddOnAllOfSubscription = Subscription | null;

/**
 * @nullable
 */
export type SubscriptionAddOnAllOfAddOn = AddOn | null;

export type SubscriptionAddOnAllOf = {
  /**
   * @minimum 1
   * @maximum 4
   */
  BillingRenewalTerm?: BillingRenewalTerm;
  /** @nullable */
  Subscription?: SubscriptionAddOnAllOfSubscription;
  /** @nullable */
  AddOn?: SubscriptionAddOnAllOfAddOn;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  /** @nullable */
  Rate?: number | null;
};

export type SubscriptionAddOn = AbstractQcountBean & SubscriptionAddOnAllOf;

/**
 * @nullable
 */
export type DiscountCouponSubscriptionAllOfSubscription = Subscription | null;

/**
 * @nullable
 */
export type DiscountCouponSubscriptionAllOfDiscountCoupon = DiscountCoupon | null;

export type DiscountCouponSubscriptionAllOf = {
  /** @nullable */
  RedeemedDate?: string | null;
  /** @nullable */
  ExpireDate?: string | null;
  /** @nullable */
  Subscription?: DiscountCouponSubscriptionAllOfSubscription;
  /** @nullable */
  DiscountCoupon?: DiscountCouponSubscriptionAllOfDiscountCoupon;
};

export type DiscountCouponSubscription = AbstractQcountBean & DiscountCouponSubscriptionAllOf;

export type DiscountCouponAllOf = {
  /** @nullable */
  UniqueIdentifier?: string | null;
  /** @nullable */
  Name?: string | null;
  IsActive?: boolean;
  /** @nullable */
  AmountOff?: number | null;
  /** @nullable */
  PercentOff?: number | null;
  /** @nullable */
  RedeemBy?: string | null;
  /**
   * @minimum 1
   * @maximum 3
   */
  Duration?: BillingDiscountDuration;
  /** @nullable */
  DurationInMonths?: number | null;
  TimesRedeemed?: number;
  /** @nullable */
  MaxRedemptions?: number | null;
  /** @nullable */
  DiscountCouponPlans?: DiscountCouponPlan[] | null;
  ApplyToAddOns?: boolean;
  /** @nullable */
  PlanUids?: string | null;
};

export type DiscountCoupon = AbstractQcountBean & DiscountCouponAllOf;

/**
 * `1` - Forever, `2` - Once, `3` - Repeating
 */
export type BillingDiscountDuration = typeof BillingDiscountDuration[keyof typeof BillingDiscountDuration];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingDiscountDuration = {
  Forever: 1,
  Once: 2,
  Repeating: 3,
} as const;

/**
 * @nullable
 */
export type DiscountCouponPlanAllOfPlan = Plan | null;

/**
 * @nullable
 */
export type DiscountCouponPlanAllOfDiscountCoupon = DiscountCoupon | null;

export type DiscountCouponPlanAllOf = {
  /** @nullable */
  Plan?: DiscountCouponPlanAllOfPlan;
  /** @nullable */
  DiscountCoupon?: DiscountCouponPlanAllOfDiscountCoupon;
};

export type DiscountCouponPlan = AbstractQcountBean & DiscountCouponPlanAllOf;

/**
 * @nullable
 */
export type InvoiceAllOfSubscription = Subscription | null;

export type InvoiceAllOf = {
  InvoiceDate?: string;
  /** @nullable */
  PaymentReminderSentDate?: string | null;
  Number?: number;
  BillingInvoiceStatus?: BillingInvoiceStatus;
  /** @nullable */
  Subscription?: InvoiceAllOfSubscription;
  Amount?: number;
  AmountOutstanding?: number;
  /** @nullable */
  InvoiceLineItems?: InvoiceLineItem[] | null;
  IsUserGenerated?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeTaxCalculationId?: string | null;
  /**
   * @maxLength 10
   * @nullable
   */
  StripeTaxBehavior?: string | null;
  AmountCredit?: number;
  AmountDiscount?: number;
  AmountPaid?: number;
  AmountRefunded?: number;
  AmountSubtotal?: number;
  AmountTax?: number;
  AmountTaxRefunded?: number;
  IsTaxable?: boolean;
  HasPaymentGatewayTransactions?: boolean;
  /** @nullable */
  StripePaymentTransactionIds?: string | null;
  /** @nullable */
  StripeRefundTransactionIds?: string | null;
  /** @nullable */
  StripeTaxRefundTransactionIds?: string | null;
};

export type Invoice = AbstractQcountBean & InvoiceAllOf;

/**
 * `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing
 */
export type BillingInvoiceStatus = typeof BillingInvoiceStatus[keyof typeof BillingInvoiceStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingInvoiceStatus = {
  Unpaid: 1,
  Paid: 2,
  Partial: 3,
  Uncollected: 4,
  Refunded: 5,
  Uncollectible: 6,
  Processing: 7,
} as const;

/**
 * @nullable
 */
export type InvoiceLineItemAllOfInvoice = Invoice | null;

/**
 * @nullable
 */
export type InvoiceLineItemAllOfLineItemType = LineItemType | null;

export type InvoiceLineItemAllOf = {
  /** @nullable */
  StartDate?: string | null;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  Description?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  Quantity?: number | null;
  Rate?: number;
  Amount?: number;
  Tax?: number;
  /** @nullable */
  Invoice?: InvoiceLineItemAllOfInvoice;
  /** @nullable */
  LineItemType?: InvoiceLineItemAllOfLineItemType;
  /** @nullable */
  EntityId?: number | null;
  /**
   * @maxLength 10
   * @nullable
   */
  StripeTaxReference?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeTaxLineItemId?: string | null;
  /** @nullable */
  EntityUid?: string | null;
};

export type InvoiceLineItem = AbstractQcountBean & InvoiceLineItemAllOf;

/**
 * `1` - Plan, `2` - PlanSetupFee, `3` - AddOn, `4` - AddOnSetupFee, `5` - Discount, `6` - Credit, `7` - PlanCredit, `8` - AddOnCredit
 */
export type LineItemType = typeof LineItemType[keyof typeof LineItemType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LineItemType = {
  Plan: 1,
  PlanSetupFee: 2,
  AddOn: 3,
  AddOnSetupFee: 4,
  Discount: 5,
  Credit: 6,
  PlanCredit: 7,
  AddOnCredit: 8,
} as const;

/**
 * @nullable
 */
export type AccountCancelationAllOfAccount = Account | null;

/**
 * @nullable
 */
export type AccountCancelationAllOfLastPlan = Plan | null;

export type AccountCancelationAllOf = {
  SubmittedDateTime?: string;
  /** @nullable */
  CancelationReason?: string | null;
  /** @nullable */
  Comment?: string | null;
  CancelationStatus?: CancelationStatus;
  /** @nullable */
  Account?: AccountCancelationAllOfAccount;
  /** @nullable */
  LastPlan?: AccountCancelationAllOfLastPlan;
  /** @nullable */
  SubscribingStartDate?: string | null;
};

export type AccountCancelation = AbstractQcountBean & AccountCancelationAllOf;

/**
 * `0` - Pending, `1` - Unknown, `2` - Completed, `3` - Removed, `4` - Deleted
 */
export type CancelationStatus = typeof CancelationStatus[keyof typeof CancelationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CancelationStatus = {
  Pending: 0,
  Unknown: 1,
  Completed: 2,
  Removed: 3,
  Deleted: 4,
} as const;

/**
 * @nullable
 */
export type DealAllOfDealPipelineStage = DealPipelineStage | null;

/**
 * @nullable
 */
export type DealAllOfAccount = Account | null;

/**
 * @nullable
 */
export type DealAllOfOwner = Person | null;

export type DealAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /** @nullable */
  Amount?: number | null;
  /** @nullable */
  DueDate?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  AssignedToPersonClientIdentifier?: string | null;
  Weight?: number;
  /** @nullable */
  DealPipelineStage?: DealAllOfDealPipelineStage;
  /** @nullable */
  Account?: DealAllOfAccount;
  /** @nullable */
  DealPeople?: DealPerson[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealAllOfOwner;
  /** @nullable */
  PipelineUid?: string | null;
  [key: string]: unknown | null;
};

export type Deal = AbstractSchemaLessBean & DealAllOf;

/**
 * @nullable
 */
export type DealPipelineStageAllOfDealPipeline = DealPipeline | null;

export type DealPipelineStageAllOf = {
  Weight?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  DealPipeline?: DealPipelineStageAllOfDealPipeline;
  /** @nullable */
  Deals?: Deal[] | null;
};

export type DealPipelineStage = AbstractQcountBean & DealPipelineStageAllOf;

export type DealPipelineAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  DealPipelineStages?: DealPipelineStage[] | null;
};

export type DealPipeline = AbstractQcountBean & DealPipelineAllOf;

/**
 * @nullable
 */
export type DealPersonAllOfPerson = Person | null;

/**
 * @nullable
 */
export type DealPersonAllOfDeal = Deal | null;

export type DealPersonAllOf = {
  /** @nullable */
  Person?: DealPersonAllOfPerson;
  /** @nullable */
  Deal?: DealPersonAllOfDeal;
};

export type DealPerson = AbstractQcountBean & DealPersonAllOf;

/**
 * @nullable
 */
export type AccountTaxIdAllOfAccount = Account | null;

export type AccountTaxIdAllOf = {
  /** @nullable */
  Account?: AccountTaxIdAllOfAccount;
  /**
   * @maxLength 50
   * @nullable
   */
  TaxId?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  TaxIdType?: string | null;
  IsInvalid?: boolean;
  [key: string]: unknown | null;
};

export type AccountTaxId = AbstractStripeBeanOfTaxId & AccountTaxIdAllOf;

export type AbstractStripeBeanOfTaxIdAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfTaxId = AbstractSchemaLessBean & AbstractStripeBeanOfTaxIdAllOf;

export type AbstractStripeBeanOfCustomerAllOf = {
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  [key: string]: unknown | null;
};

export type AbstractStripeBeanOfCustomer = AbstractSchemaLessBean & AbstractStripeBeanOfCustomerAllOf;

/**
 * `1` - Admin, `2` - Member, `3` - Operator
 */
export type TeamRole = typeof TeamRole[keyof typeof TeamRole];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TeamRole = {
  Admin: 1,
  Member: 2,
  Operator: 3,
} as const;

export type LeadFormSubmissionAllOf = {
  Person: Person;
  LeadForm: LeadForm;
  /** @nullable */
  RefererURL?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
};

export type LeadFormSubmission = AbstractQcountBean & LeadFormSubmissionAllOf;

/**
 * @nullable
 */
export type LeadFormAllOfDealPipelineStage = DealPipelineStage | null;

export type LeadFormAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  FieldConfigurationDataJSON?: string | null;
  /**
   * @deprecated
   * @maxLength 1000
   * @nullable
   */
  ThankYouRedirectUrl?: string | null;
  SubmissionCount?: number;
  /** @nullable */
  PipelineStageUid?: string | null;
  /** @nullable */
  DealPipelineStage?: LeadFormAllOfDealPipelineStage;
};

export type LeadForm = AbstractQcountBean & LeadFormAllOf;

/**
 * `0` - None, `1` - Gmail
 */
export type OAuthService = typeof OAuthService[keyof typeof OAuthService];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OAuthService = {
  None: 0,
  Gmail: 1,
} as const;

export type DiscordUserAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordUserId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordEmail?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordUsername?: string | null;
  /** @nullable */
  DiscordOAuthRefreshToken?: string | null;
};

export type DiscordUser = AbstractQcountBean & DiscordUserAllOf & Required<Pick<AbstractQcountBean & DiscordUserAllOf, 'Person'>>;

/**
 * `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed
 */
export type EmailListSubscriberStatus = typeof EmailListSubscriberStatus[keyof typeof EmailListSubscriberStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmailListSubscriberStatus = {
  Subscribed: 1,
  Unsubscribed: 2,
  Cleaned: 3,
  Confirmed: 4,
} as const;

export interface TokenPayload {
  /** @nullable */
  access_token?: string | null;
  /** @nullable */
  authentication_callback_url?: string | null;
  expires_in?: number;
  /** @nullable */
  id_token?: string | null;
  /** @nullable */
  refresh_token?: string | null;
  /** @nullable */
  token_type?: string | null;
}

/**
 * Returned when a login cannot complete with a password alone because the
user has two-factor authentication enabled. Carries the opaque challenge
token that must be echoed back to POST /api/v1/tokens/two-factor
(or the recovery / resend / switch-mechanism endpoints) along with enough
metadata for a client to render the verification step without a second
round-trip. The property names are snake_case to match the wire format of
the other token endpoints (see TokenPayload).
 */
export interface TwoFactorChallengePayload {
  /**
   * Present and true on the 202 response from POST /api/v1/tokens
when the user has at least one verified 2FA method. Absent on the
resend / switch-mechanism responses, which only ever follow an
already-issued login challenge.
   * @nullable
   */
  two_factor_required?: boolean | null;
  /**
   * Present and true instead of two_factor_required
when the tenant forces 2FA but the user has not yet enrolled any
method. In that case only challenge_token and
expires_in are populated and the client must route the
user through the mid-login enrollment endpoints
(/api/v1/tokens/two-factor/enroll/...) before a token can be issued.
   * @nullable
   */
  two_factor_enrollment_required?: boolean | null;
  /**
   * Short-lived signed JWT (audience outseta:2fa-challenge) that
identifies this challenge. Echo it back verbatim to complete the login.
   * @nullable
   */
  challenge_token?: string | null;
  /**
   * The mechanism this challenge was issued against: Email or
Totp (authenticator app). For Email a code has already
been sent to the user; for Totp the user reads the current
code from their authenticator app and nothing is sent.
   * @nullable
   */
  mechanism?: string | null;
  /**
   * A masked view of where an emailed code was sent (e.g. b***@outseta.com),
suitable for display. Empty when mechanism is Totp.
   * @nullable
   */
  masked_destination?: string | null;
  /** Seconds until the challenge expires (600). After this the
challenge_token can no longer be verified and the login must restart. */
  expires_in?: number;
  /**
   * Every verified mechanism enrolled for this user (excluding recovery
codes), e.g. ["Totp", "Email"]. A client can offer a
"use a different method" option for any value other than the current
mechanism via POST /api/v1/tokens/two-factor/switch-mechanism.
   * @nullable
   */
  available_mechanisms?: string[] | null;
  /**
   * true when the user has a batch of recovery codes on file, in
which case POST /api/v1/tokens/two-factor/recovery can be used
as a fallback if they cannot produce a primary code.
   * @nullable
   */
  recovery_codes_available?: boolean | null;
}

/**
 * Request body for POST /api/v1/tokens/two-factor: the challenge token
from the login response plus the user's one-time code. Property names are
snake_case to match the wire format of the token endpoints.
            
The action binds the body as a loose JObject at runtime; this type
exists so the API docs describe the body instead of an opaque data
parameter (see [OpenApiRequestBody] on the action).
 */
export interface TwoFactorVerifyRequest {
  /**
   * The challenge_token returned by POST /api/v1/tokens when
two-factor authentication is required. Echo it back verbatim.
   * @nullable
   */
  challenge_token?: string | null;
  /**
   * The user's one-time code: the emailed code for an Email challenge,
or the current code from their authenticator app for a Totp challenge.
   * @nullable
   */
  code?: string | null;
}

export interface PasswordPayload {
  /** @nullable */
  Password?: string | null;
}

/**
 * Returned from POST /api/v1/tokens/two-factor/enroll/totp/begin when a
user forced into 2FA chooses to enroll an authenticator app. Carries the
shared secret in the three forms a client may need to present it, plus the
challenge token the user's first generated code is confirmed against. The
property names are snake_case to match the wire format of the other token
endpoints (see TokenPayload).
 */
export interface TwoFactorTotpEnrollmentPayload {
  /**
   * Short-lived signed JWT identifying the enrollment-test challenge.
Echo it back to POST /api/v1/tokens/two-factor/enroll/totp/confirm
along with the first code from the authenticator app.
   * @nullable
   */
  challenge_token?: string | null;
  /**
   * The Base32-encoded shared secret. Offer this for manual entry by users
who cannot scan the QR code.
   * @nullable
   */
  secret?: string | null;
  /**
   * The full otpauth://totp/... URI encoding the secret, issuer and
parameters. Most authenticator apps add an account directly from this.
   * @nullable
   */
  otpauth_uri?: string | null;
  /**
   * A QR code rendering of otpauth_uri as a PNG, Base64
encoded — render it as an <img> for the user to scan.
   * @nullable
   */
  qr_code_png_base64?: string | null;
  /** Seconds until the enrollment-test challenge expires (600). */
  expires_in?: number;
}

/**
 * Returned from the mid-login enrollment confirm endpoints
(POST /api/v1/tokens/two-factor/enroll/{email|totp}/confirm) once the
user has proven control of the new mechanism. Completes a forced-enrollment
login: it both finalizes the JWT access token and surfaces the freshly
generated recovery codes. The property names are snake_case to match the
wire format of the other token endpoints (see TokenPayload).
 */
export interface TwoFactorEnrollmentConfirmationPayload {
  /** Always true on a success response; the enrollment is now active. */
  confirmed?: boolean;
  /**
   * The user's recovery codes, generated as part of first-time enrollment.
These are shown once and never returned again — prompt the user
to store them somewhere safe. Each code is single-use at
POST /api/v1/tokens/two-factor/recovery.
   * @nullable
   */
  recovery_codes?: string[] | null;
  /**
   * The JWT access token. Use it as Authorization: bearer {access_token}
for subsequent API calls — login is complete.
   * @nullable
   */
  access_token?: string | null;
  /**
   * Always Bearer.
   * @nullable
   */
  token_type?: string | null;
  /** Seconds until the access token expires. */
  expires_in?: number;
}

/**
 * @nullable
 */
export type NoCodeSettingsAllOfAccount = Account | null;

export type NoCodeSettingsAllOf = {
  AccountPagesEnabled?: boolean;
  /**
   * @maxLength 255
   * @nullable
   */
  AccountPagesPathPrefix?: string | null;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccountPagesAccessDeniedPath?: string | null;
  AccountPagesRedirectOnLogin?: boolean;
  /** @nullable */
  Account?: NoCodeSettingsAllOfAccount;
  BillingSystem?: BillingSystem;
  /** @nullable */
  ContentGroups?: ContentGroup[] | null;
  /** @nullable */
  MagicLinkApiKey?: string | null;
  /** @nullable */
  OidcClients?: ClientApplication[] | null;
  /**
   * @deprecated
   * @nullable
   */
  OidcClientId?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  OidcRedirectUri?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  OidcPostLogoutRedirectUri?: string | null;
  /** @nullable */
  Plans?: Plan[] | null;
  /** @nullable */
  Products?: StripeProduct[] | null;
};

export type NoCodeSettings = AbstractQcountBean & NoCodeSettingsAllOf;

/**
 * `1` - Outseta, `2` - Stripe
 */
export type BillingSystem = typeof BillingSystem[keyof typeof BillingSystem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingSystem = {
  Outseta: 1,
  Stripe: 2,
} as const;

export type ClientApplicationAllOf = {
  /**
   * @maxLength 20
   * @nullable
   */
  ClientId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  ClientSecret?: string | null;
  /**
   * @minLength 1
   * @maxLength 100
   */
  Name: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  AllowedOrigin: string;
  /** @nullable */
  PostLogoutRedirectUris?: string | null;
  /** @nullable */
  RedirectUris?: string | null;
  RefreshTokenLifetime?: number;
};

export type ClientApplication = AbstractQcountBean & ClientApplicationAllOf;

export type ChatSettingsAllOf = {
  /**
   * @maxLength 100
   * @nullable
   */
  IntroHeading?: string | null;
  /**
   * @maxLength 280
   * @nullable
   */
  IntroMessage?: string | null;
  /**
   * @maxLength 280
   * @nullable
   */
  AutoResponderMessageAway?: string | null;
  /**
   * @deprecated
   * @maxLength 280
   * @nullable
   */
  AutoResponderMessageAwayNoEmail?: string | null;
  /**
   * @deprecated
   * @maxLength 280
   * @nullable
   */
  AutoResponderMessageAwayNoEmailThankYou?: string | null;
  AutoResponderDelayMinutes?: number;
  RequireEmail?: boolean;
  /**
   * @maxLength 280
   * @nullable
   */
  RequireEmailMessage?: string | null;
};

export type ChatSettings = AbstractQcountBean & ChatSettingsAllOf;

/**
 * @nullable
 */
export type CaseAllOfLastCaseHistory = CaseHistory | null;

export type CaseAllOf = {
  SubmittedDateTime?: string;
  LastActivity?: string;
  FromPerson: Person;
  /**
   * @maxLength 50
   * @nullable
   */
  AssignedToPersonClientIdentifier?: string | null;
  /** @nullable */
  Subject?: string | null;
  /** @nullable */
  Body?: string | null;
  /** @nullable */
  UserAgent?: string | null;
  /**
   * @minimum 1
   * @maximum 3
   */
  Status: SupportCaseStatus;
  /**
   * @minimum 1
   * @maximum 5
   */
  Source: SupportCaseSource;
  /** @nullable */
  CaseHistories?: CaseHistory[] | null;
  /** @nullable */
  CaseTags?: CaseTag[] | null;
  HasUnread?: boolean;
  IsOnline?: boolean;
  /** @nullable */
  LastCaseHistory?: CaseAllOfLastCaseHistory;
  /** @nullable */
  Participants?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
  Score?: number;
};

export type Case = AbstractQcountBean & CaseAllOf;

/**
 * `1` - Open, `2` - Closed, `3` - Spam
 */
export type SupportCaseStatus = typeof SupportCaseStatus[keyof typeof SupportCaseStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportCaseStatus = {
  Open: 1,
  Closed: 2,
  Spam: 3,
} as const;

/**
 * `1` - Website, `2` - Email, `3` - Facebook, `4` - Twitter, `5` - Chat
 */
export type SupportCaseSource = typeof SupportCaseSource[keyof typeof SupportCaseSource];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportCaseSource = {
  Website: 1,
  Email: 2,
  Facebook: 3,
  Twitter: 4,
  Chat: 5,
} as const;

export type CaseHistoryAllOf = {
  HistoryDateTime?: string;
  Case: Case;
  /** @nullable */
  AgentName?: string | null;
  /** @nullable */
  Comment?: string | null;
  Type: SupportCaseHistoryType;
  /** @nullable */
  SeenDateTime?: string | null;
  /** @nullable */
  ClickDateTime?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  UniqueIdentifier?: string | null;
  /** @nullable */
  PersonEmail?: string | null;
  /** @nullable */
  NewUvi?: string | null;
};

export type CaseHistory = AbstractQcountBean & CaseHistoryAllOf;

/**
 * `1` - PersonReply, `2` - Note, `3` - Closed, `4` - Reopened, `5` - Assigned, `6` - AgentReply, `7` - AutoReply, `8` - ContactChange
 */
export type SupportCaseHistoryType = typeof SupportCaseHistoryType[keyof typeof SupportCaseHistoryType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportCaseHistoryType = {
  PersonReply: 1,
  Note: 2,
  Closed: 3,
  Reopened: 4,
  Assigned: 5,
  AgentReply: 6,
  AutoReply: 7,
  ContactChange: 8,
} as const;

/**
 * @nullable
 */
export type CaseTagAllOfCase = Case | null;

/**
 * @nullable
 */
export type CaseTagAllOfTag = Tag | null;

export type CaseTagAllOf = {
  /** @nullable */
  Case?: CaseTagAllOfCase;
  /** @nullable */
  Tag?: CaseTagAllOfTag;
};

export type CaseTag = AbstractQcountBean & CaseTagAllOf;

/**
 * @nullable
 */
export type ArticleAllOfCategory = Category | null;

export type ArticleAllOf = {
  Weight?: number;
  /**
   * @maxLength 255
   * @nullable
   */
  Title?: string | null;
  /** @nullable */
  Body?: string | null;
  /**
   * @minimum 1
   * @maximum 3
   */
  SupportArticleStatus?: SupportArticleStatus;
  /** @nullable */
  Category?: ArticleAllOfCategory;
  /**
   * @maxLength 255
   * @nullable
   */
  Keywords?: string | null;
};

export type Article = AbstractQcountBean & ArticleAllOf;

/**
 * `1` - Draft, `2` - WaitingReview, `3` - Published
 */
export type SupportArticleStatus = typeof SupportArticleStatus[keyof typeof SupportArticleStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SupportArticleStatus = {
  Draft: 1,
  WaitingReview: 2,
  Published: 3,
} as const;

export type CategoryAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  Weight?: number;
  /** @nullable */
  Articles?: Article[] | null;
};

export type Category = AbstractQcountBean & CategoryAllOf;

export type SupportSettingsAllOf = {
  /** @nullable */
  EmailAddress?: string | null;
  /** @nullable */
  HeaderCssBgColor?: string | null;
  /** @nullable */
  HeaderCssColor?: string | null;
  /** @nullable */
  PhoneNumber?: string | null;
  /** @nullable */
  KnowledgeBaseCss?: string | null;
  /** @nullable */
  KnowledgeBaseLogoS3Url?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  KnowledgeBaseHeader?: string | null;
  /** @nullable */
  KnowledgeBaseIntroduction?: string | null;
  /** @nullable */
  KnowledgeBaseFooterLinkJSON?: string | null;
  /** @nullable */
  OfficeHoursJSON?: string | null;
  /** @nullable */
  EmailNotificationForNewTickets?: string | null;
  DoNotSendSupportThankYouEmail?: boolean;
};

export type SupportSettings = AbstractQcountBean & SupportSettingsAllOf;

/**
 * @nullable
 */
export type WebflowConfigurationSyncConfiguration = WebflowSyncConfiguration | null;

export interface WebflowConfiguration {
  IsAuthorized?: boolean;
  /** @nullable */
  LastSynced?: string | null;
  /** @nullable */
  LastSyncErrors?: WebflowSyncError[] | null;
  /** @nullable */
  SyncConfiguration?: WebflowConfigurationSyncConfiguration;
  /** @nullable */
  SyncLogs?: WebflowSyncLog[] | null;
}

export interface WebflowSyncError { [key: string]: unknown }

/**
 * @nullable
 */
export type WebflowSyncConfigurationSite = WebflowSite | null;

/**
 * @nullable
 */
export type WebflowSyncConfigurationCollection = WebflowCollection | null;

export interface WebflowSyncConfiguration {
  IsActive?: boolean;
  /** @nullable */
  Site?: WebflowSyncConfigurationSite;
  /** @nullable */
  Collection?: WebflowSyncConfigurationCollection;
  /** @nullable */
  FieldMappings?: WebflowFieldMapping[] | null;
  SyncSlugToAccount?: boolean;
}

export interface WebflowSite {
  /**
   * @deprecated
   * @nullable
   */
  _id?: string | null;
  /** @nullable */
  id?: string | null;
  createdOn?: string;
  /** @nullable */
  database?: string | null;
  /** @nullable */
  displayName?: string | null;
  /** @nullable */
  lastPublished?: string | null;
  /** @nullable */
  name?: string | null;
  /** @nullable */
  previewUrl?: string | null;
  /** @nullable */
  shortName?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  timezone?: string | null;
  /** @nullable */
  timeZone?: string | null;
}

export interface WebflowCollection {
  /**
   * @deprecated
   * @nullable
   */
  _id?: string | null;
  /** @nullable */
  id?: string | null;
  createdOn?: string;
  /** @nullable */
  displayName?: string | null;
  lastUpdated?: string;
  /**
   * @deprecated
   * @nullable
   */
  name?: string | null;
  /** @nullable */
  singularName?: string | null;
  /** @nullable */
  slug?: string | null;
  /** @nullable */
  fields?: WebflowField[] | null;
}

export interface WebflowField {
  /** @nullable */
  id?: string | null;
  /** @nullable */
  displayName?: string | null;
  /** @deprecated */
  editable?: boolean;
  /** @nullable */
  helpText?: string | null;
  isEditable?: boolean;
  isRequired?: boolean;
  /** @nullable */
  itemRefCollectionId?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  name?: string | null;
  /** @deprecated */
  required?: boolean;
  /** @nullable */
  slug?: string | null;
  /** @nullable */
  type?: string | null;
}

/**
 * @nullable
 */
export type WebflowFieldMappingWebflowField = WebflowField | null;

export interface WebflowFieldMapping {
  /** @nullable */
  OutsetaField?: string | null;
  /** @nullable */
  WebflowField?: WebflowFieldMappingWebflowField;
}

export interface WebflowSyncLog {
  Count?: number;
  SyncDateTime?: string;
  /** @nullable */
  WebflowSyncItems?: WebflowSyncItem[] | null;
}

export interface WebflowSyncItem { [key: string]: unknown }

export interface ProcessCodePayload { [key: string]: unknown }

export type QcountConfigAllOf = {
  SettingType?: QcountConfigSettingType;
  /** @nullable */
  SettingValue?: string | null;
};

export type QcountConfig = AbstractQcountBean & QcountConfigAllOf;

/**
 * `100` - Slack, `102` - MagicLinkApiKey, `103` - MagicLinkApiKeySecret, `104` - OAuth_HideCreateAccountLink, `105` - Chat_IsOffline, `106` - HostedPageCustomCode, `107` - RegistrationConfirmationEmailDelaySeconds, `108` - AccountCancellationReasons, `110` - WebhookSignatureKey, `111` - HostedProfileBackLink, `112` - AccountCancellationReasonRequired, `114` - Email_OutsetaBrandingDisabled, `119` - Email_BlacklistedInboundEmails, `121` - PasswordPolicy, `123` - CRM_FieldSortingEnabled, `124` - CRM_RegistrationCallbackLocations, `125` - KnowledgeBaseVersion, `126` - Support_SpamThreshold, `127` - Email_RestrictedPhrases, `128` - KnowledgeBaseLanguage, `130` - Billing_System, `131` - Billing_RestrictSubscriptionActions, `140` - TwoFactorAuthenticationEnabled, `142` - ForceTwoFactorAuthentication, `190` - Stripe_TaxEnabled, `192` - Stripe_TaxIdTypes, `193` - Stripe_ApplePayMerchantIdDomainAssociation, `194` - Stripe_WebhookSecret, `195` - Stripe_OnlySyncOutsetaCustomers, `196` - Stripe_Checkout_RequireBillingAddress, `197` - Stripe_Checkout_RequireConsentTermsOfService, `200` - Webflow_AccessToken, `201` - Webflow_SyncEnabled, `202` - Webflow_SyncConfiguration, `203` - Webflow_ApiVersion, `550` - CopyQcount_AddOnMap, `551` - CopyQcount_AccountMap, `552` - CopyQcount_DiscountCouponMap, `553` - CopyQcount_InvoiceMap, `554` - CopyQcount_PersonMap, `555` - CopyQcount_PlanMap, `556` - CopyQcount_PlanFamilyMap, `557` - CopyQcount_SubscriptionMap, `558` - CopyQcount_TransactionMap, `570` - StripeMigration_LastAccountId, `571` - StripeMigration_LastInvoiceId, `572` - StripeMigration_LastExpiredSubscriptionId, `573` - StripeMigration_LastPostExportSubscriptionId, `574` - StripeMigration_LastUsageId, `575` - StripeMigration_SubscriptionExportDate, `576` - StripeMigration_SubscriptionExportIds, `577` - StripeMigration_SubscriptionAddOnExportIds, `578` - StripeMigration_SubscriptionCutoverDate, `579` - StripeMigration_LastPreCutoverExportSubscriptionId
 */
export type QcountConfigSettingType = typeof QcountConfigSettingType[keyof typeof QcountConfigSettingType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const QcountConfigSettingType = {
  Slack: 100,
  MagicLinkApiKey: 102,
  MagicLinkApiKeySecret: 103,
  OAuth_HideCreateAccountLink: 104,
  Chat_IsOffline: 105,
  HostedPageCustomCode: 106,
  RegistrationConfirmationEmailDelaySeconds: 107,
  AccountCancellationReasons: 108,
  WebhookSignatureKey: 110,
  HostedProfileBackLink: 111,
  AccountCancellationReasonRequired: 112,
  Email_OutsetaBrandingDisabled: 114,
  Email_BlacklistedInboundEmails: 119,
  PasswordPolicy: 121,
  CRM_FieldSortingEnabled: 123,
  CRM_RegistrationCallbackLocations: 124,
  KnowledgeBaseVersion: 125,
  Support_SpamThreshold: 126,
  Email_RestrictedPhrases: 127,
  KnowledgeBaseLanguage: 128,
  Billing_System: 130,
  Billing_RestrictSubscriptionActions: 131,
  TwoFactorAuthenticationEnabled: 140,
  ForceTwoFactorAuthentication: 142,
  Stripe_TaxEnabled: 190,
  Stripe_TaxIdTypes: 192,
  Stripe_ApplePayMerchantIdDomainAssociation: 193,
  Stripe_WebhookSecret: 194,
  Stripe_OnlySyncOutsetaCustomers: 195,
  Stripe_Checkout_RequireBillingAddress: 196,
  Stripe_Checkout_RequireConsentTermsOfService: 197,
  Webflow_AccessToken: 200,
  Webflow_SyncEnabled: 201,
  Webflow_SyncConfiguration: 202,
  Webflow_ApiVersion: 203,
  CopyQcount_AddOnMap: 550,
  CopyQcount_AccountMap: 551,
  CopyQcount_DiscountCouponMap: 552,
  CopyQcount_InvoiceMap: 553,
  CopyQcount_PersonMap: 554,
  CopyQcount_PlanMap: 555,
  CopyQcount_PlanFamilyMap: 556,
  CopyQcount_SubscriptionMap: 557,
  CopyQcount_TransactionMap: 558,
  StripeMigration_LastAccountId: 570,
  StripeMigration_LastInvoiceId: 571,
  StripeMigration_LastExpiredSubscriptionId: 572,
  StripeMigration_LastPostExportSubscriptionId: 573,
  StripeMigration_LastUsageId: 574,
  StripeMigration_SubscriptionExportDate: 575,
  StripeMigration_SubscriptionExportIds: 576,
  StripeMigration_SubscriptionAddOnExportIds: 577,
  StripeMigration_SubscriptionCutoverDate: 578,
  StripeMigration_LastPreCutoverExportSubscriptionId: 579,
} as const;

export type DiscordServerAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  ExternalId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Description?: string | null;
  RequiresActiveSubscription?: boolean;
  SuppressPromptToConnect?: boolean;
  IsActive?: boolean;
  /** @nullable */
  DiscordRoles?: DiscordRole[] | null;
};

export type DiscordServer = AbstractQcountBean & DiscordServerAllOf;

/**
 * @nullable
 */
export type DiscordRoleAllOfDiscordServer = DiscordServer | null;

export type DiscordRoleAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  ExternalId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  Position?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  Icon?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Emoji?: string | null;
  /** @nullable */
  DiscordServer?: DiscordRoleAllOfDiscordServer;
  /** @nullable */
  DiscordRolePlans?: DiscordRolePlan[] | null;
};

export type DiscordRole = AbstractQcountBean & DiscordRoleAllOf;

/**
 * @nullable
 */
export type DiscordRolePlanAllOfDiscordRole = DiscordRole | null;

/**
 * @nullable
 */
export type DiscordRolePlanAllOfPlan = Plan | null;

export type DiscordRolePlanAllOf = {
  /** @nullable */
  DiscordRole?: DiscordRolePlanAllOfDiscordRole;
  /** @nullable */
  Plan?: DiscordRolePlanAllOfPlan;
};

export type DiscordRolePlan = AbstractQcountBean & DiscordRolePlanAllOf;

export interface SlackChannelSetting {
  /** @nullable */
  Channel?: string | null;
  /** @nullable */
  ChannelId?: string | null;
  /** @nullable */
  Webhook?: string | null;
  /** @nullable */
  Notifications?: ActivityType[] | null;
}

/**
 * `10` - Custom, `50` - Note, `51` - Email, `52` - PhoneCall, `53` - Meeting, `54` - Chat, `100` - AccountCreated, `101` - AccountUpdated, `102` - AccountAddPerson, `103` - AccountStageUpdated, `104` - AccountDeleted, `105` - AccountBillingInformationUpdated, `106` - AccountSubscriptionPlanUpdated, `107` - AccountSubscriptionPaymentCollected, `108` - AccountSubscriptionPaymentDeclined, `109` - AccountBillingInformationRequested, `110` - AccountBillingInvoiceEmailSent, `111` - AccountRemovePerson, `112` - AccountPaidSubscriptionCreated, `113` - AccountBillingInformationRemoved, `114` - AccountPrimaryPersonUpdated, `115` - AccountBillingInvoiceCreated, `116` - AccountSubscriptionStarted, `117` - AccountSubscriptionRenewalExtended, `118` - AccountSubscriptionAddOnsChanged, `119` - AccountSubscriptionCancellationRequested, `120` - AccountBillingInvoiceDeleted, `121` - AccountPersonRoleUpdated, `200` - PersonCreated, `201` - PersonUpdated, `202` - PersonDeleted, `203` - PersonLogin, `204` - PersonListSubscribed, `205` - PersonListUnsubscribed, `206` - PersonSegmentAdded, `207` - PersonSegmentRemoved, `208` - PersonEmailOpened, `209` - PersonEmailClicked, `210` - PersonEmailBounce, `211` - PersonEmailSpam, `212` - PersonSupportTicketCreated, `213` - PersonSupportTicketUpdated, `214` - PersonLeadFormSubmitted, `215` - PersonListConfirmed, `216` - PersonEmailSubscribed, `217` - PersonEmailUnsubscribed, `218` - PersonTemporaryPasswordSet, `219` - PersonSupportTicketClosed, `220` - PersonTwoFactorRecoveryCodesRegenerated, `300` - DealCreated, `301` - DealUpdated, `304` - DealDeleted, `305` - DealDueDate, `306` - TaskCreated, `307` - TaskUpdated, `400` - PlanCreated, `401` - PlanUpdated, `402` - AddOnCreated, `403` - AddOnUpdated, `500` - DiscordUserLinked, `501` - DiscordUserAddedToServer, `502` - DiscordUserRolesUpdated, `503` - DiscordUserRemovedFromServer
 */
export type ActivityType = typeof ActivityType[keyof typeof ActivityType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActivityType = {
  Custom: 10,
  Note: 50,
  Email: 51,
  PhoneCall: 52,
  Meeting: 53,
  Chat: 54,
  AccountCreated: 100,
  AccountUpdated: 101,
  AccountAddPerson: 102,
  AccountStageUpdated: 103,
  AccountDeleted: 104,
  AccountBillingInformationUpdated: 105,
  AccountSubscriptionPlanUpdated: 106,
  AccountSubscriptionPaymentCollected: 107,
  AccountSubscriptionPaymentDeclined: 108,
  AccountBillingInformationRequested: 109,
  AccountBillingInvoiceEmailSent: 110,
  AccountRemovePerson: 111,
  AccountPaidSubscriptionCreated: 112,
  AccountBillingInformationRemoved: 113,
  AccountPrimaryPersonUpdated: 114,
  AccountBillingInvoiceCreated: 115,
  AccountSubscriptionStarted: 116,
  AccountSubscriptionRenewalExtended: 117,
  AccountSubscriptionAddOnsChanged: 118,
  AccountSubscriptionCancellationRequested: 119,
  AccountBillingInvoiceDeleted: 120,
  AccountPersonRoleUpdated: 121,
  PersonCreated: 200,
  PersonUpdated: 201,
  PersonDeleted: 202,
  PersonLogin: 203,
  PersonListSubscribed: 204,
  PersonListUnsubscribed: 205,
  PersonSegmentAdded: 206,
  PersonSegmentRemoved: 207,
  PersonEmailOpened: 208,
  PersonEmailClicked: 209,
  PersonEmailBounce: 210,
  PersonEmailSpam: 211,
  PersonSupportTicketCreated: 212,
  PersonSupportTicketUpdated: 213,
  PersonLeadFormSubmitted: 214,
  PersonListConfirmed: 215,
  PersonEmailSubscribed: 216,
  PersonEmailUnsubscribed: 217,
  PersonTemporaryPasswordSet: 218,
  PersonSupportTicketClosed: 219,
  PersonTwoFactorRecoveryCodesRegenerated: 220,
  DealCreated: 300,
  DealUpdated: 301,
  DealDeleted: 304,
  DealDueDate: 305,
  TaskCreated: 306,
  TaskUpdated: 307,
  PlanCreated: 400,
  PlanUpdated: 401,
  AddOnCreated: 402,
  AddOnUpdated: 403,
  DiscordUserLinked: 500,
  DiscordUserAddedToServer: 501,
  DiscordUserRolesUpdated: 502,
  DiscordUserRemovedFromServer: 503,
} as const;

export type TemplateAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 1000
   * @nullable
   */
  Subject?: string | null;
  /** @minLength 1 */
  Body: string;
  /** @nullable */
  Design?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  Description?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  SystemName?: string | null;
  IsInternal?: boolean;
  /** @nullable */
  AvailableTokens?: string | null;
  /** @nullable */
  RequiredTokens?: string | null;
  /** @nullable */
  Tag?: string | null;
};

export type Template = AbstractQcountBean & TemplateAllOf;

export type SendGridDomainAuthenticationAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  DomainName: string;
  /**
   * @maxLength 100
   * @nullable
   */
  SendGridSubuser?: string | null;
  IsValid?: boolean;
  IsBrandedLinksDisabled?: boolean;
  IsBrandedLinksValid?: boolean;
  IsLinkTrackingDnsValid?: boolean;
  /**
   * @maxLength 100
   * @nullable
   */
  CloudflareCustomHostnameId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  CloudflareSslStatus?: string | null;
  /** @nullable */
  CloudflareCustomHostnameCreatedAt?: string | null;
  IsHttpsUpgradeAvailable?: boolean;
  /** @nullable */
  LastValidationAttempt?: string | null;
  /** @nullable */
  DnsEntries?: DnsEntry[] | null;
  /** @nullable */
  LegacyDnsEntries?: DnsEntry[] | null;
};

export type SendGridDomainAuthentication = AbstractQcountBean & SendGridDomainAuthenticationAllOf;

export interface DnsEntry {
  /** @nullable */
  Name?: string | null;
  Valid?: boolean;
  /** @nullable */
  Type?: string | null;
  /** @nullable */
  Host?: string | null;
  /** @nullable */
  Data?: string | null;
  /** @nullable */
  Reason?: string | null;
}

export interface ResendEmailsRequest {
  /** @nullable */
  EmailLogUids?: string[] | null;
}

/**
 * @nullable
 */
export type DripCampaignAllOfCampaign = Campaign | null;

export type DripCampaignAllOf = {
  IsActive?: boolean;
  /** @nullable */
  Campaign?: DripCampaignAllOfCampaign;
  TriggerId?: number;
  /** @nullable */
  TriggerStartValue?: string | null;
  /** @nullable */
  TriggerStopValue?: string | null;
  /** @nullable */
  DripCampaignMessages?: DripCampaignMessage[] | null;
  AllowRepeatProcessing?: boolean;
  StartDripToExistingMembers?: boolean;
  MarkExistingRecipientsDone?: boolean;
};

export type DripCampaign = AbstractQcountBean & DripCampaignAllOf;

export type CampaignAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 250
   * @nullable
   */
  FromName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FromEmail?: string | null;
  /**
   * @minimum 1
   * @maximum 2
   */
  CampaignType?: CampaignType;
};

export type Campaign = AbstractQcountBean & CampaignAllOf;

/**
 * `1` - Broadcast, `2` - Drip
 */
export type CampaignType = typeof CampaignType[keyof typeof CampaignType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CampaignType = {
  Broadcast: 1,
  Drip: 2,
} as const;

/**
 * @nullable
 */
export type DripCampaignMessageAllOfDripCampaign = DripCampaign | null;

/**
 * @nullable
 */
export type DripCampaignMessageAllOfMessage = Message | null;

export type DripCampaignMessageAllOf = {
  /** @nullable */
  DripCampaign?: DripCampaignMessageAllOfDripCampaign;
  /** @nullable */
  Message?: DripCampaignMessageAllOfMessage;
  DelayFromPriorDay?: number;
  DelayInHours?: number;
  Weight?: number;
};

export type DripCampaignMessage = AbstractQcountBean & DripCampaignMessageAllOf;

/**
 * @nullable
 */
export type MessageAllOfTemplate = Template | null;

export type MessageAllOf = {
  /** @nullable */
  Template?: MessageAllOfTemplate;
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Subject?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PreviewText?: string | null;
  /** @nullable */
  Body?: string | null;
  /** @nullable */
  Design?: string | null;
  CountSent?: number;
  CountDelivered?: number;
  CountBounce?: number;
  CountSpam?: number;
  CountOpen?: number;
  CountClick?: number;
  CountUnsubscribed?: number;
  CountTotalOpen?: number;
  CountTotalClick?: number;
  IgnoredSpamBounce?: number;
  IsBounceRatePaused?: boolean;
  IsSpamScorePaused?: boolean;
  /** @nullable */
  EmailLinks?: EmailLink[] | null;
  SpamAssassinScore?: number;
  SpamStatus?: SpamStatus;
  /**
   * @maxLength 1024
   * @nullable
   */
  SpamReason?: string | null;
};

export type Message = AbstractQcountBean & MessageAllOf;

export type EmailLinkAllOf = {
  /** @nullable */
  Name?: string | null;
  /** @nullable */
  URL?: string | null;
  CountClick?: number;
  CountTotalClick?: number;
  /** @nullable */
  RecipientIds?: number[] | null;
};

export type EmailLink = AbstractQcountBean & EmailLinkAllOf;

/**
 * `0` - Draft, `1` - Pending, `2` - Processing, `3` - Reprocessing, `4` - Spam, `5` - NotSpam, `6` - Ignored
 */
export type SpamStatus = typeof SpamStatus[keyof typeof SpamStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SpamStatus = {
  Draft: 0,
  Pending: 1,
  Processing: 2,
  Reprocessing: 3,
  Spam: 4,
  NotSpam: 5,
  Ignored: 6,
} as const;

export interface SequenceState {
  /** @nullable */
  Freezes?: SequenceFreeze[] | null;
  /** @nullable */
  Versions?: SequenceVersion[] | null;
}

export interface SequenceFreeze {
  FrozenAt?: string;
  /** @nullable */
  CreatedByUserId?: number | null;
}

export interface SequenceVersion {
  EffectiveFrom?: string;
  /** @nullable */
  Messages?: SequenceVersionMessage[] | null;
  /** @nullable */
  CreatedByUserId?: number | null;
}

export interface SequenceVersionMessage {
  MessageId?: number;
  OffsetHours?: number;
}

/**
 * @nullable
 */
export type SendTestEmailRequestDripCampaign = DripCampaign | null;

export interface SendTestEmailRequest {
  /** @nullable */
  DripCampaign?: SendTestEmailRequestDripCampaign;
  /** @nullable */
  AdditionalRecipients?: string[] | null;
}

export type QcountAllOf = {
  /**
   * @maxLength 100
   * @nullable
   */
  CompanyName?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  CompanyWebsite?: string | null;
  /**
   * @minLength 1
   * @maxLength 100
   */
  DomainName: string;
  /**
   * @maxLength 100
   * @nullable
   */
  DomainNameCustomForKnowledgeBase?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine1?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine2?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine3?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  City?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostalCode?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  CompanyLogoS3Url?: string | null;
  /**
   * @maxLength 20
   * @nullable
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  CssBgColor?: string | null;
  /**
   * @maxLength 20
   * @nullable
   * @pattern ^#[a-fA-F0-9]{6}$
   */
  CssColor?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  AuthenticationAudience?: string | null;
  /** @nullable */
  AuthenticationCallbackUrl?: string | null;
  AccessTokenLifetimeMinutes?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  AccountUid?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ForteJsAPILoginId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  StripeApplicationId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  StripePublishableKey?: string | null;
  /**
   * @maxLength 3
   * @nullable
   */
  StripeCurrencySymbol?: string | null;
  PaymentsGatewayActivationStatus?: PaymentsGatewayActivationStatus;
  /**
   * @maxLength 50
   * @nullable
   */
  RecaptchaSiteKey?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  RewardfulAPIKey?: string | null;
  /** @nullable */
  DomainPrefix?: string | null;
  /** @nullable */
  CurrencySymbol?: string | null;
  /** @nullable */
  ColorDark?: string | null;
  /** @nullable */
  ColorLight?: string | null;
  IsLivemode?: boolean;
  PaymentsMode?: PaymentsMode;
  TaxEnabled?: boolean;
};

export type Qcount = AbstractBean & QcountAllOf & Required<Pick<AbstractBean & QcountAllOf, 'Database'>>;

/**
 * `0` - Active, `1` - Inactive, `2` - MarkedForDeletion, `3` - Deleted
 */
export type QcountStatus = typeof QcountStatus[keyof typeof QcountStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const QcountStatus = {
  Active: 0,
  Inactive: 1,
  MarkedForDeletion: 2,
  Deleted: 3,
} as const;

/**
 * `0` - Disabled, `1` - ForteEnabled, `2` - StripeEnabled, `3` - CustomEnabled
 */
export type PaymentsGatewayActivationStatus = typeof PaymentsGatewayActivationStatus[keyof typeof PaymentsGatewayActivationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentsGatewayActivationStatus = {
  Disabled: 0,
  ForteEnabled: 1,
  StripeEnabled: 2,
  CustomEnabled: 3,
} as const;

export type DatabaseAllOf = {
  /**
   * @maxLength 500
   * @nullable
   */
  ConnectionString?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  ProxyConnectionString?: string | null;
  IsLive?: boolean;
  DatabaseType?: DatabaseType;
};

export type Database = AbstractBean & DatabaseAllOf;

/**
 * `0` - Client, `1` - Log
 */
export type DatabaseType = typeof DatabaseType[keyof typeof DatabaseType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DatabaseType = {
  Client: 0,
  Log: 1,
} as const;

/**
 * @nullable
 */
export type ApiKeyAllOfQcount = Qcount | null;

export type ApiKeyAllOf = {
  /**
   * @maxLength 50
   * @nullable
   */
  Name?: string | null;
  /**
   * @maxLength 40
   * @nullable
   */
  Key?: string | null;
  /** @nullable */
  Qcount?: ApiKeyAllOfQcount;
  /** @nullable */
  InitialSecret?: string | null;
  ApiKeyType?: ApiKeyType;
};

export type ApiKey = AbstractBean & ApiKeyAllOf;

/**
 * `0` - Admin, `1` - ReadOnly
 */
export type ApiKeyType = typeof ApiKeyType[keyof typeof ApiKeyType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ApiKeyType = {
  Admin: 0,
  ReadOnly: 1,
} as const;

/**
 * @nullable
 */
export type JwtKeyAllOfQcount = Qcount | null;

export type JwtKeyAllOf = {
  Active?: boolean;
  /** @nullable */
  X509CertificatePublic?: string | null;
  /** @nullable */
  KeyInitial?: string | null;
  /** @nullable */
  KeyMasked?: string | null;
  /** @nullable */
  Qcount?: JwtKeyAllOfQcount;
};

export type JwtKey = AbstractBean & JwtKeyAllOf;

/**
 * `0` - Manual, `1` - Automatic
 */
export type PaymentsMode = typeof PaymentsMode[keyof typeof PaymentsMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentsMode = {
  Manual: 0,
  Automatic: 1,
} as const;

/**
 * @nullable
 */
export type BroadcastCampaignAllOfCampaign = Campaign | null;

/**
 * @nullable
 */
export type BroadcastCampaignAllOfMessage = Message | null;

export type BroadcastCampaignAllOf = {
  /** @nullable */
  SendDateTime?: string | null;
  /** @nullable */
  NextRunDateTime?: string | null;
  /** @nullable */
  Campaign?: BroadcastCampaignAllOfCampaign;
  /** @nullable */
  Message?: BroadcastCampaignAllOfMessage;
  /** @nullable */
  RecipientData?: string | null;
  /** @nullable */
  EmailListUids?: string[] | null;
  /** @nullable */
  SegmentUids?: string[] | null;
  /** @nullable */
  TemplateUid?: string | null;
  Status?: BroadcastCampaignStatus;
  /**
   * @maxLength 500
   * @nullable
   */
  ErrorMessage?: string | null;
  /** @nullable */
  Tags?: Tag[] | null;
};

export type BroadcastCampaign = AbstractQcountBean & BroadcastCampaignAllOf;

/**
 * `1` - Draft, `2` - Pending, `3` - Sent, `4` - Queuing, `5` - Queued, `6` - Sending, `7` - Error, `8` - WaitingToResume, `9` - QueuedEmails, `10` - Archived
 */
export type BroadcastCampaignStatus = typeof BroadcastCampaignStatus[keyof typeof BroadcastCampaignStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BroadcastCampaignStatus = {
  Draft: 1,
  Pending: 2,
  Sent: 3,
  Queuing: 4,
  Queued: 5,
  Sending: 6,
  Error: 7,
  WaitingToResume: 8,
  QueuedEmails: 9,
  Archived: 10,
} as const;

/**
 * @nullable
 */
export type SendTestEmailRequest2BroadcastCampaign = BroadcastCampaign | null;

export interface SendTestEmailRequest2 {
  /** @nullable */
  BroadcastCampaign?: SendTestEmailRequest2BroadcastCampaign;
  /** @nullable */
  AdditionalRecipients?: string[] | null;
}

export interface TagUidList {
  /** @nullable */
  TagUids?: string[] | null;
}

/**
 * @nullable
 */
export type FlatfileImportDataSchemalessData = {[key: string]: unknown} | null;

export interface FlatfileImportData {
  /** @nullable */
  SchemalessData?: FlatfileImportDataSchemalessData;
  JobId?: number;
  /** @nullable */
  SheetId?: string | null;
  TaskType?: BackGroundTaskType;
  [key: string]: unknown | null;
}

/**
 * `1` - UpdateSegmentBackGroundTask, `2` - ImportPeopleTask, `3` - ImportAccountTask, `4` - ImportDealTask, `5` - ImportEmailList, `6` - RescheduleDripCampaignTask, `7` - DeleteSegmentPeopleTask, `8` - StartDripCampaignTask, `9` - WebflowSyncTask, `10` - UpdatePersonSegmentsTask, `11` - ImportDiscountCouponTask, `12` - RemoveDiscordUserFromAllServersTask, `13` - SendInvoiceEmailTask, `14` - UpdateDiscordUserRolesTask, `15` - StripeBillingSyncTask, `16` - UpdateStripeDefaultSourceTask, `17` - DeleteScheduledCampaignMessagesTask, `18` - SendSpamCheckEmailTask, `19` - UpdateDiscordMemberRolesTask, `20` - SendInvoicePaidEmailTask, `21` - ResendTrialLimitEmailTask
 */
export type BackGroundTaskType = typeof BackGroundTaskType[keyof typeof BackGroundTaskType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BackGroundTaskType = {
  UpdateSegmentBackGroundTask: 1,
  ImportPeopleTask: 2,
  ImportAccountTask: 3,
  ImportDealTask: 4,
  ImportEmailList: 5,
  RescheduleDripCampaignTask: 6,
  DeleteSegmentPeopleTask: 7,
  StartDripCampaignTask: 8,
  WebflowSyncTask: 9,
  UpdatePersonSegmentsTask: 10,
  ImportDiscountCouponTask: 11,
  RemoveDiscordUserFromAllServersTask: 12,
  SendInvoiceEmailTask: 13,
  UpdateDiscordUserRolesTask: 14,
  StripeBillingSyncTask: 15,
  UpdateStripeDefaultSourceTask: 16,
  DeleteScheduledCampaignMessagesTask: 17,
  SendSpamCheckEmailTask: 18,
  UpdateDiscordMemberRolesTask: 19,
  SendInvoicePaidEmailTask: 20,
  ResendTrialLimitEmailTask: 21,
} as const;

/**
 * @nullable
 */
export type UpdateAccountMemberRoleModelRole = TeamRole | null;

export interface UpdateAccountMemberRoleModel {
  /** @nullable */
  Role?: UpdateAccountMemberRoleModelRole;
}

export interface PasswordChangeModel {
  /** @nullable */
  ExistingPassword?: string | null;
  /** @nullable */
  GoogleIdToken?: string | null;
  /** @nullable */
  NewPassword?: string | null;
}

export type SegmentAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /**
   * @maxLength 500
   * @nullable
   */
  Description?: string | null;
  ContainsAccountConditions: boolean;
  /** @nullable */
  CriteriaData?: string | null;
  /** @nullable */
  LastRefreshDateTime?: string | null;
  /** @nullable */
  People?: SegmentPerson[] | null;
  PendingProcessing?: boolean;
  PersonCount?: number;
  /** @nullable */
  Tags?: Tag[] | null;
};

export type Segment = AbstractQcountBean & SegmentAllOf & Required<Pick<AbstractQcountBean & SegmentAllOf, 'ContainsDailyRepopulationConditions'>>;

/**
 * @nullable
 */
export type SegmentPersonAllOfPerson = Person | null;

/**
 * @nullable
 */
export type SegmentPersonAllOfSegment = Segment | null;

export type SegmentPersonAllOf = {
  /** @nullable */
  Person?: SegmentPersonAllOfPerson;
  /** @nullable */
  Segment?: SegmentPersonAllOfSegment;
};

export type SegmentPerson = AbstractQcountBean & SegmentPersonAllOf;

/**
 * @nullable
 */
export type CrmSettingsAllOfEmailList = EmailList | null;

export type CrmSettingsAllOf = {
  /** @deprecated */
  AccountRegistrationMode?: AccountRegistrationMode;
  AllowMultipleUserAccountsInTeamMode?: boolean;
  /**
   * @maxLength 1000
   * @nullable
   */
  CustomRegistrationUrl?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  CustomPostRegistrationUrl?: string | null;
  /** @nullable */
  EmailList?: CrmSettingsAllOfEmailList;
  /**
   * @maxLength 100
   * @nullable
   */
  ProfileTabs?: string | null;
  /** @nullable */
  ProfileAccountFieldGroupConfiguration?: string | null;
  /** @nullable */
  ProfileProfileFieldGroupConfiguration?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  RegistrationCallbackUrl?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  RegistrationConfirmationUrl?: string | null;
  RegistrationFields?: RegistrationField;
  /** @nullable */
  RegistrationFieldConfiguration?: string | null;
  RequireAcceptTermsAndConditions?: boolean;
  RequireAcceptTermsAndConditionsLocations?: AcceptTermsAndConditionsLocations;
  /** @nullable */
  RequireAcceptTermsAndConditionsHtml?: string | null;
  RequirePaymentInformation?: boolean;
  RequireCaptcha?: boolean;
  DoNotSendPasswordVerificationEmail?: boolean;
  /**
   * @maxLength 100
   * @nullable
   */
  GoogleOAuthClientId?: string | null;
  /** @nullable */
  CssWidgetStandard?: string | null;
  /** @nullable */
  CssWidgetCustom?: string | null;
  /** @nullable */
  SummaryDisplayFieldConfiguration?: string | null;
  RegistrationConfirmationEmailDelaySeconds?: number;
  /** @nullable */
  RegistrationCallbackUrlLocations?: string | null;
  TwoFactorAuthenticationAvailable?: boolean;
  MagicLinkLoginOnly?: boolean;
};

export type CrmSettings = AbstractQcountBean & CrmSettingsAllOf;

/**
 * `1` - PersonFirstName, `2` - PersonLastName, `4` - AccountName, `8` - AccountMailingAddress, `16` - AccountBillingAddress, `32` - PersonMailingAddress
 */
export type RegistrationField = typeof RegistrationField[keyof typeof RegistrationField];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RegistrationField = {
  PersonFirstName: 1,
  PersonLastName: 2,
  AccountName: 4,
  AccountMailingAddress: 8,
  AccountBillingAddress: 16,
  PersonMailingAddress: 32,
} as const;

/**
 * `1` - Registration, `2` - UpdatePaymentInformation
 */
export type AcceptTermsAndConditionsLocations = typeof AcceptTermsAndConditionsLocations[keyof typeof AcceptTermsAndConditionsLocations];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcceptTermsAndConditionsLocations = {
  Registration: 1,
  UpdatePaymentInformation: 2,
} as const;

/**
 * @nullable
 */
export type TaskAllOfType = TaskType | null;

/**
 * @nullable
 */
export type TaskAllOfAssignee = Person | null;

/**
 * @nullable
 */
export type TaskAllOfDeal = Deal | null;

/**
 * @nullable
 */
export type TaskAllOfPerson = Person | null;

/**
 * @nullable
 */
export type TaskAllOfAccount = Account | null;

export type TaskAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /** @nullable */
  Type?: TaskAllOfType;
  /** @nullable */
  Assignee?: TaskAllOfAssignee;
  /** @nullable */
  DueDate?: string | null;
  /** @nullable */
  Deal?: TaskAllOfDeal;
  /** @nullable */
  Person?: TaskAllOfPerson;
  /** @nullable */
  Account?: TaskAllOfAccount;
  /**
   * @maxLength 5000
   * @nullable
   */
  Notes?: string | null;
  Status?: TaskStatus;
  CreatedDateTime?: string;
  /** @nullable */
  CompletedDateTime?: string | null;
};

export type Task = AbstractQcountBean & TaskAllOf;

export type TaskTypeAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  DisplayOrder?: number | null;
};

export type TaskType = AbstractQcountBean & TaskTypeAllOf;

/**
 * `1` - Pending, `2` - InProgress, `3` - Done
 */
export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TaskStatus = {
  Pending: 1,
  InProgress: 2,
  Done: 3,
} as const;

export interface ExtendTrialParams {
  ToDate?: string;
  /** @nullable */
  ExpirationDate?: string | null;
}

export interface ExtendRenewalParams {
  /** @nullable */
  ToDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
}

export interface TemporaryPasswordModel {
  /** @nullable */
  temporaryPassword?: string | null;
}

export interface StripeCheckoutParams {
  /** @nullable */
  PriceIds?: string[] | null;
}

export interface StripeBillingSyncParams {
  /** @nullable */
  StripeCustomerId?: string | null;
}

/**
 * @nullable
 */
export type SessionFlowDataOptionsAfterCompletion = SessionFlowDataAfterCompletionOptions | null;

/**
 * @nullable
 */
export type SessionFlowDataOptionsSubscriptionCancel = SessionFlowDataSubscriptionCancelOptions | null;

/**
 * @nullable
 */
export type SessionFlowDataOptionsSubscriptionUpdate = SessionFlowDataSubscriptionUpdateOptions | null;

/**
 * @nullable
 */
export type SessionFlowDataOptionsSubscriptionUpdateConfirm = SessionFlowDataSubscriptionUpdateConfirmOptions | null;

export interface SessionFlowDataOptions {
  /** @nullable */
  AfterCompletion?: SessionFlowDataOptionsAfterCompletion;
  /** @nullable */
  SubscriptionCancel?: SessionFlowDataOptionsSubscriptionCancel;
  /** @nullable */
  SubscriptionUpdate?: SessionFlowDataOptionsSubscriptionUpdate;
  /** @nullable */
  SubscriptionUpdateConfirm?: SessionFlowDataOptionsSubscriptionUpdateConfirm;
  /** @nullable */
  Type?: string | null;
}

/**
 * @nullable
 */
export type SessionFlowDataAfterCompletionOptionsHostedConfirmation = SessionFlowDataAfterCompletionHostedConfirmationOptions | null;

/**
 * @nullable
 */
export type SessionFlowDataAfterCompletionOptionsRedirect = SessionFlowDataAfterCompletionRedirectOptions | null;

export interface SessionFlowDataAfterCompletionOptions {
  /** @nullable */
  HostedConfirmation?: SessionFlowDataAfterCompletionOptionsHostedConfirmation;
  /** @nullable */
  Redirect?: SessionFlowDataAfterCompletionOptionsRedirect;
  /** @nullable */
  Type?: string | null;
}

export interface SessionFlowDataAfterCompletionHostedConfirmationOptions {
  /** @nullable */
  CustomMessage?: string | null;
}

export interface SessionFlowDataAfterCompletionRedirectOptions {
  /** @nullable */
  ReturnUrl?: string | null;
}

/**
 * @nullable
 */
export type SessionFlowDataSubscriptionCancelOptionsRetention = SessionFlowDataSubscriptionCancelRetentionOptions | null;

export interface SessionFlowDataSubscriptionCancelOptions {
  /** @nullable */
  Retention?: SessionFlowDataSubscriptionCancelOptionsRetention;
  /** @nullable */
  Subscription?: string | null;
}

/**
 * @nullable
 */
export type SessionFlowDataSubscriptionCancelRetentionOptionsCouponOffer = SessionFlowDataSubscriptionCancelRetentionCouponOfferOptions | null;

export interface SessionFlowDataSubscriptionCancelRetentionOptions {
  /** @nullable */
  CouponOffer?: SessionFlowDataSubscriptionCancelRetentionOptionsCouponOffer;
  /** @nullable */
  Type?: string | null;
}

export interface SessionFlowDataSubscriptionCancelRetentionCouponOfferOptions {
  /** @nullable */
  Coupon?: string | null;
}

export interface SessionFlowDataSubscriptionUpdateOptions {
  /** @nullable */
  Subscription?: string | null;
}

export interface SessionFlowDataSubscriptionUpdateConfirmOptions {
  /** @nullable */
  Discounts?: SessionFlowDataSubscriptionUpdateConfirmDiscountOptions[] | null;
  /** @nullable */
  Items?: SessionFlowDataSubscriptionUpdateConfirmItemOptions[] | null;
  /** @nullable */
  Subscription?: string | null;
}

export interface SessionFlowDataSubscriptionUpdateConfirmDiscountOptions {
  /** @nullable */
  Coupon?: string | null;
  /** @nullable */
  PromotionCode?: string | null;
}

export interface SessionFlowDataSubscriptionUpdateConfirmItemOptions {
  /** @nullable */
  Id?: string | null;
  /** @nullable */
  Price?: string | null;
  /** @nullable */
  Quantity?: number | null;
}

export interface InvoiceStatusChangeOptions {
  /** @nullable */
  NewStatus?: string | null;
}

export interface InvoiceCreditOptions {
  CreditAmount?: number;
  /** @nullable */
  CreditReason?: string | null;
  /** @nullable */
  CreditType?: string | null;
}

export interface PauseCollectionOptions {
  /** @nullable */
  Behavior?: string | null;
  /** @nullable */
  ResumesAt?: string | null;
}

export interface ExtendSubscriptionOptions {
  ToDate?: string;
}

export type BillSettingsAllOf = {
  DaysPastDueToSetAccountToCanceling?: number;
  IsInvoicePaymentEmailDisabled: boolean;
  PaymentsMode?: PaymentsMode;
  BillingSystem?: BillingSystem;
  RestrictSubscriptionActions?: boolean;
  StripeCheckoutRequireBillingAddress?: boolean;
  StripeCheckoutRequireConsentTermsOfService?: boolean;
  /** @nullable */
  StripeTaxCode?: string | null;
  StripeTaxEnabled?: boolean;
  /** @nullable */
  StripeTaxTaxIdTypes?: string | null;
};

export type BillSettings = AbstractQcountBean & BillSettingsAllOf;

/**
 * @nullable
 */
export type UsageAllOfInvoice = Invoice | null;

export type UsageAllOf = {
  /** @minLength 1 */
  UsageDate: string;
  /** @nullable */
  Invoice?: UsageAllOfInvoice;
  SubscriptionAddOn: SubscriptionAddOn;
  Amount: number;
  /**
   * @maxLength 1024
   * @nullable
   */
  AdditionalUsageData?: string | null;
};

export type Usage = AbstractQcountBean & UsageAllOf;

export type TaxRateAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @minimum 0.001
   * @maximum 0.99
   */
  Rate?: number;
};

export type TaxRate = AbstractQcountBean & TaxRateAllOf;

/**
 * @nullable
 */
export type TransactionAllOfAccount = Account | null;

/**
 * @nullable
 */
export type TransactionAllOfInvoice = Invoice | null;

export type TransactionAllOf = {
  TransactionDate?: string;
  BillingTransactionType?: BillingTransactionType;
  /** @nullable */
  Account?: TransactionAllOfAccount;
  /** @nullable */
  Invoice?: TransactionAllOfInvoice;
  Amount?: number;
  IsCaptured?: boolean;
  IsElectronicTransaction?: boolean;
};

export type Transaction = AbstractQcountBean & TransactionAllOf;

/**
 * `1` - Invoice, `2` - Payment, `3` - Credit, `4` - Refund, `5` - Chargeback, `6` - TaxRefund
 */
export type BillingTransactionType = typeof BillingTransactionType[keyof typeof BillingTransactionType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BillingTransactionType = {
  Invoice: 1,
  Payment: 2,
  Credit: 3,
  Refund: 4,
  Chargeback: 5,
  TaxRefund: 6,
} as const;

/**
 * @nullable
 */
export type SetupIntentBillingAddress = Address | null;

export interface SetupIntent {
  /** @nullable */
  AddOnUid?: string | null;
  /** @nullable */
  BillingAddress?: SetupIntentBillingAddress;
  CheckoutAmount?: number;
  /** @nullable */
  ClientSecret?: string | null;
  /** @nullable */
  CompanyName?: string | null;
  /** @nullable */
  CustomerToken?: string | null;
  /** @nullable */
  Email?: string | null;
  /** @nullable */
  FirstName?: string | null;
  /** @nullable */
  InvoiceUid?: string | null;
  IsSetupIntent?: boolean;
  IsPaymentAuthentication?: boolean;
  /** @nullable */
  LastName?: string | null;
  OutstandingAmount?: number;
  /** @nullable */
  PaymentToken?: string | null;
  /** @nullable */
  PlanUid?: string | null;
  SetupFutureUsage?: boolean;
  /** @nullable */
  ToltReferralId?: string | null;
}

/**
 * @nullable
 */
export type ActivityCRMDealTriggerAllOfDealPipelineStage = DealPipelineStage | null;

export type ActivityCRMDealTriggerAllOf = {
  ActivityType?: ActivityType;
  /** @nullable */
  DealPipelineStage?: ActivityCRMDealTriggerAllOfDealPipelineStage;
};

export type ActivityCRMDealTrigger = AbstractQcountBean & ActivityCRMDealTriggerAllOf;

export type ActivityNotificationAllOf = {
  ActivityType?: ActivityType;
  /** @nullable */
  NotificationEmail?: string | null;
  /** @nullable */
  CallbackURL?: string | null;
  /**
   * @maxLength 512
   * @nullable
   */
  SlackWebhookURL?: string | null;
  CallbackErrorCount?: number;
  /**
   * @maxLength 512
   * @nullable
   */
  CallbackErrorDescription?: string | null;
};

export type ActivityNotification = AbstractQcountBean & ActivityNotificationAllOf;

export type ActivityAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  ActivityData?: string | null;
  ActivityDateTime?: string;
  ActivityType?: ActivityType;
  EntityType?: EntityType;
  /** @nullable */
  EntityUid?: string | null;
};

export type Activity = AbstractQcountBean & ActivityAllOf;

/**
 * @nullable
 */
export type ActivityCriteriaActivityType = ActivityType | null;

export interface ActivityCriteria {
  /** @nullable */
  EntityType?: string | null;
  /** @nullable */
  EntityUid?: string | null;
  /** @nullable */
  ActivityType?: ActivityCriteriaActivityType;
  /** @nullable */
  ActivityTypes?: string[] | null;
}

export interface CollectionMetadata {
  limit?: number;
  offset?: number;
  total?: number;
}

/**
 * @nullable
 */
export type AccountWebhookEntityBillingAddress = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine1?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine2?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine3?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  City?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostalCode?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  GeoLocation?: string | null;
} | null;

/**
 * @nullable
 */
export type AccountWebhookEntityMailingAddress = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine1?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine2?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine3?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  City?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostalCode?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  GeoLocation?: string | null;
} | null;

/**
 * `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created
 */
export type AccountWebhookEntityAccountStage = typeof AccountWebhookEntityAccountStage[keyof typeof AccountWebhookEntityAccountStage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityAccountStage = {
  Trialing: 2,
  Subscribing: 3,
  Cancelling: 4,
  Expired: 5,
  TrialExpired: 6,
  PastDue: 7,
  CancellingTrial: 8,
  Paused: 9,
  Created: 10,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityPaymentInformation = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  CustomerToken?: string | null;
  /** @nullable */
  LastFourDigits?: string | null;
  /** @nullable */
  LatestFailureDateTime?: string | null;
  /** @nullable */
  LatestFailureDescription?: string | null;
  /** @nullable */
  LatestSuccessDateTime?: string | null;
  NumberOfFailures?: number;
  /** @nullable */
  PaymentClientSecret?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  PaymentMethodType?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PaymentToken?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  BankName?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  BankAccountType?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  BankAccountHolderType?: string | null;
  /** @nullable */
  NameOnCard?: string | null;
  /** @nullable */
  CardType?: string | null;
  /** @nullable */
  ExpirationMonth?: string | null;
  /** @nullable */
  ExpirationYear?: string | null;
  /** @nullable */
  Mode?: string | null;
  /** @nullable */
  OneTimeToken?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  SetupIntent?: string | null;
} | null;

/**
 * `0` - None, `1` - Gmail
 */
export type AccountWebhookEntityPersonAccountItemPersonOAuthIntegrationStatus = typeof AccountWebhookEntityPersonAccountItemPersonOAuthIntegrationStatus[keyof typeof AccountWebhookEntityPersonAccountItemPersonOAuthIntegrationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityPersonAccountItemPersonOAuthIntegrationStatus = {
  None: 0,
  Gmail: 1,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityPersonAccountItemPerson = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Email?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FirstName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  LastName?: string | null;
  /** @nullable */
  PasswordLastUpdated?: string | null;
  PasswordMustChange?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneMobile?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneWork?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ProfileImageS3Url?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  Timezone?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Language?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  IPAddress?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Referer?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  UserAgent?: string | null;
  /** @nullable */
  LastLoginDateTime?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  OAuthGoogleProfileId?: string | null;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: AccountWebhookEntityPersonAccountItemPersonOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  IsConnectedToDiscord?: boolean;
} | null;

/**
 * `1` - Admin, `2` - Member, `3` - Operator
 * @nullable
 */
export type AccountWebhookEntityPersonAccountItemRole = typeof AccountWebhookEntityPersonAccountItemRole[keyof typeof AccountWebhookEntityPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityPersonAccountItemRole = {
  Admin: 1,
  Member: 2,
  Operator: 3,
} as const;

export type AccountWebhookEntityPersonAccountItem = {
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
  /** @nullable */
  Person?: AccountWebhookEntityPersonAccountItemPerson;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - Member, `3` - Operator
   * @nullable
   */
  Role?: AccountWebhookEntityPersonAccountItemRole;
};

export type AccountWebhookEntityStripeInvoicesItem = {
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
  AmountDue?: number;
  AmountPaid?: number;
  AmountShipping?: number;
  AttemptCount?: number;
  Attempted?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  FinalizedAt?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  HostedInvoiceUrl?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  InvoicePdf?: string | null;
  /** @nullable */
  NextPaymentAttempt?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Number?: string | null;
  PeriodEnd?: string;
  PeriodStart?: string;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  SubTotal?: number;
  /** @nullable */
  SubTotalExcludingTax?: number | null;
  /**
   * @maxLength 255
   * @nullable
   */
  SubscriptionId?: string | null;
  /** @nullable */
  Tax?: number | null;
  Total?: number;
  /** @nullable */
  TotalExcludingTax?: number | null;
  IsRefunded?: boolean;
  CurrencyAmountCreditedPostPayment?: number;
  CurrencyAmountCreditedPrePayment?: number;
  CurrencyAmountDue?: number;
  CurrencyAmountPaid?: number;
  /** @nullable */
  CurrencySymbol?: string | null;
  CurrencyTotal?: number;
  CurrencyTotalExcludingTax?: number;
  CurrencySubTotal?: number;
  CurrencySubTotalExcludingTax?: number;
  CurrencyTax?: number;
  /** @nullable */
  DaysUntilDue?: number | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  PaymentStatus?: string | null;
  /** @nullable */
  StripePaymentMethodId?: string | null;
};

export type AccountWebhookEntityStripePaymentMethodsItem = {
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
  /** @nullable */
  Card_Brand?: string | null;
  /** @nullable */
  Card_ExpMonth?: number | null;
  /** @nullable */
  Card_ExpYear?: number | null;
  /** @nullable */
  Card_Wallet_Type?: string | null;
  /** @nullable */
  BankName?: string | null;
  /** @nullable */
  Last4?: string | null;
  /** @nullable */
  Type?: string | null;
  /** @nullable */
  Label?: string | null;
};

export type AccountWebhookEntityStripeSubscriptionsItem = {
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
  /** @nullable */
  ApplicationFeePercent?: number | null;
  /** @nullable */
  CancelAt?: string | null;
  CancelAtPeriodEnd?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  EndedAt?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  PauseCollection_Behavior?: string | null;
  /** @nullable */
  PauseCollection_ResumesAt?: string | null;
  StartDate?: string;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  TrialEnd?: string | null;
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  BillingCycleAnchor?: string | null;
  /** @nullable */
  CollectionMethod?: string | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  DaysUntilDue?: number | null;
  /** @nullable */
  ScheduleId?: string | null;
  /** @nullable */
  StripeDiscountIds?: string[] | null;
  /** @nullable */
  StripePriceIds?: string | null;
  TrialPeriodDays?: number;
};

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountWebhookEntitySubscriptionsItemBillingRenewalTerm = typeof AccountWebhookEntitySubscriptionsItemBillingRenewalTerm[keyof typeof AccountWebhookEntitySubscriptionsItemBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntitySubscriptionsItemBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntitySubscriptionsItemPlanPlanFamily = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
} | null;

/**
 * `1` - Individual, `2` - Team
 */
export type AccountWebhookEntitySubscriptionsItemPlanAccountRegistrationMode = typeof AccountWebhookEntitySubscriptionsItemPlanAccountRegistrationMode[keyof typeof AccountWebhookEntitySubscriptionsItemPlanAccountRegistrationMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntitySubscriptionsItemPlanAccountRegistrationMode = {
  Individual: 1,
  Team: 2,
} as const;

export type AccountWebhookEntitySubscriptionsItemPlanPlanAddOnsItem = {
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
  IsUserSelectable: boolean;
};

export type AccountWebhookEntitySubscriptionsItemPlanContentGroupsItem = {
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
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
};

/**
 * @nullable
 */
export type AccountWebhookEntitySubscriptionsItemPlan = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  PlanFamily?: AccountWebhookEntitySubscriptionsItemPlanPlanFamily;
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: AccountWebhookEntitySubscriptionsItemPlanAccountRegistrationMode;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  /** @nullable */
  MaximumPeople?: number | null;
  MonthlyRate?: number;
  AnnualRate?: number;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SetupFee?: number;
  SkipSetupFeeOnPlanChange?: boolean;
  IsTaxable?: boolean;
  IsActive?: boolean;
  IsPerUser?: boolean;
  RequirePaymentInformation?: boolean;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  PlanAddOns?: AccountWebhookEntitySubscriptionsItemPlanPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AccountWebhookEntitySubscriptionsItemPlanContentGroupsItem[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
} | null;

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm = typeof AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm[keyof typeof AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemAddOnBillingAddOnType = typeof AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemAddOnBillingAddOnType[keyof typeof AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemAddOnBillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemAddOnBillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemAddOn = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** `1` - Recurring, `2` - Usage, `3` - OneTime */
  BillingAddOnType?: AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemAddOnBillingAddOnType;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  MonthlyRate?: number;
  AnnualRate?: number;
  SetupFee?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  IsTaxable?: boolean;
  IsBilledDuringTrial?: boolean;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  IsPerUser?: boolean;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SubscriptionCount?: number;
  Quantity?: number;
} | null;

export type AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItem = {
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
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemBillingRenewalTerm;
  /** @nullable */
  AddOn?: AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItemAddOn;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  /** @nullable */
  Rate?: number | null;
};

/**
 * `1` - Forever, `2` - Once, `3` - Repeating
 */
export type AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration = typeof AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration[keyof typeof AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration = {
  Forever: 1,
  Once: 2,
  Repeating: 3,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** @nullable */
  UniqueIdentifier?: string | null;
  /** @nullable */
  Name?: string | null;
  IsActive?: boolean;
  /** @nullable */
  AmountOff?: number | null;
  /** @nullable */
  PercentOff?: number | null;
  /** @nullable */
  RedeemBy?: string | null;
  /** `1` - Forever, `2` - Once, `3` - Repeating */
  Duration?: AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCouponDuration;
  /** @nullable */
  DurationInMonths?: number | null;
  TimesRedeemed?: number;
  /** @nullable */
  MaxRedemptions?: number | null;
  ApplyToAddOns?: boolean;
  /** @nullable */
  PlanUids?: string | null;
} | null;

export type AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItem = {
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
  /** @nullable */
  RedeemedDate?: string | null;
  /** @nullable */
  ExpireDate?: string | null;
  /** @nullable */
  DiscountCoupon?: AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItemDiscountCoupon;
};

/**
 * `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing
 */
export type AccountWebhookEntitySubscriptionsItemLatestInvoiceBillingInvoiceStatus = typeof AccountWebhookEntitySubscriptionsItemLatestInvoiceBillingInvoiceStatus[keyof typeof AccountWebhookEntitySubscriptionsItemLatestInvoiceBillingInvoiceStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntitySubscriptionsItemLatestInvoiceBillingInvoiceStatus = {
  Unpaid: 1,
  Paid: 2,
  Partial: 3,
  Uncollected: 4,
  Refunded: 5,
  Uncollectible: 6,
  Processing: 7,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntitySubscriptionsItemLatestInvoice = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  InvoiceDate?: string;
  /** @nullable */
  PaymentReminderSentDate?: string | null;
  Number?: number;
  /** `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing */
  BillingInvoiceStatus?: AccountWebhookEntitySubscriptionsItemLatestInvoiceBillingInvoiceStatus;
  Amount?: number;
  AmountOutstanding?: number;
  IsUserGenerated?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeTaxCalculationId?: string | null;
  /**
   * @maxLength 10
   * @nullable
   */
  StripeTaxBehavior?: string | null;
  AmountCredit?: number;
  AmountDiscount?: number;
  AmountPaid?: number;
  AmountRefunded?: number;
  AmountSubtotal?: number;
  AmountTax?: number;
  AmountTaxRefunded?: number;
  IsTaxable?: boolean;
  HasPaymentGatewayTransactions?: boolean;
  /** @nullable */
  StripePaymentTransactionIds?: string | null;
  /** @nullable */
  StripeRefundTransactionIds?: string | null;
  /** @nullable */
  StripeTaxRefundTransactionIds?: string | null;
} | null;

export type AccountWebhookEntitySubscriptionsItem = {
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
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountWebhookEntitySubscriptionsItemBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountWebhookEntitySubscriptionsItemPlan;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  IsPlanUpgradeRequired?: boolean;
  /** @nullable */
  PlanUpgradeRequiredMessage?: string | null;
  /** @nullable */
  SubscriptionAddOns?: AccountWebhookEntitySubscriptionsItemSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountWebhookEntitySubscriptionsItemDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountWebhookEntitySubscriptionsItemLatestInvoice;
  /** @nullable */
  Rate?: number | null;
};

export type AccountWebhookEntityDealsItem = {
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
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /** @nullable */
  Amount?: number | null;
  /** @nullable */
  DueDate?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  AssignedToPersonClientIdentifier?: string | null;
  Weight?: number;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  PipelineUid?: string | null;
};

export type AccountWebhookEntityTaxIdsItem = {
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
   * @maxLength 50
   * @nullable
   */
  TaxId?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  TaxIdType?: string | null;
  IsInvalid?: boolean;
};

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountWebhookEntityCurrentSubscriptionBillingRenewalTerm = typeof AccountWebhookEntityCurrentSubscriptionBillingRenewalTerm[keyof typeof AccountWebhookEntityCurrentSubscriptionBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityCurrentSubscriptionBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityCurrentSubscriptionPlanPlanFamily = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
} | null;

/**
 * `1` - Individual, `2` - Team
 */
export type AccountWebhookEntityCurrentSubscriptionPlanAccountRegistrationMode = typeof AccountWebhookEntityCurrentSubscriptionPlanAccountRegistrationMode[keyof typeof AccountWebhookEntityCurrentSubscriptionPlanAccountRegistrationMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityCurrentSubscriptionPlanAccountRegistrationMode = {
  Individual: 1,
  Team: 2,
} as const;

export type AccountWebhookEntityCurrentSubscriptionPlanPlanAddOnsItem = {
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
  IsUserSelectable: boolean;
};

export type AccountWebhookEntityCurrentSubscriptionPlanContentGroupsItem = {
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
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
};

/**
 * @nullable
 */
export type AccountWebhookEntityCurrentSubscriptionPlan = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  PlanFamily?: AccountWebhookEntityCurrentSubscriptionPlanPlanFamily;
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: AccountWebhookEntityCurrentSubscriptionPlanAccountRegistrationMode;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  /** @nullable */
  MaximumPeople?: number | null;
  MonthlyRate?: number;
  AnnualRate?: number;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SetupFee?: number;
  SkipSetupFeeOnPlanChange?: boolean;
  IsTaxable?: boolean;
  IsActive?: boolean;
  IsPerUser?: boolean;
  RequirePaymentInformation?: boolean;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  PlanAddOns?: AccountWebhookEntityCurrentSubscriptionPlanPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AccountWebhookEntityCurrentSubscriptionPlanContentGroupsItem[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
} | null;

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm = typeof AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm[keyof typeof AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType = typeof AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType[keyof typeof AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemAddOn = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** `1` - Recurring, `2` - Usage, `3` - OneTime */
  BillingAddOnType?: AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  MonthlyRate?: number;
  AnnualRate?: number;
  SetupFee?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  IsTaxable?: boolean;
  IsBilledDuringTrial?: boolean;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  IsPerUser?: boolean;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SubscriptionCount?: number;
  Quantity?: number;
} | null;

export type AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItem = {
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
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemBillingRenewalTerm;
  /** @nullable */
  AddOn?: AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItemAddOn;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  /** @nullable */
  Rate?: number | null;
};

/**
 * `1` - Forever, `2` - Once, `3` - Repeating
 */
export type AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration = typeof AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration[keyof typeof AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration = {
  Forever: 1,
  Once: 2,
  Repeating: 3,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItemDiscountCoupon = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** @nullable */
  UniqueIdentifier?: string | null;
  /** @nullable */
  Name?: string | null;
  IsActive?: boolean;
  /** @nullable */
  AmountOff?: number | null;
  /** @nullable */
  PercentOff?: number | null;
  /** @nullable */
  RedeemBy?: string | null;
  /** `1` - Forever, `2` - Once, `3` - Repeating */
  Duration?: AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration;
  /** @nullable */
  DurationInMonths?: number | null;
  TimesRedeemed?: number;
  /** @nullable */
  MaxRedemptions?: number | null;
  ApplyToAddOns?: boolean;
  /** @nullable */
  PlanUids?: string | null;
} | null;

export type AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItem = {
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
  /** @nullable */
  RedeemedDate?: string | null;
  /** @nullable */
  ExpireDate?: string | null;
  /** @nullable */
  DiscountCoupon?: AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItemDiscountCoupon;
};

/**
 * `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing
 */
export type AccountWebhookEntityCurrentSubscriptionLatestInvoiceBillingInvoiceStatus = typeof AccountWebhookEntityCurrentSubscriptionLatestInvoiceBillingInvoiceStatus[keyof typeof AccountWebhookEntityCurrentSubscriptionLatestInvoiceBillingInvoiceStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityCurrentSubscriptionLatestInvoiceBillingInvoiceStatus = {
  Unpaid: 1,
  Paid: 2,
  Partial: 3,
  Uncollected: 4,
  Refunded: 5,
  Uncollectible: 6,
  Processing: 7,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityCurrentSubscriptionLatestInvoice = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  InvoiceDate?: string;
  /** @nullable */
  PaymentReminderSentDate?: string | null;
  Number?: number;
  /** `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing */
  BillingInvoiceStatus?: AccountWebhookEntityCurrentSubscriptionLatestInvoiceBillingInvoiceStatus;
  Amount?: number;
  AmountOutstanding?: number;
  IsUserGenerated?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeTaxCalculationId?: string | null;
  /**
   * @maxLength 10
   * @nullable
   */
  StripeTaxBehavior?: string | null;
  AmountCredit?: number;
  AmountDiscount?: number;
  AmountPaid?: number;
  AmountRefunded?: number;
  AmountSubtotal?: number;
  AmountTax?: number;
  AmountTaxRefunded?: number;
  IsTaxable?: boolean;
  HasPaymentGatewayTransactions?: boolean;
  /** @nullable */
  StripePaymentTransactionIds?: string | null;
  /** @nullable */
  StripeRefundTransactionIds?: string | null;
  /** @nullable */
  StripeTaxRefundTransactionIds?: string | null;
} | null;

/**
 * @nullable
 */
export type AccountWebhookEntityCurrentSubscription = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountWebhookEntityCurrentSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountWebhookEntityCurrentSubscriptionPlan;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  IsPlanUpgradeRequired?: boolean;
  /** @nullable */
  PlanUpgradeRequiredMessage?: string | null;
  /** @nullable */
  SubscriptionAddOns?: AccountWebhookEntityCurrentSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountWebhookEntityCurrentSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountWebhookEntityCurrentSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountWebhookEntityLatestSubscriptionBillingRenewalTerm = typeof AccountWebhookEntityLatestSubscriptionBillingRenewalTerm[keyof typeof AccountWebhookEntityLatestSubscriptionBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityLatestSubscriptionBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityLatestSubscriptionPlanPlanFamily = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
} | null;

/**
 * `1` - Individual, `2` - Team
 */
export type AccountWebhookEntityLatestSubscriptionPlanAccountRegistrationMode = typeof AccountWebhookEntityLatestSubscriptionPlanAccountRegistrationMode[keyof typeof AccountWebhookEntityLatestSubscriptionPlanAccountRegistrationMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityLatestSubscriptionPlanAccountRegistrationMode = {
  Individual: 1,
  Team: 2,
} as const;

export type AccountWebhookEntityLatestSubscriptionPlanPlanAddOnsItem = {
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
  IsUserSelectable: boolean;
};

export type AccountWebhookEntityLatestSubscriptionPlanContentGroupsItem = {
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
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
};

/**
 * @nullable
 */
export type AccountWebhookEntityLatestSubscriptionPlan = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  PlanFamily?: AccountWebhookEntityLatestSubscriptionPlanPlanFamily;
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: AccountWebhookEntityLatestSubscriptionPlanAccountRegistrationMode;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  /** @nullable */
  MaximumPeople?: number | null;
  MonthlyRate?: number;
  AnnualRate?: number;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SetupFee?: number;
  SkipSetupFeeOnPlanChange?: boolean;
  IsTaxable?: boolean;
  IsActive?: boolean;
  IsPerUser?: boolean;
  RequirePaymentInformation?: boolean;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  PlanAddOns?: AccountWebhookEntityLatestSubscriptionPlanPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AccountWebhookEntityLatestSubscriptionPlanContentGroupsItem[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
} | null;

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm = typeof AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm[keyof typeof AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType = typeof AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType[keyof typeof AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemAddOn = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** `1` - Recurring, `2` - Usage, `3` - OneTime */
  BillingAddOnType?: AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemAddOnBillingAddOnType;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  MonthlyRate?: number;
  AnnualRate?: number;
  SetupFee?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  IsTaxable?: boolean;
  IsBilledDuringTrial?: boolean;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  IsPerUser?: boolean;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SubscriptionCount?: number;
  Quantity?: number;
} | null;

export type AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItem = {
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
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemBillingRenewalTerm;
  /** @nullable */
  AddOn?: AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItemAddOn;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  /** @nullable */
  Rate?: number | null;
};

/**
 * `1` - Forever, `2` - Once, `3` - Repeating
 */
export type AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration = typeof AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration[keyof typeof AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration = {
  Forever: 1,
  Once: 2,
  Repeating: 3,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItemDiscountCoupon = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** @nullable */
  UniqueIdentifier?: string | null;
  /** @nullable */
  Name?: string | null;
  IsActive?: boolean;
  /** @nullable */
  AmountOff?: number | null;
  /** @nullable */
  PercentOff?: number | null;
  /** @nullable */
  RedeemBy?: string | null;
  /** `1` - Forever, `2` - Once, `3` - Repeating */
  Duration?: AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItemDiscountCouponDuration;
  /** @nullable */
  DurationInMonths?: number | null;
  TimesRedeemed?: number;
  /** @nullable */
  MaxRedemptions?: number | null;
  ApplyToAddOns?: boolean;
  /** @nullable */
  PlanUids?: string | null;
} | null;

export type AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItem = {
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
  /** @nullable */
  RedeemedDate?: string | null;
  /** @nullable */
  ExpireDate?: string | null;
  /** @nullable */
  DiscountCoupon?: AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItemDiscountCoupon;
};

/**
 * `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing
 */
export type AccountWebhookEntityLatestSubscriptionLatestInvoiceBillingInvoiceStatus = typeof AccountWebhookEntityLatestSubscriptionLatestInvoiceBillingInvoiceStatus[keyof typeof AccountWebhookEntityLatestSubscriptionLatestInvoiceBillingInvoiceStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityLatestSubscriptionLatestInvoiceBillingInvoiceStatus = {
  Unpaid: 1,
  Paid: 2,
  Partial: 3,
  Uncollected: 4,
  Refunded: 5,
  Uncollectible: 6,
  Processing: 7,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityLatestSubscriptionLatestInvoice = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  InvoiceDate?: string;
  /** @nullable */
  PaymentReminderSentDate?: string | null;
  Number?: number;
  /** `1` - Unpaid, `2` - Paid, `3` - Partial, `4` - Uncollected, `5` - Refunded, `6` - Uncollectible, `7` - Processing */
  BillingInvoiceStatus?: AccountWebhookEntityLatestSubscriptionLatestInvoiceBillingInvoiceStatus;
  Amount?: number;
  AmountOutstanding?: number;
  IsUserGenerated?: boolean;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeTaxCalculationId?: string | null;
  /**
   * @maxLength 10
   * @nullable
   */
  StripeTaxBehavior?: string | null;
  AmountCredit?: number;
  AmountDiscount?: number;
  AmountPaid?: number;
  AmountRefunded?: number;
  AmountSubtotal?: number;
  AmountTax?: number;
  AmountTaxRefunded?: number;
  IsTaxable?: boolean;
  HasPaymentGatewayTransactions?: boolean;
  /** @nullable */
  StripePaymentTransactionIds?: string | null;
  /** @nullable */
  StripeRefundTransactionIds?: string | null;
  /** @nullable */
  StripeTaxRefundTransactionIds?: string | null;
} | null;

/**
 * @nullable
 */
export type AccountWebhookEntityLatestSubscription = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountWebhookEntityLatestSubscriptionBillingRenewalTerm;
  /** @nullable */
  Plan?: AccountWebhookEntityLatestSubscriptionPlan;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  IsPlanUpgradeRequired?: boolean;
  /** @nullable */
  PlanUpgradeRequiredMessage?: string | null;
  /** @nullable */
  SubscriptionAddOns?: AccountWebhookEntityLatestSubscriptionSubscriptionAddOnsItem[] | null;
  /** @nullable */
  DiscountCouponSubscriptions?: AccountWebhookEntityLatestSubscriptionDiscountCouponSubscriptionsItem[] | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  LatestInvoice?: AccountWebhookEntityLatestSubscriptionLatestInvoice;
  /** @nullable */
  Rate?: number | null;
} | null;

/**
 * `0` - None, `1` - Gmail
 */
export type AccountWebhookEntityPrimaryContactOAuthIntegrationStatus = typeof AccountWebhookEntityPrimaryContactOAuthIntegrationStatus[keyof typeof AccountWebhookEntityPrimaryContactOAuthIntegrationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityPrimaryContactOAuthIntegrationStatus = {
  None: 0,
  Gmail: 1,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityPrimaryContact = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Email?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FirstName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  LastName?: string | null;
  /** @nullable */
  PasswordLastUpdated?: string | null;
  PasswordMustChange?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneMobile?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneWork?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ProfileImageS3Url?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  Timezone?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Language?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  IPAddress?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Referer?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  UserAgent?: string | null;
  /** @nullable */
  LastLoginDateTime?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  OAuthGoogleProfileId?: string | null;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: AccountWebhookEntityPrimaryContactOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  IsConnectedToDiscord?: boolean;
} | null;

/**
 * `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time
 */
export type AccountWebhookEntityPrimarySubscriptionBillingRenewalTerm = typeof AccountWebhookEntityPrimarySubscriptionBillingRenewalTerm[keyof typeof AccountWebhookEntityPrimarySubscriptionBillingRenewalTerm];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AccountWebhookEntityPrimarySubscriptionBillingRenewalTerm = {
  Monthly: 1,
  Yearly: 2,
  Quarterly: 3,
  OneTime: 4,
} as const;

/**
 * @nullable
 */
export type AccountWebhookEntityPrimarySubscription = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /** `1` - Monthly, `2` - Yearly, `3` - Quarterly, `4` - One Time */
  BillingRenewalTerm?: AccountWebhookEntityPrimarySubscriptionBillingRenewalTerm;
  /** @nullable */
  Quantity?: number | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  ExpirationDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  NewRequiredQuantity?: number | null;
  IsPlanUpgradeRequired?: boolean;
  /** @nullable */
  PlanUpgradeRequiredMessage?: string | null;
  /** @nullable */
  DiscountCode?: string | null;
  /** @nullable */
  DiscountCouponExpirationDate?: string | null;
  /** @nullable */
  Rate?: number | null;
} | null;

/**
 * @nullable
 */
export type AccountWebhookEntityPrimaryStripeSubscription = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 255
   * @nullable
   */
  StripeId?: string | null;
  IsLivemode?: boolean;
  /** @nullable */
  ApplicationFeePercent?: number | null;
  /** @nullable */
  CancelAt?: string | null;
  CancelAtPeriodEnd?: boolean;
  /**
   * @maxLength 3
   * @nullable
   */
  Currency?: string | null;
  /** @nullable */
  EndedAt?: string | null;
  /**
   * @maxLength 30
   * @nullable
   */
  PauseCollection_Behavior?: string | null;
  /** @nullable */
  PauseCollection_ResumesAt?: string | null;
  StartDate?: string;
  /**
   * @maxLength 30
   * @nullable
   */
  Status?: string | null;
  /** @nullable */
  TrialEnd?: string | null;
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  BillingCycleAnchor?: string | null;
  /** @nullable */
  CollectionMethod?: string | null;
  /** @nullable */
  CustomerId?: string | null;
  /** @nullable */
  DaysUntilDue?: number | null;
  /** @nullable */
  ScheduleId?: string | null;
  /** @nullable */
  StripeDiscountIds?: string[] | null;
  /** @nullable */
  StripePriceIds?: string | null;
  TrialPeriodDays?: number;
} | null;

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

export type AccountCreatedWebhookPayload = AccountWebhookEntity;

export type AccountUpdatedWebhookPayload = AccountWebhookEntity;

export interface AccountAddPersonActivityData {
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  PersonUid?: string | null;
  /** @nullable */
  Email?: string | null;
}

export type AccountAddPersonWebhookPayloadAllOf = {
  ActivityEventData?: AccountAddPersonActivityData;
};

export type AccountAddPersonWebhookPayload = AccountWebhookEntity & AccountAddPersonWebhookPayloadAllOf;

export interface AccountStageUpdatedActivityData {
  /** @nullable */
  PriorAccountStage?: string | null;
  /** @nullable */
  CurrentAccountStage?: string | null;
  /** @nullable */
  CancelationReason?: string | null;
}

export type AccountStageUpdatedWebhookPayloadAllOf = {
  ActivityEventData?: AccountStageUpdatedActivityData;
};

export type AccountStageUpdatedWebhookPayload = AccountWebhookEntity & AccountStageUpdatedWebhookPayloadAllOf;

export type AccountDeletedWebhookPayload = AccountWebhookEntity;

export type AccountBillingInformationUpdatedWebhookPayload = AccountWebhookEntity;

/**
 * @nullable
 */
export type AccountSubscriptionPlanUpdatedActivityDataSubscription = unknown | null;

export interface AccountSubscriptionPlanUpdatedActivityData {
  /** @nullable */
  Subscription?: AccountSubscriptionPlanUpdatedActivityDataSubscription;
  /** @nullable */
  CurrentPrincipal?: string | null;
}

export type AccountSubscriptionPlanUpdatedWebhookPayloadAllOf = {
  ActivityEventData?: AccountSubscriptionPlanUpdatedActivityData;
};

export type AccountSubscriptionPlanUpdatedWebhookPayload = AccountWebhookEntity & AccountSubscriptionPlanUpdatedWebhookPayloadAllOf;

export interface AccountSubscriptionPaymentCollectedActivityData {
  /** @nullable */
  InvoiceUid?: string | null;
  /** @nullable */
  Amount?: string | null;
}

export type AccountSubscriptionPaymentCollectedWebhookPayloadAllOf = {
  ActivityEventData?: AccountSubscriptionPaymentCollectedActivityData;
};

export type AccountSubscriptionPaymentCollectedWebhookPayload = AccountWebhookEntity & AccountSubscriptionPaymentCollectedWebhookPayloadAllOf;

export type AccountSubscriptionPaymentDeclinedWebhookPayload = AccountWebhookEntity;

export type AccountBillingInformationRequestedWebhookPayload = AccountWebhookEntity;

export type AccountBillingInvoiceEmailSentWebhookPayload = AccountWebhookEntity;

export interface AccountRemovePersonActivityData {
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  PersonUid?: string | null;
  /** @nullable */
  Email?: string | null;
}

export type AccountRemovePersonWebhookPayloadAllOf = {
  ActivityEventData?: AccountRemovePersonActivityData;
};

export type AccountRemovePersonWebhookPayload = AccountWebhookEntity & AccountRemovePersonWebhookPayloadAllOf;

export interface AccountPaidSubscriptionCreatedActivityData {
  /** @nullable */
  SubscriptionUid?: string | null;
}

export type AccountPaidSubscriptionCreatedWebhookPayloadAllOf = {
  ActivityEventData?: AccountPaidSubscriptionCreatedActivityData;
};

export type AccountPaidSubscriptionCreatedWebhookPayload = AccountWebhookEntity & AccountPaidSubscriptionCreatedWebhookPayloadAllOf;

export type AccountBillingInformationRemovedWebhookPayload = AccountWebhookEntity;

export interface AccountPrimaryPersonUpdatedActivityData {
  /** @nullable */
  PreviousPrimaryPersonEmail?: string | null;
  /** @nullable */
  CurrentPrimaryPersonEmail?: string | null;
}

export type AccountPrimaryPersonUpdatedWebhookPayloadAllOf = {
  ActivityEventData?: AccountPrimaryPersonUpdatedActivityData;
};

export type AccountPrimaryPersonUpdatedWebhookPayload = AccountWebhookEntity & AccountPrimaryPersonUpdatedWebhookPayloadAllOf;

export type AccountBillingInvoiceCreatedWebhookPayload = AccountWebhookEntity;

/**
 * @nullable
 */
export type AccountSubscriptionStartedActivityDataSubscription = unknown | null;

export interface AccountSubscriptionStartedActivityData {
  /** @nullable */
  Subscription?: AccountSubscriptionStartedActivityDataSubscription;
  /** @nullable */
  CurrentPrincipal?: string | null;
  /** @nullable */
  SubscriptionUid?: string | null;
}

export type AccountSubscriptionStartedWebhookPayloadAllOf = {
  ActivityEventData?: AccountSubscriptionStartedActivityData;
};

export type AccountSubscriptionStartedWebhookPayload = AccountWebhookEntity & AccountSubscriptionStartedWebhookPayloadAllOf;

export interface AccountSubscriptionRenewalExtendedActivityData {
  /** @nullable */
  PriorRenewalDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
}

export type AccountSubscriptionRenewalExtendedWebhookPayloadAllOf = {
  ActivityEventData?: AccountSubscriptionRenewalExtendedActivityData;
};

export type AccountSubscriptionRenewalExtendedWebhookPayload = AccountWebhookEntity & AccountSubscriptionRenewalExtendedWebhookPayloadAllOf;

export interface AccountSubscriptionAddOnChange {
  AddOnChangeType?: AddOnChangeType;
  /** @nullable */
  AddOnUid?: string | null;
  StartDate?: string;
  /** @nullable */
  EndDate?: string | null;
  /** @nullable */
  RenewalDate?: string | null;
  /** @nullable */
  Quantity?: number | null;
}

/**
 * `AddOnAdded` - AddOnAdded, `AddOnReactivated` - AddOnReactivated, `AddOnQuantityChanged` - AddOnQuantityChanged
 */
export type AddOnChangeType = typeof AddOnChangeType[keyof typeof AddOnChangeType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddOnChangeType = {
  AddOnAdded: 'AddOnAdded',
  AddOnReactivated: 'AddOnReactivated',
  AddOnQuantityChanged: 'AddOnQuantityChanged',
} as const;

export type AccountSubscriptionAddOnsChangedWebhookPayloadAllOf = {
  ActivityEventData?: AccountSubscriptionAddOnChange[];
};

export type AccountSubscriptionAddOnsChangedWebhookPayload = AccountWebhookEntity & AccountSubscriptionAddOnsChangedWebhookPayloadAllOf;

export interface AccountSubscriptionCancellationRequestedActivityData {
  /** @nullable */
  RequestedByEmail?: string | null;
  /** @nullable */
  CancelationReason?: string | null;
  /** @nullable */
  Comment?: string | null;
}

export type AccountSubscriptionCancellationRequestedWebhookPayloadAllOf = {
  ActivityEventData?: AccountSubscriptionCancellationRequestedActivityData;
};

export type AccountSubscriptionCancellationRequestedWebhookPayload = AccountWebhookEntity & AccountSubscriptionCancellationRequestedWebhookPayloadAllOf;

/**
 * @nullable
 */
export type AccountBillingInvoiceDeletedActivityDataInvoice = unknown | null;

export interface AccountBillingInvoiceDeletedActivityData {
  /** @nullable */
  Invoice?: AccountBillingInvoiceDeletedActivityDataInvoice;
  /** @nullable */
  AccountUid?: string | null;
  /** @nullable */
  CurrentPrincipal?: string | null;
}

export type AccountBillingInvoiceDeletedWebhookPayloadAllOf = {
  ActivityEventData?: AccountBillingInvoiceDeletedActivityData;
};

export type AccountBillingInvoiceDeletedWebhookPayload = AccountWebhookEntity & AccountBillingInvoiceDeletedWebhookPayloadAllOf;

export interface AccountPersonRoleUpdatedActivityData {
  /** @nullable */
  PersonEmail?: string | null;
  /** @nullable */
  PreviousRole?: string | null;
  /** @nullable */
  CurrentRole?: string | null;
}

export type AccountPersonRoleUpdatedWebhookPayloadAllOf = {
  ActivityEventData?: AccountPersonRoleUpdatedActivityData;
};

export type AccountPersonRoleUpdatedWebhookPayload = AccountWebhookEntity & AccountPersonRoleUpdatedWebhookPayloadAllOf;

/**
 * @nullable
 */
export type PersonWebhookEntityMailingAddress = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine1?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine2?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  AddressLine3?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  City?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostalCode?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  GeoLocation?: string | null;
} | null;

/**
 * @nullable
 */
export type PersonWebhookEntityPersonAccountItemAccount = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
} | null;

/**
 * `1` - Admin, `2` - Member, `3` - Operator
 * @nullable
 */
export type PersonWebhookEntityPersonAccountItemRole = typeof PersonWebhookEntityPersonAccountItemRole[keyof typeof PersonWebhookEntityPersonAccountItemRole] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonWebhookEntityPersonAccountItemRole = {
  Admin: 1,
  Member: 2,
  Operator: 3,
} as const;

export type PersonWebhookEntityPersonAccountItem = {
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
  /** @nullable */
  Account?: PersonWebhookEntityPersonAccountItemAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /**
   * `1` - Admin, `2` - Member, `3` - Operator
   * @nullable
   */
  Role?: PersonWebhookEntityPersonAccountItemRole;
};

export type PersonWebhookEntityDealPeopleItem = {
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
};

export type PersonWebhookEntityLeadFormSubmissionsItem = {
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
  /** @nullable */
  RefererURL?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
};

/**
 * `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created
 */
export type PersonWebhookEntityAccountAccountStage = typeof PersonWebhookEntityAccountAccountStage[keyof typeof PersonWebhookEntityAccountAccountStage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonWebhookEntityAccountAccountStage = {
  Trialing: 2,
  Subscribing: 3,
  Cancelling: 4,
  Expired: 5,
  TrialExpired: 6,
  PastDue: 7,
  CancellingTrial: 8,
  Paused: 9,
  Created: 10,
} as const;

/**
 * @nullable
 */
export type PersonWebhookEntityAccount = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
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
  Name?: string;
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
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: PersonWebhookEntityAccountAccountStage;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
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
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
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
} | null;

/**
 * `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed
 */
export type PersonWebhookEntityEmailListPersonItemEmailListSubscriberStatus = typeof PersonWebhookEntityEmailListPersonItemEmailListSubscriberStatus[keyof typeof PersonWebhookEntityEmailListPersonItemEmailListSubscriberStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonWebhookEntityEmailListPersonItemEmailListSubscriberStatus = {
  Subscribed: 1,
  Unsubscribed: 2,
  Cleaned: 3,
  Confirmed: 4,
} as const;

export type PersonWebhookEntityEmailListPersonItem = {
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
  /** `1` - Subscribed, `2` - Unsubscribed, `3` - Cleaned, `4` - Confirmed */
  EmailListSubscriberStatus?: PersonWebhookEntityEmailListPersonItemEmailListSubscriberStatus;
  SubscribedDate?: string;
  /** @nullable */
  ConfirmedDate?: string | null;
  /**
   * @maxLength 500
   * @nullable
   */
  ConfirmationNotes?: string | null;
  /** @nullable */
  UnsubscribedDate?: string | null;
  /** @nullable */
  CleanedDate?: string | null;
  /** @nullable */
  WelcomeEmailDeliverDateTime?: string | null;
  /** @nullable */
  WelcomeEmailOpenDateTime?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  UnsubscribeReason?: string | null;
  /** @nullable */
  UnsubscribeReasonOther?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  RecaptchaSiteKey?: string | null;
  SendWelcomeEmail?: boolean;
  /** @nullable */
  Source?: string | null;
};

/**
 * `0` - None, `1` - Gmail
 */
export type PersonWebhookEntityOAuthIntegrationStatus = typeof PersonWebhookEntityOAuthIntegrationStatus[keyof typeof PersonWebhookEntityOAuthIntegrationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PersonWebhookEntityOAuthIntegrationStatus = {
  None: 0,
  Gmail: 1,
} as const;

/**
 * @nullable
 */
export type PersonWebhookEntityDiscordUser = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordUserId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordEmail?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  DiscordUsername?: string | null;
  /** @nullable */
  DiscordOAuthRefreshToken?: string | null;
} | null;

export interface PersonWebhookEntity {
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
   * @maxLength 250
   * @nullable
   */
  Email?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FirstName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  LastName?: string | null;
  /** @nullable */
  MailingAddress?: PersonWebhookEntityMailingAddress;
  /** @nullable */
  PasswordLastUpdated?: string | null;
  PasswordMustChange?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneMobile?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneWork?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ProfileImageS3Url?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  Timezone?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Language?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  IPAddress?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Referer?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  UserAgent?: string | null;
  /** @nullable */
  LastLoginDateTime?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  OAuthGoogleProfileId?: string | null;
  /** @nullable */
  PersonAccount?: PersonWebhookEntityPersonAccountItem[] | null;
  /** @nullable */
  DealPeople?: PersonWebhookEntityDealPeopleItem[] | null;
  /** @nullable */
  LeadFormSubmissions?: PersonWebhookEntityLeadFormSubmissionsItem[] | null;
  /** @nullable */
  Account?: PersonWebhookEntityAccount;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  EmailListPerson?: PersonWebhookEntityEmailListPersonItem[] | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: PersonWebhookEntityOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  /** @nullable */
  DiscordUser?: PersonWebhookEntityDiscordUser;
  IsConnectedToDiscord?: boolean;
}

export type PersonCreatedWebhookPayload = PersonWebhookEntity;

/**
 * @nullable
 */
export type PersonUpdatedActivityDataOriginalValues = unknown | null;

/**
 * @nullable
 */
export type PersonUpdatedActivityDataCurrentValues = unknown | null;

export interface PersonUpdatedActivityData {
  /** @nullable */
  OriginalValues?: PersonUpdatedActivityDataOriginalValues;
  /** @nullable */
  CurrentValues?: PersonUpdatedActivityDataCurrentValues;
}

export type PersonUpdatedWebhookPayloadAllOf = {
  ActivityEventData?: PersonUpdatedActivityData;
};

export type PersonUpdatedWebhookPayload = PersonWebhookEntity & PersonUpdatedWebhookPayloadAllOf;

export type PersonDeletedWebhookPayload = PersonWebhookEntity;

export interface PersonLoginActivityData {
  /** @nullable */
  PersonUid?: string | null;
  /** @nullable */
  LoginDateTime?: string | null;
  /** @nullable */
  SiteUrl?: string | null;
}

export type PersonLoginWebhookPayloadAllOf = {
  ActivityEventData?: PersonLoginActivityData;
};

export type PersonLoginWebhookPayload = AccountWebhookEntity & PersonLoginWebhookPayloadAllOf;

export interface PersonListSubscribedActivityData {
  /** @nullable */
  EmailListUid?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  EmaillistId?: string | null;
}

export type PersonListSubscribedWebhookPayloadAllOf = {
  ActivityEventData?: PersonListSubscribedActivityData;
};

export type PersonListSubscribedWebhookPayload = PersonWebhookEntity & PersonListSubscribedWebhookPayloadAllOf;

export interface PersonListUnsubscribedActivityData {
  /** @nullable */
  EmailListUid?: string | null;
  /** @nullable */
  PersonUid?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  EmaillistId?: string | null;
}

export type PersonListUnsubscribedWebhookPayloadAllOf = {
  ActivityEventData?: PersonListUnsubscribedActivityData;
};

export type PersonListUnsubscribedWebhookPayload = PersonWebhookEntity & PersonListUnsubscribedWebhookPayloadAllOf;

export interface PersonSegmentAddedActivityData {
  /** @nullable */
  SegmentUid?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  SegmentId?: string | null;
}

export type PersonSegmentAddedWebhookPayloadAllOf = {
  ActivityEventData?: PersonSegmentAddedActivityData;
};

export type PersonSegmentAddedWebhookPayload = PersonWebhookEntity & PersonSegmentAddedWebhookPayloadAllOf;

export interface PersonSegmentRemovedActivityData {
  /** @nullable */
  SegmentUid?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  SegmentId?: string | null;
}

export type PersonSegmentRemovedWebhookPayloadAllOf = {
  ActivityEventData?: PersonSegmentRemovedActivityData;
};

export type PersonSegmentRemovedWebhookPayload = PersonWebhookEntity & PersonSegmentRemovedWebhookPayloadAllOf;

export type PersonEmailOpenedWebhookPayload = PersonWebhookEntity;

export type PersonEmailClickedWebhookPayload = PersonWebhookEntity;

export type PersonEmailBounceWebhookPayload = PersonWebhookEntity;

export type PersonEmailSpamWebhookPayload = PersonWebhookEntity;

export interface PersonSupportTicketCreatedActivityData {
  /** @nullable */
  CaseUid?: string | null;
}

export type PersonSupportTicketCreatedWebhookPayloadAllOf = {
  ActivityEventData?: PersonSupportTicketCreatedActivityData;
};

export type PersonSupportTicketCreatedWebhookPayload = PersonWebhookEntity & PersonSupportTicketCreatedWebhookPayloadAllOf;

export interface PersonSupportTicketUpdatedActivityData {
  /** @nullable */
  CaseUid?: string | null;
}

export type PersonSupportTicketUpdatedWebhookPayloadAllOf = {
  ActivityEventData?: PersonSupportTicketUpdatedActivityData;
};

export type PersonSupportTicketUpdatedWebhookPayload = PersonWebhookEntity & PersonSupportTicketUpdatedWebhookPayloadAllOf;

export interface PersonLeadFormSubmittedActivityData {
  /** @nullable */
  LeadFormUid?: string | null;
  /** @nullable */
  RefererUrl?: string | null;
}

export type PersonLeadFormSubmittedWebhookPayloadAllOf = {
  ActivityEventData?: PersonLeadFormSubmittedActivityData;
};

export type PersonLeadFormSubmittedWebhookPayload = PersonWebhookEntity & PersonLeadFormSubmittedWebhookPayloadAllOf;

export interface PersonListConfirmedActivityData {
  /** @nullable */
  EmailListUid?: string | null;
  /**
   * @deprecated
   * @nullable
   */
  EmaillistId?: string | null;
}

export type PersonListConfirmedWebhookPayloadAllOf = {
  ActivityEventData?: PersonListConfirmedActivityData;
};

export type PersonListConfirmedWebhookPayload = PersonWebhookEntity & PersonListConfirmedWebhookPayloadAllOf;

export type PersonEmailSubscribedWebhookPayload = PersonWebhookEntity;

export interface PersonEmailUnsubscribedActivityData {
  /** @nullable */
  UserAgent?: string | null;
}

export type PersonEmailUnsubscribedWebhookPayloadAllOf = {
  ActivityEventData?: PersonEmailUnsubscribedActivityData;
};

export type PersonEmailUnsubscribedWebhookPayload = PersonWebhookEntity & PersonEmailUnsubscribedWebhookPayloadAllOf;

export type PersonTemporaryPasswordSetWebhookPayload = PersonWebhookEntity;

export interface PersonSupportTicketClosedActivityData {
  /** @nullable */
  CaseUid?: string | null;
  /** @nullable */
  AgentName?: string | null;
}

export type PersonSupportTicketClosedWebhookPayloadAllOf = {
  ActivityEventData?: PersonSupportTicketClosedActivityData;
};

export type PersonSupportTicketClosedWebhookPayload = PersonWebhookEntity & PersonSupportTicketClosedWebhookPayloadAllOf;

export type PersonTwoFactorRecoveryCodesRegeneratedWebhookPayload = PersonWebhookEntity;

/**
 * @nullable
 */
export type DealWebhookEntityDealPipelineStage = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  Weight?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
} | null;

/**
 * `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created
 */
export type DealWebhookEntityAccountAccountStage = typeof DealWebhookEntityAccountAccountStage[keyof typeof DealWebhookEntityAccountAccountStage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DealWebhookEntityAccountAccountStage = {
  Trialing: 2,
  Subscribing: 3,
  Cancelling: 4,
  Expired: 5,
  TrialExpired: 6,
  PastDue: 7,
  CancellingTrial: 8,
  Paused: 9,
  Created: 10,
} as const;

/**
 * @nullable
 */
export type DealWebhookEntityAccount = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
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
  Name?: string;
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
  /** `2` - Trialing, `3` - Subscribing, `4` - Cancelling, `5` - Expired, `6` - Trial Expired, `7` - Past Due, `8` - Cancelling Trial, `9` - Paused, `10` - Created */
  AccountStage?: DealWebhookEntityAccountAccountStage;
  /**
   * @maxLength 50
   * @nullable
   */
  StripeDefaultPaymentMethodId?: string | null;
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
  DomainName?: string | null;
  HasLoggedIn?: boolean;
  LifetimeRevenue?: number;
  /** @nullable */
  NextStripeInvoiceDate?: string | null;
  /** @nullable */
  Nonce?: string | null;
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
} | null;

export type DealWebhookEntityDealPeopleItem = {
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
};

/**
 * `0` - None, `1` - Gmail
 */
export type DealWebhookEntityOwnerOAuthIntegrationStatus = typeof DealWebhookEntityOwnerOAuthIntegrationStatus[keyof typeof DealWebhookEntityOwnerOAuthIntegrationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DealWebhookEntityOwnerOAuthIntegrationStatus = {
  None: 0,
  Gmail: 1,
} as const;

/**
 * @nullable
 */
export type DealWebhookEntityOwner = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Email?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FirstName?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  LastName?: string | null;
  /** @nullable */
  PasswordLastUpdated?: string | null;
  PasswordMustChange?: boolean;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneMobile?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PhoneWork?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  ProfileImageS3Url?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Title?: string | null;
  /**
   * @maxLength 100
   * @nullable
   */
  Timezone?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  Language?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  IPAddress?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  Referer?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  UserAgent?: string | null;
  /** @nullable */
  LastLoginDateTime?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  OAuthGoogleProfileId?: string | null;
  /** @nullable */
  AccountUids?: string | null;
  /** @nullable */
  FullName?: string | null;
  HasLoggedIn?: boolean;
  /** `0` - None, `1` - Gmail */
  OAuthIntegrationStatus?: DealWebhookEntityOwnerOAuthIntegrationStatus;
  OptInToEmailList?: boolean;
  /** @nullable */
  Password?: string | null;
  /** @nullable */
  RecaptchaToken?: string | null;
  /** @nullable */
  UserAgentPlatformBrowser?: string | null;
  HasUnsubscribed?: boolean;
  IsConnectedToDiscord?: boolean;
} | null;

export interface DealWebhookEntity {
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
   * @minLength 1
   * @maxLength 250
   */
  Name: string;
  /** @nullable */
  Amount?: number | null;
  /** @nullable */
  DueDate?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  AssignedToPersonClientIdentifier?: string | null;
  Weight?: number;
  /** @nullable */
  DealPipelineStage?: DealWebhookEntityDealPipelineStage;
  /** @nullable */
  Account?: DealWebhookEntityAccount;
  /** @nullable */
  DealPeople?: DealWebhookEntityDealPeopleItem[] | null;
  /** @nullable */
  Contacts?: string | null;
  AccountId?: number;
  /** @nullable */
  Owner?: DealWebhookEntityOwner;
  /** @nullable */
  PipelineUid?: string | null;
}

export type DealCreatedWebhookPayload = DealWebhookEntity;

export type DealUpdatedWebhookPayload = DealWebhookEntity;

export type DealDeletedWebhookPayload = DealWebhookEntity;

export type DealDueDateWebhookPayload = DealWebhookEntity;

/**
 * @nullable
 */
export type PlanWebhookEntityPlanFamily = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  IsActive?: boolean;
  IsDefault?: boolean;
} | null;

/**
 * `1` - Individual, `2` - Team
 */
export type PlanWebhookEntityAccountRegistrationMode = typeof PlanWebhookEntityAccountRegistrationMode[keyof typeof PlanWebhookEntityAccountRegistrationMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PlanWebhookEntityAccountRegistrationMode = {
  Individual: 1,
  Team: 2,
} as const;

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type PlanWebhookEntityPlanAddOnsItemAddOnBillingAddOnType = typeof PlanWebhookEntityPlanAddOnsItemAddOnBillingAddOnType[keyof typeof PlanWebhookEntityPlanAddOnsItemAddOnBillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PlanWebhookEntityPlanAddOnsItemAddOnBillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;

/**
 * @nullable
 */
export type PlanWebhookEntityPlanAddOnsItemAddOn = {
  /**
   * @maxLength 10
   * @nullable
   */
  Uid?: string | null;
  /** @nullable */
  _objectType?: string | null;
  /** @minLength 1 */
  Created?: string;
  /** @minLength 1 */
  Updated?: string;
  /**
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** `1` - Recurring, `2` - Usage, `3` - OneTime */
  BillingAddOnType?: PlanWebhookEntityPlanAddOnsItemAddOnBillingAddOnType;
  IsQuantityEditable?: boolean;
  MinimumQuantity?: number;
  MonthlyRate?: number;
  AnnualRate?: number;
  SetupFee?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  IsTaxable?: boolean;
  IsBilledDuringTrial?: boolean;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  IsPerUser?: boolean;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SubscriptionCount?: number;
  Quantity?: number;
} | null;

export type PlanWebhookEntityPlanAddOnsItem = {
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
  /** @nullable */
  AddOn?: PlanWebhookEntityPlanAddOnsItemAddOn;
  IsUserSelectable: boolean;
};

export type PlanWebhookEntityContentGroupsItem = {
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
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
};

export interface PlanWebhookEntity {
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
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** @nullable */
  Description?: string | null;
  /** @nullable */
  PlanFamily?: PlanWebhookEntityPlanFamily;
  /** `1` - Individual, `2` - Team */
  AccountRegistrationMode?: PlanWebhookEntityAccountRegistrationMode;
  IsQuantityEditable: boolean;
  MinimumQuantity?: number;
  /** @nullable */
  MaximumPeople?: number | null;
  MonthlyRate?: number;
  AnnualRate?: number;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SetupFee?: number;
  SkipSetupFeeOnPlanChange?: boolean;
  IsTaxable: boolean;
  IsActive?: boolean;
  IsPerUser?: boolean;
  RequirePaymentInformation?: boolean;
  TrialPeriodDays?: number;
  /** @nullable */
  TrialUntilDate?: string | null;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  PostLoginPath?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  /** @nullable */
  PlanAddOns?: PlanWebhookEntityPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: PlanWebhookEntityContentGroupsItem[] | null;
  /** @nullable */
  NumberOfSubscriptions?: number | null;
}

export type PlanCreatedWebhookPayload = PlanWebhookEntity;

export type PlanUpdatedWebhookPayload = PlanWebhookEntity;

/**
 * `1` - Recurring, `2` - Usage, `3` - OneTime
 */
export type AddOnWebhookEntityBillingAddOnType = typeof AddOnWebhookEntityBillingAddOnType[keyof typeof AddOnWebhookEntityBillingAddOnType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddOnWebhookEntityBillingAddOnType = {
  Recurring: 1,
  Usage: 2,
  OneTime: 3,
} as const;

export type AddOnWebhookEntityPlanAddOnsItem = {
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
  IsUserSelectable: boolean;
};

export type AddOnWebhookEntityContentGroupsItem = {
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
   * @minLength 1
   * @maxLength 50
   */
  Name: string;
  /**
   * @maxLength 1024
   * @nullable
   */
  AccessDeniedPath?: string | null;
};

export interface AddOnWebhookEntity {
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
   * @maxLength 250
   * @nullable
   */
  Name?: string | null;
  /** `1` - Recurring, `2` - Usage, `3` - OneTime */
  BillingAddOnType?: AddOnWebhookEntityBillingAddOnType;
  IsQuantityEditable: boolean;
  MinimumQuantity?: number;
  MonthlyRate?: number;
  AnnualRate?: number;
  SetupFee?: number;
  /**
   * @maxLength 250
   * @nullable
   */
  UnitOfMeasure?: string | null;
  IsTaxable: boolean;
  IsBilledDuringTrial: boolean;
  ExpiresAfterMonths?: number;
  /** @nullable */
  ExpirationDate?: string | null;
  /**
   * @maxLength 15
   * @nullable
   */
  StripeTaxCodeId?: string | null;
  /** @nullable */
  PlanAddOns?: AddOnWebhookEntityPlanAddOnsItem[] | null;
  /** @nullable */
  ContentGroups?: AddOnWebhookEntityContentGroupsItem[] | null;
  IsPerUser?: boolean;
  QuarterlyRate?: number;
  OneTimeRate?: number;
  SubscriptionCount?: number;
  Quantity?: number;
}

export type AddOnCreatedWebhookPayload = AddOnWebhookEntity;

export type AddOnUpdatedWebhookPayload = AddOnWebhookEntity;

export type DiscordUserLinkedWebhookPayload = PersonWebhookEntity;

export interface DiscordUserAddedToServerActivityData {
  /** @nullable */
  PersonUid?: string | null;
  /** @nullable */
  DiscordUserId?: string | null;
  /** @nullable */
  DiscordEmail?: string | null;
  /** @nullable */
  DiscordUsername?: string | null;
  /** @nullable */
  DiscordServerId?: string | null;
}

export type DiscordUserAddedToServerWebhookPayloadAllOf = {
  ActivityEventData?: DiscordUserAddedToServerActivityData;
};

export type DiscordUserAddedToServerWebhookPayload = PersonWebhookEntity & DiscordUserAddedToServerWebhookPayloadAllOf;

export interface DiscordUserRolesUpdatedActivityData {
  /** @nullable */
  PersonUid?: string | null;
  /** @nullable */
  DiscordUserId?: string | null;
  /** @nullable */
  DiscordEmail?: string | null;
  /** @nullable */
  DiscordUsername?: string | null;
  /** @nullable */
  DiscordServerId?: string | null;
  /** @nullable */
  RoleIds?: string | null;
}

export type DiscordUserRolesUpdatedWebhookPayloadAllOf = {
  ActivityEventData?: DiscordUserRolesUpdatedActivityData;
};

export type DiscordUserRolesUpdatedWebhookPayload = PersonWebhookEntity & DiscordUserRolesUpdatedWebhookPayloadAllOf;

export interface DiscordUserRemovedFromServerActivityData {
  /** @nullable */
  PersonUid?: string | null;
  /** @nullable */
  DiscordUserId?: string | null;
  /** @nullable */
  DiscordEmail?: string | null;
  /** @nullable */
  DiscordUsername?: string | null;
  /** @nullable */
  DiscordServerId?: string | null;
  /** @nullable */
  Trigger?: string | null;
}

export type DiscordUserRemovedFromServerWebhookPayloadAllOf = {
  ActivityEventData?: DiscordUserRemovedFromServerActivityData;
};

export type DiscordUserRemovedFromServerWebhookPayload = PersonWebhookEntity & DiscordUserRemovedFromServerWebhookPayloadAllOf;

/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
export type LimitParameter = number;

/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
export type OffsetParameter = number;

export type DefinitionGetAllDefinitionsParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type DefinitionGetAllDefinitions200 = {
  metadata?: CollectionMetadata;
  items?: Definition[];
};

/**
 * @nullable
 */
export type PublicEmailListAddSubscriptionBody = EmailListPerson | null;

export type AuthGetTokenParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type AuthResendTwoFactorParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type AuthSwitchTwoFactorMechanismParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type AuthVerifyTwoFactorRecoveryParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type TokenTwoFactorEnrollmentBeginEmailParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type TokenTwoFactorEnrollmentBeginTotpParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type TokenTwoFactorEnrollmentConfirmEmailParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type TokenTwoFactorEnrollmentConfirmTotpParams = {
/**
 * @nullable
 */
data: unknown | null;
};

export type CaseGetAllCasesParams = {
/**
 * Search string
 * @nullable
 */
q?: string | null;
/**
 * Uid of tag that is on the case
 * @nullable
 */
tagUid?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type CaseGetAllCases200 = {
  metadata?: CollectionMetadata;
  items?: Case[];
};

export type CaseAddCaseParams = {
/**
 * Indicates whether an automatic message is sent that the ticket has been created.
 * @nullable
 */
sendautoresponder?: string | null;
};

/**
 * @nullable
 */
export type CaseAddCaseBody = Case | null;

export type ArticleGetAllArticlesParams = {
/**
 * Matches on title or body of the article
 * @nullable
 */
q?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type ArticleGetAllArticles200 = {
  metadata?: CollectionMetadata;
  items?: Article[];
};

/**
 * @nullable
 */
export type ArticleAddArticleBody = Article | null;

export type CategoryGetAllCategoriesParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type CategoryGetAllCategories200 = {
  metadata?: CollectionMetadata;
  items?: Category[];
};

export type DripCampaignGetAllDripCampaignsParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type DripCampaignGetAllDripCampaigns200 = {
  metadata?: CollectionMetadata;
  items?: DripCampaign[];
};

/**
 * @nullable
 */
export type DripCampaignAddDripCampaignBody = DripCampaign | null;

/**
 * @nullable
 */
export type DripCampaignUpdateDripCampaignBody = DripCampaign | null;

/**
 * @nullable
 */
export type DripCampaignAddDripCampaignMessageBody = DripCampaignMessage | null;

/**
 * @nullable
 */
export type DripCampaignUpdateDripCampaignMessageBody = DripCampaignMessage | null;

/**
 * @nullable
 */
export type DripCampaignSendTestCampaignEmailBody = SendTestEmailRequest | null;

export type CampaignGetAllBroadcastEmailsParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type CampaignGetAllBroadcastEmails200 = {
  metadata?: CollectionMetadata;
  items?: BroadcastCampaign[];
};

/**
 * @nullable
 */
export type CampaignAddBroadcastEmailBody = BroadcastCampaign | null;

/**
 * @nullable
 */
export type CampaignUpdateBroadcastEmailBody = BroadcastCampaign | null;

/**
 * @nullable
 */
export type CampaignSendTestCampaignEmailBody = SendTestEmailRequest2 | null;

export type EmailListGetAllSubscriptionsParams = {
/**
 * Matches person's first name or last name or email address.
 * @nullable
 */
q?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type EmailListGetAllSubscriptions200 = {
  metadata?: CollectionMetadata;
  items?: EmailListPerson[];
};

/**
 * @nullable
 */
export type EmailListAddSubscriptionBody = EmailListPerson | null;

export type DealGetAllDealsParams = {
/**
 * Uid of the owner of the deal, or -1 for unassigned deals and -2 for all assigned deals.
 * @nullable
 */
ownerUid?: string | null;
/**
 * Match on the deal name, the pipeline stage name, or the account name.
 * @nullable
 */
q?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type DealGetAllDeals200 = {
  metadata?: CollectionMetadata;
  items?: Deal[];
};

/**
 * @nullable
 */
export type DealAddDealBody = Deal | null;

/**
 * @nullable
 */
export type DealUpdateDealBody = Deal | null;

export type AccountGetAllAccountsParams = {
/**
 * Accounts are filtered based on whether they are associated with the segment
 * @nullable
 */
segmentUid?: string | null;
/**
 * Partial match on account name or exact account Uid
 * @nullable
 */
q?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type AccountGetAllAccounts200 = {
  metadata?: CollectionMetadata;
  items?: Account[];
};

export type AccountAddAccountParams = {
isImported?: boolean;
};

/**
 * @nullable
 */
export type AccountAddAccountBody = Account | null;

/**
 * @nullable
 */
export type AccountUpdateAccountBody = Account | null;

/**
 * @nullable
 */
export type AccountAddPersonToAccountBody = PersonAccount | null;

/**
 * @nullable
 */
export type AccountUpdateMembershipBody = PersonAccount | null;

/**
 * @nullable
 */
export type AccountCancelAccountBody = AccountCancelation | null;

/**
 * @nullable
 */
export type AccountExtendTrialBody = ExtendTrialParams | null;

export type PersonGetAllPeopleParams = {
/**
 * Match on the person's first or last name or email address
 * @nullable
 */
q?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type PersonGetAllPeople200 = {
  metadata?: CollectionMetadata;
  items?: Person[];
};

/**
 * @nullable
 */
export type PersonAddPersonBody = Person | null;

/**
 * @nullable
 */
export type PersonUpdatePersonBody = Person | null;

/**
 * @nullable
 */
export type PersonSetTemporaryPasswordBody = TemporaryPasswordModel | null;

/**
 * @nullable
 */
export type PersonForgotPasswordBody = Person | null;

export type DiscountCouponGetDiscountCouponByCodeParams = {
/**
 * The unique identifier of the plan to validate the coupon against
 * @nullable
 */
planUid: string | null;
};

export type DiscountCouponGetAllDiscountCouponsParams = {
/**
 * When true, returns only coupons that can still be redeemed
 */
canRedeem?: boolean;
/**
 * Searches coupons by name or code
 * @nullable
 */
q?: string | null;
/**
 * Returns only coupons that apply to the plan with this unique identifier
 * @nullable
 */
planUid?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type DiscountCouponGetAllDiscountCoupons200 = {
  metadata?: CollectionMetadata;
  items?: DiscountCoupon[];
};

/**
 * @nullable
 */
export type DiscountCouponAddDiscountCouponBody = DiscountCoupon | null;

/**
 * @nullable
 */
export type DiscountCouponUpdateDiscountCouponBody = DiscountCoupon | null;

export type DiscountCouponGetDiscountCouponRedemptionsParams = {
/**
 * Searches redemptions by account or plan name
 * @nullable
 */
q?: string | null;
/**
 * When set, filters by whether the redemption is still active
 * @nullable
 */
isActive?: boolean | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type DiscountCouponGetDiscountCouponRedemptions200 = {
  metadata?: CollectionMetadata;
  items?: DiscountCouponSubscription[];
};

/**
 * @nullable
 */
export type UsageAddUsageBody = Usage | null;

export type TransactionsGetAllTransactionsByAccountIdParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type TransactionsGetAllTransactionsByAccountId200 = {
  metadata?: CollectionMetadata;
  items?: Transaction[];
};

/**
 * @nullable
 */
export type TransactionsAddPaymentTransactionBody = Transaction | null;

/**
 * @nullable
 */
export type PaymentInformationSavePaymentInformationBody = PaymentInformation | null;

export type SubscriptionAddOnGetAllSubscriptionsAddOnsParams = {
/**
 * Filters by the add-on's lifecycle: current, future, or past
 * @nullable
 */
status?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type SubscriptionAddOnGetAllSubscriptionsAddOns200 = {
  metadata?: CollectionMetadata;
  items?: SubscriptionAddOn[];
};

/**
 * @nullable
 */
export type SubscriptionAddOnAddSubscriptionAddOnBody = SubscriptionAddOn | null;

/**
 * @nullable
 */
export type SubscriptionAddOnAddSubscriptionAddOnPreviewBody = SubscriptionAddOn | null;

/**
 * @nullable
 */
export type SubscriptionAddOnSetAddOnUpgradeRequiredBody = SubscriptionAddOn | null;

export type InvoiceGetAllInvoicesParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
/**
 * The invoice Uid to omit from the result set.
 */
excludeInvoiceUid?: string;
};

export type InvoiceGetAllInvoices200 = {
  metadata?: CollectionMetadata;
  items?: Invoice[];
};

/**
 * @nullable
 */
export type InvoiceAddInvoiceBody = Invoice | null;

/**
 * @nullable
 */
export type InvoiceUpdateInvoiceBody = Invoice | null;

export type SubscriptionGetAllSubscriptionsParams = {
/**
 * Pass 1 to return only the most recent subscription per account, expired or not
 * @nullable
 */
current?: string | null;
/**
 * Filters by the subscription's lifecycle: current, future, or past
 * @nullable
 */
status?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type SubscriptionGetAllSubscriptions200 = {
  metadata?: CollectionMetadata;
  items?: Subscription[];
};

/**
 * @nullable
 */
export type SubscriptionSetSubscriptionUpgradeRequiredBody = Subscription | null;

export type SubscriptionFirstTimeSubscriptionPreviewParams = {
/**
 * Set to "renewal" to see the renewal invoice. Defaults to "now".
 * @nullable
 */
asOf?: string | null;
};

/**
 * @nullable
 */
export type SubscriptionFirstTimeSubscriptionPreviewBody = Subscription | null;

/**
 * @nullable
 */
export type SubscriptionFirstTimeSubscriptionBody = Subscription | null;

export type SubscriptionChangeSubscriptionPreviewParams = {
/**
 * If true, the subscription change takes effect immediately
 * @nullable
 */
startImmediately?: string | null;
};

/**
 * @nullable
 */
export type SubscriptionChangeSubscriptionPreviewBody = Subscription | null;

export type SubscriptionChangeSubscriptionParams = {
/**
 * If true, the subscription change takes effect immediately
 * @nullable
 */
startImmediately?: string | null;
};

/**
 * @nullable
 */
export type SubscriptionChangeSubscriptionBody = Subscription | null;

export type PlanGetAllPlansParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type PlanGetAllPlans200 = {
  metadata?: CollectionMetadata;
  items?: Plan[];
};

/**
 * @nullable
 */
export type PlanAddPlanBody = Plan | null;

/**
 * @nullable
 */
export type PlanUpdatePlanBody = Plan | null;

export type PlanFamilyGetAllPlanFamiliesParams = {
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type PlanFamilyGetAllPlanFamilies200 = {
  metadata?: CollectionMetadata;
  items?: PlanFamily[];
};

/**
 * @nullable
 */
export type PlanFamilyAddPlanFamilyBody = PlanFamily | null;

/**
 * @nullable
 */
export type PlanFamilyUpdatePlanFamilyBody = PlanFamily | null;

export type ActivityGetAllParams = {
/**
 * @nullable
 */
criteria?: ActivityCriteria[] | null;
/**
 * @nullable
 */
ActivityType?: string | null;
/**
 * @nullable
 */
EntityType?: string | null;
/**
 * @nullable
 */
EntityUid?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};

export type ActivityGetAll200 = {
  metadata?: CollectionMetadata;
  items?: Activity[];
};

/**
 * @nullable
 */
export type ActivityAddCustomActivityBody = Activity | null;

