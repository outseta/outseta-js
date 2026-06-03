// @ts-nocheck
import type { DnsEntry } from './dnsEntry';

export type SendGridDomainAuthenticationAllOf = {
  /**
   * @minLength 1
   * @maxLength 250
   */
  DomainName: string;
  /**
   * @maxLength 100
   * @nullable
   */
  SendGridSubuser?: string | null;
  IsValid?: boolean;
  IsBrandedLinksDisabled?: boolean;
  IsLinkTrackingDnsValid?: boolean;
  /**
   * @maxLength 100
   * @nullable
   */
  CloudflareCustomHostnameId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  CloudflareSslStatus?: string | null;
  /** @nullable */
  CloudflareCustomHostnameCreatedAt?: string | null;
  IsHttpsUpgradeAvailable?: boolean;
  /** @nullable */
  LastValidationAttempt?: string | null;
  /** @nullable */
  DnsEntries?: DnsEntry[] | null;
};
