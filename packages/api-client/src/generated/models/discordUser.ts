// @ts-nocheck
import type { AbstractQcountBean } from './abstractQcountBean';
import type { DiscordUserAllOf } from './discordUserAllOf';

export type DiscordUser = AbstractQcountBean & DiscordUserAllOf & Required<Pick<AbstractQcountBean & DiscordUserAllOf, 'Person'>>;
