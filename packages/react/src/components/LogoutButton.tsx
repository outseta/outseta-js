import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";

/**
 * Button that logs the user out of Outseta.
 */
export function LogoutButton({
  children = "Logout",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { logout } = useOutseta();

  return (
    <button onClick={logout} {...props}>
      {children}
    </button>
  );
}
