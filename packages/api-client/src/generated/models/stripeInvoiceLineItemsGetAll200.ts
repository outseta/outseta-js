// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { StripeInvoiceLineItem } from './stripeInvoiceLineItem';

export type StripeInvoiceLineItemsGetAll200 = {
  metadata?: CollectionMetadata;
  items?: StripeInvoiceLineItem[];
};
