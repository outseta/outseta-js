// @ts-nocheck

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
