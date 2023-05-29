import { createPostQuery } from "../repositories/posts.repository.js";

export async function createPost(req, res) {
  const { userId } = res.locals;
  try {
    await createPostQuery(req.body, userId);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
