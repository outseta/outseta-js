// @ts-nocheck
import type { DnsEntry } from './dnsEntry';

export type SendGridDomainAuthenticationAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  DomainName: string;
  IsValid?: boolean;
  IsBrandedLinksDisabled?: boolean;
  /** @nullable */
  LastValidationAttempt?: string | null;
  /** @nullable */
  DnsEntries?: DnsEntry[] | null;
};
