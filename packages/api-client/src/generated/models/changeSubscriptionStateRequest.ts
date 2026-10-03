// @ts-nocheck
import type { ChangeSubscriptionStateRequestSubscription } from './changeSubscriptionStateRequestSubscription';

/**
 * Request body for POST /api/v1/billing/subscriptions/{subscriptionUid}/changesubscription/state:
the new subscription and the client secret of the Stripe intent the user is about
to confirm.
 */
export interface ChangeSubscriptionStateRequest {
  /** @nullable */
  ClientSecret?: string | null;
  /** @nullable */
  Subscription?: ChangeSubscriptionStateRequestSubscription;
}
