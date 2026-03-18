import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Verifies an Outseta webhook signature.
 *
 * Compare the `x-hub-signature-256` request header against
 * the HMAC-SHA256 computed from the raw request body and
 * your webhook signing key (found in Outseta webhook settings).
 */
export function verifyWebhookSignature(
  signature: string,
  body: string,
  signingKey: string,
): boolean {
  const key = Buffer.from(signingKey, "hex");
  const computed = createHmac("sha256", key)
    .update(Buffer.from(body, "utf-8"))
    .digest("hex");
  const expected = `sha256=${computed}`;

  if (signature.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
