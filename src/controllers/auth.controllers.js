import bcrypt from "bcrypt";
import {
  createUser,
  getUserByEmail,
} from "../repositories/users.repository.js";

export async function signUp(req, res) {
  const { name, email, photo, bio, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (user.rowCount !== 0) res.status(409).send("E-mail já cadastrado");

    const hash = bcrypt.hashSync(password, 10);
    await createUser(name, email, photo, bio, hash);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function signIn(req, res) {
  try {
    res.send("singIn");
  } catch (error) {
    res.status(500).send(error.message);
  }
}
