// @ts-nocheck

export type TaxRateAllOf = {
  /**
   * @maxLength 250
   * @nullable
   */
  Country?: string | null;
  /**
   * @maxLength 250
   * @nullable
   */
  State?: string | null;
  /**
   * @minimum 0.001
   * @maximum 0.99
   */
  Rate?: number;
};
