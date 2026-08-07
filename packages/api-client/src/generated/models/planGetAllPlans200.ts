// @ts-nocheck
import type { CollectionMetadata } from './collectionMetadata';
import type { Plan } from './plan';

export type PlanGetAllPlans200 = {
  metadata?: CollectionMetadata;
  items?: Plan[];
};
