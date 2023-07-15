import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let _db; // undefined database

async function getDB() {
    if (_db == null) {
      const conn = await open({
        filename: './urls.db',
        driver: sqlite3.Database,
      });
      _db = conn;
      await _db.run(
        'CREATE TABLE IF NOT EXISTS url (id INTEGER PRIMARY KEY AUTOINCREMENT, original TEXT);'
      );
    }
    return _db;
  }

export default getDB;