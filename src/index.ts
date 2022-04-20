import Config from './config';
import { Client, Intents } from 'discord.js';
import { onInteraction } from './events/onInteraction';
import { onReady } from './events/onReady';
import { onMessageDelete } from './events/onMessageDelete';
import { onMemberBan } from './events/onMemberBan';

const Bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_BANS] });

Bot.once('ready', async () => await onReady(Bot));

Bot.on('guildBanAdd', async (ban) => await onMemberBan(ban));
Bot.on('messageDelete', async (message) => await onMessageDelete(message));
Bot.on('interactionCreate', async (interaction) => await onInteraction(interaction));

Bot.login(Config.DISCORD_TOKEN);
