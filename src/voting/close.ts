import { client } from '../client';
import { closeSession, getWinningProposal } from './session';
import { cancelSessionTimer } from './timer';
import { config } from '../config';

export async function closeVotingSession(threadId: string): Promise<void> {
  closeSession(threadId);
  cancelSessionTimer(threadId);

  const winner = getWinningProposal(threadId);

  try {
    const thread = await client.channels.fetch(threadId);
    if (!thread || !thread.isThread()) return;

    if (!winner || winner.vote_count === 0) {
      await thread.send('Voting has ended. No proposals were submitted.');
      return;
    }

    const author = await client.users.fetch(winner.author_id).catch(() => null);
    const authorTag = author ? `<@${author.id}>` : 'Unknown';

    await thread.send(
      `**Voting has ended!**\n\n` +
      `The winning plan with **${winner.vote_count}** vote(s):\n` +
      `> ${winner.description}\n\n` +
      `Proposed by ${authorTag}. React ${config.proposalEmoji} on their proposal to show support!`,
    );
  } catch (err) {
    console.error(`[closeVotingSession] Failed to announce winner for thread ${threadId}:`, err);
  }
}
