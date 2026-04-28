// @ts-nocheck

/**
 * `0` - NotSet, `1` - Deserialized, `2` - DeserializedNull
 */
export type DeserializationStatus = typeof DeserializationStatus[keyof typeof DeserializationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeserializationStatus = {
  NotSet: 0,
  Deserialized: 1,
  DeserializedNull: 2,
} as const;
