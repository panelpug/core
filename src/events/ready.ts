import { Events } from 'discord.js';
import { client } from '../client';
import { getAllOpenSessions } from '../voting/session';
import { scheduleSessionEnd } from '../voting/timer';
import { closeVotingSession } from '../voting/close';

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`[ready] Logged in as ${readyClient.user.tag}`);

  const openSessions = getAllOpenSessions();
  const now = Date.now();

  for (const session of openSessions) {
    if (session.ends_at <= now) {
      console.log(`[ready] Session ${session.thread_id} expired while offline — closing now`);
      await closeVotingSession(session.thread_id);
    } else {
      console.log(`[ready] Restoring timer for session ${session.thread_id}`);
      scheduleSessionEnd(session.thread_id, session.ends_at, () => {
        closeVotingSession(session.thread_id).catch(console.error);
      });
    }
  }
});
