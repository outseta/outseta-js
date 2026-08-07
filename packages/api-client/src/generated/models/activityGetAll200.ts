// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { Activity } from './activity';

export type ActivityGetAll200 = {
  metadata?: CollectionMetadata;
  items?: Activity[];
};
