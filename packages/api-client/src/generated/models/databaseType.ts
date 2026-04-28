// @ts-nocheck

/**
 * `0` - Client, `1` - Log
 */
export type DatabaseType = typeof DatabaseType[keyof typeof DatabaseType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DatabaseType = {
  Client: 0,
  Log: 1,
} as const;
