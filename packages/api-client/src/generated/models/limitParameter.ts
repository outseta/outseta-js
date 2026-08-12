// @ts-nocheck

/**
 * Requested page size. The server caps it at 100, or 25 when requested fields expand child objects or require additional queries; metadata.limit reports the applied value. Use offset=1 for the second page.
 */
export type LimitParameter = number;
