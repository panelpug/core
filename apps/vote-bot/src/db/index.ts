import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { SCHEMA } from './schema';

const DB_PATH = path.join(process.cwd(), 'data', 'panelpug.db');

function openDb(): Database.Database {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.exec(SCHEMA);
  try {
    db.exec(`ALTER TABLE sessions ADD COLUMN is_announced INTEGER NOT NULL DEFAULT 0`);
  } catch {
    // Column already exists — no-op
  }
  return db;
}

export const db = openDb();
