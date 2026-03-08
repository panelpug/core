import { client } from '../client';
import { closeSession, getProposalsByThread } from './session';
import { cancelSessionTimer } from './timer';
import { config } from '../config';

export async function closeVotingSession(threadId: string): Promise<void> {
  closeSession(threadId);
  cancelSessionTimer(threadId);

  try {
    const thread = await client.channels.fetch(threadId);
    if (!thread || !thread.isThread()) return;

    const proposals = getProposalsByThread(threadId);

    if (proposals.length === 0) {
      await thread.send('Voting has ended. No proposals were submitted.');
      return;
    }

    const voteCounts = await Promise.all(
      proposals.map(async (proposal) => {
        const message = await thread.messages.fetch(proposal.message_id).catch(() => null);
        if (!message) return { proposal, count: 0 };
        const reaction = message.reactions.resolve(config.proposalEmoji);
        if (!reaction) return { proposal, count: 0 };
        const users = await reaction.users.fetch();
        const count = users.filter(u => u.id !== client.user?.id).size;
        return { proposal, count };
      })
    );

    const winner = voteCounts.reduce((best, current) =>
      current.count > best.count ? current : best
    );

    if (winner.count === 0) {
      await thread.send('Voting has ended. No proposals received any votes.');
      return;
    }

    const author = await client.users.fetch(winner.proposal.author_id).catch(() => null);
    const authorTag = author ? `<@${author.id}>` : 'Unknown';

    await thread.send(
      `**Voting has ended!**\n\n` +
      `The winning plan with **${winner.count}** vote(s):\n` +
      `> ${winner.proposal.description}\n\n` +
      `Proposed by ${authorTag}.`,
    );
  } catch (err) {
    console.error(`[closeVotingSession] Failed to announce winner for thread ${threadId}:`, err);
  }
}
