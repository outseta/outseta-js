// @ts-nocheck
import type { PersonAccountAllOfPerson } from './personAccountAllOfPerson';
import type { PersonAccountAllOfAccount } from './personAccountAllOfAccount';
import type { PersonAccountAllOfRole } from './personAccountAllOfRole';

export type PersonAccountAllOf = {
  /** @nullable */
  Person?: PersonAccountAllOfPerson;
  /** @nullable */
  Account?: PersonAccountAllOfAccount;
  IsPrimary?: boolean;
  ReceiveInvoices?: boolean;
  /** @nullable */
  Role?: PersonAccountAllOfRole;
};
