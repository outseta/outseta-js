// @ts-nocheck
import type { DealPersonAllOfPerson } from './dealPersonAllOfPerson';
import type { DealPersonAllOfDeal } from './dealPersonAllOfDeal';

export type DealPersonAllOf = {
  /** @nullable */
  Person?: DealPersonAllOfPerson;
  /** @nullable */
  Deal?: DealPersonAllOfDeal;
};
