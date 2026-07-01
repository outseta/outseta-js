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
  /** Props applied to the element Outseta mounts into. */
  widgetProps?: HTMLAttributes<HTMLDivElement>;
}

/**
 * Renders an embedded Outseta profile widget.
 *
 * Uses `key={tab}` internally so React re-mounts the widget
 * when the tab changes.
 */
export function ProfileEmbed({
  tab = "profile",
  widgetProps,
  ...props
}: ProfileEmbedProps) {
  return (
    <div key={tab} {...props}>
      <div {...widgetProps} data-o-profile="1" data-mode="embed" data-tab={tab} />
    </div>
  );
}
