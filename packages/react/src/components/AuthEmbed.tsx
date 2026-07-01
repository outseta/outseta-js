import type { HTMLAttributes } from "react";

export interface AuthEmbedProps extends HTMLAttributes<HTMLDivElement> {
  /** Widget mode: "login", "register", or "login|register" */
  widgetMode?: "login" | "register" | "login|register";
  /** Registration defaults as a JSON string or object */
  registrationDefaults?: string | Record<string, unknown>;
  /** Props applied to the element Outseta mounts into. */
  widgetProps?: HTMLAttributes<HTMLDivElement>;
}

/**
 * Renders an embedded Outseta auth widget (login/register).
 *
 * Uses `key={widgetMode}` internally so React re-mounts the widget
 * when the mode changes.
 */
export function AuthEmbed({
  widgetMode = "login|register",
  registrationDefaults,
  widgetProps,
  ...props
}: AuthEmbedProps) {
  const defaults =
    typeof registrationDefaults === "string"
      ? registrationDefaults
      : registrationDefaults
        ? JSON.stringify(registrationDefaults)
        : undefined;

  return (
    <div key={widgetMode} {...props}>
      <div
        {...widgetProps}
        data-o-auth="1"
        data-mode="embed"
        data-widget-mode={widgetMode}
        data-registration-defaults={defaults}
      />
    </div>
  );
}
