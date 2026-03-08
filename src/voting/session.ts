import { db } from '../db';

export interface Session {
  thread_id: string;
  channel_id: string;
  started_at: number;
  ends_at: number;
  is_closed: number;
}

export interface Proposal {
  id: number;
  thread_id: string;
  message_id: string;
  author_id: string;
  description: string;
  vote_count: number;
  created_at: number;
}

export function openSession(threadId: string, channelId: string, endsAt: number): void {
  db.prepare(`
    INSERT INTO sessions (thread_id, channel_id, started_at, ends_at, is_closed)
    VALUES (?, ?, ?, ?, 0)
  `).run(threadId, channelId, Date.now(), endsAt);
}

export function closeSession(threadId: string): void {
  db.prepare(`UPDATE sessions SET is_closed = 1 WHERE thread_id = ?`).run(threadId);
}

export function getOpenSession(threadId: string): Session | undefined {
  return db.prepare(`
    SELECT * FROM sessions WHERE thread_id = ? AND is_closed = 0
  `).get(threadId) as Session | undefined;
}

export function getAllOpenSessions(): Session[] {
  return db.prepare(`SELECT * FROM sessions WHERE is_closed = 0`).all() as Session[];
}

export function insertProposal(
  threadId: string,
  messageId: string,
  authorId: string,
  description: string,
): void {
  db.prepare(`
    INSERT INTO proposals (thread_id, message_id, author_id, description, vote_count, created_at)
    VALUES (?, ?, ?, ?, 0, ?)
  `).run(threadId, messageId, authorId, description, Date.now());
}

export function getProposalByMessageId(messageId: string): Proposal | undefined {
  return db.prepare(`SELECT * FROM proposals WHERE message_id = ?`).get(messageId) as Proposal | undefined;
}

export function incrementVote(messageId: string): void {
  db.prepare(`UPDATE proposals SET vote_count = vote_count + 1 WHERE message_id = ?`).run(messageId);
}

export function decrementVote(messageId: string): void {
  db.prepare(`UPDATE proposals SET vote_count = MAX(0, vote_count - 1) WHERE message_id = ?`).run(messageId);
}

export function getWinningProposal(threadId: string): Proposal | undefined {
  return db.prepare(`
    SELECT * FROM proposals WHERE thread_id = ? ORDER BY vote_count DESC LIMIT 1
  `).get(threadId) as Proposal | undefined;
}
