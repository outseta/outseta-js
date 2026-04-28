// @ts-nocheck

/**
 * `0` - None, `1` - Gmail
 */
export type OAuthService = typeof OAuthService[keyof typeof OAuthService];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OAuthService = {
  None: 0,
  Gmail: 1,
} as const;
