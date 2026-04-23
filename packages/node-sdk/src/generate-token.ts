import type { OutsetaClient } from "@outseta/api-client";

/**
 * Generates a JWT access token for a user by email.
 *
 * Requires a client created with server-side API Key + Secret credentials.
 * Useful for logging in users programmatically, testing auth flows,
 * or acting on behalf of a user from a backend service.
 */
export async function generateAccessToken(client: OutsetaClient, email: string) {
  const response = await client("tokens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: email }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to generate access token: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json() as { access_token: string } & Record<string, unknown>;
}
