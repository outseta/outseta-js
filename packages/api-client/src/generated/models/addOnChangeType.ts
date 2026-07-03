// @ts-nocheck

/**
 * `AddOnAdded` - AddOnAdded, `AddOnReactivated` - AddOnReactivated, `AddOnQuantityChanged` - AddOnQuantityChanged
 */
export type AddOnChangeType = typeof AddOnChangeType[keyof typeof AddOnChangeType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddOnChangeType = {
  AddOnAdded: 'AddOnAdded',
  AddOnReactivated: 'AddOnReactivated',
  AddOnQuantityChanged: 'AddOnQuantityChanged',
} as const;
