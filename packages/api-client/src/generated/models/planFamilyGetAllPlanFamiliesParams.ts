// @ts-nocheck
import type { LimitParameter } from './limitParameter';
import type { OffsetParameter } from './offsetParameter';

export type PlanFamilyGetAllPlanFamiliesParams = {
/**
 * Maximum number of records per page.
 */
limit?: LimitParameter;
/**
 * Zero-based page index.
 */
offset?: OffsetParameter;
};
