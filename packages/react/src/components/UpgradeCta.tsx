import type { HTMLAttributes, ReactNode } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import type { ProfileWidgetOptions } from "./types.js";

export interface UpgradeCtaProps extends HTMLAttributes<HTMLDivElement> {
  /** Message shown before the upgrade/manage subscription action. */
  message?: ReactNode;
  /** Label for the profile/upgrade button. */
  buttonLabel?: ReactNode;
  /** Options passed to the Outseta profile widget. */
  profileOptions?: ProfileWidgetOptions;
}

/**
 * Generic upgrade/manage-subscription call-to-action for gated content.
 */
export function UpgradeCta({
  message = "Your current plan does not include access to this content.",
  buttonLabel = "Manage subscription",
  profileOptions = { tab: "planChange" },
  ...props
}: UpgradeCtaProps) {
  const { openProfile } = useOutseta();

  return (
    <div {...props}>
      <p>{message}</p>
      <button type="button" onClick={() => openProfile(profileOptions)}>
        {buttonLabel}
      </button>
    </div>
  );
}
