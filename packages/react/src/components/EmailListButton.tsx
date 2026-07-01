import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";
import type { EmailListWidgetOptions } from "./types.js";
import { composeButtonClick } from "./utils.js";

export interface EmailListButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The Outseta email list UID to subscribe to. */
  emailListUid: string;
  /** Options passed to `Outseta.emailList.open`. */
  options?: Omit<EmailListWidgetOptions, "emailListUid">;
}

/**
 * Unstyled button that opens the Outseta email list widget.
 */
export function EmailListButton({
  children = "Subscribe",
  emailListUid,
  options,
  onClick,
  type = "button",
  ...props
}: EmailListButtonProps) {
  const { openEmailList } = useOutseta();

  return (
    <button
      type={type}
      {...props}
      onClick={composeButtonClick(onClick, () =>
        openEmailList({ mode: "popup", ...options, emailListUid }),
      )}
    >
      {children}
    </button>
  );
}
