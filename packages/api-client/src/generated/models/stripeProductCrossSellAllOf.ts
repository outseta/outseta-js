// @ts-nocheck
import type { StripeProductCrossSellAllOfStripeProduct } from './stripeProductCrossSellAllOfStripeProduct';
import type { StripeProductCrossSellAllOfCrossSellProduct } from './stripeProductCrossSellAllOfCrossSellProduct';

export type StripeProductCrossSellAllOf = {
  /** @nullable */
  StripeProduct?: StripeProductCrossSellAllOfStripeProduct;
  /** @nullable */
  CrossSellProduct?: StripeProductCrossSellAllOfCrossSellProduct;
  IsUserSelectable?: boolean;
};
