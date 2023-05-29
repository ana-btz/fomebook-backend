import {
  findRelation,
  getUserByIdQuery,
  getUsers,
  insertUserFollow,
} from "../repositories/users.repository.js";

export async function followUser(req, res) {
  const { followedUserId } = req.body;
  const { userId } = res.locals;

  if (followedUserId === userId)
    return res
      .status(400)
      .send({ message: "Não é possível seguir o próprio perfil" });

  try {
    const followedUser = await getUserByIdQuery(followedUserId);
    if (followedUser.rowCount === 0) return res.sendStatus(404);

    const relation = await findRelation(followedUserId, userId);
    if (relation.rowCount !== 0)
      return res.status(409).send({ message: "Você já segue esse usuário" });

    await insertUserFollow(followedUserId, userId);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getAllUsers(req, res) {
  try {
    const { rows } = await getUsers();
    res.status(200).send(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUserFollowers(req, res) {
  try {
    res.send("getUserFollowers");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUserFollowing(req, res) {
  try {
    res.send("getUserFollowing");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUserById(req, res) {
  try {
    res.send("getUserById");
  } catch (error) {
    res.status(500).send(error.message);
  }
}
