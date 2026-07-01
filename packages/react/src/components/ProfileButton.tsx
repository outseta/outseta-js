import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import type { ProfileWidgetOptions } from "./types.js";
import { composeButtonClick } from "./utils.js";

export interface ProfileButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Options passed to `Outseta.profile.open`. */
  options?: ProfileWidgetOptions;
}

/**
 * Unstyled button that opens the Outseta profile widget.
 */
export function ProfileButton({
  children = "Profile",
  options,
  onClick,
  type = "button",
  ...props
}: ProfileButtonProps) {
  const { openProfile } = useOutseta();

  return (
    <button
      type={type}
      {...props}
      onClick={composeButtonClick(onClick, () =>
        openProfile({ mode: "popup", ...options }),
      )}
    >
      {children}
    </button>
  );
}
