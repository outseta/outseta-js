// @ts-nocheck
import type { DealWebhookEntity } from './dealWebhookEntity';
import type { PersonWebhookEntity } from './personWebhookEntity';
import type { AccountWebhookEntity } from './accountWebhookEntity';

export type TaskCreatedWebhookPayloadAllOf = DealWebhookEntity | PersonWebhookEntity | AccountWebhookEntity;
