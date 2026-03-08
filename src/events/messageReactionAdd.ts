import { Events } from 'discord.js';
import { client } from '../client';
import { config } from '../config';
import { getProposalByMessageId, getOpenSession, incrementVote, decrementVote } from '../voting/session';

async function handleReaction(
  reactionEmoji: string,
  messageId: string,
  channelId: string,
  userId: string,
  increment: boolean,
): Promise<void> {
  if (reactionEmoji !== config.proposalEmoji) return;

  const proposal = getProposalByMessageId(messageId);
  if (!proposal) return;

  const session = getOpenSession(proposal.thread_id);
  if (!session) return;

  // Don't count the bot's own auto-reaction
  if (userId === client.user?.id) return;

  if (increment) {
    incrementVote(messageId);
  } else {
    decrementVote(messageId);
  }
}

client.on(Events.MessageReactionAdd, async (reaction, user) => {
  if (reaction.partial) await reaction.fetch().catch(() => null);
  if (reaction.message.partial) await reaction.message.fetch().catch(() => null);

  const emoji = reaction.emoji.name ?? '';
  const messageId = reaction.message.id;
  const channelId = reaction.message.channelId ?? '';

  await handleReaction(emoji, messageId, channelId, user.id, true);
});

client.on(Events.MessageReactionRemove, async (reaction, user) => {
  if (reaction.partial) await reaction.fetch().catch(() => null);
  if (reaction.message.partial) await reaction.message.fetch().catch(() => null);

  const emoji = reaction.emoji.name ?? '';
  const messageId = reaction.message.id;
  const channelId = reaction.message.channelId ?? '';

  await handleReaction(emoji, messageId, channelId, user.id, false);
});
