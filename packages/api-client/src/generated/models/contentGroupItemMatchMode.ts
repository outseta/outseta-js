// @ts-nocheck

/**
 * `1` - Equals, `2` - StartsWith
 */
export type ContentGroupItemMatchMode = typeof ContentGroupItemMatchMode[keyof typeof ContentGroupItemMatchMode];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ContentGroupItemMatchMode = {
  Equals: 1,
  StartsWith: 2,
} as const;
