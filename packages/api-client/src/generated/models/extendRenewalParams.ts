// @ts-nocheck

export interface ExtendRenewalParams {
  /**
   * The new renewal date of the subscription. Omit it to keep the current renewal date, unless
ExpirationDate is earlier than it: then the renewal date moves to ExpirationDate.
   * @nullable
   */
  ToDate?: string | null;
  /**
   * The date the subscription ends. Omit it to remove the subscription's expiration date, unless
ToDate is later than the existing expiration date: then the expiration date moves to ToDate.
   * @nullable
   */
  ExpirationDate?: string | null;
}
