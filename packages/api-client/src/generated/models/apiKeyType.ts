// @ts-nocheck

/**
 * `0` - Admin, `1` - ReadOnly
 */
export type ApiKeyType = typeof ApiKeyType[keyof typeof ApiKeyType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ApiKeyType = {
  Admin: 0,
  ReadOnly: 1,
} as const;
