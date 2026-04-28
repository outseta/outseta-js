// @ts-nocheck
import type { PersonAccountAllOfPerson } from './personAccountAllOfPerson';
import type { PersonAccountAllOfAccount } from './personAccountAllOfAccount';

export type PersonAccountAllOf = {
  /** @nullable */
  Person?: PersonAccountAllOfPerson;
  /** @nullable */
  Account?: PersonAccountAllOfAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
};
