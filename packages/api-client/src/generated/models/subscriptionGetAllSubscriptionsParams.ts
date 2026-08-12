// @ts-nocheck
import type { LimitParameter } from './limitParameter';
import type { OffsetParameter } from './offsetParameter';

export type SubscriptionGetAllSubscriptionsParams = {
/**
 * Pass 1 to return only the most recent subscription per account, expired or not
 * @nullable
 */
current?: string | null;
/**
 * Filters by the subscription's lifecycle: current, future, or past
 * @nullable
 */
status?: string | null;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};
