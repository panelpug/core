import 'dotenv/config';
import { REST, Routes } from 'discord.js';
import { proposeCommand } from '../src/commands/propose';

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID ?? require('../config.json').guildId;

if (!token) throw new Error('Missing env var: DISCORD_TOKEN');
if (!clientId) throw new Error('Missing env var: CLIENT_ID');
if (!guildId) throw new Error('Missing guildId in config.json or GUILD_ID env var');

const rest = new REST().setToken(token);

(async () => {
  console.log('[deploy] Registering slash commands...');

  const data = await rest.put(
    Routes.applicationGuildCommands(clientId, guildId),
    { body: [proposeCommand.toJSON()] },
  ) as unknown[];

  console.log(`[deploy] Successfully registered ${data.length} command(s).`);
})().catch((err) => {
  console.error('[deploy] Failed:', err);
  process.exit(1);
});
