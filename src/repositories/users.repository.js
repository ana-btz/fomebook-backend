import { db } from "../database/db.connection.js";

export function getUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email]);
}

export function createUser(name, email, photo, bio, hash) {
  return db.query(
    `INSERT INTO users (name, email, photo, bio, password) VALUES ($1, $2, $3, $4 ,$5)`,
    [name, email, photo, bio, hash]
  );
}
