// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { StripePaymentMethod } from './stripePaymentMethod';

export type StripePaymentMethodsGetAll200 = {
  metadata?: CollectionMetadata;
  items?: StripePaymentMethod[];
};
