import { Buffer } from "node:buffer";
import { verifyWebhookSignature } from "./verify-webhook.js";

export const outsetaWebhookTextParserOptions = {
  type: "application/json",
} as const;

type HeaderValue = string | string[] | undefined;

export type OutsetaWebhookRequest = {
  headers: Record<string, HeaderValue>;
  body?: unknown;
  rawBody?: unknown;
};

export type OutsetaWebhookResponse = {
  status: (code: number) => OutsetaWebhookResponse;
  send: (body?: unknown) => unknown;
};

export type OutsetaWebhookNext = (error?: unknown) => void;

export type OutsetaWebhookHandlerOptions<TPayload = unknown> = {
  /** Webhook signing key from Outseta webhook settings. */
  signingKey: string;
  /** Called after the signature is verified and the JSON payload is parsed. */
  onWebhook: (
    payload: TPayload,
    request: OutsetaWebhookRequest,
  ) => void | Promise<void>;
  /** HTTP status returned after successful processing. Defaults to 200. */
  successStatus?: number;
  /** Response body returned after successful processing. Defaults to "ok". */
  successBody?: unknown;
  /** Optional custom error hook. If omitted, Express `next` is used when present. */
  onError?: (
    error: unknown,
    request: OutsetaWebhookRequest,
    response: OutsetaWebhookResponse,
  ) => void | Promise<void>;
};

function getHeader(
  headers: Record<string, HeaderValue>,
  name: string,
): string | undefined {
  const lowerName = name.toLowerCase();
  const value = Object.entries(headers).find(
    ([key]) => key.toLowerCase() === lowerName,
  )?.[1];

  if (Array.isArray(value)) return value[0];
  return value;
}

function bodyToString(body: unknown): string | undefined {
  if (typeof body === "string") return body;
  if (Buffer.isBuffer(body)) return body.toString("utf-8");
  return undefined;
}

export function getOutsetaWebhookSignature(
  request: OutsetaWebhookRequest,
): string | undefined {
  return getHeader(request.headers, "x-hub-signature-256");
}

export function getOutsetaWebhookBody(
  request: OutsetaWebhookRequest,
): string | undefined {
  return bodyToString(request.rawBody) ?? bodyToString(request.body);
}

export function verifyOutsetaWebhookRequest(
  request: OutsetaWebhookRequest,
  signingKey: string,
): boolean {
  const signature = getOutsetaWebhookSignature(request);
  const body = getOutsetaWebhookBody(request);

  if (!signature || body === undefined) return false;
  return verifyWebhookSignature(signature, body, signingKey);
}

/**
 * Creates an Express-compatible webhook handler for Outseta Activity
 * Notifications.
 *
 * Use with `express.text(outsetaWebhookTextParserOptions)` so the raw JSON
 * string is available for signature verification.
 */
export function createOutsetaWebhookHandler<TPayload = unknown>({
  signingKey,
  onWebhook,
  successStatus = 200,
  successBody = "ok",
  onError,
}: OutsetaWebhookHandlerOptions<TPayload>) {
  return async (
    request: OutsetaWebhookRequest,
    response: OutsetaWebhookResponse,
    next?: OutsetaWebhookNext,
  ) => {
    const signature = getOutsetaWebhookSignature(request);
    const body = getOutsetaWebhookBody(request);

    if (!signature) {
      response.status(400).send("Missing signature header");
      return;
    }

    if (body === undefined) {
      response.status(400).send("Missing raw webhook body");
      return;
    }

    if (!verifyWebhookSignature(signature, body, signingKey)) {
      response.status(400).send("Webhook verification error");
      return;
    }

    try {
      const payload = JSON.parse(body) as TPayload;
      await onWebhook(payload, request);
      response.status(successStatus).send(successBody);
    } catch (error) {
      if (onError) {
        await onError(error, request, response);
        return;
      }

      if (next) {
        next(error);
        return;
      }

      response.status(500).send("Webhook handler error");
    }
  };
}
