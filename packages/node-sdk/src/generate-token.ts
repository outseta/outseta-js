import type { OutsetaCredentials } from "@outseta/api-client";

/**
 * Generates a JWT access token for a user by email.
 *
 * Requires server-side API Key + Secret credentials.
 * Useful for logging in users programmatically, testing auth flows,
 * or acting on behalf of a user from a backend service.
 */
export async function generateAccessToken(
  credentials: OutsetaCredentials,
  email: string,
) {
  const response = await fetch(
    `https://${credentials.subdomain}.outseta.com/api/v1/tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Outseta ${credentials.apiKey}:${credentials.apiSecret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email }),
    },
  );

  const data = (await response.json()) as Record<string, unknown>;

  if (!response.ok) {
    throw new Error(
      `Failed to generate token: [${response.status}] ${
        (data.ErrorMessage as string) ||
        (data.Message as string) ||
        response.statusText
      }`,
    );
  }

  return data as { access_token: string } & Record<string, unknown>;
}
