import { DISCORD_TOKEN } from './config';
import { client } from './client';

// Load event handlers and commands (side-effect registrations)
import './events/ready';
import './events/threadCreate';
import './events/messageReactionAdd';
import './commands/propose';

client.login(DISCORD_TOKEN).catch((err) => {
  console.error('[index] Failed to login:', err);
  process.exit(1);
});
