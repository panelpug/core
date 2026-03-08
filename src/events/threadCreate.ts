import { ChannelType, Events, Message } from 'discord.js';
import { client } from '../client';
import { config } from '../config';
import { openSession } from '../voting/session';
import { scheduleSessionEnd } from '../voting/timer';
import { closeVotingSession } from '../voting/close';

/** Resolves once the first message in the thread arrives, or null on timeout. */
function waitForStarterMessage(threadId: string, timeoutMs = 10_000): Promise<Message | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      client.off(Events.MessageCreate, handler);
      resolve(null);
    }, timeoutMs);

    const handler = (message: Message) => {
      if (message.channelId === threadId) {
        clearTimeout(timer);
        client.off(Events.MessageCreate, handler);
        resolve(message);
      }
    };

    client.on(Events.MessageCreate, handler);
  });
}

client.on(Events.ThreadCreate, async (thread, newlyCreated) => {
  if (!newlyCreated) return;
  if (thread.parent?.type !== ChannelType.GuildForum) return;
  if (!config.forumChannelIds.includes(thread.parentId ?? '')) return;

  const endsAt = Date.now() + config.votingDurationMs;
  openSession(thread.id, thread.parentId!, endsAt);

  scheduleSessionEnd(thread.id, endsAt, () => {
    closeVotingSession(thread.id).catch(console.error);
  });

  // Wait until the initial post message exists before replying.
  // fetchStarterMessage() succeeds immediately for text-only posts; for posts
  // with attachments Discord isn't ready yet, so we fall back to waiting for
  // the messageCreate event.
  const starter = await thread.fetchStarterMessage().catch(() => null);
  if (!starter) {
    const waited = await waitForStarterMessage(thread.id);
    if (!waited) {
      console.warn(`[threadCreate] Timed out waiting for starter message in ${thread.id}`);
      return;
    }
  }

  const endsAtSec = Math.floor(endsAt / 1000);
  const msg = await thread.send(
    `**A new voting session has started!**\n\n` +
    `Use \`/propose\` to submit your plan for the characters.\n` +
    `Others can vote by reacting ${config.proposalEmoji} to any proposal.\n\n` +
    `Voting closes <t:${endsAtSec}:R> (<t:${endsAtSec}:f>).`,
  );

  await msg.pin().catch(console.error);
});
