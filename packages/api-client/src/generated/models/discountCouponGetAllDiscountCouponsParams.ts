// @ts-nocheck

export type DiscountCouponGetAllDiscountCouponsParams = {
/**
 * When true, returns only coupons that can still be redeemed
 */
canRedeem?: boolean;
/**
 * Searches coupons by name or code
 * @nullable
 */
q?: string | null;
/**
 * Returns only coupons that apply to the plan with this unique identifier
 * @nullable
 */
planUid?: string | null;
};
