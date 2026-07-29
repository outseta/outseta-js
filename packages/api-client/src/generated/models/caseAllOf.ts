// @ts-nocheck
import type { Person } from './person';
import type { SupportCaseStatus } from './supportCaseStatus';
import type { SupportCaseSource } from './supportCaseSource';
import type { CaseHistory } from './caseHistory';
import type { CaseTag } from './caseTag';
import type { CaseAllOfLastCaseHistory } from './caseAllOfLastCaseHistory';

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
