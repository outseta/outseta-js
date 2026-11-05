// @ts-nocheck

/**
 * The fields of a custom property that an update may change. Every field is optional:
a field left out keeps its current value.
 */
export interface UpdateDefinitionRequest {
  /** The name of the property shown in Outseta. Unique among the entity type's custom
properties, and not the label of a standard property. Cannot be null. */
  Label?: string;
  /**
   * The name of the property in the API, webhooks and forms. Starts with a letter and holds
only letters, numbers and _. Changing it keeps the stored values under the new name;
anything that uses the old name has to be updated. Cannot be null.
   * @pattern ^[A-Za-z][A-Za-z0-9_]*$
   */
  SystemName?: string;
  /** The control used to fill in the property: Text, TextArea, Number, Date, Checkbox, Select,
RadioList or CheckboxList. Cannot be null. */
  ControlType?: string;
  /**
   * The control's settings: a JSON object serialized into a string, replaced as a whole.
To add an option, send the full list, for example
"{\"Options\":[\"Small\",\"Medium\",\"Large\",\"X-Large\"]}".
   * @nullable
   */
  ControlParams?: string | null;
}
