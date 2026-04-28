// @ts-nocheck

export type ClientApplicationAllOf = {
  /**
   * @maxLength 20
   * @nullable
   */
  ClientId?: string | null;
  /**
   * @maxLength 50
   * @nullable
   */
  ClientSecret?: string | null;
  /**
   * @minLength 1
   * @maxLength 100
   */
  Name: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  AllowedOrigin: string;
  /** @nullable */
  PostLogoutRedirectUris?: string | null;
  /** @nullable */
  RedirectUris?: string | null;
  RefreshTokenLifetime?: number;
};
