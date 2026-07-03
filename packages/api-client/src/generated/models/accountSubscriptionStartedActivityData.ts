// @ts-nocheck
import type { AccountSubscriptionStartedActivityDataSubscription } from './accountSubscriptionStartedActivityDataSubscription';

export interface AccountSubscriptionStartedActivityData {
  /** @nullable */
  Subscription?: AccountSubscriptionStartedActivityDataSubscription;
  /** @nullable */
  CurrentPrincipal?: string | null;
  /** @nullable */
  SubscriptionUid?: string | null;
}
