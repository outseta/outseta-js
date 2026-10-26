// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { StripeSubscription } from './stripeSubscription';

export type StripeSubscriptionsGetAll200 = {
  metadata?: CollectionMetadata;
  items?: StripeSubscription[];
};
