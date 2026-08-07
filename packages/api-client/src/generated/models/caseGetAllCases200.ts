// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { Case } from './case';

export type CaseGetAllCases200 = {
  metadata?: CollectionMetadata;
  items?: Case[];
};
