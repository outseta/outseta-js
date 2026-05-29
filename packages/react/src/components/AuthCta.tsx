import type { HTMLAttributes, ReactNode } from "react";
import { useOutseta } from "./OutsetaProvider.js";

export interface AuthCtaProps extends HTMLAttributes<HTMLDivElement> {
  /** Message shown before the login/signup actions. */
  message?: ReactNode;
  /** Label for the signup button. */
  signupLabel?: ReactNode;
  /** Label for the login button. */
  loginLabel?: ReactNode;
}

/**
 * Generic login/signup call-to-action for gated content.
 */
export function AuthCta({
  message = "Sign up or log in to continue.",
  signupLabel = "Sign up",
  loginLabel = "Log in",
  ...props
}: AuthCtaProps) {
  const { openSignup, openLogin } = useOutseta();

  return (
    <div {...props}>
      <p>{message}</p>
      <button type="button" onClick={() => openSignup()}>
        {signupLabel}
      </button>{" "}
      <button type="button" onClick={() => openLogin()}>
        {loginLabel}
      </button>
    </div>
  );
}
