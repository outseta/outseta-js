// @ts-nocheck
import type { TemplateEmailInstanceAllOfTemplate } from './templateEmailInstanceAllOfTemplate';
import type { TemplateEmailInstanceAllOfRecipient } from './templateEmailInstanceAllOfRecipient';

export type TemplateEmailInstanceAllOf = {
  /** @nullable */
  Template?: TemplateEmailInstanceAllOfTemplate;
  /** @nullable */
  Recipient?: TemplateEmailInstanceAllOfRecipient;
  /**
   * @maxLength 50
   * @nullable
   */
  UniqueMessageId?: string | null;
  /**
   * @maxLength 1000
   * @nullable
   */
  Subject?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FromEmail?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  FromName?: string | null;
  SendDateTime?: string;
  /** @nullable */
  ProcessDateTime?: string | null;
  /** @nullable */
  DeliverDateTime?: string | null;
  /** @nullable */
  BounceDateTime?: string | null;
  /** @nullable */
  SpamDateTime?: string | null;
  /** @nullable */
  OpenDateTime?: string | null;
  /** @nullable */
  ClickDateTime?: string | null;
  /** @nullable */
  UnsubscribeDateTime?: string | null;
  /** @nullable */
  SendError?: string | null;
};
