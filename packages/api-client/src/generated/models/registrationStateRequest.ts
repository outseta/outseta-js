// @ts-nocheck
import type { RegistrationStateRequestAccount } from './registrationStateRequestAccount';

/**
 * Request body for POST /api/v1/crm/registrations/state: the account to
register, the client secret of the Stripe intent the user is about to confirm,
and optionally the primary contact's profile image as a PNG or JPEG data URL.
 */
export interface RegistrationStateRequest {
  /** @nullable */
  Account?: RegistrationStateRequestAccount;
  /** @nullable */
  ClientSecret?: string | null;
  /** @nullable */
  ProfileImage?: string | null;
}
