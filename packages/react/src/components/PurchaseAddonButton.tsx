import type { ButtonHTMLAttributes } from "react";
import { useOutseta } from "./OutsetaProvider.js";

export interface PurchaseAddonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The Outseta add-on UID to purchase */
  addonUid: string;
  /** Billing renewal term (4 = one-time purchase by default) */
  billingRenewalTerm?: number;
}

/**
 * Button that opens the Outseta profile widget to the
 * "Purchase Add-on" tab for a specific add-on.
 */
export function PurchaseAddonButton({
  addonUid,
  billingRenewalTerm = 4,
  children = "Buy Add-on",
  ...props
}: PurchaseAddonButtonProps) {
  const { openProfile } = useOutseta();

  return (
    <button
      onClick={() =>
        openProfile({
          mode: "popup",
          tab: "purchaseAddOn",
          stateProps: { addOnUid: addonUid, billingRenewalTerm },
        })
      }
      {...props}
    >
      {children}
    </button>
  );
}
