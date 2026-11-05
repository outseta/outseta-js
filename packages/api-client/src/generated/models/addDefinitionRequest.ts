// @ts-nocheck

/**
 * A custom property to add to accounts, people or deals. Only Label is required.
 */
export interface AddDefinitionRequest {
  /**
   * The name of the property shown in Outseta, for example "T-shirt size". Unique among the
entity type's custom properties, and not the label of a standard property.
   * @minLength 1
   */
  Label: string;
  /**
   * The name of the property in the API, webhooks and forms, for example TShirtSize. Starts
with a letter and holds only letters, numbers and _. Unique for the entity type, and not
the name of a standard property. Derived from Label when left out.
   * @nullable
   * @pattern ^[A-Za-z][A-Za-z0-9_]*$
   */
  SystemName?: string | null;
  /**
   * The control used to fill in the property: Text (the default), TextArea, Number, Date,
Checkbox (True or False), Select (a dropdown with one choice), RadioList (one choice) or
CheckboxList (several choices).
   * @nullable
   */
  ControlType?: string | null;
  /**
   * The control's settings: a JSON object serialized into a string, not a nested object.
Select, RadioList and CheckboxList need their options, for example
"{\"Options\":[\"Small\",\"Medium\",\"Large\"]}". Number may set a Step, for example
"{\"Step\":0.01}"; Text may set HintText and Pattern (a regular expression).
   * @nullable
   */
  ControlParams?: string | null;
}
