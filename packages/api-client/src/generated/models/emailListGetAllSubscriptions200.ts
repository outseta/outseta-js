// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { EmailListPerson } from './emailListPerson';

export type EmailListGetAllSubscriptions200 = {
  metadata?: CollectionMetadata;
  items?: EmailListPerson[];
};
