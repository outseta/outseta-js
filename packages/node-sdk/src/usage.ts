import type { OutsetaClient } from "@outseta/api-client";

const USAGE_ACCOUNT_FIELDS =
  "Uid,Name,CurrentSubscription.*,CurrentSubscription.SubscriptionAddOns.*,CurrentSubscription.SubscriptionAddOns.AddOn.*";

type OutsetaErrorBody = {
  ErrorMessage?: string;
  Message?: string;
};

type SubscriptionAddOnForUsage = {
  Uid?: string;
  AddOn?: {
    Uid?: string;
    BillingAddOnType?: number;
  };
};

type AccountForUsage = {
  CurrentSubscription?: {
    SubscriptionAddOns?: SubscriptionAddOnForUsage[] | null;
  } | null;
};

export type TrackUsageParams = {
  /** Account UID that owns the usage-based add-on subscription. */
  accountUid: string;
  /** Add-on UID configured as usage-based billing in Outseta. */
  addOnUid: string;
  /** Usage amount to record. */
  amount: number;
  /** Usage date. Defaults to the current time. */
  usageDate?: Date | string;
};

export type TrackUsageResult = Record<string, unknown>;

async function readResponseBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return await response.json().catch(() => undefined);
  }

  return await response.text().catch(() => undefined);
}

function getErrorMessage(body: unknown): string {
  if (body && typeof body === "object") {
    const error = body as OutsetaErrorBody;
    return error.ErrorMessage ?? error.Message ?? "";
  }
  return typeof body === "string" ? body : "";
}

async function assertOk(response: Response, endpoint: string): Promise<unknown> {
  const body = await readResponseBody(response);

  if (!response.ok) {
    const message = getErrorMessage(body);
    throw new Error(
      `${endpoint}: [${response.status}] ${message || response.statusText}`,
    );
  }

  return body;
}

/**
 * Records usage for an Outseta usage-based add-on.
 *
 * The helper fetches the account's current subscription, finds the matching
 * subscription add-on by add-on UID, verifies it is usage-based
 * (`BillingAddOnType === 2`), then creates a billing usage entry.
 */
export async function trackUsage(
  client: OutsetaClient,
  params: TrackUsageParams,
): Promise<TrackUsageResult> {
  const fields = new URLSearchParams({ fields: USAGE_ACCOUNT_FIELDS });
  const accountEndpoint = `crm/accounts/${params.accountUid}?${fields.toString()}`;

  const accountResponse = await client(accountEndpoint, { method: "GET" });
  const account = await assertOk(
    accountResponse,
    "/api/v1/crm/accounts/:accountUid",
  ) as AccountForUsage;

  const addOnSubscriptions =
    account.CurrentSubscription?.SubscriptionAddOns ?? [];
  const targetAddOnSubscription = addOnSubscriptions.find(
    (subscriptionAddOn) => subscriptionAddOn.AddOn?.Uid === params.addOnUid,
  );

  if (!targetAddOnSubscription?.Uid) {
    throw new Error(
      `Subscription for add-on with UID ${params.addOnUid} not found for account ${params.accountUid}`,
    );
  }

  if (targetAddOnSubscription.AddOn?.BillingAddOnType !== 2) {
    throw new Error(
      `Add-on with UID ${params.addOnUid} is not a usage add-on for account ${params.accountUid}`,
    );
  }

  const usageDate = params.usageDate instanceof Date
    ? params.usageDate.toISOString()
    : params.usageDate ?? new Date().toISOString();

  const usageResponse = await client("billing/usage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      UsageDate: usageDate,
      Amount: params.amount,
      SubscriptionAddOn: {
        Uid: targetAddOnSubscription.Uid,
      },
    }),
  });

  return await assertOk(
    usageResponse,
    "/api/v1/billing/usage",
  ) as TrackUsageResult;
}

/**
 * Compatibility helper mirroring the original toolkit example name.
 */
export function updateUsageBasedPricing(
  client: OutsetaClient,
  accountUid: string,
  addOnUid: string,
  amount: number,
  options: Pick<TrackUsageParams, "usageDate"> = {},
) {
  return trackUsage(client, { accountUid, addOnUid, amount, ...options });
}
