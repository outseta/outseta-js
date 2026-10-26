// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { StripeProduct } from './stripeProduct';

export type StripeProductsGetAll200 = {
  metadata?: CollectionMetadata;
  items?: StripeProduct[];
};
