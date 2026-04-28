// @ts-nocheck
import type { JwtKeyAllOfQcount } from './jwtKeyAllOfQcount';

export type JwtKeyAllOf = {
  Active?: boolean;
  /** @nullable */
  X509CertificatePublic?: string | null;
  /** @nullable */
  KeyInitial?: string | null;
  /** @nullable */
  KeyMasked?: string | null;
  /** @nullable */
  Qcount?: JwtKeyAllOfQcount;
};
