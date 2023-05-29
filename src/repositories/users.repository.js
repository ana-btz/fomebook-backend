import { db } from "../database/db.connection.js";

export function getUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
}

export function createUser(name, email, photo, bio, hash) {
  return db.query(
    `INSERT INTO users (name, email, photo, bio, password) VALUES ($1, $2, $3, $4 ,$5);`,
    [name, email, photo, bio, hash]
  );
}

export function insertUserFollow(followedUserId, userId) {
  return db.query(
    `INSERT INTO follows ("followingUserId", "followedUserId") VALUES ($1, $2);`,
    [userId, followedUserId]
  );
}

export function getUserByIdQuery(id) {
  return db.query(`SELECT * FROM users WHERE id = $1;`, [id]);
}

export function findRelation(followedUserId, userId) {
  return db.query(
    `SELECT * FROM follows WHERE "followingUserId" = $1 AND "followedUserId" = $2;`,
    [userId, followedUserId]
  );
}

export function getUsers() {
  return db.query(`SELECT id, name, photo, bio FROM users;`)
}
