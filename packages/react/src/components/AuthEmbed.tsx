import type { HTMLAttributes } from "react";

export interface AuthEmbedProps extends HTMLAttributes<HTMLDivElement> {
  /** Widget mode: "login", "register", or "login|register" */
  widgetMode?: "login" | "register" | "login|register";
  /** Registration defaults as a JSON string or object */
  registrationDefaults?: string | Record<string, unknown>;
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
        data-o-auth="1"
        data-mode="embed"
        data-widget-mode={widgetMode}
        data-registration-defaults={defaults}
      />
    </div>
  );
}
