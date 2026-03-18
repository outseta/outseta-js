import type { KyInstance } from "ky";
import { jwtVerify, createRemoteJWKSet, decodeJwt } from "jose";
export type { JWTPayload } from "jose";

/**
 * Verifies an Outseta JWT using the public JWK Set.
 *
 * This is the recommended method — it cryptographically verifies
 * the token signature without making an API call to Outseta.
 *
 * For high-throughput applications, consider caching the JWK Set
 * by reusing the same function across calls (jose handles caching
 * internally via `createRemoteJWKSet`).
 */
export async function verifyJwt(
  token: string,
  options: { subdomain: string },
) {
  const jwks = createRemoteJWKSet(
    new URL(
      `https://${options.subdomain}.outseta.com/.well-known/jwks`,
    ),
  );
  const { payload } = await jwtVerify(token, jwks);
  return payload;
}

/**
 * Verifies an Outseta JWT by calling the profile endpoint.
 *
 * Returns both the decoded JWT payload and the full user profile.
 * Simpler than JWK Set verification but makes a network request
 * to Outseta on every call.
 */
export async function verifyJwtWithProfile(
  client: KyInstance,
  token: string,
) {
  const profile = await client
    .get("profile", { searchParams: { fields: "*" } })
    .json<Record<string, unknown>>();
  const payload = decodeJwt(token);

  return { payload, profile };
}
