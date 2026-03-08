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
    INSERT INTO proposals (thread_id, message_id, author_id, description, created_at)
    VALUES (?, ?, ?, ?, ?)
  `).run(threadId, messageId, authorId, description, Date.now());
}

export function getProposalsByThread(threadId: string): Proposal[] {
  return db.prepare(`SELECT * FROM proposals WHERE thread_id = ?`).all(threadId) as Proposal[];
}
