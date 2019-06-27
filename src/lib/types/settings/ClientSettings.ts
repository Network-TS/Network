import { Snowflake } from 'discord.js';

export namespace ClientSettings {
	export type GuildTemplates = GuildTemplate[];
	export const GuildTemplates = 'guildTemplates';
}
// eslint-disable-next-line
export type GuildTemplate = {
	name: string;
	id: Snowflake;
};
