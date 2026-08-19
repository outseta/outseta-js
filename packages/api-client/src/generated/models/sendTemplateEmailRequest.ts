// @ts-nocheck

export interface SendTemplateEmailRequest {
  /**
   * The Uid of the person to send the email to. Required.
   * @nullable
   */
  PersonUid?: string | null;
  /**
   * The from address. Defaults to the support email address for the account.
   * @nullable
   */
  FromEmail?: string | null;
  /**
   * The from name. Defaults to the company name.
   * @nullable
   */
  FromName?: string | null;
  /**
   * Overrides the subject of the template.
   * @nullable
   */
  Subject?: string | null;
}
