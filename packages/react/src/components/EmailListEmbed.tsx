import type { HTMLAttributes } from "react";

export interface EmailListEmbedProps extends HTMLAttributes<HTMLDivElement> {
  /** The Outseta email list UID to subscribe to. */
  emailListUid: string;
  /** Props applied to the element Outseta mounts into. */
  widgetProps?: HTMLAttributes<HTMLDivElement>;
}

/**
 * Renders an embedded Outseta email list widget.
 */
export function EmailListEmbed({
  emailListUid,
  widgetProps,
  ...props
}: EmailListEmbedProps) {
  return (
    <div key={emailListUid} {...props}>
      <div
        {...widgetProps}
        data-o-email-list="1"
        data-mode="embed"
        data-email-list-uid={emailListUid}
      />
    </div>
  );
}
