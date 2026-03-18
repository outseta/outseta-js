import type { KyInstance } from "ky";

/**
 * Generates a JWT access token for a user by email.
 *
 * Requires a client created with server-side API Key + Secret credentials.
 * Useful for logging in users programmatically, testing auth flows,
 * or acting on behalf of a user from a backend service.
 */
export async function generateAccessToken(client: KyInstance, email: string) {
  return client
    .post("tokens", { json: { username: email } })
    .json<{ access_token: string } & Record<string, unknown>>();
}
