// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { Invoice } from './invoice';

export type InvoiceGetAllInvoices200 = {
  metadata?: CollectionMetadata;
  items?: Invoice[];
};
