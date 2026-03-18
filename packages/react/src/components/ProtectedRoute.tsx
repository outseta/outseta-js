import type { ReactNode } from "react";
import { useOutseta } from "./OutsetaProvider.js";

export interface ProtectedRouteProps {
  /** Plan UIDs that grant access to this route */
  plans: string[];
  /** Content to render when access is granted */
  children: ReactNode;
  /** Rendered while checking auth status (defaults to null) */
  loading?: ReactNode;
  /** Rendered when user is logged in but lacks the right plan */
  accessDenied?: ReactNode;
  /** Rendered when user is not logged in */
  unauthenticated?: ReactNode;
}

/**
 * Protects content behind plan-based access control.
 *
 * Checks the current user's subscription plan UID against the
 * provided list of allowed plan UIDs.
 */
export function ProtectedRoute({
  plans,
  children,
  loading = null,
  accessDenied = null,
  unauthenticated = null,
}: ProtectedRouteProps) {
  const { user, isLoading } = useOutseta();

  if (isLoading) return <>{loading}</>;

  if (!user) return <>{unauthenticated}</>;

  const userPlanUid = user.Account?.CurrentSubscription?.Plan?.Uid;
  const hasAccess = userPlanUid ? plans.includes(userPlanUid) : false;

  if (!hasAccess) return <>{accessDenied}</>;

  return <>{children}</>;
}
