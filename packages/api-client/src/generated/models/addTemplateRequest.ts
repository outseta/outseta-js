// @ts-nocheck

/**
 * The fields of a new email template. Name and Body are required.
 */
export interface AddTemplateRequest {
  /**
   * The tokens that the editor in the Outseta app offers for the template, comma-separated.
   * @nullable
   */
  AvailableTokens?: string | null;
  /** The HTML of the template. May use Liquid tokens, for example {{ Person.FirstName }}.
Required. */
  Body?: string;
  /**
   * What the template is for.
   * @nullable
   */
  Description?: string | null;
  /**
   * The design of the template in the drag-and-drop editor, as JSON. Leave it out for a
template that is plain HTML.
   * @nullable
   */
  Design?: string | null;
  /** The name of the template, shown in the Outseta app. Required. */
  Name?: string;
  /**
   * The tokens the Body must keep, comma-separated, for example Body,SenderInfo for an
email layout. The template is rejected if its Body does not have them, and so is a
later update that removes one.
   * @nullable
   */
  RequiredTokens?: string | null;
  /**
   * The subject line of the email. May use Liquid tokens, for example {{ CompanyName }}.
   * @nullable
   */
  Subject?: string | null;
  /**
   * The kind of template: template (Email > Email templates), layout (email layout) or
savedReply (saved support reply). Send template for a template that shows in Email >
Email templates and can be sent with the send endpoint.
   * @nullable
   */
  Tag?: string | null;
}
