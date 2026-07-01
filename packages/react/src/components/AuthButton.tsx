import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import type { AuthWidgetOptions } from "./types.js";
import { composeButtonClick } from "./utils.js";

export interface AuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Options passed to `Outseta.auth.open`. */
  options?: AuthWidgetOptions;
}

/**
 * Unstyled button that opens the Outseta auth widget.
 */
export function AuthButton({
  children = "Continue",
  options,
  onClick,
  type = "button",
  ...props
}: AuthButtonProps) {
  const { openAuth } = useOutseta();

  return (
    <button
      type={type}
      {...props}
      onClick={composeButtonClick(onClick, () => openAuth(options))}
    >
      {children}
    </button>
  );
}
