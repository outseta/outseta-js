// @ts-nocheck

/**
 * The fields of an email template that an update may change. Every field is optional:
a field left out keeps its current value.
 */
export interface UpdateTemplateRequest {
  /** The HTML of the template. May use Liquid tokens, for example {{ Person.FirstName }},
and must keep every token in the template's RequiredTokens. Cannot be null. */
  Body?: string;
  /**
   * What the template is for. Cannot be changed for a system email.
   * @nullable
   */
  Description?: string | null;
  /**
   * The design of the template in the drag-and-drop editor, as JSON. Send null with a new
Body so the editor opens the new Body as HTML instead of the old design.
   * @nullable
   */
  Design?: string | null;
  /** The name of the template, shown in the Outseta app. Cannot be changed for a system
email. Cannot be null. */
  Name?: string;
  /**
   * The subject line of the email. May use Liquid tokens, for example {{ CompanyName }}.
   * @nullable
   */
  Subject?: string | null;
}
