import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import type { LeadCaptureWidgetOptions } from "./types.js";
import { composeButtonClick } from "./utils.js";

export interface LeadCaptureButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The Outseta lead capture form UID to show. */
  formUid: string;
  /** Options passed to `Outseta.leadCapture.open`. */
  options?: Omit<LeadCaptureWidgetOptions, "formUid">;
}

/**
 * Unstyled button that opens the Outseta lead capture widget.
 */
export function LeadCaptureButton({
  children = "Get in touch",
  formUid,
  options,
  onClick,
  type = "button",
  ...props
}: LeadCaptureButtonProps) {
  const { openLeadCapture } = useOutseta();

  return (
    <button
      type={type}
      {...props}
      onClick={composeButtonClick(onClick, () =>
        openLeadCapture({ mode: "popup", ...options, formUid }),
      )}
    >
      {children}
    </button>
  );
}
