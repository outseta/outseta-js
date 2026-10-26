// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { StripeInvoice } from './stripeInvoice';

export type StripeInvoicesGetAll200 = {
  metadata?: CollectionMetadata;
  items?: StripeInvoice[];
};
