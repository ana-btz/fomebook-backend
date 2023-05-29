import { db } from "../database/db.connection.js";

export function createPostQuery(body, userId) {
  const { imageUrl, description } = body;
  return db.query(
    `INSERT INTO posts ("imageUrl", description, "userId") VALUES ($1, $2, $3)`,
    [imageUrl, description, userId]
  );
}
