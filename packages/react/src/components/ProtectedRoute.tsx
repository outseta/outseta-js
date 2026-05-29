import type { ReactNode } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import { AuthCta } from "./AuthCta.js";
import { UpgradeCta } from "./UpgradeCta.js";

export interface ProtectedRouteProps {
  /** Plan UIDs that grant access to this route. */
  plans: string[];
  /** Content to render when access is granted. */
  children: ReactNode;
  /** Rendered while checking auth status. Defaults to null. */
  loading?: ReactNode;
  /** Rendered when user is logged in but lacks the right plan. */
  accessDenied?: ReactNode;
  /** Rendered when user is not logged in. */
  unauthenticated?: ReactNode;
  /** Message for the default unauthenticated CTA. */
  unauthenticatedMessage?: ReactNode;
  /** Message for the default upgrade/manage subscription CTA. */
  accessDeniedMessage?: ReactNode;
}

/**
 * Protects content behind plan-based access control.
 *
 * Checks the current user's subscription plan UID against the provided list of
 * allowed plan UIDs. If access is denied, generic login/signup or upgrade CTAs
 * are rendered by default and can be replaced with the `unauthenticated` and
 * `accessDenied` props.
 */
export function ProtectedRoute({
  plans,
  children,
  loading = null,
  accessDenied,
  unauthenticated,
  unauthenticatedMessage,
  accessDeniedMessage,
}: ProtectedRouteProps) {
  const { user, isLoading } = useOutseta();

  if (isLoading) return <>{loading}</>;

  if (!user) {
    return <>{unauthenticated ?? <AuthCta message={unauthenticatedMessage} />}</>;
  }

  const userPlanUid = user.Account?.CurrentSubscription?.Plan?.Uid;
  const hasAccess = userPlanUid ? plans.includes(userPlanUid) : false;

  if (!hasAccess) {
    return <>{accessDenied ?? <UpgradeCta message={accessDeniedMessage} />}</>;
  }

  return <>{children}</>;
}
