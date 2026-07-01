import { AuthButton, type AuthButtonProps } from "./AuthButton.js";

export type LoginButtonProps = AuthButtonProps;

/**
 * Unstyled button that opens the Outseta auth widget in login mode.
 */
export function LoginButton({
  children = "Log in",
  options,
  ...props
}: LoginButtonProps) {
  return (
    <AuthButton options={{ ...options, widgetMode: "login" }} {...props}>
      {children}
    </AuthButton>
  );
}
