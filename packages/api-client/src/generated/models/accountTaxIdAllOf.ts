// @ts-nocheck
import type { AccountTaxIdAllOfAccount } from './accountTaxIdAllOfAccount';

export type AccountTaxIdAllOf = {
  /** @nullable */
  Account?: AccountTaxIdAllOfAccount;
  /**
   * @maxLength 50
   * @nullable
   */
  TaxId?: string | null;
  /**
   * @maxLength 20
   * @nullable
   */
  TaxIdType?: string | null;
  IsInvalid?: boolean;
  [key: string]: unknown | null;
};
