// @ts-nocheck

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
