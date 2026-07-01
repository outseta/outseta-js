import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import type { SupportWidgetOptions } from "./types.js";
import { composeButtonClick } from "./utils.js";

export interface SupportButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Options passed to `Outseta.support.open`. */
  options?: SupportWidgetOptions;
}

/**
 * Unstyled button that opens the Outseta support widget.
 */
export function SupportButton({
  children = "Contact support",
  options,
  onClick,
  type = "button",
  ...props
}: SupportButtonProps) {
  const { openSupport } = useOutseta();

  return (
    <button
      type={type}
      {...props}
      onClick={composeButtonClick(onClick, () =>
        openSupport({ mode: "popup", ...options }),
      )}
    >
      {children}
    </button>
  );
}
