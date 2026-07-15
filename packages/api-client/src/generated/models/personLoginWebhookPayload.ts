// @ts-nocheck
import type { AccountWebhookEntity } from './accountWebhookEntity';
import type { PersonLoginWebhookPayloadAllOf } from './personLoginWebhookPayloadAllOf';

export type PersonLoginWebhookPayload = AccountWebhookEntity & PersonLoginWebhookPayloadAllOf;
