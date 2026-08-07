// @ts-nocheck
import type { LimitParameter } from './limitParameter';
import type { OffsetParameter } from './offsetParameter';

export type InvoiceGetAllInvoicesParams = {
/**
 * Maximum number of records per page.
 */
limit?: LimitParameter;
/**
 * Zero-based page index.
 */
offset?: OffsetParameter;
/**
 * The invoice Uid to omit from the result set.
 */
excludeInvoiceUid?: string;
};
