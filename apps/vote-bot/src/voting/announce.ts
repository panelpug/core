import { Events, Message, ThreadChannel } from 'discord.js';
import { client } from '../client';
import { config } from '../config';
import { markSessionAnnounced } from './session';

/**
 * Resolves once no pug-bot messages have arrived in the thread for quietMs.
 * Each new pug-bot message resets the timer.
 */
export function waitForPugBotQuiet(threadId: string, quietMs = 30_000): Promise<void> {
  return new Promise((resolve) => {
    let timer = setTimeout(finish, quietMs);

    function finish() {
      client.off(Events.MessageCreate, handler);
      resolve();
    }

    const handler = (message: Message) => {
      if (message.channelId === threadId && message.author.id === config.pugBotId) {
        clearTimeout(timer);
        timer = setTimeout(finish, quietMs);
      }
    };

    client.on(Events.MessageCreate, handler);
  });
}

export async function waitThenAnnounce(thread: ThreadChannel, endsAt: number): Promise<void> {
  await waitForPugBotQuiet(thread.id);

  const endsAtSec = Math.floor(endsAt / 1000);
  const msg = await thread.send(
    `**A new voting session has started!**\n\n` +
    `Use \`/propose\` to submit your plan for the characters.\n` +
    `Others can vote by reacting ${config.proposalEmoji} to any proposal.\n\n` +
    `Voting closes <t:${endsAtSec}:R> (<t:${endsAtSec}:f>).`,
  );

  await msg.pin().catch(console.error);
  markSessionAnnounced(thread.id);
}
