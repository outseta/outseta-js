// @ts-nocheck

/**
 * `0` - Disabled, `1` - ForteEnabled, `2` - StripeEnabled, `3` - CustomEnabled
 */
export type PaymentsGatewayActivationStatus = typeof PaymentsGatewayActivationStatus[keyof typeof PaymentsGatewayActivationStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentsGatewayActivationStatus = {
  Disabled: 0,
  ForteEnabled: 1,
  StripeEnabled: 2,
  CustomEnabled: 3,
} as const;
