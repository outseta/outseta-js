import type { MouseEventHandler } from "react";

export function composeButtonClick(
  onClick: MouseEventHandler<HTMLButtonElement> | undefined,
  action: () => void,
): MouseEventHandler<HTMLButtonElement> {
  return (event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      action();
    }
  };
}
