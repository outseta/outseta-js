import type { HTMLAttributes } from "react";

export interface LeadCaptureEmbedProps extends HTMLAttributes<HTMLDivElement> {
  /** The Outseta lead capture form UID to show. */
  formUid: string;
  /** Props applied to the element Outseta mounts into. */
  widgetProps?: HTMLAttributes<HTMLDivElement>;
}

/**
 * Renders an embedded Outseta lead capture widget.
 */
export function LeadCaptureEmbed({
  formUid,
  widgetProps,
  ...props
}: LeadCaptureEmbedProps) {
  return (
    <div key={formUid} {...props}>
      <div
        {...widgetProps}
        data-o-lead-capture="1"
        data-mode="embed"
        data-form-uid={formUid}
      />
    </div>
  );
}
