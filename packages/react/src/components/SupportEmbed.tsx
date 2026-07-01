import type { HTMLAttributes } from "react";

export interface SupportEmbedProps extends HTMLAttributes<HTMLDivElement> {
  /** Props applied to the element Outseta mounts into. */
  widgetProps?: HTMLAttributes<HTMLDivElement>;
}

/**
 * Renders an embedded Outseta support widget.
 */
export function SupportEmbed({ widgetProps, ...props }: SupportEmbedProps) {
  return (
    <div {...props}>
      <div {...widgetProps} data-o-support="1" data-mode="embed" />
    </div>
  );
}
