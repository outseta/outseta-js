// @ts-nocheck
import type { LimitParameter } from './limitParameter';
import type { OffsetParameter } from './offsetParameter';

export type ArticleGetAllArticlesParams = {
/**
 * Matches on title or body of the article
 * @nullable
 */
q?: string | null;
/**
 * Keep only the records that carry one of these tags. Separate several tag uids with commas. The value none keeps the records that carry no tag at all.
 */
tagUid?: string;
/**
 * Keep only the records that carry none of these tags. Separate several tag uids with commas. Combined with tagUid, the two widen the result instead of narrowing it: a record is kept when it matches either one.
 */
withoutTagUid?: string;
/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
limit?: LimitParameter;
/**
 * Zero-based page number, not a record offset. With limit=50, the second page is offset=1; offset=50 is page index 50 (records 2501-2550).
 */
offset?: OffsetParameter;
};
