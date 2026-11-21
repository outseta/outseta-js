// @ts-nocheck

/**
 * `0` - ReadWrite, `1` - ReadOnly, `2` - None
 */
export type DefinitionUserAccess = typeof DefinitionUserAccess[keyof typeof DefinitionUserAccess];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DefinitionUserAccess = {
  ReadWrite: 0,
  ReadOnly: 1,
  None: 2,
} as const;
