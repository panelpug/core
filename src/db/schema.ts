export const SCHEMA = `
CREATE TABLE IF NOT EXISTS sessions (
  thread_id   TEXT PRIMARY KEY,
  channel_id  TEXT NOT NULL,
  started_at  INTEGER NOT NULL,
  ends_at     INTEGER NOT NULL,
  is_closed   INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS proposals (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  thread_id   TEXT NOT NULL,
  message_id  TEXT NOT NULL UNIQUE,
  author_id   TEXT NOT NULL,
  description TEXT NOT NULL,
  vote_count  INTEGER NOT NULL DEFAULT 0,
  created_at  INTEGER NOT NULL,
  FOREIGN KEY (thread_id) REFERENCES sessions(thread_id)
);
`;
