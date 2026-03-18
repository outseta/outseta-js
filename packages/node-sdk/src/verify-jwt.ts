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
  token: string,
  options: { subdomain: string },
) {
  const response = await fetch(
    `https://${options.subdomain}.outseta.com/api/v1/profile?fields=*`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  if (!response.ok) {
    const error = (await response.json().catch(() => ({}))) as Record<
      string,
      string
    >;
    throw new Error(
      `Profile verification failed: [${response.status}] ${
        error.ErrorMessage || error.Message || response.statusText
      }`,
    );
  }

  const profile = (await response.json()) as Record<string, unknown>;
  const payload = decodeJwt(token);

  return { payload, profile };
}
