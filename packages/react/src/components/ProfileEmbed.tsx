import type { HTMLAttributes } from "react";

export interface ProfileEmbedProps extends HTMLAttributes<HTMLDivElement> {
  /** Profile tab to display */
  tab?:
    | "profile"
    | "billing"
    | "planChange"
    | "purchaseAddOn"
    | "passwordChange"
    | "teamMembers";
}

/**
 * Renders an embedded Outseta profile widget.
 *
 * Uses `key={tab}` internally so React re-mounts the widget
 * when the tab changes.
 */
export function ProfileEmbed({ tab = "profile", ...props }: ProfileEmbedProps) {
  return (
    <div key={tab} {...props}>
      <div data-o-profile="1" data-mode="embed" data-tab={tab} />
    </div>
  );
}
