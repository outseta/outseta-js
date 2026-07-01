import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import { composeButtonClick } from "./utils.js";

/**
 * Button that logs the user out of Outseta.
 */
export function LogoutButton({
  children = "Logout",
  onClick,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { logout } = useOutseta();

  return (
    <button
      type={type}
      {...props}
      onClick={composeButtonClick(onClick, logout)}
    >
      {children}
    </button>
  );
}
