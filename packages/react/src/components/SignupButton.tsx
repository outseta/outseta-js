import { AuthButton, type AuthButtonProps } from "./AuthButton.js";

export type SignupButtonProps = AuthButtonProps;

/**
 * Unstyled button that opens the Outseta auth widget in registration mode.
 */
export function SignupButton({
  children = "Sign up",
  options,
  ...props
}: SignupButtonProps) {
  return (
    <AuthButton options={{ ...options, widgetMode: "register" }} {...props}>
      {children}
    </AuthButton>
  );
}
