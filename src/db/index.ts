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
  return db;
}

export const db = openDb();
