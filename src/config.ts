import 'dotenv/config';
import rawConfig from '../config.json';

interface Config {
  guildId: string;
  forumChannelIds: string[];
  votingDurationMs: number;
  proposalEmoji: string;
}

function validateConfig(): Config {
  const token = process.env.DISCORD_TOKEN;
  const clientId = process.env.CLIENT_ID;

  if (!token) throw new Error('Missing env var: DISCORD_TOKEN');
  if (!clientId) throw new Error('Missing env var: CLIENT_ID');

  const cfg = rawConfig as Config;
  if (!cfg.guildId) throw new Error('config.json missing guildId');
  if (!Array.isArray(cfg.forumChannelIds) || cfg.forumChannelIds.length === 0) {
    throw new Error('config.json missing forumChannelIds');
  }

  return cfg;
}

export const config = validateConfig();
export const DISCORD_TOKEN = process.env.DISCORD_TOKEN as string;
export const CLIENT_ID = process.env.CLIENT_ID as string;
