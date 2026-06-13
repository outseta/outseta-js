// @ts-nocheck

export type SubscriptionGetAllSubscriptionsParams = {
/**
 * Pass 1 to return only the most recent subscription per account, expired or not
 * @nullable
 */
current?: string | null;
/**
 * Filters by the subscription's lifecycle: current, future, or past
 * @nullable
 */
status?: string | null;
};
